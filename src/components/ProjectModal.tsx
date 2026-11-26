import { useEffect, useId, useRef, useState } from 'react'
import {
  Archive,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Package,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { resolveAssetUrl } from '../lib/assetUrl'
import { UI_STRINGS } from '../data/i18n'
import type { ProjectItem, ProjectLink } from '../data/types'
import { GithubIcon, TelegramIcon } from './BrandIcons'
import { SiakaduPreview } from './SiakaduPreview'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

function LinkIcon({ kind }: { kind: ProjectLink['kind'] }) {
  switch (kind) {
    case 'github':
      return <GithubIcon className="h-4 w-4" aria-hidden="true" />
    case 'archive':
      return <Archive className="h-4 w-4" aria-hidden="true" />
    case 'pypi':
      return <Package className="h-4 w-4" aria-hidden="true" />
    case 'docs':
      return <BookOpen className="h-4 w-4" aria-hidden="true" />
    case 'telegram':
      return <TelegramIcon className="h-4 w-4" aria-hidden="true" />
    default:
      return <ExternalLink className="h-4 w-4" aria-hidden="true" />
  }
}

interface ModalContentProps {
  project: ProjectItem
  titleId: string
  onRequestClose: () => void
}

function ProjectModalContent({ project, titleId, onRequestClose }: ModalContentProps) {
  const { t } = useLanguage()
  const [slideIndex, setSlideIndex] = useState(0)

  const shots = project.screenshots
  const hasMultipleShots = shots.length > 1
  const activeShot = shots[slideIndex] ?? shots[0]

  const goPrev = () => {
    setSlideIndex((prev) => (prev - 1 + shots.length) % shots.length)
  }

  const goNext = () => {
    setSlideIndex((prev) => (prev + 1) % shots.length)
  }

  return (
    <div className="flex max-h-[90svh] flex-col">
      {/* Header Bar */}
      <div className="flex items-start justify-between gap-4 border-b border-hairline bg-subtle/60 px-5 py-4 sm:px-7">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold-brass">
            <span>{project.dossierNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{t(project.period)}</span>
          </div>
          <h3
            id={titleId}
            className="mt-1 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl"
          >
            {t(project.title)}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">
            <span className="font-medium text-prussian">{t(project.role)}</span>
            <span className="mx-2 text-hairline" aria-hidden="true">
              |
            </span>
            <span>{t(project.organization)}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={onRequestClose}
          aria-label={t(UI_STRINGS.projects.modalClose)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface text-ink-muted transition-colors hover:border-gold-brass hover:text-ink cursor-pointer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
        {/* Visual Preview Area */}
        <div className="overflow-hidden rounded-xl border border-hairline bg-subtle">
          <div className="flex items-center justify-between gap-2 border-b border-hairline bg-surface px-3.5 py-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-gold-brass/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-brooch/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-prussian/50" />
            </div>
            <span className="truncate font-mono text-[11px] text-ink-muted">
              {project.editorialFallback?.domainLabel ?? t(project.organization)}
            </span>
            {hasMultipleShots ? (
              <span className="shrink-0 font-mono text-[11px] text-gold-brass">
                {slideIndex + 1} / {shots.length}
              </span>
            ) : (
              <span className="w-8" aria-hidden="true" />
            )}
          </div>

          {project.previewKind === 'siakadu-telegram' ? (
            <div className="min-h-[300px]">
              <SiakaduPreview />
            </div>
          ) : activeShot ? (
            <div className="relative bg-subtle">
              <img
                src={resolveAssetUrl(activeShot.src)}
                alt={t(activeShot.alt)}
                width={1280}
                height={800}
                className="aspect-[16/10] w-full object-cover object-top"
              />

              {hasMultipleShots ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label={t(UI_STRINGS.projects.modalPrevSlide)}
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0c1322]/75 text-white backdrop-blur-xs transition-colors hover:bg-[#0c1322] cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={t(UI_STRINGS.projects.modalNextSlide)}
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0c1322]/75 text-white backdrop-blur-xs transition-colors hover:bg-[#0c1322] cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
          ) : project.editorialFallback ? (
            <div className="p-6 sm:p-8 bg-gradient-to-br from-surface via-subtle to-canvas">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-brooch">
                {t(UI_STRINGS.projects.archiveCardBadge)}
              </p>
              <h4 className="mt-2 font-display text-3xl font-semibold text-ink">
                {t(project.editorialFallback.accentTitle)}
              </h4>
              <p className="mt-1 text-sm italic text-gold-brass">
                {t(project.editorialFallback.tagline)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.editorialFallback.metrics.map((metric) => (
                  <span
                    key={metric.en}
                    className="rounded-lg border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                  >
                    {t(metric)}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink-muted">{t(project.editorialFallback.note)}</p>
            </div>
          ) : null}

          {activeShot ? (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-surface px-4 py-2.5 text-xs text-ink-muted">
              <p>{t(activeShot.caption)}</p>
              {hasMultipleShots ? (
                <div className="flex items-center gap-1.5">
                  {shots.map((shot, idx) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setSlideIndex(idx)}
                      aria-label={`${idx + 1} / ${shots.length}`}
                      aria-current={idx === slideIndex ? 'true' : undefined}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === slideIndex
                          ? 'w-6 bg-emerald-brooch'
                          : 'w-2.5 bg-hairline hover:bg-gold-brass'
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Summary & Highlights */}
        <p className="mt-6 text-base leading-relaxed text-ink">{t(project.summary)}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-gold-brass">
              {t(UI_STRINGS.projects.modalHighlightsTitle)}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item.en} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-brooch"
                    aria-hidden="true"
                  />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 md:col-span-5">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-gold-brass">
                {t(UI_STRINGS.projects.modalStackTitle)}
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-hairline bg-subtle px-2.5 py-1 font-mono text-xs text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-gold-brass">
                {t(UI_STRINGS.projects.modalLinksTitle)}
              </h4>
              {project.statusBadge ? (
                <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-prussian/30 bg-subtle px-3 py-2 text-xs font-medium text-prussian">
                  <ShieldCheck className="h-4 w-4 text-emerald-brooch shrink-0" aria-hidden="true" />
                  <span>{t(project.statusBadge)}</span>
                </div>
              ) : null}

              {project.links.length > 0 ? (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-emerald-brooch/50 bg-surface px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:bg-emerald-brooch hover:text-on-emerald"
                    >
                      <LinkIcon kind={link.kind} />
                      <span>{t(link.label)}</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project) {
      if (!dialog.open && typeof dialog.showModal === 'function') {
        dialog.showModal()
      }
    } else if (dialog.open && typeof dialog.close === 'function') {
      dialog.close()
    }
  }, [project])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleClose = () => {
      onClose()
    }

    const handleClick = (event: MouseEvent) => {
      if ('closedBy' in HTMLDialogElement.prototype) return
      if (event.target !== dialog) return
      const rect = dialog.getBoundingClientRect()
      const clickedInDialog =
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right
      if (!clickedInDialog && typeof dialog.close === 'function') {
        dialog.close()
      }
    }

    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('click', handleClick)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('click', handleClick)
    }
  }, [onClose])

  const requestClose = () => {
    const dialog = dialogRef.current
    if (dialog?.open && typeof dialog.close === 'function') {
      dialog.close()
    } else {
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as Record<string, string>)}
      aria-labelledby={titleId}
      className="ve-modal-dialog"
    >
      {project ? (
        <ProjectModalContent
          key={project.id}
          project={project}
          titleId={titleId}
          onRequestClose={requestClose}
        />
      ) : null}
    </dialog>
  )
}
