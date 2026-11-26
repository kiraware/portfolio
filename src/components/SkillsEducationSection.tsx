import { Award, BookMarked, GraduationCap, Layers } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { CERTIFICATIONS, EDUCATION, SKILL_GROUPS } from '../data/profile'
import { UI_STRINGS } from '../data/i18n'

export function SkillsEducationSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section-deferred py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-brass">
            {t(UI_STRINGS.skills.sectionKicker)}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
            {t(UI_STRINGS.skills.sectionTitle)}
          </h2>
        </div>

        {/* Grouped Skills Matrix */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="dossier-card rounded-2xl p-5 transition-colors hover:border-gold-brass/65"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-gold-brass">
                <Layers className="h-3.5 w-3.5 text-emerald-brooch" aria-hidden="true" />
                <h3>{t(group.title)}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-hairline bg-subtle px-3 py-1.5 text-xs font-medium text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Formal Education Card */}
          <article className="dossier-card rounded-2xl p-6 sm:p-7 lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gold-brass">
              <GraduationCap className="h-4 w-4 text-emerald-brooch" aria-hidden="true" />
              <span>{t(UI_STRINGS.skills.educationHeading)}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {t(EDUCATION.institution)}
                </h3>
                <p className="mt-1 text-base font-medium text-prussian">{t(EDUCATION.degree)}</p>
                <p className="mt-1 text-xs text-ink-muted">
                  {t(EDUCATION.location)} · {EDUCATION.period}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-brooch/35 bg-emerald-brooch/10 px-4 py-2 text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-brooch">
                  {t(UI_STRINGS.skills.gpaBadge)}
                </p>
                <p className="font-display text-2xl font-bold text-ink">{EDUCATION.gpa}</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-hairline bg-subtle/70 p-4">
              <div className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
                <BookMarked
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-brass"
                  aria-hidden="true"
                />
                <p>
                  <strong className="font-semibold text-ink">
                    {t(UI_STRINGS.skills.thesisLabel)}{' '}
                  </strong>
                  {t(EDUCATION.thesisTitle)}
                </p>
              </div>
            </div>
          </article>

          {/* Certifications Card */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gold-brass">
              <Award className="h-4 w-4 text-emerald-brooch" aria-hidden="true" />
              <span>{t(UI_STRINGS.skills.certificationsHeading)}</span>
            </div>

            {CERTIFICATIONS.map((cert) => (
              <article
                key={cert.id}
                className="dossier-card flex-1 rounded-2xl p-5 transition-colors hover:border-gold-brass/65"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-brooch">
                      {t(cert.credentialType)}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
                      {t(cert.name)}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">{t(cert.issuer)}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold-brass/40 bg-subtle px-3 py-1 font-mono text-xs font-semibold text-gold-brass">
                    {cert.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
