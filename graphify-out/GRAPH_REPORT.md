# Graph Report - portfolio  (2026-11-26)

## Corpus Check
- 49 files · ~28,285 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 4, .css 1)

## Summary
- 294 nodes · 655 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `876eec93`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- compilerOptions
- types.ts
- manifest.json
- .oxlintrc.json
- useTheme
- Cakrawangsa Praba Alkautsar — Portfolio
- tsconfig.json
- Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar
- App.tsx
- useLanguage
- ProjectModal.tsx
- App.tsx

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 32 edges
2. `resolveAssetUrl()` - 19 edges
3. `LocalizedString` - 18 edges
4. `compilerOptions` - 18 edges
5. `App()` - 16 edges
6. `react` - 16 edges
7. `compilerOptions` - 15 edges
8. `lucide-react` - 14 edges
9. `UI_STRINGS` - 13 edges
10. `LanguageProvider()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules` --references--> `LocalizedString`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly` --references--> `App()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/App.tsx
- `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` --references--> `resolveAssetUrl()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/lib/assetUrl.ts
- `Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")` --references--> `resolveAssetUrl()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/lib/assetUrl.ts
- `Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox` --references--> `resolveAssetUrl()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/lib/assetUrl.ts

## Import Cycles
- None detected.

## Communities (15 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (39): @tailwindcss/vite@^4.3.5, devDependencies, jsdom@^31.0.1, oxlint@^1.90.0, @testing-library/jest-dom@^8.0.0, @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.13, @types/node@^24.19.2 (+31 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "types.ts"
Cohesion: 0.11
Nodes (28): EXP_FILTERS, LocalizedString, assertLocalizedStringsNonEmpty(), PUBLIC_DIR, EXPERIENCES, CREATOR_CHANNEL, OPEN_SOURCE_HIGHLIGHTS, OPEN_SOURCE_PACKAGES (+20 more)

### Community 4 - "manifest.json"
Cohesion: 0.33
Nodes (5): artwork, editorialFallbacks, generatedAt, screenshots, viewport

### Community 5 - ".oxlintrc.json"
Cohesion: 0.29
Nodes (6): ignorePatterns, plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 6 - "useTheme"
Cohesion: 0.31
Nodes (6): ColorScheme, getSystemScheme(), readStoredScheme(), syncMetaColorScheme(), THEME_STORAGE_KEY, useTheme()

### Community 7 - "Cakrawangsa Praba Alkautsar — Portfolio"
Cohesion: 0.17
Nodes (11): Cakrawangsa Praba Alkautsar — Portfolio, Commands, Contact, Deployment, Featured Projects in This Portfolio, Highlights, Local Development, Overview (+3 more)

### Community 10 - "Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar"
Cohesion: 0.08
Nodes (25): 1. Intent & Why, 2. Goals, Non-Goals, and Anti-Goals, 3. Approaches Considered, 4. Visual Design System (Violet Evergarden), 5. Authoritative CV & Profile Content Inventory, 6. Project Showcase, Link Map & Screenshot Acquisition Rules, 7. Architecture, Standards & Verification, Anti-Goals (+17 more)

### Community 11 - "App.tsx"
Cohesion: 0.14
Nodes (29): lucide-react, react, AmbientPetals(), BOKEH_MOTES, BokehSpec, PETALS, PetalSpec, GithubIcon() (+21 more)

### Community 13 - "useLanguage"
Cohesion: 0.15
Nodes (20): File Structure, Global Constraints, Review Focus, Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`, Task 2: Generate Violet Evergarden Artwork & Acquire Real Project Screenshots, Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules, Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch"), Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox (+12 more)

### Community 14 - "ProjectModal.tsx"
Cohesion: 0.24
Nodes (13): TelegramIcon(), LinkIcon(), ModalContentProps, ProjectModal(), ProjectModalContent(), ProjectModalProps, FILTER_ORDER, ProjectsSection() (+5 more)

### Community 15 - "App.tsx"
Cohesion: 0.14
Nodes (16): dependencies, framer-motion@^14.14.0, lucide-react@^1.80.0, react@^19.3.1, react-dom@^19.3.1, tailwindcss@^4.3.5, framer-motion, react-dom (+8 more)

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.tsx` to `package.json`, `types.ts`, `useTheme`, `useLanguage`, `ProjectModal.tsx`, `App.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useLanguage()` (e.g. with `Review Focus` and `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext``) actually correct?**
  _`useLanguage()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.058279370952821465 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `package.json` to `types.ts`, `useTheme`, `App.tsx`, `useLanguage`, `ProjectModal.tsx`, `App.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `resolveAssetUrl()` (e.g. with `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` and `Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")`) actually correct?**
  _`resolveAssetUrl()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `useLanguage()` connect `useLanguage` to `types.ts`, `App.tsx`, `ProjectModal.tsx`, `App.tsx`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._