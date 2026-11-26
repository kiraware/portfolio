import type { ProjectItem } from './types'

export const PROJECTS: ProjectItem[] = [
  {
    id: 'rekrutmen-taspen',
    dossierNumber: 'NO. 01',
    featured: true,
    title: {
      id: 'Portal E-Recruitment PT TASPEN (Persero)',
      en: 'PT TASPEN (Persero) E-Recruitment Portal',
    },
    organization: {
      id: 'PT TASPEN (Persero) · Jakarta',
      en: 'PT TASPEN (Persero) · Jakarta',
    },
    period: {
      id: 'Sep 2026 – Sekarang',
      en: 'Sep 2026 – Present',
    },
    role: {
      id: 'Full-Stack Web Developer (Magang IT Application Support)',
      en: 'Full-Stack Web Developer (IT Application Support Intern)',
    },
    category: 'web',
    summary: {
      id: 'Portal rekrutmen digital resmi berbasis Next.js untuk mengelola informasi lowongan karier, tahapan seleksi, dan pendaftaran kandidat di lingkungan PT TASPEN (Persero).',
      en: 'Next.js digital recruitment portal engineered to publish career openings, streamline candidate applications, and communicate recruitment stages at PT TASPEN (Persero).',
    },
    highlights: [
      {
        id: 'Mengembangkan antarmuka beranda dan katalog lowongan responsif menggunakan Next.js, TypeScript, dan Tailwind CSS.',
        en: 'Developed responsive landing and vacancy catalog interfaces using Next.js, TypeScript, and Tailwind CSS.',
      },
      {
        id: 'Mengintegrasikan basis data PostgreSQL untuk manajemen data lowongan, pencarian kategori, dan alur pelamar.',
        en: 'Integrated PostgreSQL persistence for vacancy management, category filtering, and applicant workflows.',
      },
      {
        id: 'Mendukung pengujian alur kerja aplikasi serta penyusunan dokumentasi teknis di divisi IT Application Support.',
        en: 'Supported workflow testing and technical documentation within the IT Application Support team.',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    statusBadge: {
      id: 'Aplikasi Internal Enterprise · PT TASPEN',
      en: 'Internal Enterprise App · PT TASPEN',
    },
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/rekrutmen-home.png',
        alt: {
          id: 'Halaman utama Portal E-Recruitment PT TASPEN (Persero)',
          en: 'PT TASPEN (Persero) E-Recruitment Portal homepage',
        },
        caption: {
          id: 'Beranda Portal Karier PT TASPEN — hero informasi rekrutmen dan navigasi lowongan',
          en: 'PT TASPEN Career Portal landing page — recruitment overview and vacancy navigation',
        },
      },
      {
        src: 'screenshots/rekrutmen-vacancies.png',
        alt: {
          id: 'Daftar lowongan pekerjaan pada Portal E-Recruitment PT TASPEN',
          en: 'Filtered job vacancy listing on PT TASPEN E-Recruitment Portal',
        },
        caption: {
          id: 'Halaman Katalog Lowongan — pencarian posisi, filter departemen, dan kartu lowongan',
          en: 'Vacancies catalog — role search, department filter, and structured vacancy cards',
        },
      },
    ],
    links: [],
  },
  {
    id: 'pakta-integritas-taspen',
    dossierNumber: 'NO. 02',
    featured: true,
    title: {
      id: 'Sistem Pakta Integritas PT TASPEN (Persero)',
      en: 'PT TASPEN (Persero) Integrity Pact System',
    },
    organization: {
      id: 'PT TASPEN (Persero) · Jakarta',
      en: 'PT TASPEN (Persero) · Jakarta',
    },
    period: {
      id: 'Sep 2026 – Sekarang',
      en: 'Sep 2026 – Present',
    },
    role: {
      id: 'Full-Stack Web Developer (Magang IT Application Support)',
      en: 'Full-Stack Web Developer (IT Application Support Intern)',
    },
    category: 'web',
    summary: {
      id: 'Aplikasi web internal tata kelola kepatuhan karyawan untuk penandatanganan digital dan pemantauan progres Pakta Integritas seluruh unit kerja PT TASPEN secara real-time.',
      en: 'Internal corporate compliance web application enabling digital signing and real-time completion monitoring of employee Integrity Pacts across all PT TASPEN divisions.',
    },
    highlights: [
      {
        id: 'Membangun aplikasi dengan Laravel, Inertia.js, React, dan Tailwind CSS lengkap dengan dashboard pemantauan KPI perusahaan.',
        en: 'Built with Laravel, Inertia.js, React, and Tailwind CSS featuring an enterprise-wide KPI monitoring dashboard.',
      },
      {
        id: 'Menyajikan metrik progres harian, persentase penyelesaian per unit kerja, serta hitungan mundur tenggat periode kepatuhan.',
        en: 'Surfaced daily completion trends, division-level progress analytics, and compliance deadline countdowns.',
      },
      {
        id: 'Merancang alur penandatanganan digital yang ramah audit dengan validasi peran karyawan dan administrator.',
        en: 'Designed audit-ready signing flows with distinct employee and administrator governance roles.',
      },
    ],
    techStack: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'SQL Server'],
    statusBadge: {
      id: 'Aplikasi Internal Enterprise · PT TASPEN',
      en: 'Internal Enterprise App · PT TASPEN',
    },
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/pakta-integritas-monitoring.png',
        alt: {
          id: 'Dashboard pemantauan progres Pakta Integritas PT TASPEN seluruh perusahaan',
          en: 'PT TASPEN Integrity Pact company-wide monitoring dashboard',
        },
        caption: {
          id: 'Dashboard Seluruh Perusahaan — ringkasan 5 KPI utama, tenggat periode, dan grafik tren penyelesaian (data demo sintetis)',
          en: 'Company-wide Monitoring Dashboard — 5 executive KPI cards, deadline countdown, and completion trend chart (synthetic demo data)',
        },
      },
    ],
    links: [],
  },
  {
    id: 'helpdesk-upa-tik-unila',
    dossierNumber: 'NO. 03',
    featured: true,
    title: {
      id: 'Helpdesk UPA TIK Universitas Lampung',
      en: 'UPA TIK Universitas Lampung IT Helpdesk',
    },
    organization: {
      id: 'UPA TIK Universitas Lampung · Skripsi S1',
      en: 'UPA TIK University of Lampung · B.Sc. Thesis',
    },
    period: {
      id: 'Jan – Jul 2026',
      en: 'Jan – Jul 2026',
    },
    role: {
      id: 'Full-Stack Developer',
      en: 'Full-Stack Developer',
    },
    category: 'web',
    summary: {
      id: 'Platform layanan pengaduan dan pelacakan tiket TI resmi untuk mahasiswa, dosen, dan tenaga kependidikan Universitas Lampung yang dikembangkan menggunakan Extreme Programming (XP).',
      en: 'Campus-wide ticket-based IT service desk enabling students, lecturers, and staff at Universitas Lampung to submit, track, and rate IT requests — engineered with Extreme Programming (XP).',
    },
    highlights: [
      {
        id: 'Dibangun end-to-end dengan Laravel 12, PostgreSQL, dan Tailwind CSS dengan antarmuka portal publik serta dashboard teknisi/superuser.',
        en: 'Engineered end-to-end with Laravel 12, PostgreSQL, and Tailwind CSS across both public intake portal and staff dashboard.',
      },
      {
        id: 'Mengimplementasikan penilaian tiket dan survei Indeks Kepuasan Pengguna (CSI) untuk evaluasi mutu layanan TI kampus.',
        en: 'Implemented post-resolution ticket ratings and Customer Satisfaction Index (CSI) surveys to evaluate service quality.',
      },
      {
        id: 'Melakukan pengujian kinerja dan beban konkuren menggunakan Apache JMeter guna memvalidasi kestabilan respons server.',
        en: 'Conducted concurrency performance and load testing with Apache JMeter to verify responsiveness under peak demand.',
      },
    ],
    techStack: ['Laravel 12', 'PostgreSQL', 'Tailwind CSS', 'Apache JMeter', 'XP'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/helpdesk-unila-portal.png',
        alt: {
          id: 'Portal layanan publik Helpdesk UPA TIK Universitas Lampung',
          en: 'Public service portal of UPA TIK Universitas Lampung Helpdesk',
        },
        caption: {
          id: 'Portal Publik Helpdesk UPA TIK — pengajuan tiket layanan TI kampus dan pelacakan status tiket',
          en: 'Public Helpdesk Portal — campus IT ticket submission and live ticket tracking',
        },
      },
      {
        src: 'screenshots/helpdesk-unila-dashboard.png',
        alt: {
          id: 'Dashboard manajemen tiket Superuser Helpdesk UPA TIK Universitas Lampung',
          en: 'Superuser ticket operations dashboard of UPA TIK Universitas Lampung Helpdesk',
        },
        caption: {
          id: 'Dashboard Operasional — ringkasan status tiket, distribusi layanan, dan prioritas penanganan (data demo sintetis)',
          en: 'Operations Dashboard — ticket metrics, service breakdown, and resolution overview (synthetic demo data)',
        },
      },
    ],
    links: [
      {
        label: { id: 'Repositori GitHub', en: 'GitHub Repository' },
        href: 'https://github.com/kiraware/helpdesk-upa-tik-unila',
        kind: 'github',
      },
    ],
  },
  {
    id: 'drive-pesawaran',
    dossierNumber: 'NO. 04',
    featured: true,
    title: {
      id: 'Drive Pesawaran — Cloud Storage Pemkab',
      en: 'Drive Pesawaran — Gov Cloud Storage',
    },
    organization: {
      id: 'Diskominfo, Statistik & Persandian Kab. Pesawaran',
      en: 'Diskominfo Pesawaran Regency Government',
    },
    period: {
      id: 'Sep – Des 2024',
      en: 'Sep – Dec 2024',
    },
    role: {
      id: 'Backend Developer Intern',
      en: 'Backend Developer Intern',
    },
    category: 'web',
    summary: {
      id: 'Aplikasi penyimpanan berkas awan internal bergaya Google Drive bagi perangkat daerah Pemerintah Kabupaten Pesawaran, lengkap dengan manajemen folder, kuota penyimpanan, dan kontrol akses pengguna.',
      en: 'Internal Google Drive–style cloud storage platform for Pesawaran Regency Government offices featuring folder hierarchies, storage quotas, and granular file-sharing permissions.',
    },
    highlights: [
      {
        id: 'Merancang dan membangun arsitektur backend menggunakan Laravel untuk manajemen berkas, struktur folder bersarang, bookmark, dan tempat sampah.',
        en: 'Architected and built Laravel backend modules for file storage, nested folders, bookmarks, and trash recovery.',
      },
      {
        id: 'Mengimplementasikan hak akses berbagi berkas/folder per pengguna serta audit log aktivitas penyimpanan.',
        en: 'Implemented per-user file and folder access permissions alongside comprehensive activity logging.',
      },
      {
        id: 'Berkolaborasi bersama System Architect, UI/UX Designer, Frontend Developer, dan QA Engineer dalam ritme Scrum.',
        en: 'Collaborated cross-functionally with System Architect, UI/UX, Frontend, and QA engineers under Scrum.',
      },
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Scrum'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/drive-pesawaran-folders.png',
        alt: {
          id: 'Antarmuka manajemen folder dan berkas di dalam aplikasi Drive Pesawaran',
          en: 'Authenticated file and folder workspace inside Drive Pesawaran',
        },
        caption: {
          id: 'Ruang Kerja Berkas Saya — hierarki folder OPD, unggah berkas, kuota penyimpanan, dan aksi berbagi (data demo sintetis)',
          en: 'My Files Workspace — agency folders, file uploads, storage quota meter, and sharing controls (synthetic demo data)',
        },
      },
      {
        src: 'screenshots/drive-pesawaran-login.png',
        alt: {
          id: 'Halaman masuk produksi resmi drive.pesawarankab.go.id',
          en: 'Live production sign-in portal at drive.pesawarankab.go.id',
        },
        caption: {
          id: 'Halaman Autentikasi Produksi — tangkapan langsung dari domain resmi drive.pesawarankab.go.id',
          en: 'Production Sign-In Portal — live capture from the official drive.pesawarankab.go.id domain',
        },
      },
    ],
    links: [
      {
        label: { id: 'Domain Produksi', en: 'Live Domain' },
        href: 'https://drive.pesawarankab.go.id/',
        kind: 'live',
      },
    ],
  },
  {
    id: 'evoting-pringsewu',
    dossierNumber: 'NO. 05',
    featured: true,
    title: {
      id: 'Sistem E-Voting Pilkada Pringsewu 2024',
      en: 'Pilkada Pringsewu 2024 E-Voting System',
    },
    organization: {
      id: 'Lembaga Survei Cipta Ilmu · Bandar Lampung',
      en: 'Lembaga Survei Cipta Ilmu · Bandar Lampung',
    },
    period: {
      id: 'Jul – Des 2024',
      en: 'Jul – Dec 2024',
    },
    role: {
      id: 'Backend Developer',
      en: 'Backend Developer',
    },
    category: 'backend',
    summary: {
      id: 'Sistem backend Laravel untuk operasional penghitungan suara, verifikasi Form C1, dan rekapitulasi data TPS pada perhelatan Pilkada Kabupaten Pringsewu 2024.',
      en: 'Laravel backend powering vote tally operations, Form C1 verification, and polling-station (TPS) data management for the 2024 Pringsewu Regency regional election.',
    },
    highlights: [
      {
        id: 'Mengembangkan modul backend manajemen acara Pilkada, wilayah administratif (provinsi hingga kelurahan), kandidat, TPS, dan verifikasi suara sah/tidak sah.',
        en: 'Built backend modules covering election events, administrative regions, candidate slates, polling stations (TPS), and verified vote tallies.',
      },
      {
        id: 'Menyediakan akses berbasis peran (Administrator, Verifikator, Event Manager, Operator TPS) serta dokumentasi Form C1.',
        en: 'Implemented multi-role access control (Administrator, Verifier, Event Manager, TPS Operator) and Form C1 verification.',
      },
      {
        id: 'Bekerja dalam tim Scrum dengan rapat evaluasi mingguan melalui Google Meet untuk memastikan pengiriman fitur tepat waktu.',
        en: 'Delivered milestones on schedule in a Scrum team with weekly Google Meet sprint reviews.',
      },
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Scrum'],
    statusBadge: {
      id: 'Sistem Klien · Lembaga Survei Cipta Ilmu',
      en: 'Client System · Lembaga Survei Cipta Ilmu',
    },
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/evoting-pringsewu.png',
        alt: {
          id: 'Halaman detail perolehan suara TPS pada sistem E-Voting Pilkada Pringsewu 2024',
          en: 'TPS verified vote tally view in Pilkada Pringsewu 2024 E-Voting System',
        },
        caption: {
          id: 'Detail Perolehan Suara TPS — ringkasan lokasi, suara sah/tidak sah, status terverifikasi, dan rekap kandidat (paslon demo fiktif)',
          en: 'Polling Station Vote Tally — location hierarchy, valid/invalid ballot counts, verified status, and fictional demo candidate tallies',
        },
      },
    ],
    links: [],
  },
  {
    id: 'python-pypi-libraries',
    dossierNumber: 'NO. 06',
    featured: true,
    title: {
      id: 'Pustaka Python Async PyPI (PyBMKG, paspybin, pycodecov)',
      en: 'Async Python PyPI Libraries (PyBMKG, paspybin, pycodecov)',
    },
    organization: {
      id: 'Open Source · PyPI & Read the Docs',
      en: 'Open Source · PyPI & Read the Docs',
    },
    period: {
      id: 'Agu 2022 – Sekarang',
      en: 'Aug 2022 – Present',
    },
    role: {
      id: 'Creator & Maintainer',
      en: 'Creator & Maintainer',
    },
    category: 'opensource',
    summary: {
      id: 'Tiga pustaka wrapper API Python modern yang dipublikasikan di PyPI lengkap dengan dokumentasi Read the Docs untuk data cuaca & gempa BMKG, Pastebin API, serta Codecov API.',
      en: 'Three Python API wrapper packages published on PyPI with full Read the Docs documentation covering Indonesia BMKG weather/earthquake telemetry, Pastebin, and Codecov APIs.',
    },
    highlights: [
      {
        id: 'PyBMKG: wrapper Python untuk mengakses data prakiraan cuaca dan informasi gempa bumi real-time dari BMKG Indonesia.',
        en: 'PyBMKG: Python wrapper providing clean access to official Indonesian BMKG weather forecasts and earthquake feeds.',
      },
      {
        id: 'paspybin & pycodecov: antarmuka Python terstruktur untuk otomasi Pastebin dan pemantauan cakupan pengujian Codecov.',
        en: 'paspybin & pycodecov: structured Python clients automating Pastebin operations and Codecov coverage queries.',
      },
      {
        id: 'Dilengkapi dokumentasi MkDocs Material otomatis di Read the Docs dan alur rilis paket PyPI yang konsisten.',
        en: 'Backed by automated MkDocs Material documentation on Read the Docs and clean PyPI release workflows.',
      },
    ],
    techStack: ['Python', 'Async HTTP', 'REST API', 'PyPI', 'Read the Docs'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/pybmkg-docs.png',
        alt: {
          id: 'Dokumentasi live Read the Docs pustaka PyBMKG',
          en: 'Live Read the Docs documentation site for PyBMKG',
        },
        caption: {
          id: 'PyBMKG Docs (pybmkg.rtfd.io) — panduan instalasi dan referensi API BMKG',
          en: 'PyBMKG Docs (pybmkg.rtfd.io) — installation guide and BMKG API reference',
        },
      },
      {
        src: 'screenshots/paspybin-docs.png',
        alt: {
          id: 'Dokumentasi live Read the Docs pustaka paspybin',
          en: 'Live Read the Docs documentation site for paspybin',
        },
        caption: {
          id: 'paspybin Docs (paspybin.rtfd.io) — dokumentasi klien Python Pastebin API',
          en: 'paspybin Docs (paspybin.rtfd.io) — Python Pastebin API client documentation',
        },
      },
      {
        src: 'screenshots/pycodecov-docs.png',
        alt: {
          id: 'Dokumentasi live Read the Docs pustaka pycodecov',
          en: 'Live Read the Docs documentation site for pycodecov',
        },
        caption: {
          id: 'pycodecov Docs (pycodecov.rtfd.io) — dokumentasi klien Python Codecov API',
          en: 'pycodecov Docs (pycodecov.rtfd.io) — Python Codecov API client documentation',
        },
      },
    ],
    links: [
      {
        label: { id: 'Profil PyPI', en: 'PyPI Profile' },
        href: 'https://pypi.org/user/kiraware',
        kind: 'pypi',
      },
      {
        label: { id: 'Docs PyBMKG', en: 'PyBMKG Docs' },
        href: 'https://pybmkg.rtfd.io/',
        kind: 'docs',
      },
      {
        label: { id: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/kiraware',
        kind: 'github',
      },
    ],
  },
  {
    id: 'siakadu-bot',
    dossierNumber: 'NO. 07',
    title: {
      id: 'siakadu-bot — Chatbot FAQ Semantik Telegram',
      en: 'siakadu-bot — Semantic Search Telegram FAQ Bot',
    },
    organization: {
      id: 'Open Source · Mahasiswa Universitas Lampung',
      en: 'Open Source · University of Lampung Students',
    },
    period: {
      id: '2025 – Sekarang',
      en: '2025 – Present',
    },
    role: {
      id: 'Creator & AI/Backend Developer',
      en: 'Creator & AI/Backend Developer',
    },
    category: 'opensource',
    summary: {
      id: 'Bot Telegram penjawab pertanyaan seputar Sistem Informasi Akademik Terpadu (Siakadu) Universitas Lampung berbasis pencarian semantik vektor menggunakan embedding BGE-M3 dan indeks FAISS.',
      en: 'Telegram chatbot answering Universitas Lampung academic portal (Siakadu) student questions via dense semantic retrieval powered by BGE-M3 multilingual embeddings and FAISS.',
    },
    highlights: [
      {
        id: 'Mengindeks kumpulan FAQ resmi Siakadu Unila (reset sandi, KRS, status cekal UKT, transkrip nilai) ke dalam vektor BGE-M3 + FAISS.',
        en: 'Indexed official Siakadu Unila student FAQs (password reset, course registration, billing holds, transcripts) using BGE-M3 + FAISS.',
      },
      {
        id: 'Memahami pertanyaan mahasiswa dalam bahasa Indonesia sehari-hari tanpa bergantung pada kecocokan kata kunci persis.',
        en: 'Understands natural everyday Indonesian student queries beyond exact keyword matching.',
      },
      {
        id: 'Tersedia terbuka di GitHub dan dapat langsung diakses mahasiswa melalui bot Telegram @siakadu_bot.',
        en: 'Published openly on GitHub and directly accessible to students via Telegram @siakadu_bot.',
      },
    ],
    techStack: ['Python', 'BGE-M3', 'FAISS', 'Telegram Bot API', 'Semantic Search'],
    previewKind: 'siakadu-telegram',
    screenshots: [],
    links: [
      {
        label: { id: 'Repositori GitHub', en: 'GitHub Repository' },
        href: 'https://github.com/kiraware/siakadu-bot',
        kind: 'github',
      },
      {
        label: { id: 'Buka @siakadu_bot', en: 'Open @siakadu_bot' },
        href: 'https://t.me/siakadu_bot',
        kind: 'telegram',
      },
    ],
  },
  {
    id: 'smpn13-bandarlampung',
    dossierNumber: 'NO. 08',
    title: {
      id: 'Website Profil SMPN 13 Bandar Lampung',
      en: 'SMPN 13 Bandar Lampung School Portal',
    },
    organization: {
      id: 'SMPN 13 Bandar Lampung',
      en: 'SMPN 13 Bandar Lampung',
    },
    period: {
      id: 'Jul 2025',
      en: 'Jul 2025',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    category: 'web',
    summary: {
      id: 'Website profil sekolah dinamis berbasis Laravel untuk menampilkan profil instansi, berita kegiatan sekolah, informasi PPDB, dan galeri resmi pada domain smpn13-bdl.sch.id.',
      en: 'Dynamic Laravel school profile portal presenting school identity, announcements, admissions info, and galleries deployed to the official smpn13-bdl.sch.id domain.',
    },
    highlights: [
      {
        id: 'Membangun sistem manajemen konten profil sekolah dinamis menggunakan Laravel dan basis data relasional.',
        en: 'Built a dynamic school profile content management system with Laravel and relational storage.',
      },
      {
        id: 'Menangani konfigurasi produksi dan deployment ke shared hosting Niagahoster pada domain resmi .sch.id.',
        en: 'Handled production configuration and deployment to Niagahoster shared hosting on the official .sch.id domain.',
      },
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Niagahoster'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/smpn13-bandarlampung.png',
        alt: {
          id: 'Tangkapan arsip Wayback Machine website SMPN 13 Bandar Lampung',
          en: 'Wayback Machine capture of SMPN 13 Bandar Lampung official website',
        },
        caption: {
          id: 'Arsip Live smpn13-bdl.sch.id — halaman utama profil sekolah (Wayback Machine Nov 2025)',
          en: 'Archived live capture of smpn13-bdl.sch.id — school profile landing page (Wayback Machine Nov 2025)',
        },
      },
    ],
    links: [
      {
        label: { id: 'Arsip Wayback Machine', en: 'Wayback Archive' },
        href: 'https://web.archive.org/web/20251104234357/https://smpn13-bdl.sch.id/',
        kind: 'archive',
      },
    ],
  },
  {
    id: 'css-himakom-unila',
    dossierNumber: 'NO. 09',
    title: {
      id: 'Computer Science Showdown (CSS) — HIMAKOM Unila',
      en: 'Computer Science Showdown (CSS) — HIMAKOM Unila',
    },
    organization: {
      id: 'HIMAKOM Universitas Lampung',
      en: 'HIMAKOM University of Lampung',
    },
    period: {
      id: 'Jul – Okt 2024',
      en: 'Jul – Oct 2024',
    },
    role: {
      id: 'Full-Stack Web Developer',
      en: 'Full-Stack Web Developer',
    },
    category: 'web',
    summary: {
      id: 'Platform web kompetisi tahunan terintegrasi milik Himpunan Mahasiswa Ilmu Komputer (HIMAKOM) Universitas Lampung untuk pendaftaran peserta daring, informasi cabang lomba, dan publikasi pemenang.',
      en: 'Integrated annual competition platform for HIMAKOM Universitas Lampung supporting online participant registration, competition brackets & rules, announcements, and winner publication.',
    },
    highlights: [
      {
        id: 'Mengembangkan modul frontend dan backend meliputi landing page acara, pendaftaran peserta daring, serta pengelolaan kategori lomba.',
        en: 'Engineered full-stack modules covering event landing pages, online participant registration, and competition categories.',
      },
      {
        id: 'Menyediakan kanal publikasi pengumuman dan daftar pemenang secara responsif untuk peserta tingkat pelajar dan mahasiswa.',
        en: 'Delivered responsive announcement and winner publication views across desktop and mobile devices.',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/css-himakom-home.png',
        alt: {
          id: 'Halaman utama website Computer Science Showdown 2024 HIMAKOM Unila',
          en: 'Homepage of Computer Science Showdown 2024 HIMAKOM Unila',
        },
        caption: {
          id: 'Landing Page Computer Science Showdown 2024 — identitas acara, navigasi cabang lomba, dan portal peserta',
          en: 'Computer Science Showdown 2024 landing page — event branding, competition navigation, and participant portal',
        },
      },
      {
        src: 'screenshots/css-himakom-cpc.png',
        alt: {
          id: 'Halaman detail lomba National Competitive Programming Competition di website CSS HIMAKOM Unila',
          en: 'National Competitive Programming Competition detail page on CSS HIMAKOM Unila website',
        },
        caption: {
          id: 'Halaman Cabang Lomba CPC — deskripsi kompetisi, ketentuan umum, dan informasi pendaftaran peserta',
          en: 'Competitive Programming Competition track — event description, rules, and registration info',
        },
      },
    ],
    links: [
      {
        label: { id: 'Repositori GitHub', en: 'GitHub Repository' },
        href: 'https://github.com/vexra/css',
        kind: 'github',
      },
    ],
  },
  {
    id: 'satujua-studio',
    dossierNumber: 'NO. 10',
    title: {
      id: 'Company Profile Satu Jua Studio',
      en: 'Satu Jua Studio Company Profile',
    },
    organization: {
      id: 'Satu Jua Studio · Bandar Lampung',
      en: 'Satu Jua Studio · Bandar Lampung',
    },
    period: {
      id: 'Sep – Okt 2023',
      en: 'Sep – Oct 2023',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    category: 'web',
    summary: {
      id: 'Website profil perusahaan statis modern untuk studio arsitektur dan desain Satu Jua Studio menggunakan Next.js, menampilkan portofolio karya dan identitas visual studio.',
      en: 'Modern static company profile website built with Next.js for architecture & design studio Satu Jua Studio, presenting studio storytelling and project portfolios.',
    },
    highlights: [
      {
        id: 'Membangun antarmuka frontend statis berkinerja cepat menggunakan Next.js dan tata letak editorial responsif.',
        en: 'Built a fast static frontend with Next.js and responsive editorial layouts.',
      },
      {
        id: 'Mengoptimalkan pemuatan aset portofolio arsitektur serta keterbacaan di perangkat mobile dan desktop.',
        en: 'Optimized portfolio imagery presentation and readability across mobile and desktop screens.',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/satujua-studio-home.png',
        alt: {
          id: 'Halaman utama website company profile Satu Jua Studio',
          en: 'Homepage of Satu Jua Studio company profile website',
        },
        caption: {
          id: 'Beranda Satu Jua Studio — hero arsitektur "Designing Dream · Building Stories" dan navigasi layanan studio',
          en: 'Satu Jua Studio landing page — "Designing Dream · Building Stories" architecture hero and studio navigation',
        },
      },
    ],
    links: [
      {
        label: { id: 'Arsip Wayback Machine', en: 'Wayback Archive' },
        href: 'https://web.archive.org/web/20241005141450/https://satujuastudio.com/',
        kind: 'archive',
      },
    ],
  },
  {
    id: 'kayla-multi-interior',
    dossierNumber: 'NO. 11',
    title: {
      id: 'Company Profile Kayla Multi Interior',
      en: 'Kayla Multi Interior Company Profile',
    },
    organization: {
      id: 'Kayla Multi Interior · Bandar Lampung',
      en: 'Kayla Multi Interior · Bandar Lampung',
    },
    period: {
      id: 'Agu – Sep 2023',
      en: 'Aug – Sep 2023',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    category: 'web',
    summary: {
      id: 'Website profil perusahaan statis berbasis Next.js untuk jasa desain dan pengerjaan interior Rumah, Kantor, dan Hotel milik Kayla Multi Interior.',
      en: 'Static Next.js company profile website for interior design and build studio Kayla Multi Interior covering Residential, Office, and Hospitality projects.',
    },
    highlights: [
      {
        id: 'Mengembangkan halaman profil layanan desain interior (Rumah, Kantor, Hotel) menggunakan Next.js, Tailwind CSS, dan Framer Motion.',
        en: 'Built company showcase pages highlighting Residential, Office, and Hotel interior services with Next.js, Tailwind CSS, and Framer Motion.',
      },
      {
        id: 'Menyusun navigasi layanan, katalog material, galeri proyek interior, dan kanal konsultasi WhatsApp klien secara responsif.',
        en: 'Structured service navigation, material catalogs, project showcases, and responsive WhatsApp inquiry flows.',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    previewKind: 'screenshots',
    screenshots: [
      {
        src: 'screenshots/kayla-multi-interior-home.png',
        alt: {
          id: 'Halaman utama website company profile Kayla Multi Interior',
          en: 'Homepage of Kayla Multi Interior company profile website',
        },
        caption: {
          id: 'Beranda Kayla Multi Interior — identitas merek, kategori Rumah/Kantor/Hotel, dan hero desain interior',
          en: 'Kayla Multi Interior homepage — brand identity, Residential/Office/Hotel categories, and interior hero showcase',
        },
      },
      {
        src: 'screenshots/kayla-multi-interior-projects.png',
        alt: {
          id: 'Halaman galeri proyek interior pada website Kayla Multi Interior',
          en: 'Interior projects showcase page on Kayla Multi Interior website',
        },
        caption: {
          id: 'Halaman Proyek — dokumentasi portofolio pengerjaan desain interior klien dan testimoni',
          en: 'Projects gallery — completed client interior design case studies and testimonials',
        },
      },
    ],
    links: [
      {
        label: { id: 'Arsip Wayback Machine', en: 'Wayback Archive' },
        href: 'https://web.archive.org/web/20250313175704/https://kaylamultiinterior.com/',
        kind: 'archive',
      },
    ],
  },
]
