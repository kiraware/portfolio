# Violet Evergarden Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a bilingual (ID/EN), dual light/dark, responsive Violet Evergarden–themed (*CH Postal Dossier*) developer portfolio for Cakrawangsa Praba Alkautsar (`kiraware`) hosted on GitHub Pages, showcasing authentic screenshots of his CV projects and bespoke Violet Evergarden artwork.

**Architecture:** Single-page static React 19 + TypeScript application bundled by Vite 8 (`base: '/portfolio/'`) with Tailwind CSS v4 semantic tokens driven by native `<meta name="color-scheme">` and `light-dark()` (with `@media (prefers-color-scheme: dark)` fallbacks). Authoritative bilingual CV/GitHub data lives in typed `src/data/*.ts` modules; interactive overlays use native HTML `<dialog>` (`ProjectModal` lightbox with `closedby="any"` + Safari fallback, and `MobileDrawer` scroll-snap navigation drawer); project screenshots are captured from live/archived/locally seeded CV apps and stored under `public/screenshots/` alongside generated Violet Evergarden artwork in `public/art/`.

**Tech Stack:** Vite 8, React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), Framer Motion 14, Lucide React, Vitest + React Testing Library + jsdom, pnpm 10, `image-generator` subagent, Chrome/browser automation.

**Spec:** `docs/superpowers/specs/2026-11-26-violet-evergarden-portfolio-design.md`

## Global Constraints

- **Target base URL:** GitHub Pages at `https://kiraware.github.io/portfolio/` (`base: '/portfolio/'`); all `public/` asset URLs must resolve via `import.meta.env.BASE_URL`.
- **Palette (exact Violet Evergarden tokens):**
  - Light: canvas `#FAF6EE`, surface `#FFFDF9`, subtle `#F1E9D8`, text primary `#182540`, text secondary `#47556B`, Prussian `#1E3A63`, emerald `#146C5E` (`on-emerald: #FFFFFF`), gold `#8F6522`, border `#DFD4BE`.
  - Dark: canvas `#0C1322`, surface `#131E33`, subtle `#1B2A46`, text primary `#F3EDE0`, text secondary `#B5C2D6`, Prussian `#7BA4DB`, emerald `#39BFA7` (`on-emerald: #06201B`), gold `#E0B660`, border `#263859`.
- **Typography:** `Cormorant Garamond` (headings), `Plus Jakarta Sans` (body), `JetBrains Mono` (code/stamps/tech pills).
- **Theme contract:** `<meta name="color-scheme" content="light dark">` + `:root:has(> head > meta[name="color-scheme"]...)`, inline FOUC-prevention `<script>` in `index.html`, 2-state header toggle that clears `localStorage` when matching OS and never deletes a pinned override when OS changes later.
- **Language contract:** Default `id` (Bahasa Indonesia); precedence `?lang=id|en` → `localStorage('portfolio-lang')` → `id`; updates `<html lang>` and syncs `?lang=` via `history.replaceState`.
- **Privacy & PII:** Raw phone number (`085273510987`) MUST NOT appear in public HTML/data. Zero real NIKs, personal emails, or real employee/student/applicant records in captured screenshots; use synthetic Indonesian demo seeds and never leave sibling repos in `D:\Project\*` dirty or running background processes.
- **Accessibility & Motion:** WCAG AA ≥4.5:1 contrast, visible keyboard focus, ≥44×44px mobile touch targets, no emojis as UI icons, visible Pause/Play control for ambient Hero petals (without `aria-pressed` when label flips), `@media (prefers-reduced-motion)` respected, zero horizontal overflow at `375px`–`1440px`.
- **Verification:** `pnpm test`, `pnpm lint` (0 warnings/errors), `pnpm build` (`tsc -b && vite build`), live visual QA on `pnpm preview`, and `graphify update .`.

## Review Focus

1. **Restricted/corrupted `localStorage` or invalid `?lang=` query params** (e.g., `?lang=fr`, private-browsing `Storage` SecurityError) — `useTheme` and `useLanguage` must never throw and must fall back cleanly to default (`light dark` / `id`). *(Pinned by tests in Task 1.)*
2. **GitHub Pages `/portfolio/` subpath asset resolution** — every screenshot and artwork path must resolve cleanly when `BASE_URL` is `/portfolio/` without double slashes or root-absolute 404s. *(Pinned by tests in Task 1 and Task 3.)*
3. **Modal light-dismiss on browsers lacking `HTMLDialogElement.prototype.closedBy` (Safari)** — clicking outside dialog content must close `ProjectModal`, while clicking inside modal content must keep it open. *(Pinned by tests in Task 5.)*
4. **Theme toggle OS-reconciliation edge cases** — toggling to match current OS removes the `localStorage` key (`light dark`), toggling opposite pins the literal scheme, and cross-tab `storage` events sync `<meta name="color-scheme">`. *(Pinned by tests in Task 1.)*
5. **Ambient motion Pause/Play accessibility & mobile overflow safety** — `AmbientPetals` toggle switches label without `aria-pressed` conflict and pauses animations; long project/code strings wrap or scroll safely within `375px` viewports. *(Pinned by tests in Task 4 and visual QA in Task 7.)*

---

## File Structure

- `index.html` — Google Fonts, `<meta name="color-scheme" content="light dark">`, FOUC-prevention script, OG metadata, emerald/gold SVG favicon.
- `vite.config.ts` / `vitest.config.ts` — Vite GitHub Pages config (`base: '/portfolio/'`) + Vitest jsdom test config.
- `src/index.css` — Violet Evergarden dual-mode tokens (`light-dark()` + fallbacks), `<dialog>` & `.Drawer` styles, custom scrollbars, reduced-motion rules.
- `src/lib/assetUrl.ts` — Safe `BASE_URL` resolver for `public/art/` and `public/screenshots/`.
- `src/hooks/useTheme.ts` — 2-state theme controller synced with `<meta name="color-scheme">`, `localStorage`, and `storage` events.
- `src/context/LanguageContext.tsx` — Bilingual `id` / `en` React context with `?lang=` URL sync and `localStorage` persistence.
- `src/data/types.ts`, `src/data/i18n.ts`, `src/data/profile.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/data/opensource.ts` — Authoritative CV & GitHub data modules.
- `src/components/OrnamentalDivider.tsx` — Inline SVG brass/emerald CH Postal ornaments and wax-seal emblem.
- `src/components/AmbientPetals.tsx` — Drifting parchment/violet petal Hero ambient layer with accessible Pause/Play control.
- `src/components/MobileDrawer.tsx` — Native `<dialog>` scroll-snap mobile navigation drawer with `IntersectionObserver` + progressive fallbacks.
- `src/components/Header.tsx` — Sticky CH Postal header with monogram, section nav, `ID | EN` switch, 2-state theme toggle, and mobile drawer trigger.
- `src/components/Hero.tsx` — Asymmetric letterhead Hero with Violet Evergarden artwork, emerald brooch availability badge, credential stamps, and CTAs.
- `src/components/ProjectsSection.tsx` — Filterable 16:10 browser-framed screenshot showcase grid + `siakadu-bot` Telegram preview card.
- `src/components/ProjectModal.tsx` — Native `<dialog closedby="any">` Case Study lightbox with Safari backdrop fallback and multi-screenshot gallery.
- `src/components/ExperienceSection.tsx` — Filterable postal-stamp career & teaching timeline (all 13+ CV entries).
- `src/components/OpenSourceSection.tsx` — Jazzband, PyPI libraries (`PyBMKG`, `paspybin`, `pycodecov` with copyable `pip install`), `awesome-translation`, and YouTube `@PraveInc`.
- `src/components/SkillsEducationSection.tsx` — Grouped CV skill matrix, Universitas Lampung S.Kom (GPA 3.87/4.00), BNSP & VSGA certifications.
- `src/components/ContactSection.tsx` & `src/components/Footer.tsx` — Wax-seal Contact Dispatch card with one-click copy email & links.
- `src/App.tsx` — Root composition wrapping `LanguageProvider`, `MotionConfig reducedMotion="user"`, and sections.
- `public/art/*` & `public/screenshots/*` — Generated Violet Evergarden illustrations & captured project screenshots.

---

### Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`

**Files:**
- Modify: `package.json`, `index.html`, `src/index.css`
- Create: `vitest.config.ts`, `src/test/setup.ts`, `src/lib/assetUrl.ts`, `src/hooks/useTheme.ts`, `src/context/LanguageContext.tsx`
- Create Tests: `src/lib/assetUrl.test.ts`, `src/hooks/useTheme.test.ts`, `src/context/LanguageContext.test.tsx`

**Interfaces:**
- Consumes: none (foundation task).
- Produces:
  - `resolveAssetUrl(relativePath: string, baseUrl?: string): string` from `src/lib/assetUrl.ts`
  - `useTheme(): { renderedScheme: 'light' | 'dark'; isOverride: boolean; toggleTheme: () => void }` from `src/hooks/useTheme.ts`
  - `type Locale = 'id' | 'en'`, `type LocalizedString = { id: string; en: string }`, `LanguageProvider`, `useLanguage(): { locale: Locale; setLocale: (next: Locale) => void; toggleLocale: () => void; t: (text: LocalizedString) => string }` from `src/context/LanguageContext.tsx`

- [ ] **Step 1: Install Vitest + React Testing Library devDependencies and add `test` script**

Run: `pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom`  
Add `"test": "vitest run"` to `package.json`, create `vitest.config.ts` (`environment: 'jsdom'`, `setupFiles: ['./src/test/setup.ts']`) and `src/test/setup.ts` (`import '@testing-library/jest-dom/vitest'`).  
Expected: `pnpm test` runs cleanly with 0 test files found (exit 0 with `--passWithNoTests` or ready for first test).

- [ ] **Step 2: Write failing tests for `resolveAssetUrl`, `useTheme`, and `LanguageContext`**

Create:
- `src/lib/assetUrl.test.ts`:
  - `resolves relative path under /portfolio/ base` → `resolveAssetUrl('screenshots/rekrutmen.webp', '/portfolio/') === '/portfolio/screenshots/rekrutmen.webp'`
  - `strips leading slash to avoid double slash` → `resolveAssetUrl('/art/hero.png', '/portfolio/') === '/portfolio/art/hero.png'`
  - `works with root base /` → `resolveAssetUrl('art/hero.png', '/') === '/art/hero.png'`
  - `leaves external https URLs untouched` → `resolveAssetUrl('https://example.com/a.png', '/portfolio/') === 'https://example.com/a.png'`
- `src/hooks/useTheme.test.ts`:
  - `defaults to system preference without writing localStorage` (`<meta name="color-scheme">` stays `light dark`)
  - `toggles to opposite of rendered scheme and persists literal value` (OS light → click → stores `'dark'`, meta=`'dark'`)
  - `removes stored value when toggling back to match current OS` (OS light, stored `'dark'` → click → removes key, meta=`'light dark'`)
  - `survives SecurityError when localStorage throws` (still updates `<meta>` in memory without throwing)
  - `syncs <meta> when cross-tab storage event fires`
- `src/context/LanguageContext.test.tsx`:
  - `defaults to Indonesian (id) and updates documentElement.lang`
  - `reads valid ?lang=en query parameter over localStorage`
  - `ignores invalid ?lang=fr query param and falls back to id`
  - `persists language toggle to localStorage, updates ?lang= URL, and survives storage errors`

- [ ] **Step 3: Run tests to verify they fail**

Run: `pnpm test`  
Expected: FAIL because `assetUrl.ts`, `useTheme.ts`, and `LanguageContext.tsx` do not exist yet.

- [ ] **Step 4: Implement `assetUrl.ts`, `useTheme.ts`, `LanguageContext.tsx`, `index.html`, and `src/index.css`**

- Implement `resolveAssetUrl` in `src/lib/assetUrl.ts`.
- Implement `useTheme` in `src/hooks/useTheme.ts` strictly matching `modern-web-guidance` `dark-mode-toggle` rules (reads/writes `<meta name="color-scheme">`, checks `matchMedia('(prefers-color-scheme: dark)')` with `change` listener, never strips stored override on OS change, only strips when user toggles back to OS scheme).
- Implement `LanguageProvider` and `useLanguage` in `src/context/LanguageContext.tsx`.
- Update `index.html` with `<meta name="color-scheme" content="light dark">`, synchronous FOUC-prevention inline `<script>` inside `try { ... } catch {}`, Google Fonts (`Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`), Open Graph metadata, and emerald/gold SVG favicon.
- Author `src/index.css` with exact Violet Evergarden palette tokens from Global Constraints, `@media (prefers-color-scheme: dark)` fallback + `@supports (color: light-dark(white, black))` `light-dark()` tokens, `:root:has(> head > meta[name="color-scheme"][content="dark"|"light"])` overrides, `scrollbar-color` with `@supports not (scrollbar-color: auto)` WebKit fallback, native `<dialog>` & `.Drawer` scroll-snap styles, and `@media (prefers-reduced-motion)` rules.

- [ ] **Step 5: Run tests, lint, and typecheck**

Run: `pnpm test && pnpm lint && pnpm build`  
Expected: All unit tests PASS, 0 lint warnings/errors, clean Vite build.

- [ ] **Step 6: Commit**

```powershell
git add package.json pnpm-lock.yaml vitest.config.ts index.html src/index.css src/test/setup.ts src/lib/ src/hooks/ src/context/
git commit -m "feat: add Violet Evergarden theme system, i18n context, and test harness"
```

---

### Task 2: Generate Violet Evergarden Artwork & Acquire Real Project Screenshots

**Files:**
- Create: `public/art/hero-leiden-desk.png` (or `.webp`), `public/art/contact-envelope.png` (or `.webp`)
- Create: `public/screenshots/*.png` (or `.webp`) for each verified project (e.g., `rekrutmen-home.png`, `rekrutmen-vacancies.png`, `pakta-integritas.png`, `helpdesk-unila-portal.png`, `helpdesk-unila-dashboard.png`, `drive-pesawaran-dashboard.png`, `evoting-pringsewu.png`, `smpn13-bandarlampung.png`, `satujua-studio.png`, `kayla-multi-interior.png`, `pybmkg-docs.png`, `paspybin-docs.png`, `pycodecov-docs.png`)
- Create: `public/screenshots/manifest.json` (records captured filenames, dimensions, source type, and any fallbacks applied)

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-11-26-violet-evergarden-portfolio-design.md` Section 6 (PII contract & Screenshot Acquisition Matrix).
- Produces: Verified image files under `public/art/` and `public/screenshots/` consumed by Task 3 (`src/data/projects.ts`) and Task 4 (`Hero.tsx`).

- [ ] **Step 1: Generate bespoke Violet Evergarden artwork via `image-generator`**

Dispatch `image-generator` subagent for:
1. `public/art/hero-leiden-desk.png`: Painterly Kyoto Animation–inspired anime background illustration of a European vintage postal writing desk by an arched morning/twilight window in Leiden — antique brass typewriter, cream letter sealed with a crimson wax stamp and navy ribbon, glowing emerald brooch resting beside a fountain pen, delicate violet blossoms and warm golden light rays, no text or watermarks, 4:3 aspect ratio.
2. `public/art/contact-envelope.png`: Painterly anime spot illustration of an ivory parchment envelope sealed with a gold-rimmed wax stamp, tied with an emerald silk ribbon and a sprig of violet flowers on soft parchment tone, no text, 16:9 aspect ratio.
Expected: Both image files exist, inspect them visually with `read_file` to verify high aesthetic quality and zero gibberish text.

- [ ] **Step 2: Capture live Read the Docs & Wayback Machine screenshots (`1280×800`)**

Using browser automation (`agent-browser` or headless Chrome/Edge CDP):
- Live docs: `https://pybmkg.rtfd.io/`, `https://paspybin.rtfd.io/`, `https://pycodecov.rtfd.io/` → save to `public/screenshots/`.
- Wayback Machine archives (hide `#wm-ipp-base` / `#donato` toolbar before capture; inspect each rendered image with `read_file` to ensure CSS & imagery loaded cleanly; try adjacent snapshot if broken; otherwise record fallback in `manifest.json`):
  - `http://web.archive.org/web/20251104234357/https://smpn13-bdl.sch.id/`
  - `http://web.archive.org/web/20241005141450/https://satujuastudio.com/`
  - `http://web.archive.org/web/20250313175704/https://kaylamultiinterior.com/`
Expected: Crisp `1280×800` screenshots inspected visually with `read_file`.

- [ ] **Step 3: Capture local PostgreSQL / Laragon projects (`rekrutmen`, `helpdesk-upa-tik-unila`, `Drive_Pesawaran`, `e-voting`)**

For each project, follow the **PII & Hygiene Contract** strictly:
1. **`rekrutmen` (`D:\Project\rekrutmen`):** Verify `taspen_rekrutmen` DB contents contain only dummy vacancies (no real applicant PII); start Next.js locally (`pnpm start` or `pnpm dev`), capture homepage + vacancies/dashboard (`rekrutmen-home.png`, `rekrutmen-dashboard.png`), stop server.
2. **`helpdesk-upa-tik-unila` (`D:\Project\helpdesk-upa-tik-unila`):** Inspect DB or run against an isolated temp DB/SQLite with `ServiceSeeder` + synthetic Indonesian Unila tickets (zero real student PII); serve with Laragon PHP 8.3 (`php artisan serve`), capture portal + ticket dashboard (`helpdesk-unila-portal.png`, `helpdesk-unila-dashboard.png`), stop server.
3. **`Drive_Pesawaran` (`D:\Project\Drive_Pesawaran`):** Boot locally via Laragon PHP 8.3 with an isolated temporary SQLite/PG database + seeded realistic Pemkab Pesawaran demo folders & files (e.g., *Dokumen SPBE 2024*, *Laporan SAKIP*, *Surat Edaran*), log in as demo user, capture the **inside file-manager dashboard** (`drive-pesawaran-dashboard.png`), stop server, remove temporary `.env`/SQLite file.
4. **`e-voting` (`D:\Project\e-voting`):** Create temporary `git worktree` on `origin/testing` (or `origin/dev`), boot via Laragon PHP 8.3 + isolated temporary DB seeded with **fictional** Pilkada Pringsewu TPS/candidate data (*Paslon 01 / Paslon 02*), capture real dashboard/operator UI (`evoting-pringsewu.png`), stop server, remove temporary worktree cleanly.
Expected: Visually inspect every captured PNG with `read_file` to confirm clean Indonesian demo data, zero broken CSS, and zero PII.

- [ ] **Step 4: Start Docker Desktop (authorized by user) and capture `pakta-integritas`**

- Launch Docker Desktop (`Start-Process "C:\Program Files\Docker\Docker\Docker Desktop.exe"`) and wait for `docker info` to succeed (up to 90s).
- In `D:\Project\pakta-integritas`, run `docker compose up -d --wait`, ensure demo seed (`pakta:seed-demo`) is loaded with synthetic demo accounts (`p-001` / `k-001` / `a-001`, password `PaktaDemo#2026`), capture authenticated dashboard & integrity-pact UI (`pakta-integritas-dashboard.png`), then stop containers cleanly (`docker compose down` — without deleting user volumes unless temporary).
- Visually inspect captured PNG with `read_file` to confirm clean demo data and zero PII.

- [ ] **Step 5: Verify sibling repo cleanliness and write `public/screenshots/manifest.json`**

Run `git -C D:\Project\<repo> status -s` across `rekrutmen`, `pakta-integritas`, `helpdesk-upa-tik-unila`, `Drive_Pesawaran`, `e-voting` to prove zero stray modifications or untracked temporary files remain; stop all stray temporary dev servers.
Expected: All sibling repos match their pre-capture status; all portfolio assets sit cleanly in `public/art/` and `public/screenshots/`.

- [ ] **Step 6: Commit visual assets**

```powershell
git add public/art/ public/screenshots/
git commit -m "assets: add Violet Evergarden artwork and captured CV project screenshots"
```

---

### Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules

**Files:**
- Create: `src/data/types.ts`, `src/data/i18n.ts`, `src/data/profile.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/data/opensource.ts`
- Create Test: `src/data/data.test.ts`

**Interfaces:**
- Consumes: `Locale`, `LocalizedString` from `src/context/LanguageContext.tsx`; verified filenames from `public/screenshots/manifest.json` and `public/art/`.
- Produces:
  - `ProjectCategory = 'all' | 'web' | 'backend' | 'opensource'`, `ProjectItem`, `ProjectScreenshot`, `ProjectLink` in `src/data/types.ts`
  - `ExperienceCategory = 'all' | 'work' | 'teaching'`, `ExperienceItem`, `OpenSourceItem`, `SkillGroup`, `EducationItem`, `CertificationItem` in `src/data/types.ts`
  - `UI_STRINGS` in `src/data/i18n.ts`
  - `PROFILE`, `SKILL_GROUPS`, `EDUCATION`, `CERTIFICATIONS` in `src/data/profile.ts`
  - `PROJECTS: ProjectItem[]` in `src/data/projects.ts`
  - `EXPERIENCES: ExperienceItem[]` in `src/data/experience.ts`
  - `OPEN_SOURCE_PACKAGES`, `CREATOR_CHANNEL`, `SIAKADU_DEMO_MESSAGES` in `src/data/opensource.ts`

- [ ] **Step 1: Write failing data-integrity tests in `src/data/data.test.ts`**

Assertions:
- Every `LocalizedString` across `PROFILE`, `PROJECTS`, `EXPERIENCES`, `OPEN_SOURCE_PACKAGES`, and `UI_STRINGS` has non-empty `id` and `en` strings.
- Every screenshot `src` referenced in `PROJECTS` exists on disk under `public/` (verified via `node:fs` `existsSync` in Vitest!).
- Serialized JSON of all data modules contains zero occurrences of personal phone number `085273510987`.
- `PROJECTS` covers all 11 CV projects with valid categories; `EXPERIENCES` contains all CV roles from PT TASPEN through Kayla Multi Interior including all 3 Teaching Assistant semesters; `PROFILE` contains verified GitHub, LinkedIn, PyPI, YouTube, and Email URLs.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test src/data/data.test.ts`  
Expected: FAIL (data modules do not exist).

- [ ] **Step 3: Implement `src/data/types.ts`, `i18n.ts`, `profile.ts`, `projects.ts`, `experience.ts`, `opensource.ts`**

Populate every fact strictly from Section 5 & Section 6 of the spec (natural idiomatic Indonesian & English, authentic `siakadu-bot` Q&A snippet grounded in `D:\Project\siakadu-bot`, verified screenshot filenames from Task 2).

- [ ] **Step 4: Run tests and lint**

Run: `pnpm test src/data/data.test.ts && pnpm lint`  
Expected: PASS, 0 lint warnings/errors.

- [ ] **Step 5: Commit**

```powershell
git add src/data/
git commit -m "feat: add authoritative bilingual CV, project, and open-source data modules"
```

---

### Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")

**Files:**
- Create: `src/components/OrnamentalDivider.tsx`, `src/components/AmbientPetals.tsx`, `src/components/MobileDrawer.tsx`, `src/components/Header.tsx`, `src/components/Hero.tsx`
- Create Test: `src/components/HeaderAndHero.test.tsx`

**Interfaces:**
- Consumes: `useTheme`, `useLanguage`, `resolveAssetUrl`, `PROFILE`, `UI_STRINGS`.
- Produces:
  - `OrnamentalDivider({ label?: string })`
  - `AmbientPetals()`
  - `MobileDrawer({ isOpen: boolean; onClose: () => void; navItems: NavItem[] })`
  - `Header()`
  - `Hero()`

- [ ] **Step 1: Write failing component tests in `src/components/HeaderAndHero.test.tsx`**

Assertions:
- `Header` renders brand monogram, 5 nav links, language switcher (`ID`/`EN`), theme toggle, and mobile menu button (`aria-expanded="false"`, `aria-controls="mobile-nav-drawer"`).
- Clicking language switcher switches Hero text from Indonesian to English and back.
- Clicking theme toggle updates `<meta name="color-scheme">` and toggles visible accessible label.
- `AmbientPetals` renders a Pause/Play motion button whose accessible label toggles cleanly and does NOT set `aria-pressed` (WCAG 2.2.2 + `modern-web-guidance` `motion` rule).
- `Hero` renders Cakrawangsa Praba Alkautsar, GPA `3.87/4.00`, Violet Evergarden desk artwork (`img` src resolved with `BASE_URL`), and verified social links without raw phone number.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test src/components/HeaderAndHero.test.tsx`  
Expected: FAIL.

- [ ] **Step 3: Implement `OrnamentalDivider.tsx`, `AmbientPetals.tsx`, `MobileDrawer.tsx`, `Header.tsx`, and `Hero.tsx`**

- `MobileDrawer`: native `<dialog id="mobile-nav-drawer">` opened via `showModal()`, scroll-snap horizontal sheet + spacer, `IntersectionObserver` open/close detection, `scroll-initial-target` & `animation-timeline` JS fallbacks per `modern-web-guidance` `navigation-drawer`.
- `AmbientPetals`: delicate SVG violet petals & parchment glints animated with compositor-only CSS transforms, paused when user toggles Pause or under `@media (prefers-reduced-motion: reduce)`.
- `Hero`: asymmetric CH Postal letterhead layout with brass corner frames, framed Violet Evergarden artwork (`public/art/hero-leiden-desk.png`), emerald brooch pulse availability badge, typewriter eyebrow, and credential stamps.

- [ ] **Step 4: Run tests and lint**

Run: `pnpm test && pnpm lint`  
Expected: PASS, 0 lint warnings/errors.

- [ ] **Step 5: Commit**

```powershell
git add src/components/OrnamentalDivider.tsx src/components/AmbientPetals.tsx src/components/MobileDrawer.tsx src/components/Header.tsx src/components/Hero.tsx src/components/HeaderAndHero.test.tsx
git commit -m "feat: add Violet Evergarden Hero, Header, MobileDrawer, and AmbientPetals"
```

---

### Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox

**Files:**
- Create: `src/components/SiakaduPreview.tsx`, `src/components/ProjectModal.tsx`, `src/components/ProjectsSection.tsx`
- Create Test: `src/components/ProjectsSection.test.tsx`

**Interfaces:**
- Consumes: `useLanguage`, `resolveAssetUrl`, `PROJECTS`, `SIAKADU_DEMO_MESSAGES`, `UI_STRINGS`, `ProjectItem`, `ProjectCategory`.
- Produces:
  - `SiakaduPreview()` (authentic Telegram chat preview for `siakadu-bot` using real FAQ data)
  - `ProjectModal({ project: ProjectItem | null; onClose: () => void })`
  - `ProjectsSection()`

- [ ] **Step 1: Write failing tests in `src/components/ProjectsSection.test.tsx`**

Assertions:
- Renders all projects under `All` filter and filters accurately when clicking `Web Apps`, `Backend & API`, and `Open Source & AI`.
- Clicking a project card opens `ProjectModal` (`<dialog>` via `showModal()`), sets `closedby="any"`, shows the project title, role, highlights, tech stack, and screenshot image(s).
- Clicking next/prev slide buttons switches screenshots when a project has multiple captures.
- **Safari `closedby` fallback test (Review Focus #3):** When `'closedBy' in HTMLDialogElement.prototype` is false, clicking outside the dialog bounding rect closes the modal, while clicking inside the dialog bounding rect keeps it open.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test src/components/ProjectsSection.test.tsx`  
Expected: FAIL.

- [ ] **Step 3: Implement `SiakaduPreview.tsx`, `ProjectModal.tsx`, and `ProjectsSection.tsx`**

- Browser-framed 16:10 cards (macOS/editorial window dots + subtle brass URL bar + crisp `object-cover object-top` screenshot with explicit `width={1280} height={800}` and `loading="lazy"`).
- Editorial fallback cover card for projects without a live/archived capture (e.g., *Computer Science Showdown* or any broken Wayback target).
- `ProjectModal`: native `<dialog {...({ closedby: 'any' } as Record<string, string>)} aria-labelledby={titleId}>`, `showModal()`, `close` event listener syncing React state, Safari click-outside coordinate fallback per `modern-web-guidance` `light-dismiss-a-dialog`, visible close button (`≥44×44px`), keyboard-accessible slide thumbnails, and bilingual Case Study details.

- [ ] **Step 4: Run tests and lint**

Run: `pnpm test && pnpm lint`  
Expected: PASS, 0 lint warnings/errors.

- [ ] **Step 5: Commit**

```powershell
git add src/components/SiakaduPreview.tsx src/components/ProjectModal.tsx src/components/ProjectsSection.tsx src/components/ProjectsSection.test.tsx
git commit -m "feat: add screenshot-first ProjectsSection and native dialog ProjectModal"
```

---

### Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly

**Files:**
- Create: `src/components/ExperienceSection.tsx`, `src/components/OpenSourceSection.tsx`, `src/components/SkillsEducationSection.tsx`, `src/components/ContactSection.tsx`, `src/components/Footer.tsx`
- Modify: `src/App.tsx`
- Remove unused Vite starter files: `src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`
- Create Test: `src/App.test.tsx`

**Interfaces:**
- Consumes: `LanguageProvider`, `useLanguage`, `EXPERIENCES`, `OPEN_SOURCE_PACKAGES`, `CREATOR_CHANNEL`, `PROFILE`, `SKILL_GROUPS`, `EDUCATION`, `CERTIFICATIONS`, `UI_STRINGS`, `Header`, `Hero`, `ProjectsSection`, `OrnamentalDivider`.
- Produces: Complete `App` root component.

- [ ] **Step 1: Write failing integration tests in `src/App.test.tsx`**

Assertions:
- Renders full portfolio sections (`Hero`, `Projects`, `Experience`, `Open Source`, `Skills & Education`, `Contact`, `Footer`) with skip-to-content link.
- Experience filter tabs switch accurately between `All`, `Work & Projects`, and `Teaching & Community`.
- Open Source cards render `pip install PyBMKG`, `pip install paspybin`, `pip install pycodecov`, Jazzband credit, `awesome-translation`, and YouTube `@PraveInc`, and clicking copy buttons invokes clipboard + shows confirmation feedback.
- Contact section shows email with click-to-copy + verified social links, and never exposes phone number `085273510987`.
- Toggling language from `ID` to `EN` translates section headings and content across the entire page.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test src/App.test.tsx`  
Expected: FAIL.

- [ ] **Step 3: Implement remaining sections and assemble `src/App.tsx`**

- `ExperienceSection`: postal-stamp timeline with emerald/gold markers, category filter tabs, concise impact bullets, and `content-visibility: auto`.
- `OpenSourceSection`: Jazzband badge, PyPI cards with monospace copyable install commands, `awesome-translation`, and YouTube `@PraveInc` creator highlight.
- `SkillsEducationSection`: clean categorized skills grid + Universitas Lampung S.Kom (GPA 3.87/4.00) + BNSP Cyber Security Junior & VSGA Kominfo Junior Web Developer credential cards.
- `ContactSection` & `Footer`: CH Postal wax-seal letter card framed with `public/art/contact-envelope.png`, copyable email, LinkedIn, GitHub, PyPI, YouTube, and subtle Violet Evergarden closing epigraph.
- Wire `App.tsx` with `<LanguageProvider>` and `<MotionConfig reducedMotion="user">`; remove unused starter template files.

- [ ] **Step 4: Run full test suite, lint, and production build**

Run: `pnpm test && pnpm lint && pnpm build`  
Expected: All tests PASS, 0 lint warnings/errors, clean TypeScript + Vite build into `dist/`.

- [ ] **Step 5: Commit**

```powershell
git add -A
git commit -m "feat: complete Violet Evergarden portfolio sections and App assembly"
```

---

### Task 7: End-to-End Visual QA, Responsive & Accessibility Verification, and Graphify Sync

**Files:**
- Modify (only if QA reveals visual/responsive/contrast issues): affected files in `src/`
- Update: `graphify-out/`

**Interfaces:**
- Consumes: Production build `dist/` served via `pnpm preview`.
- Produces: Verified desktop (`1440×900`) and mobile (`375×812`) visual checks in Light Mode & Dark Mode and ID & EN, zero console/network errors, updated Graphify knowledge graph.

- [ ] **Step 1: Run `pnpm test && pnpm lint && pnpm build` and start `pnpm preview`**

Expected: Clean production build served at `http://localhost:4173/portfolio/`.

- [ ] **Step 2: Execute live browser visual & interactive QA**

Using browser automation (`agent-browser` / Chrome DevTools) against `http://localhost:4173/portfolio/`:
- Capture & visually inspect with `read_file`:
  1. Desktop (`1440×900`) Light Mode (ID) — Hero + Projects + lower sections.
  2. Desktop (`1440×900`) Dark Mode (EN) — verify palette contrast, artwork harmony, and complete EN translation.
  3. Open a Project Case Study `<dialog>` modal — verify crisp screenshot display, slide switch, and backdrop light-dismiss.
  4. Mobile (`375×812`) Light & Dark Mode — verify zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`), mobile `<dialog>` drawer open/close, and ≥44px tap targets.
- Assert zero `console.error`, zero uncaught page errors, and zero HTTP 404 image requests under `/portfolio/`.

- [ ] **Step 3: Fix any issues found during visual QA, re-run verification, and update Graphify**

If any visual/layout polish issue is spotted, fix it, re-run `pnpm test && pnpm lint && pnpm build`, and re-verify.  
Run `graphify update .` to ensure `graphify-out/graph.json`, `GRAPH_REPORT.md`, and `graph.html` match the final React/TS portfolio architecture.

- [ ] **Step 4: Final commit (if QA fixes or graph updates occurred)**

Run: `git status -s`  
Commit any final polish cleanly (pre-commit hook auto-stages `graphify-out/`).
