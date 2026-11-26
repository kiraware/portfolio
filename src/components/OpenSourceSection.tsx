import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Check, Copy, ExternalLink, Package, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { resolveAssetUrl } from '../lib/assetUrl'
import {
  CREATOR_CHANNEL,
  OPEN_SOURCE_HIGHLIGHTS,
  OPEN_SOURCE_PACKAGES,
} from '../data/opensource'
import { UI_STRINGS } from '../data/i18n'
import { GithubIcon, YoutubeIcon } from './BrandIcons'

export function OpenSourceSection() {
  const { t } = useLanguage()
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = async (id: string, command: string) => {
    try {
      await navigator.clipboard?.writeText(command)
    } catch {
      // Fallback: still show feedback in non-clipboard environments
    }
    setCopiedId(id)
    window.setTimeout(() => {
      setCopiedId((current) => (current === id ? null : current))
    }, 2000)
  }

  return (
    <section id="opensource" className="section-deferred py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-brass">
            {t(UI_STRINGS.opensource.sectionKicker)}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
            {t(UI_STRINGS.opensource.sectionTitle)}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {t(UI_STRINGS.opensource.sectionLead)}
          </p>
        </div>

        {/* PyPI Packages Row */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OPEN_SOURCE_PACKAGES.map((pkg, idx) => {
            const isCopied = copiedId === pkg.id
            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.38, delay: idx * 0.06 }}
                className="dossier-card flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-gold-brass/70"
              >
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-hairline bg-subtle">
                  <img
                    src={resolveAssetUrl(pkg.screenshot)}
                    alt={`${pkg.name} Read the Docs`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-ink">{pkg.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-brooch/15 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-brooch">
                      <Package className="h-3 w-3" aria-hidden="true" />
                      PyPI
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t(pkg.summary)}</p>

                  {/* Copyable pip install bar */}
                  <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-hairline bg-subtle px-3 py-2">
                    <code className="overflow-x-auto font-mono text-xs text-ink whitespace-nowrap">
                      {pkg.installCommand}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(pkg.id, pkg.installCommand)}
                      aria-label={`${t(UI_STRINGS.opensource.copyCommand)} ${pkg.installCommand}`}
                      className="inline-flex min-h-9 shrink-0 items-center gap-1 rounded-lg border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-ink transition-colors hover:border-emerald-brooch hover:text-emerald-brooch cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-brooch" aria-hidden="true" />
                          <span className="text-emerald-brooch">
                            {t(UI_STRINGS.opensource.copied)}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-gold-brass" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    <a
                      href={pkg.pypiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                    >
                      <Package className="h-3.5 w-3.5 text-gold-brass" aria-hidden="true" />
                      <span>{t(UI_STRINGS.opensource.viewPypi)}</span>
                    </a>
                    <a
                      href={pkg.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-emerald-brooch" aria-hidden="true" />
                      <span>{t(UI_STRINGS.opensource.viewDocs)}</span>
                    </a>
                    <a
                      href={pkg.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
                    >
                      <GithubIcon className="h-3.5 w-3.5 text-prussian" aria-hidden="true" />
                      <span>{t(UI_STRINGS.opensource.viewGithub)}</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Community Highlights + YouTube Creator Spotlight */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {OPEN_SOURCE_HIGHLIGHTS.map((item) => (
            <article
              key={item.id}
              className="dossier-card flex flex-col justify-between rounded-2xl p-6 transition-colors hover:border-gold-brass/70"
            >
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-gold-brass">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-brooch" aria-hidden="true" />
                  <span>{t(item.role)}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                  {t(item.title)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {t(item.description)}
                </p>
              </div>

              <div className="mt-5">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-brooch transition-colors hover:underline"
                >
                  <span>{t(item.linkLabel)}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          {/* YouTube @PraveInc Card */}
          <article className="dossier-card flex flex-col justify-between rounded-2xl border-gold-brass/45 bg-gradient-to-br from-surface via-surface to-subtle p-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gold-brass">
                  <YoutubeIcon className="h-4 w-4 text-emerald-brooch" aria-hidden="true" />
                  <span>{CREATOR_CHANNEL.handle}</span>
                </span>
                <span className="font-mono text-[11px] text-ink-muted">
                  {t(CREATOR_CHANNEL.period)}
                </span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                {t(CREATOR_CHANNEL.role)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {t(CREATOR_CHANNEL.summary)}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {CREATOR_CHANNEL.topics.map((topic) => (
                  <span
                    key={topic.en}
                    className="rounded-md border border-hairline bg-surface px-2.5 py-1 text-[11px] font-medium text-ink-muted"
                  >
                    {t(topic)}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <a
                href={CREATOR_CHANNEL.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-brooch px-4 py-2.5 text-xs font-semibold text-on-emerald transition-transform hover:-translate-y-0.5 hover:brightness-105"
              >
                <YoutubeIcon className="h-4 w-4" aria-hidden="true" />
                <span>{t(UI_STRINGS.opensource.visitYoutube)}</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
