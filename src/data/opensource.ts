import type {
  CreatorChannel,
  OpenSourceHighlight,
  OpenSourcePackage,
  SiakaduDemoMessage,
} from './types'

export const OPEN_SOURCE_PACKAGES: OpenSourcePackage[] = [
  {
    id: 'pybmkg',
    name: 'PyBMKG',
    installCommand: 'pip install PyBMKG',
    summary: {
      id: 'Wrapper Python untuk mengambil data prakiraan cuaca dan informasi gempa bumi terkini dari layanan data terbuka BMKG Indonesia.',
      en: 'Python wrapper for fetching real-time weather forecasts and earthquake alerts from Indonesia’s BMKG open data feeds.',
    },
    pypiUrl: 'https://pypi.org/project/PyBMKG/',
    docsUrl: 'https://pybmkg.rtfd.io/',
    githubUrl: 'https://github.com/kiraware/PyBMKG',
    screenshot: 'screenshots/pybmkg-docs.png',
    tags: ['Python', 'BMKG Open Data', 'Read the Docs'],
  },
  {
    id: 'paspybin',
    name: 'paspybin',
    installCommand: 'pip install paspybin',
    summary: {
      id: 'Pustaka klien Python ringan dan terdokumentasi rapi untuk berinteraksi dengan Pastebin API secara terprogram.',
      en: 'Lightweight, well-documented Python client library for programmatic interaction with the Pastebin API.',
    },
    pypiUrl: 'https://pypi.org/project/paspybin/',
    docsUrl: 'https://paspybin.rtfd.io/',
    githubUrl: 'https://github.com/kiraware/paspybin',
    screenshot: 'screenshots/paspybin-docs.png',
    tags: ['Python', 'Pastebin API', 'PyPI'],
  },
  {
    id: 'pycodecov',
    name: 'pycodecov',
    installCommand: 'pip install pycodecov',
    summary: {
      id: 'Wrapper API Python untuk mengakses laporan cakupan pengujian (code coverage) dan statistik repositori dari Codecov.',
      en: 'Python API wrapper for querying repository code-coverage metrics and reports from Codecov.',
    },
    pypiUrl: 'https://pypi.org/project/pycodecov/',
    docsUrl: 'https://pycodecov.rtfd.io/',
    githubUrl: 'https://github.com/kiraware/pycodecov',
    screenshot: 'screenshots/pycodecov-docs.png',
    tags: ['Python', 'Codecov API', 'DevTools'],
  },
]

export const OPEN_SOURCE_HIGHLIGHTS: OpenSourceHighlight[] = [
  {
    id: 'jazzband',
    title: {
      id: 'Anggota Organisasi Jazzband',
      en: 'Jazzband Organization Member',
    },
    role: {
      id: 'Kolektif Pemelihara Paket Python',
      en: 'Collaborative Python Packaging Collective',
    },
    description: {
      id: 'Turut tergabung dalam Jazzband, organisasi GitHub kolaboratif yang memelihara puluhan paket open-source ekosistem Python dan Django secara berkelanjutan.',
      en: 'Member of Jazzband, a collaborative GitHub organization collectively maintaining dozens of widely used Python and Django packages.',
    },
    href: 'https://jazzband.co/',
    linkLabel: { id: 'Pelajari Jazzband', en: 'Explore Jazzband' },
  },
  {
    id: 'awesome-translation',
    title: {
      id: 'Kurator awesome-translation & Lokalisasi ID',
      en: 'Curator of awesome-translation & ID Localization',
    },
    role: {
      id: 'Kontributor Pull Request & Terjemahan',
      en: 'PR & Translation Contributor',
    },
    description: {
      id: 'Mengkurasi direktori awesome-translation berisi daftar proyek open source yang membutuhkan kontributor penerjemah, serta berkontribusi PR dan lokalisasi bahasa Indonesia.',
      en: 'Curates awesome-translation — a directory of open-source repositories welcoming translators — while contributing merged pull requests and Indonesian localizations.',
    },
    href: 'https://github.com/kiraware/awesome-translation',
    linkLabel: { id: 'Lihat awesome-translation', en: 'View awesome-translation' },
  },
]

export const CREATOR_CHANNEL: CreatorChannel = {
  handle: '@PraveInc',
  name: 'PraveInc on YouTube',
  period: {
    id: 'Agu 2024 – Sekarang',
    en: 'Aug 2024 – Present',
  },
  role: {
    id: 'Programming Content Creator',
    en: 'Programming Content Creator',
  },
  summary: {
    id: 'Berbagi tutorial praktis berbahasa Indonesia seputar developer tools, rekayasa web modern, serta panduan deployment aplikasi ke layanan web hosting.',
    en: 'Publishing practical Indonesian-language programming tutorials covering developer tools, modern web engineering, and production web hosting deployment.',
  },
  topics: [
    { id: 'Developer Tools & Produktivitas', en: 'Developer Tools & Workflow' },
    { id: 'Pengembangan Web Full-Stack', en: 'Full-Stack Web Development' },
    { id: 'Deployment & Web Hosting', en: 'Deployment & Web Hosting' },
  ],
  url: 'https://youtube.com/@PraveInc',
}

// Grounded verbatim in real entries from D:\Project\siakadu-bot\project\faq.json
export const SIAKADU_DEMO_MESSAGES: SiakaduDemoMessage[] = [
  {
    id: 'reset-password',
    question: {
      id: 'Kak, aku lupa password Siakadu cara resetnya gimana ya?',
      en: 'How do I reset my forgotten Siakadu portal password?',
    },
    answer: {
      id: "Klik 'Lupa Password' di halaman login Siakadu. Jika tidak berhasil, kirim email ke sarana.pendidikan@kpa.unila.ac.id dengan subject Reset Password Mahasiswa/Dosen dan sertakan scan KTM/KTP.",
      en: "Click 'Lupa Password' on the Siakadu sign-in page. If that does not work, email sarana.pendidikan@kpa.unila.ac.id with subject Reset Password Mahasiswa/Dosen and attach a scan of your student ID (KTM/KTP).",
    },
    similarityScore: '0.94',
    sourceTag: 'faq.json #3 · BGE-M3 + FAISS',
  },
  {
    id: 'sks-limit',
    question: {
      id: 'Jatah SKS aku kok ga sesuai sama IPS semester lalu?',
      en: 'Why does my credit (SKS) quota not match last semester’s GPA?',
    },
    answer: {
      id: 'Hubungi Kaprodi/Kajur untuk hitung ulang transkrip. Aturan SKS: IP ≥ 3.00 → 24 SKS, 2.50–2.99 → 21 SKS, 2.00–2.49 → 18 SKS, 1.50–1.99 → 15 SKS, ≤ 1.49 → 12 SKS.',
      en: 'Contact your Head of Study Program to recalculate your transcript. Rules: GPA ≥ 3.00 → 24 SKS, 2.50–2.99 → 21 SKS, 2.00–2.49 → 18 SKS, 1.50–1.99 → 15 SKS, ≤ 1.49 → 12 SKS.',
    },
    similarityScore: '0.91',
    sourceTag: 'faq.json #17 · BGE-M3 + FAISS',
  },
]
