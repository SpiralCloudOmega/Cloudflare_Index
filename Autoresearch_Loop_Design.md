# 🔬 Autoresearch Loop Design — Perpetual Autonomous Research

> **Based on awesome-autoresearch and Karpathy's autoresearch patterns: agents that continuously discover, extract, validate, and compile knowledge in a perpetual loop.** The Omega Harness integrates this as the Research Layer.

---

## 🔄 The Perpetual Loop

```
    ┌──────────────────────────────────────────────┐
    │                                              │
    ▼                                              │
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌─┴────────┐
│ IDENTIFY │───►│  SEARCH  │───►│ EXTRACT  │───►│  STORE   │
│   GAPS   │    │          │    │          │    │          │
│          │    │ Web, DB, │    │ Concepts,│    │ Memory   │
│ What do  │    │ Papers,  │    │ Facts,   │    │ Palace + │
│ we not   │    │ Code     │    │ Patterns │    │ Knowledge│
│ know?    │    │          │    │          │    │ Graph    │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
    ▲                                              │
    │                                              │
    └──────────── Queue (feedback loop) ───────────┘
```

### Why Perpetual?

Traditional research is a one-shot process: search → read → done. Autoresearch is continuous:

| Traditional | Autoresearch |
|------------|-------------|
| Triggered by user request | Runs autonomously on cron |
| Searches once | Searches perpetually |
| Static results | Knowledge grows over time |
| No gap detection | Identifies what it doesn't know |
| Manual curation | Self-curating with validation |
| Dead after completion | Feeds back into itself |

---

## 🏗️ Omega Harness Research Nodes

### Node: Autoresearch Loop 🔬

| Property | Value |
|----------|-------|
| **Category** | Research |
| **Source** | `SpiralCloudOmega/awesome-autoresearch` |
| **Handles** | 1 input, 2 outputs |
| **Outputs** | Search results (to extractors), Queue feedback (back to self) |

**Core Behavior:**

1. Receives a research directive (from Cron, Queue, or manual trigger)
2. Analyzes current knowledge state (via Memory Palace)
3. Identifies knowledge gaps
4. Dispatches to search agents and paper analyzers
5. Queues follow-up research based on discoveries

### Node: Web Search Agent 🔎

| Property | Value |
|----------|-------|
| **Category** | Research |
| **Source** | `SpiralCloudOmega/awesome-autoresearch` |
| **Handles** | 1 input, 1 output |

**Capabilities:**
- Search APIs (Google, Bing, Brave, etc.)
- Result extraction with LLM summarization
- Citation tracking (URL, title, date, reliability score)
- Deduplication against existing knowledge

### Node: Paper Analyzer 📄

| Property | Value |
|----------|-------|
| **Category** | Research |
| **Source** | `SpiralCloudOmega/awesome-autoresearch` |
| **Handles** | 1 input, 1 output |

**Capabilities:**
- PDF parsing (via Browser Renderer or extraction APIs)
- Markdown and web page analysis
- Key finding extraction (methodology, results, conclusions)
- Figure and table extraction
- BibTeX citation generation

### Node: Knowledge Graph 🕸️

| Property | Value |
|----------|-------|
| **Category** | Research |
| **Source** | Omega Harness |
| **Handles** | 1 input, 1 output |

**Schema:**

```typescript
interface KnowledgeNode {
  id: string;
  type: "concept" | "fact" | "entity" | "relationship";
  label: string;
  description: string;
  confidence: number;
  sources: string[];       // Citation URLs
  relatedTo: string[];     // Connected node IDs
  discoveredAt: string;
  lastValidated: string;
}
```

---

## 🔄 Workflow: Autoresearch Loop

The pre-built "Autoresearch Loop" template:

```
Cron Trigger → Autoresearch Loop → ┬→ Web Search Agent ─┐
                                     │                     │
                                     └→ Paper Analyzer   ──┤
                                                           │
                                         Knowledge Graph ←─┘
                                              │
                                         ┌────┴────┐
                                         │         │
                                   Memory Store   Queue
                                   (persist)    (feedback)
```

---

## 📋 Research Directives

The autoresearch loop operates on directives — structured research goals:

```typescript
interface ResearchDirective {
  id: string;
  topic: string;           // "Cloudflare Workers AI pricing changes"
  scope: "broad" | "narrow" | "deep";
  maxSources: number;      // Budget: how many sources to check
  maxTokens: number;       // Budget: total LLM tokens for this directive
  priority: number;        // 1-10, higher = more urgent
  parentDirective?: string; // If this was spawned from another directive
  expiresAt?: string;      // Stop researching after this date
}
```

### Directive Generation

New directives are generated from:

1. **Manual input** — User requests research on a topic
2. **Knowledge gap detection** — Memory Palace identifies missing info
3. **Discovery spawning** — Found something interesting → spawn sub-directive
4. **Decay detection** — Old facts need revalidation

---

## 🔗 Integration with Wiki Compiler

Research feeds directly into the Wiki Compiler pipeline:

```
Autoresearch Loop
       │
       ▼ (raw findings)
Concept Extractor
       │
       ▼ (structured concepts)
Incremental Builder
       │
       ▼ (wiki pages)
Wikilink Resolver
       │
       ▼ (interlinked wiki)
R2 Bucket (published)
```

This creates a **self-building knowledge base** — research discovers new information, the compiler turns it into navigable wiki pages, and the wiki is stored in R2 for access.

---

## ⏰ Scheduling Patterns

### Cron-Based Research

| Schedule | Purpose | Example Directive |
|----------|---------|-------------------|
| Every hour | Real-time monitoring | "Check Cloudflare status page" |
| Every 6 hours | Trend tracking | "Cloudflare Workers new features" |
| Daily | Deep research | "Latest developments in MCP protocol" |
| Weekly | Comprehensive review | "Full ecosystem audit of Cloudflare repos" |
| Monthly | Strategic analysis | "Competitive landscape: Cloudflare vs competitors" |

### Queue-Based Research (Event-Driven)

```
New MCP tool discovered → Queue → Autoresearch: "Document this tool"
Error in production → Queue → Autoresearch: "Find solutions for this error"
User asks question → Queue → Autoresearch: "Research this topic"
```

---

## 📊 Research Quality Metrics

| Metric | How Measured | Target |
|--------|-------------|--------|
| **Source diversity** | Unique domains per directive | 3+ |
| **Citation freshness** | Avg age of cited sources | < 30 days |
| **Accuracy rate** | Facts validated by follow-up | > 90% |
| **Knowledge growth** | New facts/week added to Memory Palace | 50+ |
| **Gap reduction** | Identified gaps resolved per cycle | > 70% |
| **Token efficiency** | Facts stored per 1K tokens spent | > 5 |

---

## 🔗 Integration with Omega Components

| Component | Research Integration |
|-----------|---------------------|
| **Memory Palace** | All research findings stored as memories |
| **Wiki Compiler** | Findings compiled into navigable wiki |
| **Knowledge Graph** | Entities and relationships mapped |
| **Skill Creator** | Research generates new skills for novel tasks |
| **RLM Decomposer** | Large research queries decomposed into leaf searches |
| **MCP Cloudflare** | Uses Radar, Docs servers for Cloudflare-specific research |

---

*Autoresearch design defined: 2026-04-13 by Copilot coding agent (Session 5)*
