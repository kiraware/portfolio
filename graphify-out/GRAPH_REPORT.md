# Graph Report - portfolio  (2026-11-26)

## Corpus Check
- 46 files · ~26,135 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 4, .css 1)

## Summary
- 276 nodes · 614 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `16d70717`
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
- Hero.tsx
- useLanguage.ts
- Header.tsx
- ProjectModal.tsx
- App.tsx

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
- `Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")` --references--> `useTheme()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/hooks/useTheme.ts
- `Review Focus` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (48): dependencies, framer-motion@^14.14.0, lucide-react@^1.80.0, react@^19.3.1, react-dom@^19.3.1, tailwindcss@^4.3.5, @tailwindcss/vite@^4.3.5, devDependencies (+40 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "types.ts"
Cohesion: 0.16
Nodes (19): EXP_FILTERS, LocalizedString, EXPERIENCES, SIAKADU_DEMO_MESSAGES, CertificationItem, CreatorChannel, EducationItem, ExperienceCategory (+11 more)

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

### Community 11 - "Hero.tsx"
Cohesion: 0.15
Nodes (23): lucide-react, AmbientPetals(), PETALS, PetalSpec, GithubIcon(), LinkedinIcon(), YoutubeIcon(), ContactSection() (+15 more)

### Community 12 - "useLanguage.ts"
Cohesion: 0.33
Nodes (8): react, getInitialLocale(), parseLocale(), Probe(), LANG_STORAGE_KEY, LanguageContext, LanguageContextValue, Locale

### Community 13 - "Header.tsx"
Cohesion: 0.11
Nodes (21): File Structure, Global Constraints, Review Focus, Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`, Task 2: Generate Violet Evergarden Artwork & Acquire Real Project Screenshots, Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules, Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly, Task 7: End-to-End Visual QA, Responsive & Accessibility Verification, and Graphify Sync (+13 more)

### Community 14 - "ProjectModal.tsx"
Cohesion: 0.22
Nodes (16): Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch"), Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox, TelegramIcon(), LinkIcon(), ModalContentProps, ProjectModal(), ProjectModalContent(), ProjectModalProps (+8 more)

### Community 15 - "App.tsx"
Cohesion: 0.26
Nodes (8): App(), ExperienceSection(), Footer(), OpenSourceSection(), OrnamentalDivider(), OrnamentalDividerProps, WaxSealMonogramProps, SkillsEducationSection()

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `useLanguage.ts` to `package.json`, `types.ts`, `Hero.tsx`, `Header.tsx`, `ProjectModal.tsx`, `App.tsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useLanguage()` (e.g. with `Review Focus` and `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext``) actually correct?**
  _`useLanguage()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.055152394775036286 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `package.json` to `Hero.tsx`, `useLanguage.ts`, `Header.tsx`, `ProjectModal.tsx`, `App.tsx`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `resolveAssetUrl()` (e.g. with `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` and `Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")`) actually correct?**
  _`resolveAssetUrl()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `useLanguage()` connect `ProjectModal.tsx` to `types.ts`, `Hero.tsx`, `useLanguage.ts`, `Header.tsx`, `App.tsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._