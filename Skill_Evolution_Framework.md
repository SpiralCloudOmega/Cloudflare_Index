# 🎯 Skill Evolution Framework — Self-Evolving Agent Capabilities

> **Based on Memento-Skills: agents that learn, rewrite, and design their own skills.** The Omega Harness integrates this as the Skill Layer — a self-evolving capability framework where skills are first-class units that improve through use.

---

## 🧬 Core Loop: Read → Execute → Reflect → Write

The Skill Evolution Framework operates on a continuous improvement cycle:

```
        ┌──────────────────────────────────┐
        │                                  │
        ▼                                  │
   ┌─────────┐    ┌──────────┐    ┌───────┴───┐    ┌─────────┐
   │  READ   │───►│ EXECUTE  │───►│  REFLECT  │───►│  WRITE  │
   │         │    │          │    │           │    │         │
   │ Load    │    │ Run the  │    │ Analyze   │    │ Update  │
   │ skill + │    │ skill in │    │ results,  │    │ skill   │
   │ context │    │ sandbox  │    │ learn     │    │ library │
   └─────────┘    └──────────┘    └───────────┘    └────┬────┘
        ▲                                               │
        └───────────────────────────────────────────────┘
                     (perpetual evolution)
```

---

## 🏗️ Omega Harness Skill Nodes

### Node: Skill Router 🎯

| Property | Value |
|----------|-------|
| **Category** | Skill |
| **Source** | `SpiralCloudOmega/Memento-Skills` |
| **Handles** | 1 input, 3 outputs |
| **Outputs** | Match (execute existing), Partial (adapt), No Match (create new) |

**How Routing Works:**

1. Incoming task description is analyzed
2. All skills in the library are scored by relevance (utility function)
3. Top-scoring skill above threshold → Route to Executor
4. Partial match → Route to Executor with adaptation prompt
5. No match → Route to Skill Creator

### Node: Skill Executor ⚙️

| Property | Value |
|----------|-------|
| **Category** | Skill |
| **Source** | `SpiralCloudOmega/Memento-Skills` |
| **Handles** | 1 input, 1 output |

**Execution Environment:**

- Sandboxed execution (Container Sandbox or Durable Object)
- Captures: stdout, stderr, return value, execution time, token cost
- Passes all metadata to Skill Reflector for learning

### Node: Skill Reflector 🪞

| Property | Value |
|----------|-------|
| **Category** | Skill |
| **Source** | `SpiralCloudOmega/Memento-Skills` |
| **Handles** | 1 input, 2 outputs |
| **Outputs** | Skill update (to Library), Notification (to user/log) |

**Reflection Process:**

1. Compare execution result to expected outcome
2. Identify failure modes, edge cases, optimizations
3. Generate skill improvement recommendations
4. If improvements are significant: rewrite the skill code
5. Update utility score based on success/failure

### Node: Skill Creator 🔨

| Property | Value |
|----------|-------|
| **Category** | Skill |
| **Source** | `SpiralCloudOmega/Memento-Skills` |
| **Handles** | 1 input, 1 output |

**Creation Process:**

1. Receives task description + context
2. LLM generates: skill code + metadata + test cases
3. Test cases are executed to validate the skill
4. If tests pass: skill is added to the library
5. If tests fail: iterate with error feedback

### Node: Skill Library 📚

| Property | Value |
|----------|-------|
| **Category** | Skill |
| **Source** | `SpiralCloudOmega/Memento-Skills` |
| **Handles** | 1 input, 1 output |

**Storage Schema:**

```typescript
interface Skill {
  id: string;
  name: string;
  description: string;
  code: string;           // The actual skill implementation
  testCases: TestCase[];  // Validation tests
  utilityScore: number;   // 0.0 - 1.0 (higher = more useful)
  usageCount: number;     // Times successfully used
  lastUpdated: string;    // ISO timestamp
  version: number;        // Auto-incremented on update
  tags: string[];         // Semantic tags for routing
  dependencies: string[]; // Other skills this depends on
}
```

**Backed by:** D1 (SQLite) for metadata + R2 for skill code blobs

---

## 🔄 Workflow: Skill Evolution Loop

The pre-built "Skill Evolution Loop" template in the Omega Builder:

```
Event Trigger → Skill Router → ┬→ Skill Executor ─┐
                                │                    │
                                └→ Skill Creator  ──┤
                                                     │
                                     Skill Reflector ←┘
                                         │
                                    ┌────┴────┐
                                    │         │
                              Skill Library  Notification
```

### Step-by-Step Flow:

1. **Event Trigger** — A task arrives (from HTTP, Queue, or Archon workflow)
2. **Skill Router** — Scores all skills, decides: execute existing or create new
3. **Skill Executor** / **Skill Creator** — Runs the skill or creates a new one
4. **Skill Reflector** — Evaluates the result, learns from success/failure
5. **Skill Library** — Updated with improved or new skill
6. **Notification** — Alerts sent for significant skill changes

---

## 🧠 Built-In Skills (from Memento-Skills)

The framework starts with 9 foundational skills:

| Skill | Purpose | Omega Node Equivalent |
|-------|---------|----------------------|
| `filesystem` | Read/write files, navigate directories | Worker (compute) |
| `web-search` | Search the internet for information | Web Search Agent (research) |
| `image-analysis` | Analyze images using AI vision models | Workers AI (ai) |
| `pdf-reader` | Extract text and data from PDFs | Paper Analyzer (research) |
| `docx-reader` | Parse Word documents | Concept Extractor (compiler) |
| `xlsx-reader` | Parse Excel spreadsheets | JSON Transform (transform) |
| `pptx-reader` | Parse PowerPoint presentations | Concept Extractor (compiler) |
| `skill-creator` | Meta-skill: creates new skills | Skill Creator (skill) |
| `pip-install` | Install Python packages on-demand | Container Sandbox (compute) |

---

## 📈 Skill Utility Scoring

Skills are ranked by a utility function:

```
utility = (success_rate * 0.4) + (relevance_score * 0.3) + 
          (efficiency_score * 0.2) + (recency_bonus * 0.1)
```

Where:
- **success_rate** = successful executions / total executions
- **relevance_score** = semantic similarity between task and skill description
- **efficiency_score** = normalized inverse of avg execution time + token cost
- **recency_bonus** = decay function favoring recently updated skills

---

## 🔗 Integration with Other Omega Components

| Component | Skill Integration |
|-----------|------------------|
| **Memory Palace** | Skills recall relevant memories before execution |
| **MCP Servers** | Skills can call MCP tools as part of their implementation |
| **Wiki Compiler** | "wiki-compile" skill uses the compiler pipeline |
| **Autoresearch** | "research" skill wraps the autoresearch loop |
| **Archon Workflow** | Skills can be nodes in Archon YAML DAGs |
| **RLM Decomposer** | Complex skills are recursively decomposed into leaf skills |

---

## 🎓 Evolution Without Parameter Updates

> Key insight from Memento-Skills: Skills evolve through **code rewriting**, not through model fine-tuning. The LLM's weights never change — instead, the skill library grows and improves.

This means:
- **No training required** — works with any LLM (open-source or commercial)
- **Transparent evolution** — every skill change is a code diff
- **Rollback-friendly** — skills are versioned, can revert to any prior version
- **Cross-model portable** — skill library works with any compatible LLM

---

*Skill framework defined: 2026-04-13 by Copilot coding agent (Session 5)*
