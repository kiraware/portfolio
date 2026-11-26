import type { CertificationItem, EducationItem, SkillGroup } from './types'

export const PROFILE = {
  fullName: 'Cakrawangsa Praba Alkautsar',
  shortName: 'Praba',
  monogram: 'CA',
  handle: 'kiraware',
  email: 'cakrawangsaprabaalkautsar7@gmail.com',
  heroArtwork: 'art/hero-violet-scene.jpg',
  bgDayArtwork: 'art/bg-leiden-day.jpg',
  bgNightArtwork: 'art/bg-leiden-night.jpg',
  lakeBannerArtwork: 'art/banner-lake-reflections.jpg',
  contactArtwork: 'art/contact-envelope.jpg',
  headline: {
    id: 'Full-Stack & Backend Developer',
    en: 'Full-Stack & Backend Developer',
  },
  location: {
    id: 'Bandar Lampung & Jakarta, Indonesia',
    en: 'Bandar Lampung & Jakarta, Indonesia',
  },
  currentRole: {
    id: 'IT Application Support Intern · PT TASPEN (Persero)',
    en: 'IT Application Support Intern · PT TASPEN (Persero)',
  },
  summary: {
    id: 'Lulusan S1 Ilmu Komputer Universitas Lampung (IPK 3.87/4.00) yang saat ini menjalani magang IT Application Support di PT TASPEN (Persero). Berpengalaman membangun dan men-deploy aplikasi web produksi, sistem backend, REST API, basis data, hingga pustaka open source Python di PyPI dan Jazzband dengan metodologi Scrum maupun Extreme Programming (XP).',
    en: 'Computer Science graduate from Universitas Lampung (GPA 3.87/4.00), currently serving as an IT Application Support Intern at PT TASPEN (Persero). Experienced in building and shipping production web applications, backend systems, REST APIs, database architectures, and open-source Python packages on PyPI and Jazzband using Scrum and Extreme Programming (XP).',
  },
  stats: {
    gpa: '3.87/4.00',
    projects: '11+',
    githubRepos: '49',
    pypiPackages: '3',
  },
  links: {
    github: 'https://github.com/kiraware',
    linkedin: 'https://linkedin.com/in/cakrawangsa-praba-alkautsar',
    pypi: 'https://pypi.org/user/kiraware',
    youtube: 'https://youtube.com/@PraveInc',
  },
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'backend',
    title: { id: 'Backend & API', en: 'Backend & API' },
    skills: ['PHP', 'Laravel', 'Python', 'FastAPI', 'Django', 'REST API'],
  },
  {
    id: 'frontend',
    title: { id: 'Frontend & UI', en: 'Frontend & UI' },
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'],
  },
  {
    id: 'database',
    title: { id: 'Basis Data', en: 'Databases' },
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    id: 'tools-practices',
    title: { id: 'Perkakas & Metodologi', en: 'Tools & Engineering Practices' },
    skills: ['Git', 'GitHub', 'Apache JMeter', 'Scrum', 'Extreme Programming (XP)'],
  },
  {
    id: 'other-ai',
    title: { id: 'AI, Sistem & Bahasa', en: 'AI, Systems & Languages' },
    skills: [
      'C++',
      'Semantic Search (BGE-M3)',
      'FAISS',
      'Bahasa Indonesia (Native)',
      'English (Working Proficiency)',
    ],
  },
]

export const EDUCATION: EducationItem = {
  institution: {
    id: 'Universitas Lampung',
    en: 'University of Lampung',
  },
  degree: {
    id: 'S1 Ilmu Komputer (S.Kom.)',
    en: 'B.Sc. in Computer Science (S.Kom.)',
  },
  period: '2022 – 2026',
  gpa: '3.87/4.00',
  location: {
    id: 'Bandar Lampung, Indonesia',
    en: 'Bandar Lampung, Indonesia',
  },
  thesisTitle: {
    id: 'Pengembangan Sistem Helpdesk Berbasis Tiket UPA TIK Universitas Lampung dengan Extreme Programming (XP) dan Pengujian Beban Apache JMeter',
    en: 'Development of the Ticket-Based IT Helpdesk Platform for UPA TIK Universitas Lampung using Extreme Programming (XP) and Apache JMeter Load Testing',
  },
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'bnsp-cyber',
    issuer: {
      id: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      en: 'Indonesian National Professional Certification Agency (BNSP)',
    },
    name: {
      id: 'Cyber Security Junior',
      en: 'Cyber Security Junior',
    },
    year: '2024',
    credentialType: {
      id: 'Sertifikasi Kompetensi Nasional',
      en: 'National Competency Certification',
    },
  },
  {
    id: 'vsga-jwd',
    issuer: {
      id: 'Vocational School Graduate Academy (VSGA) — Kominfo',
      en: 'Vocational School Graduate Academy (VSGA) — Ministry of Communication and Informatics',
    },
    name: {
      id: 'Junior Web Developer',
      en: 'Junior Web Developer',
    },
    year: '2023',
    credentialType: {
      id: 'Pelatihan & Sertifikasi Digital Talent Scholarship',
      en: 'Digital Talent Scholarship Certification',
    },
  },
]
