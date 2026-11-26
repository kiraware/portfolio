import { useCallback, useState } from 'react'
import { Menu, Moon, Sun, Languages } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../context/useLanguage'
import { NAV_ITEMS, UI_STRINGS } from '../data/i18n'
import { PROFILE } from '../data/profile'
import { WaxSealMonogram } from './OrnamentalDivider'
import { MobileDrawer } from './MobileDrawer'

export function Header() {
  const { renderedScheme, toggleTheme } = useTheme()
  const { locale, toggleLocale, t } = useLanguage()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleCloseDrawer = useCallback(() => setDrawerOpen(false), [])

  const themeLabel =
    renderedScheme === 'dark' ? t(UI_STRINGS.switchToLight) : t(UI_STRINGS.switchToDark)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-brooch focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-on-emerald focus:shadow-lg"
      >
        {t(UI_STRINGS.skipToContent)}
      </a>

      <header className="sticky top-0 z-40 border-b border-hairline bg-[var(--bg-header)] backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group inline-flex items-center gap-3 min-w-0">
            <WaxSealMonogram monogram={PROFILE.monogram} size="sm" />
            <div className="min-w-0">
              <span className="block truncate font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-prussian sm:hidden">
                {PROFILE.shortName}
              </span>
              <span className="hidden truncate font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-prussian sm:block">
                Cakrawangsa Praba
              </span>
              <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted">
                {t(UI_STRINGS.brandSubtitle)}
              </span>
            </div>
          </a>

          <nav aria-label={t(UI_STRINGS.navAriaLabel)} className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-subtle hover:text-ink"
              >
                <span className="font-mono text-[11px] text-gold-brass transition-colors group-hover:text-emerald-brooch">
                  {item.stamp}
                </span>
                <span>{t(item.label)}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={t(UI_STRINGS.switchLanguageLabel)}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1.5 font-mono text-xs font-medium text-ink transition-colors hover:border-gold-brass cursor-pointer"
            >
              <Languages className="h-3.5 w-3.5 text-gold-brass" aria-hidden="true" />
              <span className={locale === 'id' ? 'text-emerald-brooch font-semibold' : 'text-ink-muted'}>
                ID
              </span>
              <span className="text-hairline" aria-hidden="true">
                /
              </span>
              <span className={locale === 'en' ? 'text-emerald-brooch font-semibold' : 'text-ink-muted'}>
                EN
              </span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-colors hover:border-gold-brass hover:text-gold-brass cursor-pointer"
            >
              {renderedScheme === 'dark' ? (
                <Sun className="h-4 w-4 text-gold-brass" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-prussian" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label={t(UI_STRINGS.openMenu)}
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-colors hover:border-gold-brass lg:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={drawerOpen} onClose={handleCloseDrawer} navItems={NAV_ITEMS} />
    </>
  )
}
