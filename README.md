<div align="center">

# Cakrawangsa Praba Alkautsar — Portfolio

**Full-Stack & Backend Developer** · Bandar Lampung & Jakarta, Indonesia

[![Live Portfolio](https://img.shields.io/badge/Live%20Site-kiraware.github.io%2Fportfolio-146C5E?style=for-the-badge&logo=githubpages&logoColor=white)](https://kiraware.github.io/portfolio/)
[![Deploy to GitHub Pages](https://github.com/kiraware/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/kiraware/portfolio/actions/workflows/deploy.yml)
[![React 19](https://img.shields.io/badge/React-19-1E3A63?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-1E3A63?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-146C5E?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-Vitest%20%2B%20RTL-8F6522?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)

[Live Demo](https://kiraware.github.io/portfolio/) · [GitHub](https://github.com/kiraware) · [LinkedIn](https://linkedin.com/in/cakrawangsa-praba-alkautsar) · [PyPI](https://pypi.org/user/kiraware) · [YouTube @PraveInc](https://youtube.com/@PraveInc)

</div>

---

## Overview

Personal developer portfolio showcasing enterprise applications, government & campus web systems, backend APIs, open-source Python packages, and teaching experience.

### Highlights

- **Bilingual (`ID` / `EN`)** — Defaults to Bahasa Indonesia with instant switching, shareable `?lang=id|en` URL synchronization, `<html lang>` updates, and `localStorage` persistence.
- **Dual Light & Dark Themes** — Follows OS system preference automatically without flash of unstyled content (FOUC), using native `<meta name="color-scheme">`, CSS `light-dark()` with fallbacks, cross-tab sync, and seamless day/night scenic backdrops.
- **Screenshot-First Case Studies** — Authentic `1280×800` captures across shipped projects inside a native `<dialog closedby="any">` gallery lightbox (with Safari light-dismiss fallback), plus an interactive Telegram chat preview for `siakadu-bot`.
- **Responsive & Accessible** — Mobile-first breakpoints (`375px` to `1440px+`), full-height native `<dialog>` scroll-snap mobile navigation drawer, keyboard focus indicators, WCAG AA contrast, `prefers-reduced-motion` support, and a Pause/Play control for ambient floating motion.
- **Automated Quality & Deployment** — Unit and integration test suite (`Vitest` + `React Testing Library`), `oxlint` zero-warning linting, strict TypeScript (`tsc -b`), and automated GitHub Actions deployment to GitHub Pages.

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| **Framework & Language** | React 19, TypeScript, Vite 8 |
| **Styling & Motion** | Tailwind CSS v4 (`@tailwindcss/vite`), Framer Motion, Lucide React |
| **Typography** | Cormorant Garamond, Plus Jakarta Sans, JetBrains Mono |
| **Testing & Linting** | Vitest, React Testing Library, jsdom, Oxlint |
| **CI/CD & Hosting** | GitHub Actions, GitHub Pages (`base: '/portfolio/'`) |

---

## Featured Projects in This Portfolio

1. **PT TASPEN (Persero) E-Recruitment Portal** — Next.js, TypeScript, Tailwind CSS, PostgreSQL
2. **PT TASPEN (Persero) Integrity Pact System** — Laravel, React, Inertia.js, Tailwind CSS, SQL Server
3. **UPA TIK Universitas Lampung IT Helpdesk** *(B.Sc. Thesis)* — Laravel 12, PostgreSQL, Tailwind CSS, Apache JMeter
4. **Drive Pesawaran** — Laravel cloud storage for Pesawaran Regency Government (`drive.pesawarankab.go.id`)
5. **Pilkada Pringsewu 2024 E-Voting System** — Laravel backend for vote tallying and Form C1 verification
6. **Async Python PyPI Libraries** — `PyBMKG`, `paspybin`, `pycodecov` with Read the Docs documentation
7. **siakadu-bot** — Semantic search Telegram FAQ chatbot (BGE-M3 + FAISS)
8. **SMPN 13 Bandar Lampung Portal** — Dynamic Laravel school website (`smpn13-bdl.sch.id`)
9. **Computer Science Showdown (CSS) — HIMAKOM Unila** — Next.js 14, Prisma, Tailwind CSS
10. **Satu Jua Studio** — Static Next.js company profile (`satujuastudio.com`)
11. **Kayla Multi Interior** — Static Next.js company profile (`kaylamultiinterior.com`)

---

## Project Structure

```text
portfolio/
├── .github/workflows/deploy.yml   # Automated GitHub Pages build & deploy
├── public/
│   ├── art/                       # Custom watermark-free illustrations & day/night backdrops
│   ├── screenshots/               # Captured 1280x800 project screenshots + manifest.json
│   └── favicon.svg
├── src/
│   ├── components/                # Header, MobileDrawer, Hero, ProjectsSection, ProjectModal, etc.
│   ├── context/                   # Bilingual LanguageProvider & useLanguage hook
│   ├── data/                      # Typed bilingual CV, projects, experience & open-source modules
│   ├── hooks/                     # OS-synced 2-state useTheme hook
│   ├── lib/                       # BASE_URL asset resolver & clipboard helper
│   ├── test/                      # Vitest & jsdom setup
│   ├── App.tsx
│   └── index.css                  # Dual-mode design tokens, dialog & drawer styles
├── index.html                     # Fonts, OG metadata & synchronous FOUC-prevention script
└── vite.config.ts
```

---

## Local Development

### Prerequisites

- **Node.js** `22+`
- **pnpm** `10+`

### Commands

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:5173/portfolio/)
pnpm dev

# Run unit & integration tests
pnpm test

# Lint codebase with Oxlint
pnpm lint

# Type-check & build production bundle
pnpm build

# Preview production build locally (http://localhost:4173/portfolio/)
pnpm preview
```

---

## Deployment

Pushes to `main` automatically trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs dependencies with `pnpm --frozen-lockfile`, runs `pnpm build`, and deploys `./dist` to GitHub Pages.

Ensure **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**.

---

## Contact

- **Email:** [cakrawangsaprabaalkautsar7@gmail.com](mailto:cakrawangsaprabaalkautsar7@gmail.com)
- **GitHub:** [@kiraware](https://github.com/kiraware)
- **LinkedIn:** [Cakrawangsa Praba Alkautsar](https://linkedin.com/in/cakrawangsa-praba-alkautsar)
- **PyPI:** [pypi.org/user/kiraware](https://pypi.org/user/kiraware)
- **YouTube:** [@PraveInc](https://youtube.com/@PraveInc)
