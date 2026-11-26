import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { resolveAssetUrl } from '../lib/assetUrl'
import { PROFILE } from '../data/profile'

export function ScenicInterlude() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="mx-auto my-6 max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-gold-brass/40 bg-surface p-2 shadow-[var(--shadow-editorial)]">
        <span className="pointer-events-none absolute left-2 top-2 z-10 h-4 w-4 border-l-2 border-t-2 border-gold-brass/75 rounded-tl-sm" />
        <span className="pointer-events-none absolute bottom-2 right-2 z-10 h-4 w-4 border-b-2 border-r-2 border-gold-brass/75 rounded-br-sm" />

        <div className="relative h-40 w-full overflow-hidden rounded-xl sm:h-52 lg:h-64">
          <motion.img
            src={resolveAssetUrl(PROFILE.lakeBannerArtwork)}
            alt=""
            width={1600}
            height={900}
            loading="lazy"
            style={{ y: imageY }}
            className="h-[118%] w-full object-cover object-center -mt-[5%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg-canvas)]/35 via-transparent to-[var(--bg-canvas)]/35" />
        </div>
      </div>
    </div>
  )
}
