# 🏗️ Build Log — Agent History

> **Purpose:** This file documents every action, decision, and artifact produced by the Copilot coding agent across all sessions on the `SpiralCloudOmega/Cloudflare_Index` repository. It exists exclusively for agent continuity — so any future agent session can resume with full context without re-exploring the entire codebase.

---

## 📌 Repository Identity

| Key | Value |
|-----|-------|
| **Owner** | `SpiralCloudOmega` |
| **Repo** | `Cloudflare_Index` |
| **Branch** | `copilot/create-cloudflare-index-repo` |
| **License** | MIT |
| **Live Site** | <https://SpiralCloudOmega.github.io/Cloudflare_Index/> |
| **GitHub Pages Source** | `site/dist/` via `deploy_site.yml` |
| **Auto-update** | Weekly (Monday 06:00 UTC) via `update_cloudflare_index.yml` |

---

## 📅 Session Timeline (Chronological)

### Session 0 — Foundation Build (prior to visible git history)

Multiple earlier agent sessions created the entire repository from scratch. The first commit visible in the shallow clone (`00cac91`) already contains **8,204 lines across 36 files**. This means all foundational work (markdown docs, Python script, React site, workflows, data) was done in prior sessions and squashed/grafted.

**What was built in Session 0 (cumulative):**

1. **7 Markdown Documents (3,798 lines total):**
   - `README.md` (406 lines) — Landing page with badges, Mermaid architecture diagrams, file navigation table, contributor guide
   - `CLOUDFLARE_INDEX.md` (669 lines) — A–Z alphabetical index of all 478+ Cloudflare public repos with descriptions, languages, star counts
   - `CLOUDFLARE_TOPICS.md` (766 lines) — 10-category topic-organized view (AI/ML, Workers, Security, Networking, etc.) with collapsible full lists
   - `CLOUDFLARE_ECOSYSTEM.md` (468 lines) — Product-to-repo mapping (every Cloudflare product → its open-source repos)
   - `AWESOME_CLOUDFLARE.md` (322 lines) — Curated community tools, frameworks (Hono, RedwoodSDK), awesome lists
   - `CLOUDFLARE_MCP.md` (350 lines) — MCP (Model Context Protocol) integration guide with 3 Mermaid diagrams
   - `CLOUDFLARE_PRICING.md` (280 lines) — Pricing reference with 2 Mermaid diagrams (Workers AI, R2, D1, KV, etc.)

2. **Python Auto-Generation Script (412 lines):**
   - `scripts/generate_cloudflare_index.py`
   - Fetches all public repos from `github.com/cloudflare` via REST API
   - Paginates through all results (100/page)
   - Categorizes each repo using keyword rules + `EXPLICIT_OVERRIDES` dict (21 overrides)
   - 10 categories: AI & Machine Learning, Workers & Serverless, Security & Cryptography, Networking & Infrastructure, Observability & Monitoring, Databases & Storage, Developer Tools & SDKs, Web & Frontend, Documentation & Examples, Libraries & Utilities
   - Generates both `CLOUDFLARE_INDEX.md` (A–Z) and `CLOUDFLARE_TOPICS.md` (by category)
   - CLI flags: `--topics`, `--json`
   - Requires `GITHUB_TOKEN` env var for authenticated rate limits (5,000/hr vs 60/hr)

3. **Interactive React Site (2,339 lines across 16 source files):**
   - **Stack:** Vite 6 + React 19 + TypeScript
   - **Base path:** `/Cloudflare_Index/` (GitHub Pages)
   - **11 Components:**
     - `Navbar.tsx` (220 lines) — Fixed top nav, smooth scroll links, mobile hamburger menu, GitHub button
     - `Hero.tsx` (185 lines) — Animated count-up badges (repos/stars/forks), gradient background with floating dots, "Explore ↓" CTA
     - `Stats.tsx` (125 lines) — Intersection Observer count-up animation for repo/stars/forks/categories
     - `EcosystemGraph.tsx` (271 lines) — SVG radial graph with 10 category nodes, 11 inter-category connection lines, animated tooltips, hover glow effects
     - `CategoryCards.tsx` (201 lines) — Grid of category cards with IntersectionObserver staggered reveal, expandable repo lists with direct GitHub links
     - `QuickStart.tsx` (173 lines) — 6 Wrangler CLI command cards with copy-to-clipboard
     - `RepoExplorer.tsx` (255 lines) — Searchable/filterable/sortable table of all top repos, keyboard shortcut (`/` to focus, `Esc` to blur), category pill filters
     - `Timeline.tsx` (95 lines) — Vertical timeline of 8 Cloudflare open-source milestones (2014–2025)
     - `LanguageChart.tsx` (155 lines) — Horizontal bar chart + pie strip showing language distribution across 478 repos
     - `Footer.tsx` (126 lines) — Links to all markdown docs, vite-react-template credit, R2 Explorer link
     - `BackToTop.tsx` (60 lines) — Floating scroll-to-top button appearing after 500px scroll
   - **Data layer:** `repos.ts` (212 lines) — 10 categories, 60+ top repos with star counts, language distribution stats, timeline milestones
   - **Styling:** `index.css` (219 lines) — Dark glassmorphism theme, CSS custom properties, 8 keyframe animations, responsive breakpoints (768px, 480px)

4. **GitHub Actions Workflows (2 files):**
   - `deploy_site.yml` (58 lines) — Triggers on push to `main` when `site/**` changes, or manual dispatch. Builds with Node 22 + npm ci, deploys to GitHub Pages via `actions/deploy-pages@v4`
   - `update_cloudflare_index.yml` (35 lines) — Weekly cron (Monday 06:00 UTC) + manual dispatch. Runs Python script, commits + pushes if files changed

5. **Supporting Files:**
   - `CONTRIBUTING.md` (121 lines) — How to contribute, category override guide, PR guidelines
   - `LICENSE` (21 lines) — MIT
   - `.gitignore` (7 lines) — node_modules, dist, __pycache__, .env
   - `site/public/cloudflare.svg` — Cloudflare logo icon

---

### Session 1 — First Agent Session (commit `00cac91`, 2026-04-11 22:30 UTC)

**Trigger:** Agent received task to fix a non-Cloudflare repo URL.

**Action:** Replaced `stpyv8` URL (not a Cloudflare repo) with `wirefilter` (a genuine Cloudflare repo) in `site/src/data/repos.ts`.

**Commit:** `fix: replace non-Cloudflare repo URL (stpyv8 → wirefilter)`

**Files changed:** 1 (repos.ts)

---

### Session 2 — SPA + SEO + Polish (commit `af81b7a`, 2026-04-11 23:09 UTC)

**Trigger:** Agent completed a full audit and fixed multiple issues:

**Actions:**
1. **Created `site/public/404.html`** (26 lines) — SPA redirect for GitHub Pages. Uses `pathSegmentsToKeep = 1` to preserve `/Cloudflare_Index/` base path, redirects all unknown routes back to `index.html` with path preserved as query parameter.
2. **Created `site/public/.nojekyll`** (0 bytes) — Prevents GitHub Pages Jekyll processing (ensures `_`-prefixed files are served).
3. **Created `site/public/robots.txt`** (4 lines) — `User-agent: * Allow: /` with sitemap reference.
4. **Created `site/public/sitemap.xml`** (8 lines) — Single URL entry for the GitHub Pages site.
5. **Updated `site/src/components/Navbar.tsx`** — Added "Quick Start" link (`#quickstart`) to nav links array.
6. **Updated `site/src/components/Footer.tsx`** — Added `CLOUDFLARE_PRICING.md` to footer links (was the only missing doc).
7. **Updated `site/src/index.css`** — Added `scroll-padding-top: 80px` to `html` for fixed navbar offset when scrolling to anchors.
8. **Updated `README.md`** — Expanded repo structure tree to list all 11 components (was previously listing only 4). Fixed "3D node graph" → "interactive ecosystem graph" (site uses 2D SVG, not WebGL).

**Commit:** `fix: add 404.html SPA routing, .nojekyll, robots.txt, sitemap, navbar/footer fixes, README update`

**Validation:** Build passed (241KB JS, 3.27KB CSS). CodeQL security scan: 0 alerts. Code review: passed (1 informational comment about `pathSegmentsToKeep` which was verified correct).

---

### Session 3 — Build Log + Prompt Rules (commit `e8039bc`, 2026-04-11 23:24 UTC)

**Trigger:** User requested two new documentation files for agent continuity and prompt architecture.

**Actions:**
1. Created `Build_Log_Agent.md` (this file)
2. Created `Prompt_Rules_Agent.md`

**Commit:** `docs: add Build_Log_Agent.md and Prompt_Rules_Agent.md for agent continuity`

---

### Session 4 — N8N-Style Agent Workflow Builder (commit `9e96f67`, 2026-04-13 01:14 UTC)

**Trigger:** User requested n8n-style graph node editor to be built into the site for creating custom agent workflows visually. Referenced `SpiralCloudOmega/n8n` fork.

**Research:**
- n8n uses Vue Flow (@vue-flow/core) — Vue wrapper for React Flow
- Since our site is React, used `@xyflow/react` v12.10.2 (React Flow) — the React equivalent
- No npm vulnerabilities found in `@xyflow/react@12.10.2`

**Actions:**
1. **Installed `@xyflow/react@12.10.2`** — React Flow library for node-based graph editors
2. **Created `site/src/data/agentNodes.ts`** (~230 lines) — Node type registry with 24 node types across 8 categories
3. **Created `site/src/components/AgentNode.tsx`** (~80 lines) — Custom React Flow node renderer
4. **Created `site/src/components/AgentBuilder.tsx`** (~310 lines) — Full n8n-style workflow builder
5. **Updated `site/src/App.tsx`** — Added `<AgentBuilder />` after CategoryCards
6. **Updated `site/src/components/Navbar.tsx`** — Added "🚀 Builder" nav link pointing to `#builder`
7. **Updated `site/src/index.css`** — Added ~130 lines for agent node styles and React Flow overrides

**Build:** Passed — 436KB JS (137KB gzip), 21KB CSS (4.3KB gzip). Zero errors.

---

### Session 5 — Omega Harness Integration (commits `6203647`+, 2026-04-13 22:03 UTC)

**Trigger:** User requested integration of 12 source repositories into a unified "Omega Harness" multi-agent framework with n8n-style graph nodes, detailed architecture documentation, and visual workflow templates.

**Source Repositories Researched (12 total):**
1. `SpiralCloudOmega/Archon` — YAML DAG workflow orchestration (TypeScript/Bun)
2. `SpiralCloudOmega/mempalace` — Persistent AI memory system (Python)
3. `SpiralCloudOmega/Memento-Skills` — Self-evolving agent skills with Read→Execute→Reflect→Write loop (Python)
4. `SpiralCloudOmega/llm-wiki-compiler` — Incremental knowledge compilation into interlinked wikis (TypeScript)
5. `SpiralCloudOmega/lambda-RLM` — λ-calculus recursive language model with typed operators (Python)
6. `SpiralCloudOmega/meta-harness-tbench2-artifact` — Terminal-Bench agent scaffold, 76.4% score (Python)
7. `SpiralCloudOmega/servers` — MCP reference implementations (TypeScript)
8. `SpiralCloudOmega/mcp-server-cloudflare` — 15+ domain-specific Cloudflare MCP servers (TypeScript)
9. `SpiralCloudOmega/MegaTrain` — 100B+ parameter training on single GPU with double-buffering (Python)
10. `SpiralCloudOmega/awesome-autoresearch` — Karpathy-inspired perpetual research patterns (Markdown)
11. `SpiralCloudOmega/claude-cookbooks` — Production-ready Claude API recipes (Python/TypeScript)
12. `SpiralCloudOmega/claude-code-best-practice` — Agent team orchestration patterns (Markdown)

**Actions:**

**Phase 1 — Expanded Node Type Registry (agentNodes.ts):**
- Grew from 24 node types / 8 categories → **56 node types / 14 categories**
- New categories: Memory (5 nodes), Skills (5), Protocols (5), Research (4), Compiler (4), Training & RLM (4)
- Every node has: label, description, emoji, color, category, handle counts, source attribution, detailed tooltip
- Added color palette constants for all 14 categories

**Phase 2 — Pre-Built Workflow Templates (6 total):**
1. **Omega Agent Pipeline** (9 nodes) — Full-stack: orchestrator → memory + skills + MCP → AI → persist → respond
2. **RAG + Wiki Compiler** (8 nodes) — Search → extract → embed → vectorize → compile wiki → R2
3. **Autoresearch Loop** (7 nodes) — Cron → search + analyze → knowledge graph → memory → queue feedback
4. **Skill Evolution Loop** (7 nodes) — Event → route → execute/create → reflect → library → notify
5. **RLM Recursive Decomposition** (7 nodes) — HTTP → decompose → leaf solve × N → reduce → env store
6. **Simple Cloudflare Worker** (6 nodes) — HTTP → Worker → AI + KV → Transform → Response

**Phase 3 — Updated AgentBuilder Component:**
- Added template selector dropdown (📋 Templates button with 6 template cards)
- Added workflow export button (📥 Export → downloads omega-workflow.json)
- Enhanced detail panel showing: source attribution, handle count, detailed description
- Updated AgentNode to display source repo badge
- Default view now shows Omega Agent Pipeline template

**Phase 4 — Documentation (7 new files):**
1. `Omega_Harness_Architecture.md` — Unified system architecture with layer diagram, subsystem map, deployment model, Mermaid diagrams
2. `MCP_Protocol_Integration.md` — MCP protocol layer: 15+ servers, tool schemas, auth, communication patterns
3. `Skill_Evolution_Framework.md` — Memento-Skills integration: Read→Execute→Reflect→Write, skill routing, utility scoring
4. `Recursive_Language_Model_Patterns.md` — λ-RLM: SPLIT/MAP/REDUCE operators, bounded inference, env var storage
5. `Memory_Palace_Persistence.md` — Cross-session memory: spatial organization, backend storage, token cost analysis
6. `Autoresearch_Loop_Design.md` — Perpetual research: directives, scheduling, wiki integration, quality metrics
7. `Cloudflare_Agent_Workflows.md` — All 6 workflow templates with node layouts, use cases, JSON export format

**Phase 5 — Updated README.md:**
- Added Omega Harness documentation table (7 new links)
- Updated repository structure tree (13 components, 56 node types, all new docs)

**Build:** Passed — 464KB JS (145KB gzip), 21KB CSS (4.3KB gzip). Zero errors.

---

### Session 6 — PacktPub Library Integration + Ecosystem Map (2026-04-13 23:22 UTC)

**Trigger:** User shared `SpiralCloudOmega/PACKTPub_The_Digital_Library_Of_Alexandria` repo and requested creative additions — "go through it, be creative, build whatever you see might be useful."

**Research:**
- PacktPub Digital Library: 9,200+ PacktPublishing repos, multi-format document storage (Git LFS), Filza-inspired web app with 5 tabs (Files, Convert, Editor, Settings, Packt), 18 topic categories, Python upload/stats scripts, weekly index auto-update
- Identified integration opportunity: PacktPub as a knowledge acquisition source feeding into the Omega Harness agent pipeline

**Actions:**

**Phase 1 — New Knowledge Base Node Types (5 new nodes, 61+ total):**
- `packtSearch` — Search 9,200+ PacktPub repos by keyword/topic
- `documentIngest` — Multi-format document parsing (PDF, EPUB, PPTX, DOCX, CSV)
- `bookIndex` — Alphabetical & topic-organized book reference index
- `referenceResolver` — Cross-reference linker (books ↔ code repos ↔ concepts)
- `trainingDataExtractor` — Extract Q&A pairs, code examples for fine-tuning

**Phase 2 — 7th Workflow Template: Knowledge Acquisition Pipeline:**
- 10 nodes, 11 edges
- Flow: Cron → PacktPub Search + Document Ingest → Concept Extractor + Reference Resolver → Embedding Engine + Wiki Compiler + Training Extractor → Vectorize + R2 Bucket
- Covers full pipeline from discovery through storage

**Phase 3 — New EcosystemMap.tsx Component (~300 lines):**
- Interactive SVG showing all 16 SpiralCloudOmega repos as connected nodes
- 7 color-coded categories (core, agent, memory, knowledge, protocol, training, template)
- 24 connection edges showing data flows between repos
- Hover interaction: highlights connected nodes, dims unconnected ones, animated dash edges
- Tooltip with repo description and category badge
- Click to open repo in new tab
- IntersectionObserver entrance animation with staggered node reveals
- Stats bar: 16 repos, 24 connections, 7 categories, 9,700+ total indexed repos

**Phase 4 — New Documentation (2 files):**
1. `Digital_Library_Knowledge_Pipeline.md` — Full 7-stage pipeline: Discovery → Ingestion → Extraction → Reference Resolution → Compilation → Training Data → Storage
2. `SpiralCloudOmega_Ecosystem_Map.md` — Visual guide to all 16 repos, connection map, stats summary, Mermaid diagram

**Phase 5 — Updated Existing Files:**
- `App.tsx` — Added `<EcosystemMap />` component between AgentBuilder and QuickStart
- `Navbar.tsx` — Added "🗺️ Map" nav link pointing to `#ecosystem-map`
- `Footer.tsx` — Added Omega Harness Architecture link, Ecosystem Map link, PacktPub Library of Alexandria link
- `README.md` — Updated explorer description (61+ nodes, 7 templates), added new doc links (SpiralCloudOmega_Ecosystem_Map, Digital_Library_Knowledge_Pipeline), updated repo structure (14 components)

**Build:** Passed — 479KB JS (149KB gzip), 21KB CSS (4.3KB gzip). Zero errors.

---

## 📊 Current Repository State

### File Inventory (as of Session 6)

| File | Lines | Type | Auto-generated? |
|------|-------|------|-----------------|
| `README.md` | ~430 | Markdown | No (hand-curated) |
| `CLOUDFLARE_INDEX.md` | 669 | Markdown | Yes (by Python script) |
| `CLOUDFLARE_TOPICS.md` | 766 | Markdown | Yes (by Python script) |
| `CLOUDFLARE_ECOSYSTEM.md` | 468 | Markdown | No (hand-curated) |
| `AWESOME_CLOUDFLARE.md` | 322 | Markdown | No (hand-curated) |
| `CLOUDFLARE_MCP.md` | 350 | Markdown | No (hand-curated) |
| `CLOUDFLARE_PRICING.md` | 280 | Markdown | No (hand-curated) |
| `Omega_Harness_Architecture.md` | ~280 | Markdown | No (Omega Harness doc) |
| `MCP_Protocol_Integration.md` | ~200 | Markdown | No (Omega Harness doc) |
| `Skill_Evolution_Framework.md` | ~220 | Markdown | No (Omega Harness doc) |
| `Recursive_Language_Model_Patterns.md` | ~210 | Markdown | No (Omega Harness doc) |
| `Memory_Palace_Persistence.md` | ~240 | Markdown | No (Omega Harness doc) |
| `Autoresearch_Loop_Design.md` | ~220 | Markdown | No (Omega Harness doc) |
| `Cloudflare_Agent_Workflows.md` | ~250 | Markdown | No (Omega Harness doc) |
| `Digital_Library_Knowledge_Pipeline.md` | ~200 | Markdown | No (Session 6 — PacktPub integration) |
| `SpiralCloudOmega_Ecosystem_Map.md` | ~250 | Markdown | No (Session 6 — ecosystem infographic) |
| `CONTRIBUTING.md` | 121 | Markdown | No (hand-curated) |
| `Build_Log_Agent.md` | ~440 | Markdown | No (agent doc) |
| `Prompt_Rules_Agent.md` | ~286 | Markdown | No (agent doc) |
| `LICENSE` | 21 | Text | No |
| `scripts/generate_cloudflare_index.py` | 412 | Python | No |
| `site/src/data/agentNodes.ts` | ~1,120 | TypeScript | No (61+ nodes, 14 categories, 7 templates) |
| `site/src/data/repos.ts` | 212 | TypeScript | No (category data) |
| `site/src/components/AgentBuilder.tsx` | ~370 | TSX | No (n8n-style builder with templates) |
| `site/src/components/AgentNode.tsx` | ~80 | TSX | No (custom node with source badge) |
| `site/src/components/EcosystemMap.tsx` | ~300 | TSX | No (Session 6 — interactive SVG ecosystem) |
| `site/src/components/*.tsx` (11 other) | ~1,990 | TSX | No |
| `site/src/index.css` | ~360 | CSS | No |
| `site/public/**` (5 files) | ~40 | HTML/SVG/XML/TXT | No |
| `site/package.json` | 23 | JSON | No |
| `site/vite.config.ts` | 14 | TypeScript | No |
| `site/tsconfig*.json` | 27 | JSON | No |
| `.github/workflows/*` (2 files) | 93 | YAML | No |
| `.gitignore` | 7 | Text | No |

**Total:** ~10,500+ lines of content (excluding `package-lock.json`)

### Build Commands

```bash
# Build the site
cd site && npm install && npx vite build
# Output: site/dist/ (~479KB JS + 21KB CSS, ~154KB gzipped total)

# Regenerate the index from GitHub API
GITHUB_TOKEN=xxx python scripts/generate_cloudflare_index.py --topics

# Type-check (no emit)
cd site && npx tsc --noEmit
```

### Key Technical Details

- **Vite base path:** `/Cloudflare_Index/` (set in `site/vite.config.ts`)
- **Node version:** 22 (set in `deploy_site.yml`)
- **Python version:** 3.11 (set in `update_cloudflare_index.yml`)
- **GitHub Pages deployment:** Uses `actions/deploy-pages@v4` with artifact upload
- **Auto-update schedule:** Every Monday at 06:00 UTC
- **SPA routing:** `404.html` redirects to `index.html` preserving path as query param
- **Fonts:** JetBrains Mono + Inter (loaded from Google Fonts in `site/index.html`)
- **Theme:** Dark glassmorphism (CSS custom properties in `index.css`)

### What NOT to Edit Manually

⚠️ **Do NOT manually edit these files** — they are auto-generated by `scripts/generate_cloudflare_index.py`:
- `CLOUDFLARE_INDEX.md`
- `CLOUDFLARE_TOPICS.md`

To fix categorization, update the `EXPLICIT_OVERRIDES` dict in the Python script instead.

---

## 🔗 External References

| Resource | URL |
|----------|-----|
| Repository | <https://github.com/SpiralCloudOmega/Cloudflare_Index> |
| Live Site | <https://SpiralCloudOmega.github.io/Cloudflare_Index/> |
| Cloudflare GitHub Org | <https://github.com/cloudflare> |
| User's n8n fork | <https://github.com/SpiralCloudOmega/n8n> |
| Archon | <https://github.com/SpiralCloudOmega/Archon> |
| mempalace | <https://github.com/SpiralCloudOmega/mempalace> |
| Memento-Skills | <https://github.com/SpiralCloudOmega/Memento-Skills> |
| llm-wiki-compiler | <https://github.com/SpiralCloudOmega/llm-wiki-compiler> |
| lambda-RLM | <https://github.com/SpiralCloudOmega/lambda-RLM> |
| meta-harness-tbench2 | <https://github.com/SpiralCloudOmega/meta-harness-tbench2-artifact> |
| MCP servers | <https://github.com/SpiralCloudOmega/servers> |
| mcp-server-cloudflare | <https://github.com/SpiralCloudOmega/mcp-server-cloudflare> |
| MegaTrain | <https://github.com/SpiralCloudOmega/MegaTrain> |
| awesome-autoresearch | <https://github.com/SpiralCloudOmega/awesome-autoresearch> |
| React Flow (xyflow) | <https://reactflow.dev/> |

---

## 🧠 Agent Notes for Future Sessions

1. **Shallow clone:** The repo is always provided as a shallow clone. Use `git fetch --unshallow origin` if you need full history.
2. **Branch:** All work happens on `copilot/create-cloudflare-index-repo`. The `main` branch is the merge target.
3. **Build verification:** Always run `cd site && npm install && npx vite build` after any site changes. Build should produce ~464KB JS + 21KB CSS (~150KB gzipped).
4. **User context:** The owner (SpiralCloudOmega) uses Perplexity Browser and other AI tools to interact with GitHub. Commands may be relayed through AI browser agents — this is legitimate usage from the repository owner.
5. **Repo purpose:** This is a comprehensive index of Cloudflare's open-source ecosystem AND the Omega Harness multi-agent framework. It's a community/personal project by SpiralCloudOmega.
6. **No tests:** There are no test suites. Validation is done via `vite build` (TypeScript compilation) and CodeQL security scanning.
7. **The site is static:** There's no backend. All data is hardcoded in `site/src/data/repos.ts` and `site/src/data/agentNodes.ts`. The Python script generates markdown files, not site data.
8. **Agent Builder:** The site includes an n8n-style node graph editor (`AgentBuilder.tsx`) using `@xyflow/react@12.10.2`. **56 node types** across **14 categories** with **6 pre-built workflow templates**. Includes template selector, workflow export, and expanded detail panel.
9. **User's repos:** The user owns 12+ repos that feed into the Omega Harness architecture: Archon, mempalace, Memento-Skills, llm-wiki-compiler, lambda-RLM, meta-harness-tbench2-artifact, servers (MCP), mcp-server-cloudflare, MegaTrain, awesome-autoresearch, claude-cookbooks, claude-code-best-practice, n8n.
10. **File naming convention:** User requires descriptive file names, not generic ones. E.g., `Skill_Evolution_Framework.md` not `Agent.md`. Every file must describe its specific purpose.
11. **Omega Harness architecture:** 7 new documentation files define the multi-agent framework. See `Omega_Harness_Architecture.md` for the master architecture document.
12. **Copilot CLI SDK:** The user plans to drive the entire system via their Copilot CLI SDK. All Omega Harness components should be designed with CLI-first operation in mind.
