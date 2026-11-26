import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  LANG_STORAGE_KEY,
  LanguageContext,
  type LanguageContextValue,
  type Locale,
  type LocalizedString,
} from './useLanguage'

function parseLocale(value: string | null | undefined): Locale | null {
  if (!value) return null
  const normalized = value.trim().toLowerCase()
  return normalized === 'id' || normalized === 'en' ? normalized : null
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'id'

  try {
    const urlLang = parseLocale(new URLSearchParams(window.location.search).get('lang'))
    if (urlLang) return urlLang
  } catch {
    // Ignore malformed location URLs
  }

  try {
    const stored = parseLocale(window.localStorage.getItem(LANG_STORAGE_KEY))
    if (stored) return stored
  } catch {
    // Ignore blocked storage
  }

  return 'id'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const syncUrlAndStorage = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      // Storage unavailable
    }

    try {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', next)
      window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
    } catch {
      // History API unavailable
    }
  }, [])

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next)
      syncUrlAndStorage(next)
    },
    [syncUrlAndStorage],
  )

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'id' ? 'en' : 'id'
      syncUrlAndStorage(next)
      return next
    })
  }, [syncUrlAndStorage])

  const t = useCallback((text: LocalizedString) => text[locale], [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
