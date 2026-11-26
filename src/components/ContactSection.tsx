import { useEffect, useRef, useState } from 'react'
import { AlertCircle, Check, Copy, Mail, Package, Send } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { resolveAssetUrl } from '../lib/assetUrl'
import { copyToClipboard } from '../lib/copyText'
import { PROFILE } from '../data/profile'
import { UI_STRINGS } from '../data/i18n'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './BrandIcons'
import { WaxSealMonogram } from './OrnamentalDivider'

type CopyState = 'idle' | 'copied' | 'error'

export function ContactSection() {
  const { t } = useLanguage()
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(PROFILE.email)
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
    }
    setCopyState(ok ? 'copied' : 'error')
    timerRef.current = window.setTimeout(() => {
      setCopyState('idle')
      timerRef.current = null
    }, 2200)
  }

  return (
    <section id="contact" className="section-deferred py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="dossier-card relative overflow-hidden rounded-3xl border-gold-brass/45 p-6 sm:p-10 lg:p-12">
          {/* Brass Corner Accents */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-gold-brass/60 rounded-tl-md"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-gold-brass/60 rounded-br-md"
          />

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <WaxSealMonogram monogram={PROFILE.monogram} size="md" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-brass">
                  {t(UI_STRINGS.contact.sectionKicker)}
                </p>
              </div>

              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.7rem]">
                {t(UI_STRINGS.contact.sectionTitle)}
              </h2>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                {t(UI_STRINGS.contact.sectionLead)}
              </p>

              {/* Email Dispatch Strip */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-hairline bg-subtle px-4 py-3">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-brooch" aria-hidden="true" />
                  <span className="break-all font-mono text-xs text-ink sm:text-sm">
                    {PROFILE.email}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-gold-brass/60 bg-surface px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-gold-brass hover:bg-subtle cursor-pointer"
                  >
                    {copyState === 'copied' ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-brooch" aria-hidden="true" />
                        <span className="text-emerald-brooch">
                          {t(UI_STRINGS.contact.emailCopied)}
                        </span>
                      </>
                    ) : copyState === 'error' ? (
                      <>
                        <AlertCircle className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                        <span>{t(UI_STRINGS.contact.copyFailed)}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                        <span>{t(UI_STRINGS.contact.copyEmail)}</span>
                      </>
                    )}
                  </button>

                  <p role="status" aria-live="polite" className="sr-only">
                    {copyState === 'copied'
                      ? t(UI_STRINGS.contact.emailCopied)
                      : copyState === 'error'
                        ? t(UI_STRINGS.contact.copyFailed)
                        : ''}
                  </p>

                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald-brooch px-5 py-2.5 text-xs font-semibold text-on-emerald shadow-xs transition-transform hover:-translate-y-0.5 hover:brightness-105"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{t(UI_STRINGS.contact.composeEmail)}</span>
                  </a>
                </div>
              </div>

              {/* Verified Social Links */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-hairline bg-surface px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                >
                  <LinkedinIcon className="h-4 w-4 text-prussian" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-hairline bg-surface px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                >
                  <GithubIcon className="h-4 w-4 text-prussian" aria-hidden="true" />
                  <span>GitHub (@kiraware)</span>
                </a>
                <a
                  href={PROFILE.links.pypi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-hairline bg-surface px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                >
                  <Package className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                  <span>PyPI</span>
                </a>
                <a
                  href={PROFILE.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-hairline bg-surface px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                >
                  <YoutubeIcon className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                  <span>YouTube @PraveInc</span>
                </a>
              </div>
            </div>

            {/* Sealed Envelope Illustration Column */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-hairline bg-subtle">
                <img
                  src={resolveAssetUrl(PROFILE.contactArtwork)}
                  alt="CH Postal sealed letter envelope with emerald silk ribbon and violet flowers"
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <blockquote className="mt-4 border-l-2 border-gold-brass/60 pl-4 font-display text-lg italic leading-snug text-ink-muted">
                {t(UI_STRINGS.contact.epigraph)}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
