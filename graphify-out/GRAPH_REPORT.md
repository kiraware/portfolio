# Graph Report - portfolio  (2026-11-26)

## Corpus Check
- 36 files · ~22,639 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 2)

## Summary
- 248 nodes · 420 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `02ca02f4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- compilerOptions
- types.ts
- manifest.json
- .oxlintrc.json
- scripts
- React + TypeScript + Vite
- tsconfig.json
- Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar
- Hero.tsx
- LanguageContext.tsx
- useTheme

## God Nodes (most connected - your core abstractions)
1. `LocalizedString` - 18 edges
2. `compilerOptions` - 18 edges
3. `useLanguage()` - 16 edges
4. `compilerOptions` - 15 edges
5. `react` - 11 edges
6. `useTheme()` - 10 edges
7. `Hero()` - 9 edges
8. `vitest` - 9 edges
9. `File Structure` - 9 edges
10. `LanguageProvider()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules` --references--> `LocalizedString`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly` --references--> `App()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/App.tsx
- `Review Focus` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch")` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.07
Nodes (39): dependencies, framer-motion@^14.14.0, lucide-react@^1.80.0, react@^19.3.1, react-dom@^19.3.1, tailwindcss@^4.3.5, @tailwindcss/vite@^4.3.5, devDependencies (+31 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "types.ts"
Cohesion: 0.11
Nodes (28): LocalizedString, assertLocalizedStringsNonEmpty(), PUBLIC_DIR, EXPERIENCES, CREATOR_CHANNEL, OPEN_SOURCE_HIGHLIGHTS, OPEN_SOURCE_PACKAGES, SIAKADU_DEMO_MESSAGES (+20 more)

### Community 4 - "manifest.json"
Cohesion: 0.33
Nodes (5): artwork, editorialFallbacks, generatedAt, screenshots, viewport

### Community 5 - ".oxlintrc.json"
Cohesion: 0.29
Nodes (6): ignorePatterns, plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 6 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, prepare-hooks, preview, test

### Community 7 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the Oxlint configuration, React Compiler, React + TypeScript + Vite

### Community 10 - "Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar"
Cohesion: 0.08
Nodes (25): 1. Intent & Why, 2. Goals, Non-Goals, and Anti-Goals, 3. Approaches Considered, 4. Visual Design System (Violet Evergarden), 5. Authoritative CV & Profile Content Inventory, 6. Project Showcase, Link Map & Screenshot Acquisition Rules, 7. Architecture, Standards & Verification, Anti-Goals (+17 more)

### Community 11 - "Hero.tsx"
Cohesion: 0.15
Nodes (23): framer-motion, lucide-react, AmbientPetals(), PETALS, PetalSpec, GithubIcon(), LinkedinIcon(), YoutubeIcon() (+15 more)

### Community 12 - "LanguageContext.tsx"
Cohesion: 0.18
Nodes (9): react, App(), getInitialLocale(), parseLocale(), Probe(), LANG_STORAGE_KEY, LanguageContext, LanguageContextValue (+1 more)

### Community 13 - "useTheme"
Cohesion: 0.11
Nodes (19): File Structure, Global Constraints, Review Focus, Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`, Task 2: Generate Violet Evergarden Artwork & Acquire Real Project Screenshots, Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules, Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch"), Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox (+11 more)

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `LanguageContext.tsx` to `package.json`, `Hero.tsx`, `useTheme`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useLanguage()` (e.g. with `Review Focus` and `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext``) actually correct?**
  _`useLanguage()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06866002214839424 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `package.json` to `types.ts`, `Hero.tsx`, `LanguageContext.tsx`, `useTheme`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `LocalizedString` connect `types.ts` to `Hero.tsx`, `LanguageContext.tsx`, `useTheme`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._