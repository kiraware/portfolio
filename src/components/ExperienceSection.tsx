import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { EXPERIENCES } from '../data/experience'
import { UI_STRINGS } from '../data/i18n'
import type { ExperienceCategory } from '../data/types'

const EXP_FILTERS: ExperienceCategory[] = ['all', 'work', 'teaching']

export function ExperienceSection() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<ExperienceCategory>('all')

  const visibleItems =
    filter === 'all' ? EXPERIENCES : EXPERIENCES.filter((item) => item.category === filter)

  return (
    <section id="experience" className="section-deferred py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-brass">
              {t(UI_STRINGS.experience.sectionKicker)}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
              {t(UI_STRINGS.experience.sectionTitle)}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {t(UI_STRINGS.experience.sectionLead)}
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter pengalaman">
            {EXP_FILTERS.map((cat) => {
              const active = filter === cat
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(cat)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'border-emerald-brooch bg-emerald-brooch text-on-emerald shadow-xs'
                      : 'border-hairline bg-surface text-ink-muted hover:border-gold-brass hover:text-ink'
                  }`}
                >
                  {t(UI_STRINGS.experience.filters[cat])}
                </button>
              )
            })}
          </div>
        </div>

        {/* Postal-Stamp Chronicle Timeline */}
        <ol className="relative mt-12 space-y-6 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-gradient-to-b before:from-gold-brass/70 before:via-hairline before:to-transparent sm:before:left-6">
          {visibleItems.map((entry, idx) => {
            const isTeaching = entry.category === 'teaching'
            return (
              <motion.li
                key={entry.id}
                data-testid="experience-item"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.18) }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Wax-Stamp Timeline Node */}
                <span
                  aria-hidden="true"
                  className={`absolute left-1.5 top-5 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-surface shadow-xs sm:left-2.5 ${
                    isTeaching
                      ? 'border-gold-brass text-gold-brass'
                      : 'border-emerald-brooch text-emerald-brooch'
                  }`}
                >
                  {isTeaching ? (
                    <GraduationCap className="h-3.5 w-3.5" />
                  ) : (
                    <Briefcase className="h-3.5 w-3.5" />
                  )}
                </span>

                <article className="dossier-card rounded-2xl p-5 sm:p-6 transition-colors hover:border-gold-brass/65">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-gold-brass/40 bg-subtle px-2.5 py-0.5 font-mono text-[11px] font-medium text-gold-brass">
                          {entry.stampCode}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                            isTeaching
                              ? 'bg-gold-brass/15 text-gold-brass'
                              : 'bg-emerald-brooch/15 text-emerald-brooch'
                          }`}
                        >
                          {t(entry.tag)}
                        </span>
                      </div>

                      <h3 className="mt-2.5 font-display text-2xl font-semibold leading-snug text-ink">
                        {t(entry.role)}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold text-prussian">
                        {t(entry.organization)}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 text-xs text-ink-muted sm:items-end">
                      <span className="font-mono font-medium text-ink">{t(entry.period)}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-gold-brass" aria-hidden="true" />
                        <span>{t(entry.location)}</span>
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {entry.bullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brooch/80"
                          aria-hidden="true"
                        />
                        <span>{t(bullet)}</span>
                      </li>
                    ))}
                  </ul>

                  {entry.techStack && entry.techStack.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
                      {entry.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-hairline bg-subtle/80 px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
