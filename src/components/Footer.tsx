import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { PROFILE } from '../data/profile'
import { UI_STRINGS } from '../data/i18n'
import { WaxSealMonogram } from './OrnamentalDivider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-hairline bg-surface/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <WaxSealMonogram monogram={PROFILE.monogram} size="sm" />
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-ink">
              © 2026 {PROFILE.fullName}
            </p>
            <p className="text-xs text-ink-muted">{t(UI_STRINGS.footer.builtWith)}</p>
          </div>
        </div>

        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-hairline bg-subtle px-4 py-2 font-mono text-xs font-medium text-ink-muted transition-colors hover:border-gold-brass hover:text-ink"
        >
          <ArrowUp className="h-3.5 w-3.5 text-emerald-brooch" aria-hidden="true" />
          <span>{t(UI_STRINGS.footer.backToTop)}</span>
        </a>
      </div>
    </footer>
  )
}
