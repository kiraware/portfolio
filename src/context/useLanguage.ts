import { createContext, useContext } from 'react'

export type Locale = 'id' | 'en'

export interface LocalizedString {
  readonly id: string
  readonly en: string
}

export const LANG_STORAGE_KEY = 'portfolio-lang'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (next: Locale) => void
  toggleLocale: () => void
  t: (text: LocalizedString) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
