# Graph Report - portfolio  (2026-11-26)

## Corpus Check
- 47 files · ~27,025 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 4, .css 1)

## Summary
- 280 nodes · 623 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7ee25928`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- compilerOptions
- types.ts
- manifest.json
- .oxlintrc.json
- MockIntersectionObserver
- React + TypeScript + Vite
- tsconfig.json
- Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar
- useLanguage
- useLanguage.ts
- Header.tsx
- ProjectModal.tsx
- scripts

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 32 edges
2. `LocalizedString` - 18 edges
3. `compilerOptions` - 18 edges
4. `resolveAssetUrl()` - 15 edges
5. `react` - 15 edges
6. `compilerOptions` - 15 edges
7. `App()` - 14 edges
8. `lucide-react` - 14 edges
9. `UI_STRINGS` - 13 edges
10. `LanguageProvider()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules` --references--> `LocalizedString`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `File Structure` --references--> `LanguageProvider()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/LanguageContext.tsx
- `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` --references--> `LanguageProvider()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/LanguageContext.tsx
- `Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly` --references--> `LanguageProvider()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/LanguageContext.tsx
- `Review Focus` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.07
Nodes (41): dependencies, framer-motion@^14.14.0, lucide-react@^1.80.0, react@^19.3.1, react-dom@^19.3.1, tailwindcss@^4.3.5, @tailwindcss/vite@^4.3.5, devDependencies (+33 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "types.ts"
Cohesion: 0.12
Nodes (26): CopyFeedback, LocalizedString, assertLocalizedStringsNonEmpty(), PUBLIC_DIR, EXPERIENCES, CREATOR_CHANNEL, OPEN_SOURCE_HIGHLIGHTS, OPEN_SOURCE_PACKAGES (+18 more)

### Community 4 - "manifest.json"
Cohesion: 0.33
Nodes (5): artwork, editorialFallbacks, generatedAt, screenshots, viewport

### Community 5 - ".oxlintrc.json"
Cohesion: 0.29
Nodes (6): ignorePatterns, plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 7 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

### Community 10 - "Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar"
Cohesion: 0.08
Nodes (25): 1. Intent & Why, 2. Goals, Non-Goals, and Anti-Goals, 3. Approaches Considered, 4. Visual Design System (Violet Evergarden), 5. Authoritative CV & Profile Content Inventory, 6. Project Showcase, Link Map & Screenshot Acquisition Rules, 7. Architecture, Standards & Verification, Anti-Goals (+17 more)

### Community 11 - "useLanguage"
Cohesion: 0.12
Nodes (31): Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly, App(), AmbientPetals(), PETALS, PetalSpec, GithubIcon(), LinkedinIcon(), YoutubeIcon() (+23 more)

### Community 12 - "useLanguage.ts"
Cohesion: 0.26
Nodes (11): react, ProjectsSection(), renderProjects(), getInitialLocale(), LanguageProvider(), parseLocale(), Probe(), LANG_STORAGE_KEY (+3 more)

### Community 13 - "Header.tsx"
Cohesion: 0.12
Nodes (17): File Structure, Global Constraints, Review Focus, Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`, Task 2: Generate Violet Evergarden Artwork & Acquire Real Project Screenshots, Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules, Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch"), Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox (+9 more)

### Community 14 - "ProjectModal.tsx"
Cohesion: 0.23
Nodes (13): TelegramIcon(), LinkIcon(), ModalContentProps, ProjectModal(), ProjectModalContent(), ProjectModalProps, FILTER_ORDER, SiakaduPreview() (+5 more)

### Community 15 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, prepare-hooks, preview, test

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `useLanguage.ts` to `package.json`, `types.ts`, `useLanguage`, `Header.tsx`, `ProjectModal.tsx`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useLanguage()` (e.g. with `Review Focus` and `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext``) actually correct?**
  _`useLanguage()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `package.json` to `types.ts`, `useLanguage`, `useLanguage.ts`, `Header.tsx`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `resolveAssetUrl()` (e.g. with `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` and `Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")`) actually correct?**
  _`resolveAssetUrl()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `useLanguage()` connect `useLanguage` to `types.ts`, `useLanguage.ts`, `Header.tsx`, `ProjectModal.tsx`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._