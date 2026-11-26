import { motion } from 'framer-motion'
import { ArrowDownRight, Mail, MapPin, Package } from 'lucide-react'
import { useLanguage } from '../context/useLanguage'
import { resolveAssetUrl } from '../lib/assetUrl'
import { PROFILE } from '../data/profile'
import { UI_STRINGS } from '../data/i18n'
import { AmbientPetals } from './AmbientPetals'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './BrandIcons'

const HERO_STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const HERO_ITEM = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export function Hero() {
  const { t } = useLanguage()
  const heroArtSrc = resolveAssetUrl(PROFILE.heroArtwork)

  const stats = [
    { value: PROFILE.stats.gpa, label: t(UI_STRINGS.hero.statGpaLabel) },
    { value: PROFILE.stats.projects, label: t(UI_STRINGS.hero.statProjectsLabel) },
    { value: PROFILE.stats.githubRepos, label: t(UI_STRINGS.hero.statReposLabel) },
    { value: PROFILE.stats.pypiPackages, label: t(UI_STRINGS.hero.statPypiLabel) },
  ]

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline/70 py-14 sm:py-20 lg:py-24"
    >
      <AmbientPetals />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Editorial Letterhead Column */}
          <motion.div
            variants={HERO_STAGGER}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div
              variants={HERO_ITEM}
              className="mb-5 flex flex-wrap items-center gap-3 pr-14 sm:pr-0"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-brooch/35 bg-surface/90 px-3.5 py-1.5 text-xs font-medium text-ink shadow-xs">
                <span
                  className="ve-brooch-dot h-2 w-2 rounded-full bg-emerald-brooch"
                  aria-hidden="true"
                />
                <span>{t(UI_STRINGS.hero.availability)}</span>
              </span>
            </motion.div>

            <motion.p
              variants={HERO_ITEM}
              className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-gold-brass"
            >
              {t(UI_STRINGS.hero.eyebrow)}
            </motion.p>

            <motion.h1
              variants={HERO_ITEM}
              className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              {PROFILE.fullName}
            </motion.h1>

            <motion.div
              variants={HERO_ITEM}
              className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-prussian font-medium"
            >
              <span>{t(PROFILE.currentRole)}</span>
              <span className="hidden sm:inline text-hairline" aria-hidden="true">
                •
              </span>
              <span className="inline-flex items-center gap-1.5 text-ink-muted">
                <MapPin className="h-3.5 w-3.5 text-gold-brass" aria-hidden="true" />
                {t(PROFILE.location)}
              </span>
            </motion.div>

            <motion.p
              variants={HERO_ITEM}
              className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-[17px]"
            >
              {t(PROFILE.summary)}
            </motion.p>

            <motion.div variants={HERO_ITEM} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald-brooch px-6 py-3 text-sm font-semibold text-on-emerald shadow-sm transition-transform hover:-translate-y-0.5 hover:brightness-105"
              >
                <span>{t(UI_STRINGS.hero.ctaProjects)}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-gold-brass/60 bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold-brass hover:bg-subtle"
              >
                <Mail className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                <span>{t(UI_STRINGS.hero.ctaContact)}</span>
              </a>
            </motion.div>

            {/* Verified External Profiles */}
            <motion.div variants={HERO_ITEM} className="mt-7 flex flex-wrap items-center gap-2.5">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-hairline bg-surface/85 px-3.5 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
              >
                <GithubIcon className="h-4 w-4 text-prussian" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-hairline bg-surface/85 px-3.5 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
              >
                <LinkedinIcon className="h-4 w-4 text-prussian" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.links.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-hairline bg-surface/85 px-3.5 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
              >
                <Package className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                <span>PyPI</span>
              </a>
              <a
                href={PROFILE.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-hairline bg-surface/85 px-3.5 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-emerald-brooch hover:text-ink"
              >
                <YoutubeIcon className="h-4 w-4 text-gold-brass" aria-hidden="true" />
                <span>@PraveInc</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Framed Violet Evergarden Artwork Column */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.14, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Soft emerald-gold ambient aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-3xl opacity-65 blur-2xl"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, var(--emerald-glow), transparent 60%), radial-gradient(circle at 75% 75%, color-mix(in srgb, var(--accent-gold) 24%, transparent), transparent 62%)',
                }}
              />

              <figure className="ve-float-slow relative rounded-2xl border border-gold-brass/50 bg-surface/95 p-2.5 shadow-[var(--shadow-editorial)]">
                {/* Brass Corner Filigree */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1.5 -top-1.5 h-5 w-5 border-l-2 border-t-2 border-gold-brass/85 rounded-tl-md"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-5 w-5 border-b-2 border-r-2 border-gold-brass/85 rounded-br-md"
                />

                <div className="relative overflow-hidden rounded-xl border border-hairline bg-subtle">
                  <img
                    src={heroArtSrc}
                    alt={t(UI_STRINGS.hero.artCaption)}
                    width={1200}
                    height={900}
                    fetchPriority="high"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </figure>
            </div>
          </motion.div>
        </div>

        {/* CH Postal Credential Stamps */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="dossier-card rounded-xl px-4 py-3.5 transition-colors hover:border-gold-brass/60"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-prussian sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
