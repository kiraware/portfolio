import type { LocalizedString } from '../context/useLanguage'

export interface NavItem {
  id: string
  href: string
  label: LocalizedString
  stamp: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'projects', href: '#projects', label: { id: 'Proyek', en: 'Projects' }, stamp: '01' },
  {
    id: 'experience',
    href: '#experience',
    label: { id: 'Pengalaman', en: 'Experience' },
    stamp: '02',
  },
  {
    id: 'opensource',
    href: '#opensource',
    label: { id: 'Open Source', en: 'Open Source' },
    stamp: '03',
  },
  {
    id: 'skills',
    href: '#skills',
    label: { id: 'Keahlian', en: 'Skills' },
    stamp: '04',
  },
  { id: 'contact', href: '#contact', label: { id: 'Kontak', en: 'Contact' }, stamp: '05' },
]

export const UI_STRINGS = {
  skipToContent: {
    id: 'Langsung ke konten utama',
    en: 'Skip to main content',
  },
  brandSubtitle: {
    id: 'ARSIP REKAYASA · LEIDEN',
    en: 'ENGINEERING DOSSIER',
  },
  navAriaLabel: {
    id: 'Navigasi utama',
    en: 'Primary navigation',
  },
  openMenu: {
    id: 'Buka menu navigasi',
    en: 'Open navigation menu',
  },
  closeMenu: {
    id: 'Tutup menu navigasi',
    en: 'Close navigation menu',
  },
  switchToLight: {
    id: 'Aktifkan mode terang (Leiden Morning Parchment)',
    en: 'Switch to light mode (Leiden Morning Parchment)',
  },
  switchToDark: {
    id: 'Aktifkan mode gelap (Leiden Midnight Letter)',
    en: 'Switch to dark mode (Leiden Midnight Letter)',
  },
  switchLanguageLabel: {
    id: 'Ganti bahasa ke Inggris',
    en: 'Switch language to Indonesian',
  },
  ambientPause: {
    id: 'Jeda animasi kelopak',
    en: 'Pause floating petals',
  },
  ambientPlay: {
    id: 'Putar animasi kelopak',
    en: 'Play floating petals',
  },
  ambientPauseShort: {
    id: 'Jeda',
    en: 'Pause',
  },
  ambientPlayShort: {
    id: 'Putar',
    en: 'Play',
  },
  hero: {
    eyebrow: {
      id: 'DISPATCH NO. 01 · FULL-STACK & BACKEND DEVELOPER',
      en: 'DISPATCH NO. 01 · FULL-STACK & BACKEND DEVELOPER',
    },
    availability: {
      id: 'Terbuka untuk peluang Backend & Full-Stack Developer',
      en: 'Open to Backend & Full-Stack Developer opportunities',
    },
    ctaProjects: {
      id: 'Jelajahi Proyek',
      en: 'Explore Projects',
    },
    ctaContact: {
      id: 'Kirim Pesan',
      en: 'Send a Dispatch',
    },
    artCaption: {
      id: 'Meja Korespondensi · Terinspirasi Violet Evergarden',
      en: 'Correspondence Desk · Inspired by Violet Evergarden',
    },
    statGpaLabel: {
      id: 'IPK S1 Ilmu Komputer',
      en: 'B.Sc. CS GPA',
    },
    statProjectsLabel: {
      id: 'Sistem & Aplikasi Nyata',
      en: 'Shipped Systems',
    },
    statReposLabel: {
      id: 'Repositori GitHub Publik',
      en: 'Public GitHub Repos',
    },
    statPypiLabel: {
      id: 'Paket Python PyPI',
      en: 'PyPI Packages',
    },
  },
  projects: {
    sectionKicker: {
      id: 'ARSIP 01 · KARYA PILIHAN',
      en: 'DOSSIER 01 · SELECTED WORKS',
    },
    sectionTitle: {
      id: 'Proyek & Tangkapan Layar Langsung',
      en: 'Featured Projects & Live Screenshots',
    },
    sectionLead: {
      id: 'Kumpulan sistem web enterprise, platform layanan publik, backend e-voting, dan pustaka open source yang saya bangun — dilengkapi tangkapan layar aplikasi nyata.',
      en: 'Enterprise web applications, public-service platforms, e-voting backends, and open-source Python tools I engineered — showcased with authentic application captures.',
    },
    filters: {
      all: { id: 'Semua (11)', en: 'All (11)' },
      web: { id: 'Aplikasi Web', en: 'Web Apps' },
      backend: { id: 'Backend & API', en: 'Backend & API' },
      opensource: { id: 'Open Source & AI', en: 'Open Source & AI' },
    },
    inspectCaseStudy: {
      id: 'Lihat Detail & Galeri',
      en: 'View Case Study',
    },
    screenshotsCount: {
      id: 'tangkapan layar',
      en: 'captures',
    },
    modalClose: {
      id: 'Tutup detail proyek',
      en: 'Close project details',
    },
    modalPrevSlide: {
      id: 'Tangkapan layar sebelumnya',
      en: 'Previous screenshot',
    },
    modalNextSlide: {
      id: 'Tangkapan layar berikutnya',
      en: 'Next screenshot',
    },
    modalHighlightsTitle: {
      id: 'Kontribusi & Hasil Utama',
      en: 'Key Contributions & Outcomes',
    },
    modalStackTitle: {
      id: 'Teknologi yang Digunakan',
      en: 'Technology Stack',
    },
    modalLinksTitle: {
      id: 'Tautan & Referensi',
      en: 'Links & References',
    },
    archiveCardBadge: {
      id: 'Pratinjau Editorial Arsip',
      en: 'Archival Editorial Preview',
    },
  },
  experience: {
    sectionKicker: {
      id: 'ARSIP 02 · PERJALANAN KARIER',
      en: 'DOSSIER 02 · CHRONICLE',
    },
    sectionTitle: {
      id: 'Pengalaman Kerja, Proyek & Pengajaran',
      en: 'Work, Engineering & Teaching Experience',
    },
    sectionLead: {
      id: 'Rekam jejak lengkap dari magang enterprise di PT TASPEN, pengembangan sistem pemerintahan dan kampus, hingga tiga semester asisten dosen Ilmu Komputer.',
      en: 'Full track record spanning enterprise engineering at PT TASPEN, government and campus systems, and three semesters teaching Computer Science undergraduates.',
    },
    filters: {
      all: { id: 'Semua (15)', en: 'All (15)' },
      work: { id: 'Kerja & Proyek', en: 'Work & Projects' },
      teaching: { id: 'Asisten Dosen & Komunitas', en: 'Teaching & Community' },
    },
  },
  opensource: {
    sectionKicker: {
      id: 'ARSIP 03 · KOMUNITAS & KONTEN',
      en: 'DOSSIER 03 · OPEN SOURCE & CREATOR',
    },
    sectionTitle: {
      id: 'Open Source, PyPI & Konten Edukasi',
      en: 'Open Source, PyPI & Creator Spotlight',
    },
    sectionLead: {
      id: 'Kontribusi berkelanjutan di ekosistem Python (Jazzband & PyPI), proyek lokal terjemahan terbuka, serta tutorial pemrograman di YouTube.',
      en: 'Ongoing contributions across the Python ecosystem (Jazzband & PyPI), open-source localization directories, and programming tutorials on YouTube.',
    },
    copyCommand: {
      id: 'Salin perintah',
      en: 'Copy command',
    },
    copyShort: {
      id: 'Salin',
      en: 'Copy',
    },
    copied: {
      id: 'Tersalin!',
      en: 'Copied!',
    },
    copyFailed: {
      id: 'Gagal menyalin',
      en: 'Copy failed',
    },
    viewPypi: {
      id: 'PyPI',
      en: 'PyPI',
    },
    viewDocs: {
      id: 'Dokumentasi',
      en: 'Docs',
    },
    viewGithub: {
      id: 'GitHub',
      en: 'GitHub',
    },
    visitYoutube: {
      id: 'Kunjungi Kanal YouTube',
      en: 'Visit YouTube Channel',
    },
  },
  skills: {
    sectionKicker: {
      id: 'ARSIP 04 · KOMPETENSI & AKADEMIK',
      en: 'DOSSIER 04 · CREDENTIALS',
    },
    sectionTitle: {
      id: 'Keahlian Teknis, Pendidikan & Sertifikasi',
      en: 'Technical Skills, Education & Certifications',
    },
    educationHeading: {
      id: 'Pendidikan Formal',
      en: 'Education',
    },
    certificationsHeading: {
      id: 'Sertifikasi Profesional',
      en: 'Certifications',
    },
    gpaBadge: {
      id: 'IPK',
      en: 'GPA',
    },
    thesisLabel: {
      id: 'Skripsi:',
      en: 'Thesis:',
    },
  },
  contact: {
    sectionKicker: {
      id: 'ARSIP 05 · KORESPONDENSI',
      en: 'DOSSIER 05 · CORRESPONDENCE',
    },
    sectionTitle: {
      id: 'Mari Berkolaborasi dalam Proyek Berikutnya',
      en: "Let's Build Something Meaningful Together",
    },
    sectionLead: {
      id: 'Terbuka untuk posisi Full-Stack Developer, Backend Developer, kolaborasi proyek web, maupun diskusi seputar open source dan rekayasa perangkat lunak.',
      en: 'Open to Full-Stack Developer and Backend Developer roles, web engineering collaborations, or conversations around open-source tooling.',
    },
    copyEmail: {
      id: 'Salin Alamat Email',
      en: 'Copy Email Address',
    },
    emailCopied: {
      id: 'Email Tersalin',
      en: 'Email Copied',
    },
    copyFailed: {
      id: 'Gagal menyalin email',
      en: 'Failed to copy email',
    },
    composeEmail: {
      id: 'Kirim Email Langsung',
      en: 'Compose Email',
    },
    epigraph: {
      id: '“Setiap baris kode yang ditulis dengan rapi adalah surat yang menjaga niat baik tetap hidup bagi penggunanya.”',
      en: '“Every carefully crafted system is a letter that carries clarity and care straight to the people who rely on it.”',
    },
  },
  footer: {
    builtWith: {
      id: 'Dirancang dengan estetika Violet Evergarden · Dibangun dengan React, TypeScript & Tailwind CSS.',
      en: 'Crafted in a Violet Evergarden editorial aesthetic · Built with React, TypeScript & Tailwind CSS.',
    },
    backToTop: {
      id: 'Kembali ke atas',
      en: 'Back to top',
    },
  },
} satisfies Record<string, unknown> as {
  skipToContent: LocalizedString
  brandSubtitle: LocalizedString
  navAriaLabel: LocalizedString
  openMenu: LocalizedString
  closeMenu: LocalizedString
  switchToLight: LocalizedString
  switchToDark: LocalizedString
  switchLanguageLabel: LocalizedString
  ambientPause: LocalizedString
  ambientPlay: LocalizedString
  ambientPauseShort: LocalizedString
  ambientPlayShort: LocalizedString
  hero: Record<string, LocalizedString>
  projects: {
    sectionKicker: LocalizedString
    sectionTitle: LocalizedString
    sectionLead: LocalizedString
    filters: Record<'all' | 'web' | 'backend' | 'opensource', LocalizedString>
    inspectCaseStudy: LocalizedString
    screenshotsCount: LocalizedString
    modalClose: LocalizedString
    modalPrevSlide: LocalizedString
    modalNextSlide: LocalizedString
    modalHighlightsTitle: LocalizedString
    modalStackTitle: LocalizedString
    modalLinksTitle: LocalizedString
    archiveCardBadge: LocalizedString
  }
  experience: {
    sectionKicker: LocalizedString
    sectionTitle: LocalizedString
    sectionLead: LocalizedString
    filters: Record<'all' | 'work' | 'teaching', LocalizedString>
  }
  opensource: Record<string, LocalizedString>
  skills: Record<string, LocalizedString>
  contact: Record<string, LocalizedString>
  footer: Record<string, LocalizedString>
}
