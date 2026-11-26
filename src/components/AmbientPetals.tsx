import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Pause, Play } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { UI_STRINGS } from '../data/i18n'

interface PetalSpec {
  id: string
  left: string
  delay: string
  duration: string
  driftX: string
  rotate: string
  scale: number
  opacity: number
  variant: 'violet' | 'parchment'
}

const PETALS: PetalSpec[] = [
  {
    id: 'p1',
    left: '6%',
    delay: '-2s',
    duration: '19s',
    driftX: '42px',
    rotate: '175deg',
    scale: 1,
    opacity: 0.34,
    variant: 'violet',
  },
  {
    id: 'p2',
    left: '19%',
    delay: '-9s',
    duration: '24s',
    driftX: '-36px',
    rotate: '220deg',
    scale: 0.85,
    opacity: 0.28,
    variant: 'parchment',
  },
  {
    id: 'p3',
    left: '34%',
    delay: '-5s',
    duration: '21s',
    driftX: '54px',
    rotate: '140deg',
    scale: 1.05,
    opacity: 0.3,
    variant: 'violet',
  },
  {
    id: 'p4',
    left: '52%',
    delay: '-14s',
    duration: '26s',
    driftX: '-48px',
    rotate: '205deg',
    scale: 0.9,
    opacity: 0.26,
    variant: 'parchment',
  },
  {
    id: 'p5',
    left: '71%',
    delay: '-6s',
    duration: '20s',
    driftX: '34px',
    rotate: '190deg',
    scale: 1.1,
    opacity: 0.32,
    variant: 'violet',
  },
  {
    id: 'p6',
    left: '88%',
    delay: '-11s',
    duration: '23s',
    driftX: '-40px',
    rotate: '160deg',
    scale: 0.95,
    opacity: 0.28,
    variant: 'parchment',
  },
]

export function AmbientPetals() {
  const { t } = useLanguage()
  const [paused, setPaused] = useState(false)

  const toggleLabel = paused ? t(UI_STRINGS.ambientPlay) : t(UI_STRINGS.ambientPause)

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {PETALS.map((petal) => {
          const style: CSSProperties = {
            left: petal.left,
            top: '-2rem',
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            ['--petal-drift-x' as string]: petal.driftX,
            ['--petal-rotate' as string]: petal.rotate,
            ['--petal-opacity' as string]: String(petal.opacity),
          }

          return (
            <span
              key={petal.id}
              style={style}
              className={`absolute ve-petal ve-petal-active ${paused ? 've-petal-paused' : ''}`}
            >
              {petal.variant === 'violet' ? (
                <svg
                  width={Math.round(18 * petal.scale)}
                  height={Math.round(22 * petal.scale)}
                  viewBox="0 0 18 22"
                  fill="none"
                >
                  <path
                    d="M9 1C13.5 4.2 16.5 9.2 15.2 14.8C14.1 19.2 10.6 21 9 21C7.4 21 3.9 19.2 2.8 14.8C1.5 9.2 4.5 4.2 9 1Z"
                    fill="var(--accent-prussian)"
                    fillOpacity="0.45"
                    stroke="var(--accent-gold)"
                    strokeOpacity="0.55"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M9 3.5V18"
                    stroke="var(--accent-gold)"
                    strokeOpacity="0.4"
                    strokeWidth="0.7"
                  />
                </svg>
              ) : (
                <svg
                  width={Math.round(16 * petal.scale)}
                  height={Math.round(12 * petal.scale)}
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="18"
                    height="12"
                    rx="1.5"
                    fill="var(--bg-surface)"
                    fillOpacity="0.7"
                    stroke="var(--accent-gold)"
                    strokeOpacity="0.65"
                    strokeWidth="1"
                  />
                  <path
                    d="M1.5 2L10 8.2L18.5 2"
                    stroke="var(--accent-emerald)"
                    strokeOpacity="0.7"
                    strokeWidth="1"
                  />
                </svg>
              )}
            </span>
          )
        })}
      </div>

      {/* WCAG 2.2.2 Pause/Play motion control — flips accessible label cleanly without aria-pressed */}
      <button
        type="button"
        onClick={() => setPaused((prev) => !prev)}
        aria-label={toggleLabel}
        title={toggleLabel}
        className="absolute right-4 top-4 z-10 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-hairline bg-surface/90 px-3.5 py-2 text-xs font-mono text-ink-muted backdrop-blur-sm transition-colors hover:border-gold-brass hover:text-ink cursor-pointer"
      >
        {paused ? (
          <Play className="h-3.5 w-3.5 text-emerald-brooch" aria-hidden="true" />
        ) : (
          <Pause className="h-3.5 w-3.5 text-gold-brass" aria-hidden="true" />
        )}
        <span className="hidden sm:inline">{paused ? 'Play' : 'Pause'}</span>
      </button>
    </>
  )
}
