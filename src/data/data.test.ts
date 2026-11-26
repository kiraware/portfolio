/// <reference types="node" />
import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { UI_STRINGS } from './i18n'
import { CERTIFICATIONS, EDUCATION, PROFILE, SKILL_GROUPS } from './profile'
import { PROJECTS } from './projects'
import { EXPERIENCES } from './experience'
import {
  CREATOR_CHANNEL,
  OPEN_SOURCE_HIGHLIGHTS,
  OPEN_SOURCE_PACKAGES,
  SIAKADU_DEMO_MESSAGES,
} from './opensource'

const PUBLIC_DIR = path.resolve(process.cwd(), 'public')

function assertLocalizedStringsNonEmpty(value: unknown, trail = 'root'): void {
  if (value === null || value === undefined || typeof value !== 'object') return

  if (Array.isArray(value)) {
    value.forEach((item, index) => assertLocalizedStringsNonEmpty(item, `${trail}[${index}]`))
    return
  }

  const record = value as Record<string, unknown>
  const keys = Object.keys(record)
  if (
    keys.length === 2 &&
    typeof record.id === 'string' &&
    typeof record.en === 'string' &&
    keys.includes('id') &&
    keys.includes('en')
  ) {
    expect(record.id.trim().length, `${trail}.id should be non-empty`).toBeGreaterThan(0)
    expect(record.en.trim().length, `${trail}.en should be non-empty`).toBeGreaterThan(0)
    return
  }

  for (const [k, v] of Object.entries(record)) {
    assertLocalizedStringsNonEmpty(v, `${trail}.${k}`)
  }
}

describe('Portfolio bilingual CV and project data integrity', () => {
  it('ensures every LocalizedString across all data modules has non-empty id and en copy', () => {
    assertLocalizedStringsNonEmpty(UI_STRINGS, 'UI_STRINGS')
    assertLocalizedStringsNonEmpty(PROFILE, 'PROFILE')
    assertLocalizedStringsNonEmpty(SKILL_GROUPS, 'SKILL_GROUPS')
    assertLocalizedStringsNonEmpty(EDUCATION, 'EDUCATION')
    assertLocalizedStringsNonEmpty(CERTIFICATIONS, 'CERTIFICATIONS')
    assertLocalizedStringsNonEmpty(PROJECTS, 'PROJECTS')
    assertLocalizedStringsNonEmpty(EXPERIENCES, 'EXPERIENCES')
    assertLocalizedStringsNonEmpty(OPEN_SOURCE_PACKAGES, 'OPEN_SOURCE_PACKAGES')
    assertLocalizedStringsNonEmpty(OPEN_SOURCE_HIGHLIGHTS, 'OPEN_SOURCE_HIGHLIGHTS')
    assertLocalizedStringsNonEmpty(CREATOR_CHANNEL, 'CREATOR_CHANNEL')
    assertLocalizedStringsNonEmpty(SIAKADU_DEMO_MESSAGES, 'SIAKADU_DEMO_MESSAGES')
  })

  it('verifies every referenced screenshot and artwork asset exists on disk under public/', () => {
    const artworks = [
      PROFILE.heroArtwork,
      PROFILE.bgDayArtwork,
      PROFILE.bgNightArtwork,
      PROFILE.lakeBannerArtwork,
      PROFILE.contactArtwork,
    ]
    for (const art of artworks) {
      const fullArtPath = path.join(PUBLIC_DIR, art)
      expect(fs.existsSync(fullArtPath), `Missing artwork: ${art}`).toBe(true)
    }

    const screenshotCount = PROJECTS.reduce((count, project) => {
      for (const shot of project.screenshots) {
        const fullPath = path.join(PUBLIC_DIR, shot.src)
        expect(fs.existsSync(fullPath), `Missing screenshot for ${project.id}: ${shot.src}`).toBe(
          true,
        )
      }
      return count + project.screenshots.length
    }, 0)

    expect(screenshotCount).toBeGreaterThanOrEqual(11)
  })

  it('never leaks raw personal phone number in any serialized data module', () => {
    const serialized = JSON.stringify({
      UI_STRINGS,
      PROFILE,
      SKILL_GROUPS,
      EDUCATION,
      CERTIFICATIONS,
      PROJECTS,
      EXPERIENCES,
      OPEN_SOURCE_PACKAGES,
      OPEN_SOURCE_HIGHLIGHTS,
      CREATOR_CHANNEL,
      SIAKADU_DEMO_MESSAGES,
    })

    expect(serialized).not.toContain('085273510987')
    expect(serialized).not.toContain('85273510987')
  })

  it('avoids self-referential AI-style theme disclaimers in visible UI copy', () => {
    const uiCopy = JSON.stringify(UI_STRINGS)
    expect(uiCopy).not.toMatch(/Violet Evergarden/i)
    expect(uiCopy).not.toMatch(/Dirancang dengan estetika/i)
    expect(uiCopy).not.toMatch(/Terinspirasi/i)
  })

  it('includes all 11 CV projects with valid categories and all 15 CV experience records', () => {
    expect(PROJECTS).toHaveLength(11)
    const validCategories = new Set(['web', 'backend', 'opensource'])
    for (const p of PROJECTS) {
      expect(validCategories.has(p.category)).toBe(true)
      expect(p.techStack.length).toBeGreaterThan(0)
      expect(p.highlights.length).toBeGreaterThan(0)
    }

    expect(EXPERIENCES).toHaveLength(15)
    const teachingEntries = EXPERIENCES.filter((e) => e.category === 'teaching')
    expect(teachingEntries.length).toBeGreaterThanOrEqual(3)
    expect(EXPERIENCES.some((e) => e.organization.id.includes('PT TASPEN'))).toBe(true)
    expect(EXPERIENCES.some((e) => e.organization.id.includes('Kayla Multi Interior'))).toBe(true)

    const cssProject = PROJECTS.find((p) => p.id === 'css-himakom-unila')
    const satujuaProject = PROJECTS.find((p) => p.id === 'satujua-studio')
    const kaylaProject = PROJECTS.find((p) => p.id === 'kayla-multi-interior')
    expect(cssProject?.screenshots.length).toBeGreaterThanOrEqual(1)
    expect(satujuaProject?.screenshots.length).toBeGreaterThanOrEqual(1)
    expect(kaylaProject?.screenshots.length).toBeGreaterThanOrEqual(1)
  })

  it('exposes verified profile URLs and academic credentials', () => {
    expect(PROFILE.fullName).toBe('Cakrawangsa Praba Alkautsar')
    expect(PROFILE.email).toBe('cakrawangsaprabaalkautsar7@gmail.com')
    expect(PROFILE.links.github).toBe('https://github.com/kiraware')
    expect(PROFILE.links.linkedin).toBe('https://linkedin.com/in/cakrawangsa-praba-alkautsar')
    expect(PROFILE.links.pypi).toBe('https://pypi.org/user/kiraware')
    expect(PROFILE.links.youtube).toBe('https://youtube.com/@PraveInc')
    expect(EDUCATION.gpa).toBe('3.87/4.00')
    expect(CERTIFICATIONS).toHaveLength(2)
  })
})
