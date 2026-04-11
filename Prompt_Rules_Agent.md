# 🚀 Prompt Rules — Agent Architecture & Context Management

> **Purpose:** Rules and guidelines for anyone (human or AI) prompting the Copilot coding agent on this repository. Includes architecture documentation, context window management strategy, and the "rocket ship" build model.

---

## 📐 Agent Architecture Overview

### What This Agent Is

This repository uses the **GitHub Copilot coding agent** (also called "Copilot agent mode" or the "SWE agent"). This is fundamentally different from:

- **Copilot Chat** — inline IDE completions with ~8K token context
- **Copilot in the CLI** — terminal command suggestions
- **Standard Copilot** — autocomplete in editors

The coding agent is a **fully autonomous software engineering agent** that:

| Capability | Detail |
|-----------|--------|
| **Runs in a sandbox** | Isolated Ubuntu environment with full filesystem access |
| **Has tool access** | Can read/write files, run bash commands, use git, call GitHub APIs, search code, browse the web |
| **Manages its own context** | Reads files on demand rather than having the entire repo loaded |
| **Works on branches** | Operates on a dedicated branch and pushes via `report_progress` |
| **Has memory** | Receives `repository_memories` from prior sessions — short-term facts that decay over time |
| **Cannot push directly** | Must use `report_progress` tool to commit and push changes |
| **Cannot clone repos** | Works only with the pre-cloned repository in the sandbox |

### Architecture Layers

```
┌─────────────────────────────────────────────────┐
│             USER PROMPT (Problem Statement)       │
├─────────────────────────────────────────────────┤
│          MAIN AGENT (Master Orchestrator)          │
│  - Reads the prompt                                │
│  - Plans the work (checklist)                      │
│  - Decomposes into sub-tasks                       │
│  - Manages context budget                          │
│  - Calls tools and sub-agents                      │
│  - Reports progress incrementally                  │
├─────────────────────────────────────────────────┤
│              SUB-AGENTS (Booster Stages)           │
│  - explore: Fast codebase research (Haiku model)   │
│  - task: Execute commands, return pass/fail         │
│  - general-purpose: Full toolkit (Sonnet model)    │
├─────────────────────────────────────────────────┤
│                    TOOLS                           │
│  view, edit, create, grep, glob, bash,             │
│  git, GitHub APIs, web_search, web_fetch           │
└─────────────────────────────────────────────────┘
```

---

## 🚀 The Rocket Ship Model

### Metaphor

Treat every build command like **launching a rocket ship into orbit**:

```
                    🛰️  ORBIT (Deployed Result)
                   /
              ════╧════
              ║ FINAL ║   ← Main Agent: the payload + guidance computer
              ║ STAGE ║      Plans everything, carries the mission objective
              ════╤════
              ║STAGE 3║   ← Sub-agent 3 (e.g., validation/testing)
              ║       ║      Burns remaining fuel for final verification
              ════╤════
              ║STAGE 2║   ← Sub-agent 2 (e.g., implementation)
              ║       ║      Burns fuel for code changes
              ════╤════
              ║STAGE 1║   ← Sub-agent 1 (e.g., exploration/research)
              ║       ║      Burns fuel to gather information
              ════╤════
              ║BOOSTER║   ← Initial context: prompt + repo memories + file reads
              ║       ║
          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
        ▓▓▓▓▓▓ LAUNCH ▓▓▓▓▓▓
         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
              🔥🔥🔥🔥
```

### Key Principles

| Principle | Rocket Analogy | Agent Behavior |
|-----------|---------------|----------------|
| **Fuel = Context Window** | Each stage has limited fuel | Each agent/sub-agent has a finite context window (~128K–200K tokens) |
| **Never burn all fuel** | Always keep reserve for course corrections | Never fill the entire context window — leave 20-30% reserve to avoid hallucinations, drift, truncation, and improper loops |
| **Staged separation** | Each booster detaches after its burn | Each sub-agent completes its task and returns a summary — it doesn't carry forward |
| **Pre-planned trajectory** | Mission is planned before launch | The main agent pre-plans ALL context for each sub-agent before dispatching |
| **Payload is the goal** | The satellite reaches orbit | The final deliverable (code changes, files, deployments) is the mission objective |
| **Total fuel budget** | Rocket mass determines fuel needed | The overall size/complexity of the project determines total context budget |

### The Golden Rule

> **The main agent is always the master orchestrator.** It pre-plans all context for each sub-agent so that each sub-agent receives exactly what it needs — no more, no less. All context is predetermined.

---

## 📏 Context Window Limits & Truncation Avoidance

### Hard Limits

| Dimension | Limit | Notes |
|-----------|-------|-------|
| **Input prompt** | ~65,000 characters | The `problem_statement` plus all `repository_memories` plus system instructions. Prompts exceeding this may be truncated silently. |
| **Agent context window** | ~128K–200K tokens | Total tokens the agent can process across one session (all tool calls + responses + reasoning) |
| **Sub-agent context** | ~32K–64K tokens per sub-agent | Each `explore`/`task`/`general-purpose` agent gets its own smaller window |
| **Single tool response** | ~20,000 characters | `web_fetch` and similar tools cap at 20K chars. Use pagination for larger content. |
| **File read limit** | Large files are rejected | Use `view_range` or `grep` instead of reading entire large files |

### Truncation Prevention Checklist

- [ ] **Keep prompts under 50,000 characters** — leave buffer for system instructions
- [ ] **Break large tasks into multiple sessions** — don't try to build everything at once
- [ ] **Use specific file paths** — don't ask the agent to "read everything"
- [ ] **Provide context, not novels** — give the agent what it needs, not your entire thought process
- [ ] **One mission per launch** — each prompt should have one clear objective
- [ ] **Reference files by name** — the agent can read them itself; don't paste file contents into the prompt

### Signs of Context Exhaustion (In-Flight Failures)

| Symptom | Cause | Fix |
|---------|-------|-----|
| Agent starts repeating itself | Context window nearly full | End session, start new one |
| Agent "forgets" earlier instructions | Important context pushed out of window | Re-state key requirements in a new prompt |
| Agent makes changes that contradict earlier changes | Drift from context pressure | Review changes, start fresh session |
| Agent generates code unrelated to the task | Hallucination from context overflow | Stop, review, start fresh |
| Agent enters infinite tool-call loops | Lost track of state | Stop the session |

---

## ✍️ Prompt Engineering Rules

### Rule 1: One Clear Objective Per Prompt

```
❌ Bad:  "Fix the navbar, add a new page, update the README, and deploy"
✅ Good: "Add a Dark Mode toggle to the Navbar component"
```

### Rule 2: Reference, Don't Paste

```
❌ Bad:  "Here's the entire contents of repos.ts: [500 lines of code]..."
✅ Good: "Update site/src/data/repos.ts to add the 'cloudflare/agents' repo to the AI category"
```

### Rule 3: State the Desired End State

```
❌ Bad:  "Something is wrong with the footer"
✅ Good: "The Footer component is missing a link to CLOUDFLARE_PRICING.md — add it"
```

### Rule 4: Provide Context the Agent Can't Discover

```
❌ Bad:  "Make it look nice" (subjective, no context)
✅ Good: "The site uses a dark glassmorphism theme with Cloudflare orange (#f6821f) as the accent color"
```

### Rule 5: Let the Agent Explore

The agent has tools to search, read, and understand the codebase. You don't need to explain what's already in the code — just tell it what you want changed.

---

## 🔄 Multi-Session Build Strategy

For large projects, decompose across multiple agent sessions:

```
Session 1: Foundation     → Core files, data structures, configs
Session 2: Implementation → Components, features, logic
Session 3: Polish         → Bug fixes, SEO, SPA routing, edge cases
Session 4: Documentation  → Build logs, prompt rules, READMEs
Session 5: Validation     → Final review, security scan, deploy readiness
```

Each session should:
1. **Read `Build_Log_Agent.md` first** — understand what's been done
2. **Check git log** — see recent changes
3. **Verify build** — ensure nothing is broken before making changes
4. **Update `Build_Log_Agent.md`** — document what was done in this session

---

## 🏗️ Repository-Specific Rules

### For This Repository (Cloudflare_Index)

| Rule | Detail |
|------|--------|
| **Never edit `CLOUDFLARE_INDEX.md` or `CLOUDFLARE_TOPICS.md` by hand** | They are auto-generated. Fix categorization via `EXPLICIT_OVERRIDES` in the Python script. |
| **Always build after site changes** | `cd site && npm install && npx vite build` — must produce ~245KB output with 0 errors |
| **Base path matters** | Site is served at `/Cloudflare_Index/`, not `/`. All links must respect this. |
| **No test suite** | Validation = TypeScript compilation + CodeQL security scan + manual review |
| **Markdown docs are hand-curated** | `README.md`, `CLOUDFLARE_ECOSYSTEM.md`, `AWESOME_CLOUDFLARE.md`, `CLOUDFLARE_MCP.md`, `CLOUDFLARE_PRICING.md`, `CONTRIBUTING.md` |
| **Owner uses AI browser agents** | Commands may come through Perplexity Browser or similar tools — this is legitimate |

### Commit Message Convention

```
feat: add new feature
fix: fix a bug
docs: documentation only
chore: maintenance (deps, CI, etc.)
refactor: code restructure, no behavior change
```

Always use imperative mood: "add feature" not "added feature" or "adding feature".

---

## 🧠 Agent Self-Knowledge

### What the Agent Knows About Itself

1. **Model:** The coding agent runs on Claude (Anthropic) models — typically Sonnet for the main agent, Haiku for explore sub-agents. The specific model can vary.

2. **Statelesness:** Each session starts fresh. The agent has no persistent memory except `repository_memories` (which decay over time) and whatever is committed to the repository.

3. **Tool-first design:** The agent is designed to use tools (file ops, bash, git, search) rather than reasoning from memory. Always verify by reading files, not by assuming.

4. **Cannot access `.github/agents/`:** This directory is off-limits.

5. **Push mechanism:** The agent cannot `git push` directly. It must use the `report_progress` tool, which handles `git add .`, `git commit`, and `git push` atomically.

6. **Parallel execution:** The agent can call multiple tools simultaneously when they're independent. This is a major efficiency advantage — use it.

7. **Sub-agent types:**
   - `explore` — Lightweight research agent (Haiku). Best for "find X in the codebase" tasks.
   - `task` — Command execution agent (Haiku). Best for "run this build/test and tell me if it passed."
   - `general-purpose` — Full-capability agent (Sonnet). Best for complex multi-step work.

8. **Validation tools:**
   - `parallel_validation` — Runs Code Review + CodeQL Security Scan in parallel
   - `gh-advisory-database` — Checks for known vulnerabilities in dependencies
   - Always run validation before finalizing

### What the Agent Cannot Do

- Cannot access the internet freely (many domains are blocked)
- Cannot clone other repositories
- Cannot push to branches other than the working branch
- Cannot access secrets or credentials
- Cannot run long-lived servers that persist across sessions (unless `detach: true`)
- Cannot modify `.github/agents/` directory
- Cannot use `pkill` or `killall` (must use `kill <PID>`)

---

## 📖 Quick Reference Card

```
┌──────────────────────────────────────────────┐
│           AGENT QUICK REFERENCE               │
├──────────────────────────────────────────────┤
│ Build site:     cd site && npm ci && npx vite build         │
│ Type-check:     cd site && npx tsc --noEmit                 │
│ Regen index:    GITHUB_TOKEN=x python scripts/generate_cloudflare_index.py --topics │
│ Commit+push:    Use report_progress tool                    │
│ Validate:       Use parallel_validation tool                │
│ Check deps:     Use gh-advisory-database tool               │
│                                                              │
│ Max prompt:     ~65,000 chars                                │
│ Context window: ~128K–200K tokens                            │
│ Reserve:        Keep 20-30% context free                     │
│                                                              │
│ Branch:         copilot/create-cloudflare-index-repo         │
│ Deploy target:  GitHub Pages                                 │
│ Base path:      /Cloudflare_Index/                           │
│ Node version:   22                                           │
│ Python version: 3.11                                         │
└──────────────────────────────────────────────┘
```

---

*Last updated: 2026-04-11 by Copilot coding agent (Session 3)*
