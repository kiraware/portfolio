# Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar

**Date:** 2026-11-26  
**Target URL:** `https://kiraware.github.io/portfolio/`  
**Stack:** Vite 8, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, pnpm

---

## 1. Intent & Why

Build a personal developer portfolio website for **Cakrawangsa Praba Alkautsar** (`kiraware`) hosted on GitHub Pages, grounded exclusively in his verified CV, public GitHub profile (`github.com/kiraware`), and local project folders in `D:\Project`.

The primary goal is to showcase **authentic visual screenshots of his real web applications**—including internal/local systems and previously deployed client sites—so recruiters, engineering managers, and potential freelance clients immediately see concrete visual proof of his full-stack and backend engineering work. Visually, the site pays tribute to the anime **Violet Evergarden** (*CH Postal Company* editorial letter aesthetic, color palette, bespoke illustrations, and graceful animations) while staying refined, legible, and professionally credible.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
- **Screenshot-First Proof of Work:** Capture and present clean, representative real screenshots of CV projects (running local apps with realistic synthetic Indonesian demo data where live domains are offline or gated behind login, plus Wayback Machine archives for offline client domains and live Read the Docs for Python libraries).
- **Authentic Violet Evergarden Aesthetic:** Dual-mode color system inspired by Violet's Prussian blue jacket, warm Leiden letter parchment, antique brass typewriter accents, and Major Gilbert's emerald brooch—enriched with custom painterly Violet Evergarden–style artwork and smooth animations.
- **Full Bilingual Support (ID / EN):** Seamless runtime toggle between Bahasa Indonesia and English across every heading, project case study, experience bullet, filter, and UI label, updating `<html lang>`, syncing `?lang=id|en`, and persisting in `localStorage`.
- **Dual Light & Dark Mode:** Follows OS preference by default (`color-scheme: light dark`), supports manual override without FOUC, and maintains ≥4.5:1 WCAG AA contrast in both modes.
- **Responsive Mobile to Desktop:** Clean, zero-horizontal-overflow layout verified at `375px`, `768px`, `1024px`, and `1440px`.

### Non-Goals
- No backend server, headless CMS, or database for the portfolio itself (pure static Vite build deployed via GitHub Actions to GitHub Pages).
- No server-backed contact form (uses direct `mailto:`, one-click copy email, LinkedIn, GitHub, PyPI, and YouTube links).
- No live hosted demos of the Laravel/Next.js projects inside GitHub Pages.

### Anti-Goals
- **No generic neon-purple "AI template" look:** Violet Evergarden's authentic palette is warm parchment ivory, deep Prussian blue, antique gold, and emerald teal.
- **No ugly, empty, broken, or login-only project previews:** Do not show empty tables, lorem ipsum, bare login screens when dashboards can be captured, or broken/unstyled Wayback pages.
- **No PII leaks in public screenshots:** Never publish real NIKs, real applicant/employee/student records, personal credentials, or unrelated screenshots (such as server/CyberPanel captures from `D:\Project\dont remove ss`).
- **No broken GitHub Pages paths:** All static assets under `public/` must resolve cleanly under `base: '/portfolio/'` via `import.meta.env.BASE_URL`.
- **No dirty sibling repos:** Capturing screenshots from `D:\Project\*` must never leave modified tracked files, stray temporary DBs, or running dev servers behind.

---

## 3. Approaches Considered

### Approach 1 — CH Postal Dossier *(Selected by User)*
An editorial single-page portfolio styled like a refined CH Postal Company dossier: asymmetric letterhead Hero with Violet Evergarden artwork, a prominent screenshot-first project showcase grid with category filters and a native `<dialog>` Case Study lightbox, a filterable postal-stamp experience & teaching timeline, an Open Source / PyPI / YouTube spotlight shelf, skills & education summary, and a wax-seal contact dispatch footer.
- **Why selected:** Fastest for recruiters and clients to scan (<30s to see real web screenshots and credentials), zero SPA routing friction on GitHub Pages, and balances Violet Evergarden's elegance with engineering professionalism.

### Approach 2 — Auto Memories Desk *(Not selected)*
A modular Bento Grid dashboard layout with widgets above the fold (stats, screenshot carousel, tabbed roles).
- **Trade-off:** High visual density is cramped on mobile viewports and fragments the chronological career story.

### Approach 3 — Chapters of Leiden *(Not selected)*
A long-form chaptered scrollytelling experience with full-bleed alternating case studies.
- **Trade-off:** Emotionally cinematic, but requires too much vertical scrolling before a recruiter sees the full breadth of projects.

---

## 4. Visual Design System (Violet Evergarden)

### Color Palette & Tokens
Implemented using `<meta name="color-scheme" content="light dark">`, CSS `light-dark()` with `@media (prefers-color-scheme: dark)` fallbacks, and `:root:has(> head > meta[name="color-scheme"][content="..."])` overrides (zero JS dependency for initial render; inline FOUC-prevention script in `index.html`).

| Token | Light Mode (*Leiden Morning Parchment*) | Dark Mode (*Leiden Midnight Letter*) | Role |
|---|---|---|---|
| `--bg-canvas` | `#FAF6EE` | `#0C1322` | Page background |
| `--bg-surface` | `#FFFDF9` | `#131E33` | Elevated cards & dialogs |
| `--bg-subtle` | `#F1E9D8` | `#1B2A46` | Filter pills, code blocks, timeline badges |
| `--text-primary` | `#182540` | `#F3EDE0` | Headings & primary copy (Prussian ink / ivory) |
| `--text-secondary` | `#47556B` | `#B5C2D6` | Body paragraphs & metadata |
| `--accent-prussian` | `#1E3A63` | `#7BA4DB` | Secondary structural brand accent |
| `--accent-emerald` | `#146C5E` | `#39BFA7` | Primary CTA & live status (Gilbert's emerald brooch) |
| `--on-emerald` | `#FFFFFF` | `#06201B` | High-contrast label on emerald buttons |
| `--accent-gold` | `#8F6522` | `#E0B660` | Brass/gold literary labels, ornaments & highlights |
| `--border-hairline` | `#DFD4BE` | `#263859` | Crisp editorial rules & brass-tinted card borders |

### Typography
- **Display / Editorial Headings:** `Cormorant Garamond` (Google Fonts: weights 500, 600, 700, italic) — evokes classic Leiden correspondence and chapter typography.
- **Body / UI:** `Plus Jakarta Sans` (weights 400, 500, 600, 700) — crisp legibility for both Bahasa Indonesia and English prose.
- **Typewriter / Technical Mono:** `JetBrains Mono` (weights 400, 500) — tech stack pills, dates, `pip install` commands, and postal dispatch codes.

### Violet Evergarden Artwork & Motion Pipeline *(Builder Decision)*
- **Custom Raster Artwork (`public/art/`):** Generated directly during implementation via the built-in `image-generator` subagent, then saved and optimized in `public/art/`:
  1. `public/art/hero-leiden-desk.png` (or `.webp`): Painterly Kyoto Animation–inspired illustration of a vintage CH Postal writing desk by a sunlit/twilight arched window — brass mechanical typewriter, cream parchment letter tied with a crimson/navy ribbon, glowing emerald brooch resting beside a fountain pen, drifting violet flowers and soft golden dust motes.
  2. `public/art/contact-envelope.png` (optional accent vignette): Painterly cream wax-sealed envelope with emerald ribbon and violet botanical sprig for the Contact Dispatch section.
- **Custom Inline SVG Ornaments:** Brass hairline corner brackets, wax-seal monogram (`CA`), emerald brooch crystal divider, and subtle parchment grain texture.
- **Animations (Framer Motion + Compositor-Only CSS):**
  - Subtle drifting letter/violet petal ambient motion in the Hero background, **with an explicit Pause/Play toggle button** (WCAG 2.2.2) and disabled by default under `@media (prefers-reduced-motion: reduce)`.
  - Staggered editorial entrance reveals (`opacity`, `translateY`) for hero items, project cards, and timeline entries (`viewport={{ once: true, amount: 0.15 }}`).
  - Subtle typewriter cadence on the hero epigraph / dispatch code.
  - Smooth browser-card hover elevation and brass/emerald accent border transition (`150–250ms`).
  - Native `<dialog>` top-layer entry/exit transitions (`@starting-style` + `transition-behavior: allow-discrete`) for the Case Study lightbox and mobile navigation drawer.

### Default Language & URL Sync *(Builder Decision)*
- **Precedence:** `?lang=id` or `?lang=en` query parameter (shareable links for Indonesian or international recruiters) → saved `localStorage` key (`portfolio-lang`) → default **`id` (Bahasa Indonesia)**, matching the primary CV language and Indonesian target market.
- **Toggle behavior:** Switching languages updates React context, `document.documentElement.lang`, `localStorage`, and `history.replaceState` (`?lang=...`) without page reload.
- **Static SEO / Open Graph (`index.html`):** Uses clean international-friendly title & description (`Cakrawangsa Praba Alkautsar — Full-Stack & Backend Developer | Portfolio`) so link previews on LinkedIn, WhatsApp, and GitHub work universally.

---

## 5. Authoritative CV & Profile Content Inventory

All copy in `src/data/*.ts` must stay strictly faithful to these verified CV and GitHub facts (translated idiomatically into both `id` and `en`):

### Profile & Verified Links
- **Full Name:** Cakrawangsa Praba Alkautsar
- **Headline:** Full-Stack & Backend Developer
- **Location:** Bandar Lampung, Indonesia (currently interning in Jakarta, Indonesia)
- **Email:** `cakrawangsaprabaalkautsar7@gmail.com`
- **GitHub:** `https://github.com/kiraware` (49 public repos, 17 followers, avatar `https://avatars.githubusercontent.com/u/117554978?v=4`)
- **LinkedIn:** `https://linkedin.com/in/cakrawangsa-praba-alkautsar`
- **PyPI:** `https://pypi.org/user/kiraware`
- **YouTube:** `https://youtube.com/@PraveInc`
- **Privacy Call *(Builder Decision)*:** Personal phone number (`085273510987`) is intentionally omitted from public GitHub Pages HTML to avoid scraper spam (can be added as a WhatsApp CTA if requested).
- **Summary:** Computer Science graduate (S1 Ilmu Komputer, Universitas Lampung, GPA **3.87/4.00**), currently **IT Application Support Intern at PT TASPEN (Persero)**. Experienced in building and deploying production web applications, backend systems, REST APIs, database design, developer tools, and open-source Python libraries (PyPI & Jazzband). Familiar with **Scrum** and **Extreme Programming (XP)**. Open to **Backend Developer** or **Full-Stack Developer** opportunities.

### Complete Experience & Teaching Records (13 CV Entries)
Grouped in UI with tabs: `All` | `Work & Projects` | `Teaching & Community`.

1. **PT TASPEN (Persero)** — *IT Application Support Intern* · Jakarta, Indonesia · Sep 2026 – Present (`Work`)
   - Developed the internal **Pakta Integritas** web application using Laravel and Tailwind CSS.
   - Developed the **E-Recruitment** web portal using Next.js.
   - Authored technical user manuals (*petunjuk teknis / juknis*) for the **ICoFR** web application.
   - Assisted with workflow website testing and operational IT application support tasks.
2. **YouTube (PraveInc)** — *Programming Content Creator* · Remote, Indonesia · Aug 2024 – Present (`Community`)
   - Produces programming video tutorials covering developer tools, web development, and web hosting deployment at `youtube.com/@PraveInc`.
3. **GitHub** — *Open Source Contributor* · Remote, Indonesia · Aug 2022 – Present (`Community`)
   - Member of the **Jazzband** GitHub organization, a collaborative community maintaining open-source Python packages.
   - Built and maintains async Python API wrapper libraries published on PyPI with Read the Docs documentation: **PyBMKG** (BMKG weather & earthquake data), **paspybin** (Pastebin), and **pycodecov** (Codecov).
   - Built **siakadu-bot**, a Telegram FAQ chatbot for Universitas Lampung students using semantic search (BGE-M3 embeddings + FAISS).
   - Contributes merged pull requests and Indonesian translations to open-source projects; curates **awesome-translation**, a directory of projects seeking translators.
4. **Badan Pusat Statistik (BPS) Kota Bandar Lampung** — *Petugas Sensus Ekonomi (Economic Census Officer)* · Bandar Lampung · Jul – Sep 2026 (`Work`)
   - Conducted door-to-door interviews with residents and business owners for the 2026 Economic Census (SE2026).
   - Entered census interview results into BPS's **FASIH** data collection application.
5. **UPA TIK Universitas Lampung** — *Full-Stack Developer* · Bandar Lampung · Jan – Jul 2026 (`Work`)
   - Built a ticket-based IT helpdesk web platform for UPA TIK Unila enabling students, lecturers, and staff to submit and track IT service requests (developed as S1 undergraduate thesis / skripsi).
   - Engineered end-to-end with **Laravel 12, PostgreSQL, and Tailwind CSS** featuring a fast, responsive UI.
   - Implemented ticket rating and user satisfaction survey (CSI) features to evaluate service quality.
   - Conducted performance and load testing with **Apache JMeter** to evaluate responsiveness under high concurrent requests.
   - Applied **Extreme Programming (XP)** through short iterations and continuous stakeholder feedback.
6. **SMPN 13 Bandar Lampung** — *Web Developer* · Bandar Lampung · Jul 2025 (`Work`)
   - Built a dynamic school profile website using **Laravel**.
   - Deployed the website to Niagahoster shared hosting on the official school domain `smpn13-bdl.sch.id`.
7. **Jurusan Ilmu Komputer FMIPA Universitas Lampung** — *Asisten Dosen Pemrograman Web (Web Programming TA)* · Bandar Lampung · Feb – Jun 2025 (`Teaching`)
   - Mentored Class of 2023 Computer Science undergraduates on HTML, CSS, Tailwind CSS, and PHP + database CRUD applications.
   - Graded assignments, quizzes, mid-term (UTP), and final (UAP) lab exams.
8. **Diskominfo, Statistik & Persandian Kabupaten Pesawaran** — *Backend Developer Intern* · Pesawaran · Sep – Dec 2024 (`Work`)
   - Built the backend of a Google Drive–like web cloud storage application for Pesawaran Regency Government using **Laravel** (`drive.pesawarankab.go.id`).
   - Implemented file/folder management and user access management features.
   - Collaborated with System Architect, UI/UX Designer, Frontend Developer, and QA Engineer under **Scrum**.
9. **Lembaga Survei Cipta Ilmu** — *Backend Developer* · Bandar Lampung · Jul – Dec 2024 (`Work`)
   - Developed the **Laravel** backend for the **Pilkada Pringsewu 2024 E-Voting** web system supporting voting operations and data management.
   - Collaborated in a **Scrum** team with weekly Google Meet progress reviews, task coordination, and feature delivery on schedule.
10. **HIMAKOM Universitas Lampung** — *Full-Stack Web Developer — Computer Science Showdown (CSS)* · Bandar Lampung · Jul – Oct 2024 (`Community`)
    - Built the integrated competition website for HIMAKOM Unila's annual **Computer Science Showdown (CSS)**.
    - Developed frontend and backend modules: event landing page, online participant registration, competition categories & rules, winner publications, and announcements across responsive breakpoints.
11. **Jurusan Ilmu Komputer FMIPA Universitas Lampung** — *Asisten Dosen Pemrograman Terstruktur (Structured Programming TA)* · Bandar Lampung · Feb – Jun 2024 (`Teaching`)
    - Mentored Class of 2023 CS undergraduates in **C++**: arrays, pointers, functions, and classes/OOP; graded assignments, quizzes, UTP, and UAP.
12. **Freelance** — *Web Developer & Web API Developer* · Bandar Lampung / Remote · Mar – Apr 2024 (`Work`)
    - Built a static personal portfolio website using **HTML and Tailwind CSS** (Apr 2024).
    - Built a **FastAPI** REST API serving files stored on a client's server (Mar – Apr 2024).
13. **Jurusan Ilmu Komputer FMIPA Universitas Lampung** — *Asisten Dosen Dasar-Dasar Pemrograman (Programming Fundamentals TA)* · Bandar Lampung · Aug – Dec 2023 (`Teaching`)
    - Mentored Class of 2023 CS undergraduates in **C++**: I/O, data types, arithmetic & logic, arrays, and file I/O; graded assignments, quizzes, UTP, and UAP.
14. **Satu Jua Studio** — *Web Developer* · Bandar Lampung · Sep – Oct 2023 (`Work`)
    - Built a static frontend company profile website using **Next.js** (`satujuastudio.com`).
15. **Kayla Multi Interior** — *Web Developer* · Bandar Lampung · Aug – Sep 2023 (`Work`)
    - Built a static frontend company profile website using **Next.js** (`kaylamultiinterior.com`).

*(Note: Grouping the 3 Teaching Assistant semesters visually or chronologically keeps the timeline super clean while preserving every single semester & subject from the CV!)*

### Education, Certifications & Skills
- **Education:** Universitas Lampung (2022 – 2026) — S1 Ilmu Komputer (S.Kom.), GPA **3.87/4.00**.
- **Certifications:**
  - Badan Nasional Sertifikasi Profesi (BNSP) — *Cyber Security Junior* (2024)
  - Vocational School Graduate Academy (VSGA) Kominfo — *Junior Web Developer* (2023)
- **Technical Skills:**
  - **Backend:** PHP, Laravel, Python, FastAPI, Django
  - **Frontend:** HTML, CSS, JavaScript, TypeScript, Next.js, Vue.js, Tailwind CSS
  - **Database:** PostgreSQL, MySQL
  - **Tools & Practices:** Git, GitHub, REST API, Apache JMeter, Scrum, Extreme Programming (XP)
  - **Other & AI:** C++, Semantic Search (BGE-M3, FAISS)
  - **Languages:** Indonesian (Native), English (Limited Working Proficiency)

---

## 6. Project Showcase, Link Map & Screenshot Acquisition Rules

### PII & Demo-Seeding Safety Contract *(Mandatory)*
- **Never capture real PII:** Before taking any screenshot of a local database-backed app (`rekrutmen`, `helpdesk-upa-tik-unila`, `pakta-integritas`, `Drive_Pesawaran`, `e-voting`), inspect rendered text on screen. Never screenshot real NIKs, real personal emails, real student/employee names, or real production records.
- **Isolated / Synthetic Demo Seeding:**
  - If an existing local PostgreSQL database (`taspen_rekrutmen` or `helpdesk_upa_tik_unila`) already has clean dummy/seed data (e.g., from `seed-dummy.ts` or Laravel seeders), verify it contains no personal PII before screenshotting; if it contains empty/ugly data or real personal data, provision an isolated temporary database (or SQLite file) seeded with clean fictional Indonesian demo records (e.g., *Budi Santoso*, *Siti Rahmawati*, fictional *Paslon 01 / Paslon 02* for E-Voting, realistic government folder names for Drive Pesawaran).
  - Never alter or destroy user's existing databases or leave dirty git working trees in `D:\Project\*`. Use a temporary `git worktree` when inspecting other branches (e.g., `e-voting`'s `origin/testing` or `origin/dev`), stop all temporary servers, and verify clean `git status` in touched sibling repos afterward.

### Screenshot Acquisition & Link Matrix
All screenshots captured at clean `1280×800` (16:10) viewport, optimized and saved under `public/screenshots/`.

| # | Project | Category | Links Shown in Modal | Screenshot Source & Fallback Rule |
|---|---|---|---|---|
| 1 | **E-Recruitment PT TASPEN (Persero)** | Web Apps | Badge: *Internal Enterprise App (PT TASPEN)* (no public repo) | Run `D:\Project\rekrutmen` locally (Next.js 16 + PostgreSQL 16; verify clean dummy vacancies from `seed-dummy.ts`). Capture public landing + vacancy listing / admin overview. |
| 2 | **Pakta Integritas PT TASPEN (Persero)** | Web Apps | Badge: *Internal Enterprise App (PT TASPEN)* (no public repo) | `D:\Project\pakta-integritas` (Laravel 13 + React/Inertia + SQL Server via Docker). **User authorized launching Docker Desktop**: start Docker Desktop, boot `docker compose up -d --wait`, run demo seed (`pakta:seed-demo`) with fictional demo accounts (`p-001` / `k-001` / `a-001`), capture clean authenticated dashboard & signing UI, then stop the compose stack cleanly afterward. |
| 3 | **Helpdesk UPA TIK Unila** *(Skripsi S1)* | Web Apps | GitHub (`github.com/kiraware/helpdesk-upa-tik-unila`), Archive link (if valid) | Run `D:\Project\helpdesk-upa-tik-unila` locally via Laragon PHP 8.3 + PostgreSQL 16 (verify clean seeded services/tickets, zero real student PII). Capture portal + ticket/dashboard view; cross-check Wayback (`20260512145208`). |
| 4 | **Drive Pesawaran** *(Cloud Storage Kab. Pesawaran)* | Web Apps | Live (`https://drive.pesawarankab.go.id/`), Repo ref (`MSIBDiskominfo-pswrn/Drive_Laravel` / internal) | Run `D:\Project\Drive_Pesawaran` locally via Laragon PHP 8.3 + temporary local SQLite/PG DB seeded with realistic Pemkab Pesawaran demo folders & files so we capture the **inside file-manager dashboard** (not only the public login wall), plus optional live login slide. |
| 5 | **E-Voting Pilkada Pringsewu 2024** | Backend & API | Badge: *Client System — Lembaga Survei Cipta Ilmu* | Create temporary `git worktree` of `D:\Project\e-voting` (`origin/testing` or `origin/dev`), boot via Laragon PHP 8.3 + temporary local DB seeded with **fictional** Pilkada Pringsewu demo TPS/candidate tallies (*Paslon 01 / 02*), capture real dashboard/operator UI, then remove worktree cleanly. |
| 6 | **Website Profil SMPN 13 Bandar Lampung** | Web Apps | Wayback Archive link (`web.archive.org/.../smpn13-bdl.sch.id`) | Capture Wayback snapshot (`20251104234357`) via browser with Wayback toolbar (`#wm-ipp-base`) hidden. **Fallback:** if snapshot renders broken CSS/missing assets across adjacent timestamps, display a crisp editorial project card instead of a broken page. |
| 7 | **Satu Jua Studio** | Web Apps | Wayback Archive link (`web.archive.org/.../satujuastudio.com`) | Capture Wayback snapshot (`20241005141450`) hiding Wayback toolbar. Same broken-CSS fallback rule as #6. |
| 8 | **Kayla Multi Interior** | Web Apps | Wayback Archive link (`web.archive.org/.../kaylamultiinterior.com`) | Capture Wayback snapshot (`20250313175704`) hiding Wayback toolbar. Same broken-CSS fallback rule as #6. |
| 9 | **PyBMKG / paspybin / pycodecov** | Open Source & AI | PyPI (`pypi.org/project/...`), Docs (`*.rtfd.io`), GitHub (`github.com/kiraware/...`) | Capture live Read the Docs sites (`pybmkg.rtfd.io`, `paspybin.rtfd.io`, `pycodecov.rtfd.io`). |
| 10 | **siakadu-bot** *(Telegram FAQ Bot)* | Open Source & AI | GitHub (`github.com/kiraware/siakadu-bot`), Telegram (`https://t.me/siakadu_bot`) | Render a clean, authentic Telegram conversation preview illustration/component grounded in real `D:\Project\siakadu-bot` FAQ entries (BGE-M3 + FAISS) alongside GitHub repo metadata. |
| 11 | **Computer Science Showdown (HIMAKOM Unila)** | Web Apps | Role & Event credit (no local repo or live archive available) | Uses a refined editorial showcase visual card highlighting event registration, competition categories, and winner announcement modules *(explicitly excludes unrelated screenshots from `D:\Project\dont remove ss`)*. |

---

## 7. Architecture, Standards & Verification

### Component & Data Layout (Builder may refine file granularity)
- `index.html`: Google Fonts (`Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`), `<meta name="color-scheme" content="light dark">`, FOUC-prevention inline `<script>`, Open Graph metadata, custom emerald/gold SVG favicon.
- `src/index.css`: Tailwind CSS v4, Violet Evergarden semantic tokens (`light-dark()` + `@media (prefers-color-scheme: dark)` fallback), `:root:has(> head > meta[name="color-scheme"]...)`, native `<dialog>` & mobile navigation drawer CSS, `scrollbar-color` & `::selection`, `@media (prefers-reduced-motion)` guards.
- `src/data/`: Strongly typed bilingual modules (`i18n.ts`, `profile.ts`, `projects.ts`, `experience.ts`, `opensource.ts`).
- `src/hooks/`:
  - `useTheme.ts`: 2-state header toggle following `modern-web-guidance` `dark-mode-toggle` contract (defaults to `light dark` system preference, toggles opposite of currently rendered scheme, clears `localStorage` when matching OS, syncs `storage` events across tabs).
  - `useLanguage.ts`: `?lang=` URL param → `localStorage` → default `id`, updates `<html lang>` and URL safely.
- `src/components/`: `Header.tsx`, `MobileDrawer.tsx` (native `<dialog>`), `Hero.tsx`, `AmbientPetals.tsx` (with Pause/Play control), `ProjectsSection.tsx`, `ProjectModal.tsx` (native `<dialog closedby="any">` + Safari click-outside fallback + multi-image gallery), `ExperienceSection.tsx`, `OpenSourceSection.tsx`, `SkillsEducationSection.tsx`, `ContactSection.tsx`, `Footer.tsx`, `OrnamentalDivider.tsx`.
- **Performance & Accessibility (Vercel React + Modern Web Guidance + UI/UX Pro Max):**
  - Direct imports, hoisted static JSX/data, derived state without redundant effects, explicit `width`/`height` + `loading="lazy"` on below-the-fold screenshots, `content-visibility: auto` on heavy lower sections.
  - Visible keyboard focus outlines, ≥44×44px touch targets on mobile, `aria-label` on icon-only buttons, no emojis used as UI icons (use Lucide SVG + custom SVG ornaments).

### Verification Criteria
1. `pnpm lint` exits 0 with 0 warnings and 0 errors; `pnpm build` (`tsc -b && vite build`) succeeds cleanly.
2. Live visual & interactive verification on `pnpm preview` using browser automation (`agent-browser` / browser inspect):
   - Capture & inspect rendered views at **Desktop (`1440×900`)** and **Mobile (`375×812`)** in both **Light Mode** and **Dark Mode**, and both **ID** and **EN** locales.
   - Verify Case Study `<dialog>` opens, displays full screenshots with zero 404s under `/portfolio/`, and closes cleanly via backdrop click, Esc, and Close button.
   - Verify Mobile Navigation Drawer opens/closes with zero horizontal scroll (`scrollWidth <= innerWidth`).
   - Verify zero console errors and zero broken asset paths.
3. Update `graphify-out/` (`graphify update .`) after code changes and verify all sibling project folders in `D:\Project\*` remain clean.
