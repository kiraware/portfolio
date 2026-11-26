import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { LanguageProvider } from './LanguageContext'
import { LANG_STORAGE_KEY, useLanguage } from './useLanguage'

function Probe() {
  const { locale, toggleLocale, setLocale, t } = useLanguage()
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="greeting">{t({ id: 'Halo', en: 'Hello' })}</span>
      <button type="button" onClick={toggleLocale}>
        Toggle
      </button>
      <button type="button" onClick={() => setLocale('en')}>
        EN
      </button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear()
    window.history.replaceState({}, '', '/')
    document.documentElement.lang = ''
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('defaults to Indonesian (id) and updates documentElement.lang', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('locale')).toHaveTextContent('id')
    expect(screen.getByTestId('greeting')).toHaveTextContent('Halo')
    expect(document.documentElement.lang).toBe('id')
  })

  it('prefers valid ?lang=en query parameter over localStorage', () => {
    localStorage.setItem(LANG_STORAGE_KEY, 'id')
    window.history.replaceState({}, '', '/portfolio/?lang=en')

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('locale')).toHaveTextContent('en')
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello')
    expect(document.documentElement.lang).toBe('en')
  })

  it('ignores invalid ?lang=fr query param and falls back to id', () => {
    window.history.replaceState({}, '', '/portfolio/?lang=fr')

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('locale')).toHaveTextContent('id')
  })

  it('persists toggle to localStorage, syncs ?lang= URL, and survives storage errors', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    )

    act(() => {
      screen.getByText('Toggle').click()
    })

    expect(screen.getByTestId('locale')).toHaveTextContent('en')
    expect(localStorage.getItem(LANG_STORAGE_KEY)).toBe('en')
    expect(window.location.search).toContain('lang=en')

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Blocked', 'SecurityError')
    })

    act(() => {
      screen.getByText('Toggle').click()
    })
    expect(screen.getByTestId('locale')).toHaveTextContent('id')
  })
})
