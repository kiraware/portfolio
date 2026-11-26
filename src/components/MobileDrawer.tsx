import { useEffect, useRef } from 'react'
import { X, Mail } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import type { NavItem } from '../data/i18n'
import { UI_STRINGS } from '../data/i18n'
import { PROFILE } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { WaxSealMonogram } from './OrnamentalDivider'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const scroller = scrollerRef.current
    const sheet = sheetRef.current
    if (!dialog || !scroller || !sheet) return

    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: scroll()')

    const supportsInitialTarget =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('scroll-initial-target: nearest')

    if (isOpen) {
      if (!dialog.open && typeof dialog.showModal === 'function') {
        dialog.showModal()
      }
      if (!supportsInitialTarget) {
        scroller.scrollLeft = sheet.offsetWidth || 320
      }
      requestAnimationFrame(() => {
        if (typeof scroller.scrollTo === 'function') {
          scroller.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scroller.scrollLeft = 0
        }
        if (!supportsScrollTimeline) {
          dialog.style.setProperty('--drawer-backdrop', '1')
        }
      })
    } else if (dialog.open) {
      if (typeof dialog.close === 'function') {
        dialog.close()
      }
    }
  }, [isOpen])

  useEffect(() => {
    const dialog = dialogRef.current
    const scroller = scrollerRef.current
    const sheet = sheetRef.current
    if (!dialog || !scroller || !sheet) return

    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('animation-timeline: scroll()')

    const handleScroll = () => {
      if (!supportsScrollTimeline) {
        const width = sheet.offsetWidth || 1
        const progress = Math.max(0, Math.min(1, 1 - scroller.scrollLeft / width))
        dialog.style.setProperty('--drawer-backdrop', String(progress))
      }
    }

    const handleClose = () => {
      onClose()
    }

    const handleCancel = (event: Event) => {
      event.preventDefault()
      onClose()
    }

    scroller.addEventListener('scroll', handleScroll, { passive: true })
    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('cancel', handleCancel)

    let observer: IntersectionObserver | null = null
    if (typeof IntersectionObserver !== 'undefined') {
      let hasOpenedFully = false
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (!entry) return
          if (entry.intersectionRatio >= 0.9) {
            hasOpenedFully = true
          } else if (hasOpenedFully && entry.intersectionRatio === 0 && dialog.open) {
            hasOpenedFully = false
            onClose()
          }
        },
        { root: scroller, threshold: [0, 0.9] },
      )
      observer.observe(sheet)
    }

    return () => {
      scroller.removeEventListener('scroll', handleScroll)
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('cancel', handleCancel)
      observer?.disconnect()
    }
  }, [onClose])

  return (
    <dialog
      id="mobile-nav-drawer"
      ref={dialogRef}
      aria-label={t(UI_STRINGS.navAriaLabel)}
      className="ve-drawer"
    >
      <div
        ref={scrollerRef}
        className="ve-drawer-scroller"
        onClick={(event) => {
          if (event.target === scrollerRef.current) {
            onClose()
          }
        }}
      >
        <div ref={sheetRef} className="ve-drawer-sheet">
          <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
            <div className="flex items-center gap-3">
              <WaxSealMonogram monogram={PROFILE.monogram} size="sm" />
              <div>
                <p className="font-display text-lg font-semibold leading-tight text-ink">
                  {PROFILE.shortName}
                </p>
                <p className="font-mono text-[10px] tracking-[0.18em] text-ink-muted">
                  {t(UI_STRINGS.brandSubtitle)}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t(UI_STRINGS.closeMenu)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-gold-brass hover:text-ink cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label={t(UI_STRINGS.navAriaLabel)} className="px-4 py-6">
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-subtle"
                  >
                    <span>{t(item.label)}</span>
                    <span className="font-mono text-xs text-gold-brass">{item.stamp}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-hairline px-5 py-4">
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline text-ink-muted transition-colors hover:border-emerald-brooch hover:text-emerald-brooch"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline text-ink-muted transition-colors hover:border-emerald-brooch hover:text-emerald-brooch"
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline text-ink-muted transition-colors hover:border-emerald-brooch hover:text-emerald-brooch"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
