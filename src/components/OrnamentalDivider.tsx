import { motion } from 'framer-motion'

interface OrnamentalDividerProps {
  className?: string
}

export function OrnamentalDivider({ className = '' }: OrnamentalDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 my-8 select-none ${className}`}
      aria-hidden="true"
    >
      <motion.span
        initial={{ scaleX: 0, opacity: 0.3 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="h-px flex-1 origin-right bg-gradient-to-r from-transparent via-hairline to-gold-brass/65"
      />
      <motion.span
        initial={{ scale: 0.75, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 text-gold-brass"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path
            d="M12 2L17.5 12L12 22L6.5 12L12 2Z"
            fill="var(--accent-emerald)"
            fillOpacity="0.22"
            stroke="var(--accent-emerald)"
            strokeWidth="1.4"
          />
          <path
            d="M12 6.5L14.8 12L12 17.5L9.2 12L12 6.5Z"
            fill="var(--accent-emerald)"
          />
          <circle cx="12" cy="12" r="1.4" fill="var(--bg-surface)" />
        </svg>
      </motion.span>
      <motion.span
        initial={{ scaleX: 0, opacity: 0.3 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="h-px flex-1 origin-left bg-gradient-to-l from-transparent via-hairline to-gold-brass/65"
      />
    </div>
  )
}

interface WaxSealMonogramProps {
  monogram?: string
  size?: 'sm' | 'md'
}

export function WaxSealMonogram({ monogram = 'CA', size = 'sm' }: WaxSealMonogramProps) {
  const dim = size === 'md' ? 48 : 38
  return (
    <span
      className="relative inline-flex items-center justify-center shrink-0"
      style={{ width: dim, height: dim }}
    >
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0"
      >
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="var(--accent-prussian)"
          fillOpacity="0.12"
          stroke="var(--accent-gold)"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r="17"
          stroke="var(--accent-emerald)"
          strokeWidth="1"
          strokeDasharray="2 2.5"
        />
      </svg>
      <span className="relative font-display font-semibold tracking-[0.06em] text-prussian text-base leading-none">
        {monogram}
      </span>
    </span>
  )
}
