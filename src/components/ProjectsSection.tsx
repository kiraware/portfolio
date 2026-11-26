import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Layers } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { resolveAssetUrl } from '../lib/assetUrl'
import { PROJECTS } from '../data/projects'
import { UI_STRINGS } from '../data/i18n'
import type { ProjectCategory, ProjectItem } from '../data/types'
import { ProjectModal } from './ProjectModal'
import { SiakaduPreview } from './SiakaduPreview'

const FILTER_ORDER: ProjectCategory[] = ['all', 'web', 'backend', 'opensource']

export function ProjectsSection() {
  const { t } = useLanguage()
  const [category, setCategory] = useState<ProjectCategory>('all')
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null)

  const filteredProjects =
    category === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === category)

  return (
    <section id="projects" className="py-16 sm:py-22">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-brass">
              {t(UI_STRINGS.projects.sectionKicker)}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
              {t(UI_STRINGS.projects.sectionTitle)}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {t(UI_STRINGS.projects.sectionLead)}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter proyek">
            {FILTER_ORDER.map((cat) => {
              const active = category === cat
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(cat)}
                  className={`relative isolate overflow-hidden min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'border-emerald-brooch text-on-emerald'
                      : 'border-hairline bg-surface/90 text-ink-muted hover:border-gold-brass hover:text-ink'
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="projects-filter-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 z-0 rounded-full bg-emerald-brooch shadow-xs"
                    />
                  ) : null}
                  <span className="relative z-10">{t(UI_STRINGS.projects.filters[cat])}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Browser-Framed Screenshot Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => {
            const leadShot = project.screenshots[0]
            return (
              <motion.article
                key={project.id}
                data-testid="project-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.38, delay: Math.min(idx * 0.04, 0.24) }}
                className="dossier-card group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:border-gold-brass/70"
              >
                {/* Editorial Browser Chrome */}
                <div className="flex items-center justify-between gap-2 border-b border-hairline bg-subtle/75 px-3.5 py-2">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-gold-brass/65" />
                    <span className="h-2 w-2 rounded-full bg-emerald-brooch/65" />
                    <span className="h-2 w-2 rounded-full bg-prussian/55" />
                  </div>
                  <span className="truncate font-mono text-[10px] tracking-[0.14em] uppercase text-ink-muted">
                    {project.dossierNumber} · {t(project.period)}
                  </span>
                </div>

                {/* 16:10 Viewport Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-hairline bg-subtle">
                  {project.previewKind === 'siakadu-telegram' ? (
                    <SiakaduPreview compact />
                  ) : leadShot ? (
                    <img
                      src={resolveAssetUrl(leadShot.src)}
                      alt={t(leadShot.alt)}
                      width={1280}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : project.editorialFallback ? (
                    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-surface via-subtle to-canvas p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-brooch">
                          {t(UI_STRINGS.projects.archiveCardBadge)}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-gold-brass" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-display text-2xl font-semibold leading-tight text-ink">
                          {t(project.editorialFallback.accentTitle)}
                        </p>
                        <p className="mt-1 text-xs italic text-gold-brass">
                          {t(project.editorialFallback.tagline)}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.editorialFallback.metrics.slice(0, 2).map((metric) => (
                          <span
                            key={metric.en}
                            className="rounded border border-hairline bg-surface/90 px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                          >
                            {t(metric)}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {project.screenshots.length > 1 ? (
                    <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#0c1322]/75 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur-xs">
                      <Layers className="h-3 w-3 text-[#39bfa7]" aria-hidden="true" />
                      <span>
                        {project.screenshots.length} {t(UI_STRINGS.projects.screenshotsCount)}
                      </span>
                    </span>
                  ) : null}
                </div>

                {/* Card Details */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium text-prussian">{t(project.organization)}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-emerald-brooch">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-left cursor-pointer after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-emerald-brooch focus-visible:after:ring-inset"
                    >
                      {t(project.title)}
                    </button>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                    {t(project.summary)}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-hairline bg-subtle/80 px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-auto flex items-center justify-between pt-5 text-xs font-semibold text-emerald-brooch"
                  >
                    <span>{t(UI_STRINGS.projects.inspectCaseStudy)}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
