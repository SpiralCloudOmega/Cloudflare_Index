# λ Recursive Language Model Patterns — Lambda-Calculus Task Decomposition

> **Based on lambda-RLM: typed recursive long-context reasoning using λ-calculus operators.** Instead of letting LLMs generate free-form recursive code, we use deterministic functional operators (SPLIT, MAP, FILTER, REDUCE, CONCAT, CROSS) with formal termination guarantees.

---

## 🧮 Core Concept: Y-Combinator for LLMs

Traditional approach: Ask an LLM to recursively break down a problem, generate code, and execute it. Problem: unbounded recursion, no termination guarantees, unpredictable behavior.

**Lambda-RLM approach:** Replace free-form recursion with a typed functional runtime:

```
┌──────────────────────────────────────────────────┐
│           TRADITIONAL (Unbounded)                 │
│                                                    │
│   LLM → "Let me write recursive code..."          │
│       → Generates arbitrary Python/JS              │
│       → May loop forever                           │
│       → Unpredictable execution                    │
│       → Token cost scales unpredictably            │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│           LAMBDA-RLM (Bounded)                    │
│                                                    │
│   Problem → SPLIT into subproblems                 │
│          → MAP each to a bounded leaf              │
│          → LLM solves each leaf (one call)          │
│          → REDUCE results back together            │
│          → Deterministic, terminates, predictable  │
└──────────────────────────────────────────────────┘
```

---

## 🔧 Functional Operators

| Operator | Type | Purpose |
|----------|------|---------|
| `SPLIT` | T → [T₁, T₂, ..., Tₙ] | Decompose a problem into subproblems |
| `MAP` | [T] → [U] | Apply a function to each element |
| `FILTER` | [T] → [T] | Select elements matching a predicate |
| `REDUCE` | [T] → U | Combine elements into a single result |
| `CONCAT` | [T₁, T₂] → [T] | Merge multiple result sets |
| `CROSS` | [T] × [U] → [(T,U)] | Cartesian product for combinatorial tasks |

### Execution Model

```
Problem P
    │
    ▼ SPLIT
┌───┴───┐
│       │
▼       ▼
P₁      P₂        ← Bounded leaf subproblems
│       │
▼       ▼
LLM     LLM        ← One LLM call per leaf (bounded)
│       │
▼       ▼
R₁      R₂        ← Leaf results
│       │
└───┬───┘
    │
    ▼ REDUCE
    R              ← Final combined result
```

---

## 🏗️ Omega Harness RLM Nodes

### Node: RLM Decomposer λ

| Property | Value |
|----------|-------|
| **Category** | Training & RLM |
| **Source** | `SpiralCloudOmega/lambda-RLM` |
| **Handles** | 1 input, 2 outputs |
| **Purpose** | Decompose complex problems into bounded subproblems |

**How it works:**

1. Receives a complex task/query
2. Applies SPLIT operator to decompose into subtasks
3. Each subtask is bounded (max token budget, max depth)
4. Output 1: stream of leaf subproblems
5. Output 2: reduction strategy (how to combine results)

### Node: RLM Leaf Solver 🍃

| Property | Value |
|----------|-------|
| **Category** | Training & RLM |
| **Source** | `SpiralCloudOmega/lambda-RLM` |
| **Handles** | 1 input, 1 output |
| **Purpose** | Solve a single bounded subproblem via one LLM call |

**Guarantees:**

- Fixed max token budget per leaf
- Single LLM call (no recursion within a leaf)
- Deterministic timeout
- Result is typed and validated against schema

### Node: Env Variable Store 🔑

| Property | Value |
|----------|-------|
| **Category** | Memory |
| **Source** | `SpiralCloudOmega/lambda-RLM` |
| **Handles** | 1 input, 1 output |
| **Purpose** | Store intermediate results as environment variables |

**Key Innovation:**

The RLM stores all intermediate results as environment variables rather than passing them through the LLM context window. This:

- **Reduces token cost** — recurring data costs 0 tokens to reference
- **Enables large-scale decomposition** — thousands of subproblems without context overflow
- **Provides persistence** — env vars survive across Worker invocations
- **Enables checkpointing** — can resume from any point

---

## 🔄 Workflow: RLM Recursive Decomposition

The pre-built "RLM Recursive Decomposition" template:

```
HTTP Trigger → RLM Decomposer → ┬→ Leaf Solver 1 ─┐
                                  │                   │
                                  └→ Leaf Solver 2 ──┤
                                                      │
                                    JSON Transform ←──┘
                                         │
                                    ┌────┴────┐
                                    │         │
                              Env Store    Response
```

---

## 📐 Application Patterns

### Pattern 1: Long Document Analysis

```
Document (100K tokens)
    │
    ▼ SPLIT (by section)
┌───┼───┬───┐
│   │   │   │
▼   ▼   ▼   ▼
S1  S2  S3  S4     ← Each section ~25K tokens
│   │   │   │
▼   ▼   ▼   ▼
LLM LLM LLM LLM   ← Parallel leaf solving
│   │   │   │
└───┼───┴───┘
    │
    ▼ REDUCE (synthesize)
    Summary
```

### Pattern 2: Multi-Source Research

```
Research Query
    │
    ▼ SPLIT (by source type)
┌───┼───┬───┐
│   │   │   │
▼   ▼   ▼   ▼
Web Docs Code Papers  ← Different search strategies
│   │   │   │
▼   ▼   ▼   ▼
LLM LLM LLM LLM      ← Extract findings from each
│   │   │   │
└───┼───┴───┘
    │
    ▼ REDUCE (cross-reference)
    ▼ FILTER (remove duplicates)
    Synthesized Report
```

### Pattern 3: Code Generation with Validation

```
Feature Request
    │
    ▼ SPLIT (by component)
┌───┼───┬───┐
│   │   │   │
▼   ▼   ▼   ▼
UI  API  DB  Tests  ← Independent code generation
│   │   │   │
▼   ▼   ▼   ▼
LLM LLM LLM LLM
│   │   │   │
└───┼───┴───┘
    │
    ▼ CONCAT (merge files)
    ▼ MAP (validate each)
    ▼ FILTER (passing only)
    Final Code Bundle
```

---

## ⚡ Performance Benefits

| Metric | Traditional Recursion | Lambda-RLM |
|--------|----------------------|------------|
| **Token cost** | Unpredictable (context grows per level) | O(n × leaf_budget) — predictable |
| **Latency** | Sequential (depth-first) | Parallel (all leaves concurrent) |
| **Reliability** | May hang or loop | Formal termination guarantee |
| **Debugging** | Opaque recursive calls | Typed operator tree (inspectable) |
| **Resumability** | Start over on failure | Checkpoint at any node |

---

## 🔗 Integration with Omega Components

| Component | RLM Integration |
|-----------|----------------|
| **Workers AI** | Each leaf solver uses Workers AI for inference |
| **Env Var Store** | Intermediate results stored as KV env vars |
| **Skill Router** | Each leaf can be routed to a specialized skill |
| **Autoresearch** | Research queries decomposed via RLM for breadth |
| **Wiki Compiler** | Large document compilation uses RLM SPLIT by section |
| **Checkpoint** | MegaTrain-inspired checkpointing at each reduction |

---

## 📊 Supported Backends (from lambda-RLM)

| Backend | Use Case |
|---------|----------|
| NVIDIA NIM | Enterprise GPU-accelerated inference |
| Together AI | Fast open-source model access |
| Workers AI | Edge inference on Cloudflare |
| AI Gateway | Cached/proxied provider-agnostic access |

---

*RLM patterns defined: 2026-04-13 by Copilot coding agent (Session 5)*
