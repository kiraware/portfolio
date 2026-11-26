import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { THEME_STORAGE_KEY, useTheme } from './useTheme'

function setupMeta(content = 'light dark') {
  document.head.innerHTML = `<meta name="color-scheme" content="${content}">`
}

function mockMatchMedia(prefersDark: boolean) {
  const listeners = new Set<(event: MediaQueryListEvent) => void>()
  let matches = prefersDark

  const mql: MediaQueryList = {
    get matches() {
      return matches
    },
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addEventListener: (_type: string, cb: EventListenerOrEventListenerObject) => {
      if (typeof cb === 'function') listeners.add(cb as (event: MediaQueryListEvent) => void)
    },
    removeEventListener: (_type: string, cb: EventListenerOrEventListenerObject) => {
      if (typeof cb === 'function') listeners.delete(cb as (event: MediaQueryListEvent) => void)
    },
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => true,
  }

  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => mql),
  )

  return {
    setPrefersDark(next: boolean) {
      matches = next
      for (const listener of listeners) {
        listener({ matches: next } as MediaQueryListEvent)
      }
    },
  }
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    setupMeta('light dark')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('defaults to system preference without writing localStorage', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useTheme())

    expect(result.current.renderedScheme).toBe('light')
    expect(result.current.isOverride).toBe(false)
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull()
    expect(document.querySelector('meta[name="color-scheme"]')?.getAttribute('content')).toBe(
      'light dark',
    )
  })

  it('toggles to opposite of rendered scheme and persists literal value', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.renderedScheme).toBe('dark')
    expect(result.current.isOverride).toBe(true)
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(document.querySelector('meta[name="color-scheme"]')?.getAttribute('content')).toBe(
      'dark',
    )
  })

  it('keeps pinned override if OS later changes to match it, and clears override when user toggles back to OS', () => {
    const mm = mockMatchMedia(false)
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme()
    })
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')

    act(() => {
      mm.setPrefersDark(true)
    })
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(result.current.renderedScheme).toBe('dark')

    act(() => {
      mm.setPrefersDark(false)
    })
    expect(result.current.renderedScheme).toBe('dark')

    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.renderedScheme).toBe('light')
    expect(result.current.isOverride).toBe(false)
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull()
    expect(document.querySelector('meta[name="color-scheme"]')?.getAttribute('content')).toBe(
      'light dark',
    )
  })

  it('survives SecurityError when localStorage throws', () => {
    mockMatchMedia(false)
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Blocked', 'SecurityError')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Blocked', 'SecurityError')
    })

    const { result } = renderHook(() => useTheme())
    expect(result.current.renderedScheme).toBe('light')

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.renderedScheme).toBe('dark')
    expect(document.querySelector('meta[name="color-scheme"]')?.getAttribute('content')).toBe(
      'dark',
    )
  })

  it('syncs meta tag when cross-tab storage event fires', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useTheme())

    act(() => {
      localStorage.setItem(THEME_STORAGE_KEY, 'dark')
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: THEME_STORAGE_KEY,
          newValue: 'dark',
        }),
      )
    })

    expect(result.current.renderedScheme).toBe('dark')
    expect(document.querySelector('meta[name="color-scheme"]')?.getAttribute('content')).toBe(
      'dark',
    )
  })
})
