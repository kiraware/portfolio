# Graph Report - portfolio  (2026-11-26)

## Corpus Check
- 22 files · ~10,979 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 4, .css 2)

## Summary
- 182 nodes · 237 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b4d8dfc1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- compilerOptions
- dependencies
- manifest.json
- .oxlintrc.json
- scripts
- React + TypeScript + Vite
- tsconfig.json
- Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar
- File Structure
- LanguageContext.tsx
- useTheme.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `File Structure` - 9 edges
4. `useLanguage()` - 8 edges
5. `useTheme()` - 8 edges
6. `Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar` - 8 edges
7. `vitest` - 7 edges
8. `react` - 7 edges
9. `scripts` - 7 edges
10. `LanguageProvider()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules` --references--> `LocalizedString`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `File Structure` --references--> `LanguageProvider()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/LanguageContext.tsx
- `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`` --references--> `LanguageProvider()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/LanguageContext.tsx
- `Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly` --references--> `useLanguage()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/context/useLanguage.ts
- `Review Focus` --references--> `useTheme()`  [INFERRED]
  docs/superpowers/plans/2026-11-26-violet-evergarden-portfolio.md → src/hooks/useTheme.ts

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.09
Nodes (31): @tailwindcss/vite@^4.3.5, devDependencies, jsdom@^31.0.1, oxlint@^1.90.0, @testing-library/jest-dom@^8.0.0, @testing-library/react@^16.3.3, @testing-library/user-event@^14.6.13, @types/node@^24.19.2 (+23 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, framer-motion@^14.14.0, lucide-react@^1.80.0, react@^19.3.1, react-dom@^19.3.1, tailwindcss@^4.3.5, framer-motion, lucide-react (+2 more)

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

### Community 11 - "File Structure"
Cohesion: 0.17
Nodes (13): File Structure, Global Constraints, Review Focus, Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext`, Task 2: Generate Violet Evergarden Artwork & Acquire Real Project Screenshots, Task 3: Authoritative Bilingual CV, Project, Experience & Open-Source Data Modules, Task 4: Header, Mobile Navigation Drawer, Ambient Petals & Hero ("Auto Memories Dispatch"), Task 5: Screenshot-First Projects Showcase & Native `<dialog>` Case Study Lightbox (+5 more)

### Community 12 - "LanguageContext.tsx"
Cohesion: 0.17
Nodes (11): Task 6: Experience Timeline, Open Source Spotlight, Skills & Education, Contact Dispatch & App Assembly, react, App(), getInitialLocale(), LanguageProvider(), parseLocale(), LANG_STORAGE_KEY, LanguageContext (+3 more)

### Community 13 - "useTheme.ts"
Cohesion: 0.31
Nodes (6): ColorScheme, getSystemScheme(), readStoredScheme(), syncMetaColorScheme(), THEME_STORAGE_KEY, useTheme()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `LanguageContext.tsx` to `package.json`, `dependencies`, `useTheme.ts`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `useLanguage()` (e.g. with `Review Focus` and `Task 1: Test Harness, Violet Evergarden Theme System, `assetUrl`, `useTheme`, and `LanguageContext``) actually correct?**
  _`useLanguage()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08571428571428572 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `package.json` to `File Structure`, `LanguageContext.tsx`, `useTheme.ts`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Violet Evergarden Portfolio Design — Cakrawangsa Praba Alkautsar` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._