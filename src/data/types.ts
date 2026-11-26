import type { LocalizedString } from '../context/useLanguage'

export type ProjectCategory = 'all' | 'web' | 'backend' | 'opensource'
export type ProjectItemCategory = Exclude<ProjectCategory, 'all'>

export interface ProjectScreenshot {
  src: string
  alt: LocalizedString
  caption: LocalizedString
}

export interface ProjectLink {
  label: LocalizedString
  href: string
  kind: 'live' | 'github' | 'archive' | 'pypi' | 'docs' | 'telegram'
}

export interface ProjectEditorialFallback {
  domainLabel: string
  tagline: LocalizedString
  accentTitle: LocalizedString
  metrics: LocalizedString[]
  note: LocalizedString
}

export interface ProjectItem {
  id: string
  dossierNumber: string
  title: LocalizedString
  organization: LocalizedString
  period: LocalizedString
  role: LocalizedString
  category: ProjectItemCategory
  featured?: boolean
  summary: LocalizedString
  highlights: LocalizedString[]
  techStack: string[]
  statusBadge?: LocalizedString
  screenshots: ProjectScreenshot[]
  previewKind?: 'screenshots' | 'siakadu-telegram' | 'editorial-card'
  editorialFallback?: ProjectEditorialFallback
  links: ProjectLink[]
}

export type ExperienceCategory = 'all' | 'work' | 'teaching'
export type ExperienceItemCategory = Exclude<ExperienceCategory, 'all'>

export interface ExperienceItem {
  id: string
  stampCode: string
  organization: LocalizedString
  role: LocalizedString
  location: LocalizedString
  period: LocalizedString
  category: ExperienceItemCategory
  tag: LocalizedString
  bullets: LocalizedString[]
  techStack?: string[]
}

export interface OpenSourcePackage {
  id: string
  name: string
  installCommand: string
  summary: LocalizedString
  pypiUrl: string
  docsUrl: string
  githubUrl: string
  screenshot: string
  tags: string[]
}

export interface OpenSourceHighlight {
  id: string
  title: LocalizedString
  role: LocalizedString
  description: LocalizedString
  href: string
  linkLabel: LocalizedString
}

export interface CreatorChannel {
  handle: string
  name: string
  period: LocalizedString
  role: LocalizedString
  summary: LocalizedString
  topics: LocalizedString[]
  url: string
}

export interface SiakaduDemoMessage {
  id: string
  question: LocalizedString
  answer: LocalizedString
  similarityScore: string
  sourceTag: string
}

export interface SkillGroup {
  id: string
  title: LocalizedString
  skills: string[]
}

export interface EducationItem {
  institution: LocalizedString
  degree: LocalizedString
  period: string
  gpa: string
  location: LocalizedString
  thesisTitle: LocalizedString
}

export interface CertificationItem {
  id: string
  issuer: LocalizedString
  name: LocalizedString
  year: string
  credentialType: LocalizedString
}
