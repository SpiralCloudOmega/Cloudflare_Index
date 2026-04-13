# 🏰 Memory Palace Persistence — Cross-Session Agent Memory

> **Based on mempalace: high-scoring AI memory that persists across conversations.** The Omega Harness uses the Memory Palace as its persistence layer — storing facts, decisions, code patterns, and context that survive across stateless agent sessions.

---

## 🧠 The Memory Problem

AI agents are fundamentally stateless. Each session starts fresh. Without a memory system:

| Problem | Impact |
|---------|--------|
| Agent re-explores code every session | Wasted tokens, slower iteration |
| Decisions are forgotten | Same mistakes repeated |
| Context is lost | Agent can't build on prior work |
| Patterns aren't retained | No learning over time |
| User preferences forgotten | Repetitive instructions needed |

### The Memory Palace Solution

```
Session 1                Session 2                Session 3
┌─────────┐              ┌─────────┐              ┌─────────┐
│  Agent   │──store──►    │  Agent   │──store──►    │  Agent   │
│         │              │         │              │         │
│ learns  │    ┌────┐    │ recalls │    ┌────┐    │ recalls │
│ facts   │───►│ 🏰 │───►│ facts   │───►│ 🏰 │───►│ all     │
│         │    │    │    │ + learns│    │    │    │ context │
└─────────┘    │ MP │    └─────────┘    │ MP │    └─────────┘
               └────┘                   └────┘
          Memory Palace            Memory Palace
          (persistent)             (growing)
```

---

## 🏗️ Omega Harness Memory Nodes

### Node: Memory Palace 🏰

| Property | Value |
|----------|-------|
| **Category** | Memory |
| **Source** | `SpiralCloudOmega/mempalace` |
| **Handles** | 1 input, 1 output |
| **Purpose** | Central memory system — read and write in one node |

The all-in-one memory node that handles both storage and retrieval based on the input context.

### Node: Memory Store 💾

| Property | Value |
|----------|-------|
| **Category** | Memory |
| **Source** | `SpiralCloudOmega/mempalace` |
| **Handles** | 1 input, 1 output |
| **Purpose** | Write facts, decisions, and context to persistent storage |

**What gets stored:**
- Facts discovered about the codebase
- Decisions made and their rationale
- Code patterns identified
- User preferences expressed
- Build configurations and gotchas
- Error resolutions that worked

### Node: Memory Recall 🔮

| Property | Value |
|----------|-------|
| **Category** | Memory |
| **Source** | `SpiralCloudOmega/mempalace` |
| **Handles** | 1 input, 1 output |
| **Purpose** | Retrieve relevant memories using semantic search |

**Retrieval Process:**
1. Current task/context is embedded into a vector
2. Vectorize searches for semantically similar memories
3. Top-K relevant memories are returned
4. Memories are ranked by relevance + recency
5. Agent receives pre-filtered context (no wasted tokens)

### Node: Context Window ⛽

| Property | Value |
|----------|-------|
| **Category** | Memory |
| **Source** | Omega Harness |
| **Handles** | 1 input, 2 outputs |
| **Outputs** | Continue (fuel remaining), Emergency Detach (near limit) |

**Fuel Gauge Behavior:**
- Tracks cumulative token usage across the session
- Output 1 (Continue): fires when context usage is below 70%
- Output 2 (Emergency): fires when context usage exceeds 70%
- Enables graceful degradation — agent can checkpoint and hand off

### Node: Env Variable Store 🔑

| Property | Value |
|----------|-------|
| **Category** | Memory |
| **Source** | `SpiralCloudOmega/lambda-RLM` |
| **Handles** | 1 input, 1 output |
| **Purpose** | Store data in environment variables for zero-token-cost retrieval |

---

## 📐 Memory Architecture

### Storage Backends

```
┌──────────────────────────────────────────────────────┐
│                    Memory Palace                      │
├──────────────────────────────────────────────────────┤
│                                                        │
│  ┌───────────────┐  ┌───────────────┐  ┌──────────┐  │
│  │   Vectorize   │  │   Workers KV  │  │    R2    │  │
│  │               │  │               │  │          │  │
│  │ Semantic      │  │ Key-value     │  │ Large    │  │
│  │ search index  │  │ fast lookup   │  │ objects  │  │
│  │ (embeddings)  │  │ (facts/meta)  │  │ (blobs)  │  │
│  └───────────────┘  └───────────────┘  └──────────┘  │
│                                                        │
│  ┌───────────────────────────────────────────────┐    │
│  │                D1 (SQLite)                     │    │
│  │  Memory metadata, relationships, history       │    │
│  └───────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────┘
```

### Memory Schema

```typescript
interface Memory {
  id: string;
  content: string;        // The fact/decision/pattern
  type: "fact" | "decision" | "pattern" | "preference" | "error_resolution";
  embedding: Float32Array; // Vector for semantic search
  created: string;         // ISO timestamp
  lastAccessed: string;    // Updated on recall
  accessCount: number;     // Popularity metric
  confidence: number;      // 0.0 - 1.0
  source: string;          // Which session/agent stored this
  tags: string[];          // Categorical tags
  expiresAt?: string;      // Optional TTL for temporary memories
}
```

---

## 🔄 Memory Lifecycle

### Phase 1: Discovery (during agent work)

```
Agent reads file → discovers fact → stores memory
Agent makes decision → stores rationale → stores memory
Agent encounters error → fixes it → stores resolution
User expresses preference → agent notes it → stores memory
```

### Phase 2: Retrieval (next session)

```
New session starts → agent receives task
                  → Memory Recall searches for relevant context
                  → Top memories injected into agent prompt
                  → Agent works with full prior context
```

### Phase 3: Decay and Curation

```
Memories accessed frequently → confidence increases → retained longer
Memories never accessed → confidence decays → eventually pruned
Contradicted memories → marked as outdated → replaced
```

---

## 🔗 Integration with Omega Components

| Component | Memory Integration |
|-----------|-------------------|
| **Agent Orchestrator** | Recalls strategy patterns from prior orchestrations |
| **Skill Library** | Skills reference stored patterns for optimization |
| **Wiki Compiler** | Compiled knowledge stored as memories |
| **Autoresearch** | Research findings stored for future recall |
| **Archon Workflow** | Workflow execution history stored for debugging |
| **RLM Decomposer** | Decomposition strategies remembered for similar problems |

---

## 📊 Memory Types in the Omega Harness

| Type | Example | TTL | Confidence Seed |
|------|---------|-----|-----------------|
| **Fact** | "The site builds with `npx vite build`" | Permanent | 0.9 |
| **Decision** | "Used @xyflow/react instead of Vue Flow because site is React" | Permanent | 0.8 |
| **Pattern** | "User prefers dark glassmorphism theme with Cloudflare orange" | Permanent | 0.7 |
| **Preference** | "Every file needs specific naming, not generic Agent.md" | Permanent | 0.9 |
| **Error Resolution** | "TypeScript error fixed by adding type assertion" | 30 days | 0.6 |
| **Temporary** | "Currently working on Phase 4 of Omega integration" | 7 days | 0.5 |

---

## ⚡ Performance Optimization

### Spatial Metaphor (from mempalace)

Memories are organized spatially — like rooms in a palace:

```
🏰 Memory Palace
├── 🚪 Repository Room (codebase facts)
├── 🚪 Architecture Room (design decisions)
├── 🚪 User Room (preferences, conventions)
├── 🚪 Error Room (resolutions, workarounds)
├── 🚪 Build Room (configs, commands, gotchas)
└── 🚪 Research Room (findings, citations)
```

Each "room" is a namespace in KV — enabling scoped retrieval:

```
MEMORY:repo:site-build → "cd site && npm install && npx vite build"
MEMORY:arch:theme → "dark glassmorphism, Cloudflare orange #f6821f"
MEMORY:user:naming → "every file needs specific naming, not Agent.md"
```

### Token Cost Analysis

| Approach | Token Cost Per Session |
|----------|----------------------|
| No memory (re-explore everything) | ~15,000 tokens |
| Full context dump | ~8,000 tokens (wastes on irrelevant) |
| **Memory Palace (semantic recall)** | **~2,000 tokens** (only relevant) |
| Env Var Store (RLM pattern) | **~0 tokens** (stored in env) |

---

*Memory architecture defined: 2026-04-13 by Copilot coding agent (Session 5)*
