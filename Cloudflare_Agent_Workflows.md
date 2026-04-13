# ⛅ Cloudflare Agent Workflows — Pre-Built Workflow Templates

> **Six pre-built workflow templates that demonstrate how Omega Harness components compose together.** Each template is a complete agent pipeline that can be loaded in the visual builder, customized, and exported.

---

## 📋 Template Index

| # | Template | Nodes | Description |
|---|----------|-------|-------------|
| 1 | 🚀 Omega Agent Pipeline | 9 | Full-stack agent with memory, skills, MCP, AI |
| 2 | 📖 RAG + Wiki Compiler | 8 | Search, extract, embed, compile wiki pages |
| 3 | 🔬 Autoresearch Loop | 7 | Perpetual research with knowledge graph |
| 4 | 🎯 Skill Evolution Loop | 7 | Self-evolving skill framework |
| 5 | λ RLM Recursive Decomposition | 7 | Lambda-calculus task decomposition |
| 6 | ⛅ Simple Cloudflare Worker | 6 | Basic HTTP → Worker → AI → Response |

---

## 🚀 Template 1: Omega Agent Pipeline

**The flagship workflow — a full-stack agent that orchestrates memory, skills, and MCP tools.**

```
HTTP Trigger → Agent Orchestrator → ┬→ Memory Recall → Workers AI ──┐
                                     ├→ Skill Router → Skill Executor┤
                                     └→ MCP Cloudflare               │
                                                                      │
                                                      Memory Store ←──┘
                                                           │
                                                      HTTP Response
```

### Node Layout (9 nodes, 9 edges)

| Node | Type | Position | Purpose |
|------|------|----------|---------|
| HTTP Trigger | trigger | Start | Incoming request |
| Agent Orchestrator | agent | Center-left | Plans and dispatches to 3 subsystems |
| Memory Recall | memory | Top-center | Load relevant context from prior sessions |
| Skill Router | skill | Mid-center | Find the best skill for the task |
| MCP Cloudflare | protocol | Bottom-center | Access Cloudflare tools |
| Workers AI | ai | Top-right | Process with LLM intelligence |
| Skill Executor | skill | Mid-right | Execute the matched skill |
| Memory Store | memory | Far-right | Persist learnings for future sessions |
| HTTP Response | output | End | Return result to client |

### When to Use

- Building a general-purpose AI agent on Cloudflare
- Need persistent memory across sessions
- Want self-evolving capabilities
- Require access to Cloudflare infrastructure via MCP

---

## 📖 Template 2: RAG + Wiki Compiler

**Build a self-compiling knowledge base from web sources.**

```
Webhook → ┬→ Web Search → Concept Extractor ──┐
           │                                     │
           └→ Embedding Engine → Vectorize      ──┤
                                                   │
                                    Wiki Compiler ←┘
                                         │
                                    ┌────┴────┐
                                    │         │
                                R2 Bucket   Logger
```

### Node Layout (8 nodes, 8 edges)

| Node | Type | Purpose |
|------|------|---------|
| Webhook | trigger | External content notification |
| Web Search Agent | research | Find relevant sources |
| Embedding Engine | ai | Generate vector embeddings |
| Vectorize | ai | Store and search embeddings |
| Concept Extractor | compiler | Extract key concepts |
| Wiki Compiler | compiler | Generate interlinked pages |
| R2 Bucket | storage | Store compiled wiki |
| Logger | output | Audit trail |

### When to Use

- Building a documentation system that self-updates
- Creating a knowledge base from multiple sources
- Need both semantic search (RAG) and compiled output (wiki)

---

## 🔬 Template 3: Autoresearch Loop

**Perpetual autonomous research that grows knowledge over time.**

```
Cron Trigger → Autoresearch Loop → ┬→ Web Search ──┐
                                     │                │
                                     └→ Paper Analyzer┤
                                                      │
                                    Knowledge Graph ←─┘
                                         │
                                    ┌────┴────┐
                                    │         │
                              Memory Store   Queue
                              (persist)    (feedback)
```

### Node Layout (7 nodes, 7 edges)

| Node | Type | Purpose |
|------|------|---------|
| Cron Trigger | trigger | Scheduled execution |
| Autoresearch Loop | research | Orchestrate research cycle |
| Web Search Agent | research | Search the internet |
| Paper Analyzer | research | Analyze documents |
| Knowledge Graph | research | Map entities and relationships |
| Memory Store | memory | Persist findings |
| Queue Producer | output | Feed back for next cycle |

### When to Use

- Need continuous intelligence gathering
- Building a competitive analysis system
- Want a knowledge base that grows autonomously
- Monitoring a topic area for changes

---

## 🎯 Template 4: Skill Evolution Loop

**Self-evolving agent that creates and improves its own skills.**

```
Event Trigger → Skill Router → ┬→ Skill Executor ──┐
                                │                     │
                                └→ Skill Creator    ──┤
                                                      │
                                  Skill Reflector  ←──┘
                                       │
                                  ┌────┴────┐
                                  │         │
                            Skill Library  Notification
```

### Node Layout (7 nodes, 7 edges)

| Node | Type | Purpose |
|------|------|---------|
| Event Trigger | trigger | Task arrives |
| Skill Router | skill | Score and route to best skill |
| Skill Executor | skill | Run the matched skill |
| Skill Creator | skill | Generate new skill if no match |
| Skill Reflector | skill | Evaluate and improve |
| Skill Library | skill | Persistent skill catalog |
| Notification | output | Alert on skill changes |

### When to Use

- Building an agent that learns from experience
- Want capabilities that improve over time without retraining
- Need a growing library of reusable task-specific code

---

## λ Template 5: RLM Recursive Decomposition

**Break complex problems into bounded subproblems using lambda-calculus.**

```
HTTP Trigger → RLM Decomposer → ┬→ Leaf Solver 1 ──┐
                                  │                    │
                                  └→ Leaf Solver 2   ──┤
                                                       │
                                    JSON Transform  ←──┘
                                         │
                                    ┌────┴────┐
                                    │         │
                              Env Var Store  Response
```

### Node Layout (7 nodes, 7 edges)

| Node | Type | Purpose |
|------|------|---------|
| HTTP Trigger | trigger | Complex task input |
| RLM Decomposer | training | Split into bounded subtasks |
| Leaf Solver 1 | training | Solve first subproblem |
| Leaf Solver 2 | training | Solve second subproblem |
| JSON Transform | transform | Reduce results together |
| Env Var Store | memory | Cache results for zero-token recall |
| HTTP Response | output | Return combined result |

### When to Use

- Processing long documents (>100K tokens)
- Need deterministic task decomposition
- Want predictable token costs
- Require formal termination guarantees

---

## ⛅ Template 6: Simple Cloudflare Worker

**The original demo — a basic edge AI pipeline.**

```
HTTP Trigger → Worker → ┬→ Workers AI ──┐
                         │                │
                         └→ Workers KV  ──┤
                                          │
                          JSON Transform ←┘
                               │
                          HTTP Response
```

### Node Layout (6 nodes, 6 edges)

| Node | Type | Purpose |
|------|------|---------|
| HTTP Trigger | trigger | Incoming request |
| Worker | compute | Edge logic |
| Workers AI | ai | AI inference |
| Workers KV | storage | Key-value cache |
| JSON Transform | transform | Reshape response |
| HTTP Response | output | Return to client |

### When to Use

- Simple API endpoints with AI
- Caching responses in KV
- Learning the basics before building complex agents

---

## 🛠️ Customizing Templates

### In the Visual Builder

1. Click **📋 Templates** in the toolbar
2. Select a template to load it
3. Drag additional nodes from the palette
4. Connect nodes by dragging between handles
5. Click a node to see its details and source attribution
6. Click **📥 Export** to download the workflow as JSON

### Exported JSON Format

```json
{
  "name": "Custom Omega Workflow",
  "exported": "2026-04-13T22:00:00.000Z",
  "nodes": [
    {
      "id": "t-http",
      "type": "httpTrigger",
      "position": { "x": 30, "y": 260 },
      "label": "HTTP Trigger"
    }
  ],
  "edges": [
    {
      "source": "t-http",
      "target": "a-orch",
      "sourceHandle": null,
      "targetHandle": null
    }
  ]
}
```

---

*Workflow templates defined: 2026-04-13 by Copilot coding agent (Session 5)*
