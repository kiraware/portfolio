import { useCallback, useEffect, useState } from 'react'

export type ColorScheme = 'light' | 'dark'
export const THEME_STORAGE_KEY = 'color-scheme'

function readStoredScheme(): ColorScheme | null {
  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
    return raw === 'light' || raw === 'dark' ? raw : null
  } catch {
    return null
  }
}

function getSystemScheme(): ColorScheme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function syncMetaColorScheme(override: ColorScheme | null): void {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')
  if (meta) {
    meta.content = override ?? 'light dark'
  }
}

export function useTheme() {
  const [systemScheme, setSystemScheme] = useState<ColorScheme>(getSystemScheme)
  const [override, setOverride] = useState<ColorScheme | null>(readStoredScheme)

  const renderedScheme: ColorScheme = override ?? systemScheme

  useEffect(() => {
    syncMetaColorScheme(override)
  }, [override])

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setSystemScheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== null && event.key !== THEME_STORAGE_KEY) return
      const next =
        event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null
      setOverride(next)
      syncMetaColorScheme(next)
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const toggleTheme = useCallback(() => {
    const currentSystem = getSystemScheme()
    setSystemScheme(currentSystem)

    setOverride((prev) => {
      const currentRendered = prev ?? currentSystem
      const target: ColorScheme = currentRendered === 'dark' ? 'light' : 'dark'

      if (target === currentSystem) {
        try {
          window.localStorage.removeItem(THEME_STORAGE_KEY)
        } catch {
          // Storage may be unavailable in restricted contexts; still apply in memory.
        }
        syncMetaColorScheme(null)
        return null
      }

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, target)
      } catch {
        // Storage may be unavailable in restricted contexts; still apply in memory.
      }
      syncMetaColorScheme(target)
      return target
    })
  }, [])

  return {
    renderedScheme,
    isOverride: override !== null,
    toggleTheme,
  }
}
