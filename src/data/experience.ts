import type { ExperienceItem } from './types'

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'taspen-intern',
    stampCode: '2026 · JKT',
    organization: {
      id: 'PT TASPEN (Persero)',
      en: 'PT TASPEN (Persero)',
    },
    role: {
      id: 'IT Application Support Intern',
      en: 'IT Application Support Intern',
    },
    location: {
      id: 'Jakarta, Indonesia',
      en: 'Jakarta, Indonesia',
    },
    period: {
      id: 'Sep 2026 – Sekarang',
      en: 'Sep 2026 – Present',
    },
    category: 'work',
    tag: { id: 'Magang Enterprise', en: 'Enterprise Internship' },
    bullets: [
      {
        id: 'Mengembangkan aplikasi web internal Pakta Integritas menggunakan Laravel dan Tailwind CSS.',
        en: 'Developed the internal Pakta Integritas compliance web application using Laravel and Tailwind CSS.',
      },
      {
        id: 'Mengembangkan portal web E-Recruitment menggunakan Next.js.',
        en: 'Developed the E-Recruitment web portal using Next.js.',
      },
      {
        id: 'Menyusun petunjuk teknis (juknis) penggunaan aplikasi web ICoFR serta membantu pengujian alur kerja dan dukungan operasional aplikasi TI.',
        en: 'Authored technical user manuals (juknis) for the ICoFR web application and supported workflow testing and IT operations.',
      },
    ],
    techStack: ['Laravel', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'bps-se2026',
    stampCode: '2026 · BDL',
    organization: {
      id: 'Badan Pusat Statistik (BPS) Kota Bandar Lampung',
      en: 'Statistics Indonesia (BPS) — Bandar Lampung',
    },
    role: {
      id: 'Petugas Sensus Ekonomi (SE2026)',
      en: 'Economic Census Officer (SE2026)',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Jul – Sep 2026',
      en: 'Jul – Sep 2026',
    },
    category: 'work',
    tag: { id: 'Pendataan Lapangan', en: 'Field Data Operations' },
    bullets: [
      {
        id: 'Melakukan wawancara langsung ke rumah tangga dan pelaku usaha untuk Sensus Ekonomi 2026 (SE2026).',
        en: 'Conducted door-to-door interviews with residents and business owners for the 2026 Economic Census (SE2026).',
      },
      {
        id: 'Menginput dan memverifikasi hasil pendataan ke dalam aplikasi resmi FASIH BPS secara teliti.',
        en: 'Entered and verified field interview records inside BPS’s official FASIH data collection application.',
      },
    ],
  },
  {
    id: 'upa-tik-unila',
    stampCode: '2026 · UNILA',
    organization: {
      id: 'UPA TIK Universitas Lampung',
      en: 'UPA TIK — University of Lampung',
    },
    role: {
      id: 'Full-Stack Developer (Skripsi S1)',
      en: 'Full-Stack Developer (B.Sc. Thesis)',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Jan – Jul 2026',
      en: 'Jan – Jul 2026',
    },
    category: 'work',
    tag: { id: 'Full-Stack · XP', en: 'Full-Stack · XP' },
    bullets: [
      {
        id: 'Membangun sistem Helpdesk TI berbasis tiket menggunakan Laravel 12, PostgreSQL, dan Tailwind CSS untuk mahasiswa, dosen, dan tendik Unila.',
        en: 'Built a ticket-based IT Helpdesk platform using Laravel 12, PostgreSQL, and Tailwind CSS for students, lecturers, and staff.',
      },
      {
        id: 'Mengimplementasikan fitur penilaian tiket dan survei kepuasan pengguna (CSI) serta pengujian beban konkuren dengan Apache JMeter.',
        en: 'Implemented ticket ratings, user satisfaction surveys (CSI), and concurrent load testing with Apache JMeter.',
      },
      {
        id: 'Menerapkan Extreme Programming (XP) melalui iterasi pendek dan umpan balik pemangku kepentingan secara berkelanjutan.',
        en: 'Applied Extreme Programming (XP) with short iterations and continuous stakeholder feedback.',
      },
    ],
    techStack: ['Laravel 12', 'PostgreSQL', 'Tailwind CSS', 'Apache JMeter'],
  },
  {
    id: 'smpn13-bdl',
    stampCode: '2025 · BDL',
    organization: {
      id: 'SMPN 13 Bandar Lampung',
      en: 'SMPN 13 Bandar Lampung',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Jul 2025',
      en: 'Jul 2025',
    },
    category: 'work',
    tag: { id: 'Proyek Web', en: 'Web Project' },
    bullets: [
      {
        id: 'Membangun website profil sekolah dinamis menggunakan Laravel.',
        en: 'Built a dynamic school profile website using Laravel.',
      },
      {
        id: 'Men-deploy aplikasi ke shared hosting Niagahoster pada domain resmi smpn13-bdl.sch.id.',
        en: 'Deployed the application to Niagahoster shared hosting on the official smpn13-bdl.sch.id domain.',
      },
    ],
    techStack: ['Laravel', 'MySQL', 'Niagahoster'],
  },
  {
    id: 'ta-pemweb-2025',
    stampCode: '2025 · TA',
    organization: {
      id: 'Jurusan Ilmu Komputer FMIPA Universitas Lampung',
      en: 'Dept. of Computer Science, University of Lampung',
    },
    role: {
      id: 'Asisten Dosen — Pemrograman Web',
      en: 'Teaching Assistant — Web Programming',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Feb – Jun 2025',
      en: 'Feb – Jun 2025',
    },
    category: 'teaching',
    tag: { id: 'Asisten Dosen', en: 'Teaching Assistant' },
    bullets: [
      {
        id: 'Membimbing praktikum mahasiswa Ilmu Komputer angkatan 2023 pada materi HTML, CSS, Tailwind CSS, dan aplikasi CRUD PHP + basis data.',
        en: 'Mentored Class of 2023 Computer Science undergraduates on HTML, CSS, Tailwind CSS, and PHP + database CRUD applications.',
      },
      {
        id: 'Melakukan penilaian tugas praktikum, kuis, Ujian Tengah Praktikum (UTP), dan Ujian Akhir Praktikum (UAP).',
        en: 'Graded lab assignments, quizzes, mid-term (UTP), and final (UAP) practical exams.',
      },
    ],
    techStack: ['HTML', 'CSS', 'Tailwind CSS', 'PHP', 'MySQL'],
  },
  {
    id: 'diskominfo-pesawaran',
    stampCode: '2024 · PSW',
    organization: {
      id: 'Diskominfo, Statistik & Persandian Kabupaten Pesawaran',
      en: 'Diskominfo Pesawaran Regency Government',
    },
    role: {
      id: 'Backend Developer Intern',
      en: 'Backend Developer Intern',
    },
    location: {
      id: 'Pesawaran, Indonesia',
      en: 'Pesawaran, Indonesia',
    },
    period: {
      id: 'Sep – Des 2024',
      en: 'Sep – Dec 2024',
    },
    category: 'work',
    tag: { id: 'Magang MSIB · Scrum', en: 'Internship · Scrum' },
    bullets: [
      {
        id: 'Membangun backend aplikasi cloud storage bergaya Google Drive untuk Pemkab Pesawaran menggunakan Laravel (drive.pesawarankab.go.id).',
        en: 'Built the Laravel backend of a Google Drive–like web cloud storage platform for Pesawaran Regency Government (drive.pesawarankab.go.id).',
      },
      {
        id: 'Mengimplementasikan manajemen berkas/folder dan kontrol hak akses pengguna bersama tim lintas peran (System Architect, UI/UX, Frontend, QA) dengan Scrum.',
        en: 'Implemented file/folder management and user access controls alongside System Architect, UI/UX, Frontend, and QA peers under Scrum.',
      },
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Scrum'],
  },
  {
    id: 'youtube-praveinc',
    stampCode: '2024 · YT',
    organization: {
      id: 'YouTube — PraveInc',
      en: 'YouTube — PraveInc',
    },
    role: {
      id: 'Programming Content Creator',
      en: 'Programming Content Creator',
    },
    location: {
      id: 'Remote, Indonesia',
      en: 'Remote, Indonesia',
    },
    period: {
      id: 'Agu 2024 – Sekarang',
      en: 'Aug 2024 – Present',
    },
    category: 'teaching',
    tag: { id: 'Kreator Edukasi', en: 'Tech Educator' },
    bullets: [
      {
        id: 'Memproduksi video tutorial pemrograman yang membahas developer tools, pengembangan web, dan deployment web hosting di youtube.com/@PraveInc.',
        en: 'Produces programming video tutorials covering developer tools, web development, and web hosting deployment at youtube.com/@PraveInc.',
      },
    ],
  },
  {
    id: 'lsci-evoting',
    stampCode: '2024 · BDL',
    organization: {
      id: 'Lembaga Survei Cipta Ilmu',
      en: 'Lembaga Survei Cipta Ilmu',
    },
    role: {
      id: 'Backend Developer',
      en: 'Backend Developer',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Jul – Des 2024',
      en: 'Jul – Dec 2024',
    },
    category: 'work',
    tag: { id: 'Backend · Scrum', en: 'Backend · Scrum' },
    bullets: [
      {
        id: 'Mengembangkan backend Laravel untuk sistem web E-Voting Pilkada Pringsewu 2024 guna mendukung operasional penghitungan dan manajemen data suara.',
        en: 'Developed the Laravel backend for the Pilkada Pringsewu 2024 E-Voting web system supporting voting operations and tally management.',
      },
      {
        id: 'Berkolaborasi dalam tim Scrum dengan evaluasi progres mingguan via Google Meet dan pengiriman fitur sesuai jadwal.',
        en: 'Collaborated in a Scrum team with weekly Google Meet progress reviews and on-schedule feature delivery.',
      },
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Scrum'],
  },
  {
    id: 'himakom-css',
    stampCode: '2024 · CSS',
    organization: {
      id: 'HIMAKOM Universitas Lampung',
      en: 'HIMAKOM — University of Lampung',
    },
    role: {
      id: 'Full-Stack Web Developer — Computer Science Showdown (CSS)',
      en: 'Full-Stack Web Developer — Computer Science Showdown (CSS)',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Jul – Okt 2024',
      en: 'Jul – Oct 2024',
    },
    category: 'teaching',
    tag: { id: 'Organisasi Kampus', en: 'Campus Community' },
    bullets: [
      {
        id: 'Membangun website kompetisi tahunan Computer Science Showdown (CSS) HIMAKOM Unila secara terintegrasi.',
        en: 'Built the integrated competition website for HIMAKOM Unila’s annual Computer Science Showdown (CSS).',
      },
      {
        id: 'Mengembangkan modul frontend dan backend: landing page acara, pendaftaran daring, kategori & aturan lomba, publikasi pemenang, serta pengumuman responsif.',
        en: 'Developed frontend and backend modules: event landing page, online participant registration, competition categories & rules, winner publications, and responsive announcements.',
      },
    ],
  },
  {
    id: 'freelance-2024',
    stampCode: '2024 · REM',
    organization: {
      id: 'Proyek Lepas (Freelance)',
      en: 'Freelance Engineering',
    },
    role: {
      id: 'Web Developer & Web API Developer',
      en: 'Web Developer & Web API Developer',
    },
    location: {
      id: 'Bandar Lampung / Remote',
      en: 'Bandar Lampung / Remote',
    },
    period: {
      id: 'Mar – Apr 2024',
      en: 'Mar – Apr 2024',
    },
    category: 'work',
    tag: { id: 'Freelance · API', en: 'Freelance · API' },
    bullets: [
      {
        id: 'Membangun website portofolio pribadi statis menggunakan HTML dan Tailwind CSS (Apr 2024).',
        en: 'Built a static personal portfolio website using HTML and Tailwind CSS (Apr 2024).',
      },
      {
        id: 'Membangun REST API dengan FastAPI untuk melayani distribusi berkas yang tersimpan di server klien (Mar – Apr 2024).',
        en: 'Built a FastAPI REST API serving files hosted on a client’s server (Mar – Apr 2024).',
      },
    ],
    techStack: ['FastAPI', 'Python', 'HTML', 'Tailwind CSS'],
  },
  {
    id: 'ta-petruk-2024',
    stampCode: '2024 · TA',
    organization: {
      id: 'Jurusan Ilmu Komputer FMIPA Universitas Lampung',
      en: 'Dept. of Computer Science, University of Lampung',
    },
    role: {
      id: 'Asisten Dosen — Pemrograman Terstruktur',
      en: 'Teaching Assistant — Structured Programming',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Feb – Jun 2024',
      en: 'Feb – Jun 2024',
    },
    category: 'teaching',
    tag: { id: 'Asisten Dosen', en: 'Teaching Assistant' },
    bullets: [
      {
        id: 'Membimbing mahasiswa Ilmu Komputer angkatan 2023 dalam pemrograman C++: array, pointer, fungsi, dan class/OOP.',
        en: 'Mentored Class of 2023 CS undergraduates in C++ covering arrays, pointers, functions, and classes/OOP.',
      },
      {
        id: 'Menilai tugas praktikum, kuis, UTP, dan UAP.',
        en: 'Graded assignments, quizzes, mid-term (UTP), and final (UAP) lab exams.',
      },
    ],
    techStack: ['C++', 'OOP'],
  },
  {
    id: 'satujua-work',
    stampCode: '2023 · BDL',
    organization: {
      id: 'Satu Jua Studio',
      en: 'Satu Jua Studio',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Sep – Okt 2023',
      en: 'Sep – Oct 2023',
    },
    category: 'work',
    tag: { id: 'Frontend', en: 'Frontend' },
    bullets: [
      {
        id: 'Membangun website company profile frontend statis menggunakan Next.js (satujuastudio.com).',
        en: 'Built a static frontend company profile website using Next.js (satujuastudio.com).',
      },
    ],
    techStack: ['Next.js', 'React'],
  },
  {
    id: 'ta-ddp-2023',
    stampCode: '2023 · TA',
    organization: {
      id: 'Jurusan Ilmu Komputer FMIPA Universitas Lampung',
      en: 'Dept. of Computer Science, University of Lampung',
    },
    role: {
      id: 'Asisten Dosen — Dasar-Dasar Pemrograman',
      en: 'Teaching Assistant — Programming Fundamentals',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Agu – Des 2023',
      en: 'Aug – Dec 2023',
    },
    category: 'teaching',
    tag: { id: 'Asisten Dosen', en: 'Teaching Assistant' },
    bullets: [
      {
        id: 'Membimbing mahasiswa Ilmu Komputer angkatan 2023 pada dasar C++: I/O, tipe data, aritmetika & logika, array, serta file I/O.',
        en: 'Mentored Class of 2023 CS undergraduates in C++ fundamentals: I/O, data types, arithmetic & logic, arrays, and file I/O.',
      },
      {
        id: 'Menilai tugas praktikum, kuis, UTP, dan UAP.',
        en: 'Graded assignments, quizzes, mid-term (UTP), and final (UAP) lab exams.',
      },
    ],
    techStack: ['C++'],
  },
  {
    id: 'kayla-work',
    stampCode: '2023 · BDL',
    organization: {
      id: 'Kayla Multi Interior',
      en: 'Kayla Multi Interior',
    },
    role: {
      id: 'Web Developer',
      en: 'Web Developer',
    },
    location: {
      id: 'Bandar Lampung, Indonesia',
      en: 'Bandar Lampung, Indonesia',
    },
    period: {
      id: 'Agu – Sep 2023',
      en: 'Aug – Sep 2023',
    },
    category: 'work',
    tag: { id: 'Frontend', en: 'Frontend' },
    bullets: [
      {
        id: 'Membangun website company profile frontend statis menggunakan Next.js (kaylamultiinterior.com).',
        en: 'Built a static frontend company profile website using Next.js (kaylamultiinterior.com).',
      },
    ],
    techStack: ['Next.js', 'React'],
  },
  {
    id: 'github-oss',
    stampCode: '2022 · OSS',
    organization: {
      id: 'GitHub — Komunitas Open Source',
      en: 'GitHub — Open Source Ecosystem',
    },
    role: {
      id: 'Open Source Contributor & Maintainer',
      en: 'Open Source Contributor & Maintainer',
    },
    location: {
      id: 'Remote, Indonesia',
      en: 'Remote, Indonesia',
    },
    period: {
      id: 'Agu 2022 – Sekarang',
      en: 'Aug 2022 – Present',
    },
    category: 'teaching',
    tag: { id: 'Open Source', en: 'Open Source' },
    bullets: [
      {
        id: 'Anggota organisasi GitHub Jazzband, komunitas kolaboratif pemelihara paket open-source Python.',
        en: 'Member of the Jazzband GitHub organization, a collaborative community maintaining open-source Python packages.',
      },
      {
        id: 'Membangun dan memelihara pustaka Python PyPI (PyBMKG, paspybin, pycodecov) serta chatbot FAQ Telegram siakadu-bot (BGE-M3 + FAISS).',
        en: 'Built and maintains PyPI Python wrappers (PyBMKG, paspybin, pycodecov) and the siakadu-bot semantic Telegram FAQ bot (BGE-M3 + FAISS).',
      },
      {
        id: 'Berkontribusi pull request & terjemahan bahasa Indonesia ke proyek open source serta mengkurasi direktori awesome-translation.',
        en: 'Contributes merged pull requests and Indonesian translations to open-source projects and curates awesome-translation.',
      },
    ],
    techStack: ['Python', 'PyPI', 'Jazzband', 'BGE-M3', 'FAISS'],
  },
]
