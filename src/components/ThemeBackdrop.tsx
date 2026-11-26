import { resolveAssetUrl } from '../lib/assetUrl'
import { PROFILE } from '../data/profile'

export function ThemeBackdrop() {
  const daySrc = resolveAssetUrl(PROFILE.bgDayArtwork)
  const nightSrc = resolveAssetUrl(PROFILE.bgNightArtwork)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Light Mode: sunlit European canal backdrop */}
      <img
        src={daySrc}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        className="ve-bg-layer ve-bg-day absolute inset-0 h-full w-full object-cover object-center scale-[1.02]"
      />

      {/* Dark Mode: starlit midnight canal backdrop */}
      <img
        src={nightSrc}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        className="ve-bg-layer ve-bg-night absolute inset-0 h-full w-full object-cover object-center scale-[1.02]"
      />

      {/* Harmonious gradient veil preserving high WCAG AA text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, color-mix(in srgb, var(--bg-canvas) 54%, transparent) 0%, color-mix(in srgb, var(--bg-canvas) 74%, transparent) 38%, color-mix(in srgb, var(--bg-canvas) 80%, transparent) 78%, color-mix(in srgb, var(--bg-canvas) 68%, transparent) 100%)',
        }}
      />
    </div>
  )
}
