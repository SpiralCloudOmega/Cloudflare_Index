import type { Node, Edge } from "@xyflow/react";

/* ═══════════════════════════════════════════════════════════════
   Omega Harness — Unified Agent Node Registry
   
   Every node type maps to a real subsystem from:
   - Cloudflare Workers/AI/Storage/Network stack
   - Archon (YAML workflow orchestration)
   - MemPalace (persistent memory)
   - Memento-Skills (self-evolving skill framework)
   - llm-wiki-compiler (knowledge compilation)
   - lambda-RLM (recursive language model decomposition)
   - meta-harness-tbench2 (agent scaffold/benchmarking)
   - MCP servers (Model Context Protocol)
   - MegaTrain (model training optimization)
   - awesome-autoresearch (perpetual research loops)
   - claude-code-best-practice / claude-cookbooks (agent patterns)
   ═══════════════════════════════════════════════════════════════ */

export type NodeCategory =
  | "trigger"
  | "compute"
  | "ai"
  | "storage"
  | "network"
  | "output"
  | "transform"
  | "agent"
  | "memory"
  | "skill"
  | "protocol"
  | "research"
  | "compiler"
  | "training";

export interface AgentNodeData {
  label: string;
  description: string;
  emoji: string;
  color: string;
  category: NodeCategory;
  handles?: { inputs: number; outputs: number };
  /** Source repo or system this node is derived from */
  source?: string;
  /** Detailed tooltip for expanded info panel */
  details?: string;
}

/* ─── Color palette per category ────────────────────────────── */
const C = {
  trigger:  "#3b82f6",
  compute:  "#f59e0b",
  ai:       "#10b981",
  agent:    "#6366f1",
  storage:  "#a855f7",
  network:  "#ef4444",
  transform:"#06b6d4",
  output:   "#14b8a6",
  memory:   "#ec4899",
  skill:    "#f97316",
  protocol: "#8b5cf6",
  research: "#0ea5e9",
  compiler: "#84cc16",
  training: "#e11d48",
} as const;

export const nodeTemplates: Record<string, AgentNodeData> = {

  /* ══════════════════════════════════════════════
     TRIGGERS — Entry points that start workflows
     ══════════════════════════════════════════════ */
  httpTrigger: {
    label: "HTTP Trigger",
    description: "Incoming HTTP request starts the workflow",
    emoji: "🌐",
    color: C.trigger,
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
    source: "Cloudflare Workers",
  },
  cronTrigger: {
    label: "Cron Trigger",
    description: "Scheduled execution on a timer",
    emoji: "⏰",
    color: C.trigger,
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
    source: "Cloudflare Workers",
  },
  webhookTrigger: {
    label: "Webhook",
    description: "External webhook fires this workflow",
    emoji: "🔔",
    color: C.trigger,
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
    source: "Cloudflare Workers",
  },
  queueTrigger: {
    label: "Queue Consumer",
    description: "Process messages from Cloudflare Queues",
    emoji: "📨",
    color: C.trigger,
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
    source: "Cloudflare Queues",
  },
  eventTrigger: {
    label: "Event Emitter",
    description: "Custom event from Durable Object or Agent broadcast",
    emoji: "⚡",
    color: C.trigger,
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
    source: "Archon",
    details: "Listens for custom events emitted by Durable Objects, Archon workflows, or agent orchestrators",
  },
  gitPushTrigger: {
    label: "Git Push Trigger",
    description: "Fires when code is pushed to a repository",
    emoji: "📦",
    color: C.trigger,
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
    source: "Archon",
    details: "GitHub webhook integration — triggers Archon YAML workflows on push/PR events",
  },

  /* ══════════════════════════════════════════════
     COMPUTE — Edge execution engines
     ══════════════════════════════════════════════ */
  worker: {
    label: "Worker",
    description: "Execute JavaScript/TypeScript on the edge",
    emoji: "⛅",
    color: C.compute,
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Workers",
  },
  durableObject: {
    label: "Durable Object",
    description: "Stateful coordination with strong consistency",
    emoji: "🏗️",
    color: C.compute,
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Workers",
  },
  pagesFunction: {
    label: "Pages Function",
    description: "Server-side function for Cloudflare Pages",
    emoji: "📄",
    color: C.compute,
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Pages",
  },
  containerSandbox: {
    label: "Container Sandbox",
    description: "Isolated container execution for untrusted code",
    emoji: "🐳",
    color: C.compute,
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
    source: "mcp-server-cloudflare",
    details: "Uses Cloudflare Containers for isolated agent execution — sandboxed environment for running arbitrary code safely",
  },
  browserRenderer: {
    label: "Browser Renderer",
    description: "Headless browser for page rendering and scraping",
    emoji: "🖥️",
    color: C.compute,
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
    source: "mcp-server-cloudflare",
    details: "Cloudflare Browser Rendering API — Puppeteer-compatible headless Chrome for web scraping, screenshots, PDF generation",
  },

  /* ══════════════════════════════════════════════
     AI — Inference and intelligence nodes
     ══════════════════════════════════════════════ */
  workersAI: {
    label: "Workers AI",
    description: "Run AI inference at the edge (LLM, embeddings, image)",
    emoji: "🧠",
    color: C.ai,
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Workers AI",
  },
  vectorize: {
    label: "Vectorize",
    description: "Vector similarity search for RAG pipelines",
    emoji: "📐",
    color: C.ai,
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Vectorize",
  },
  autoRAG: {
    label: "AutoRAG",
    description: "Automatic RAG pipeline on Workers AI",
    emoji: "🔍",
    color: C.ai,
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare AutoRAG",
  },
  aiGateway: {
    label: "AI Gateway",
    description: "Proxy and cache AI API calls with rate limiting",
    emoji: "🚪",
    color: C.ai,
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
    source: "mcp-server-cloudflare",
    details: "Central proxy for all LLM provider calls — caching, rate limiting, fallback routing, cost tracking",
  },
  embeddingEngine: {
    label: "Embedding Engine",
    description: "Generate vector embeddings for text chunks",
    emoji: "🔢",
    color: C.ai,
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Workers AI",
    details: "Specialized embedding models (bge-base, bge-large) running at the edge for RAG pipeline ingestion",
  },

  /* ══════════════════════════════════════════════
     AGENT — Orchestration and multi-agent patterns
     ══════════════════════════════════════════════ */
  agentOrchestrator: {
    label: "Agent Orchestrator",
    description: "Master orchestrator — plans and dispatches sub-agents",
    emoji: "🚀",
    color: C.agent,
    category: "agent",
    handles: { inputs: 1, outputs: 3 },
    source: "Omega Harness",
    details: "The final stage rocket — pre-plans all context for each sub-agent, manages context budget, coordinates the entire mission",
  },
  subAgent: {
    label: "Sub-Agent",
    description: "Booster stage — executes a scoped task within context budget",
    emoji: "🔥",
    color: "#8b5cf6",
    category: "agent",
    handles: { inputs: 1, outputs: 1 },
    source: "Omega Harness",
    details: "Each sub-agent receives pre-planned context and returns a summary. Like a rocket booster stage — burns fuel and detaches.",
  },
  archonWorkflow: {
    label: "Archon Workflow",
    description: "YAML-defined DAG workflow with AI + deterministic nodes",
    emoji: "📋",
    color: C.agent,
    category: "agent",
    handles: { inputs: 1, outputs: 2 },
    source: "Archon",
    details: "Deterministic, repeatable development processes defined as YAML. Supports planning, implementation, validation, review phases. 17+ built-in workflows.",
  },
  archonPlanNode: {
    label: "Archon Plan",
    description: "AI planning node — generates implementation plan from context",
    emoji: "🗺️",
    color: C.agent,
    category: "agent",
    handles: { inputs: 1, outputs: 1 },
    source: "Archon",
    details: "Uses LLM to analyze requirements and produce a structured implementation plan as a DAG of subtasks",
  },
  archonValidateNode: {
    label: "Archon Validate",
    description: "Deterministic validation — lint, build, test, review",
    emoji: "✅",
    color: C.agent,
    category: "agent",
    handles: { inputs: 1, outputs: 2 },
    source: "Archon",
    details: "Runs deterministic checks (linting, type-checking, tests) and AI-powered code review. Two outputs: pass/fail branches.",
  },
  metaHarness: {
    label: "Meta-Harness",
    description: "Terminal-Bench agent scaffold with environment bootstrap",
    emoji: "🏋️",
    color: C.agent,
    category: "agent",
    handles: { inputs: 1, outputs: 1 },
    source: "meta-harness-tbench2-artifact",
    details: "Agent scaffold achieving 76.4% on Terminal-Bench 2.0. Environment-aware initialization with KIRA agent extension and prompt template system.",
  },

  /* ══════════════════════════════════════════════
     MEMORY — Persistence and context management
     ══════════════════════════════════════════════ */
  memPalace: {
    label: "Memory Palace",
    description: "Persistent memory system across agent conversations",
    emoji: "🏰",
    color: C.memory,
    category: "memory",
    handles: { inputs: 1, outputs: 1 },
    source: "mempalace",
    details: "High-scoring AI memory persistence. Stores/retrieves contextual knowledge across sessions. Uses spatial metaphor for memory organization.",
  },
  memPalaceStore: {
    label: "Memory Store",
    description: "Write facts, decisions, and context to memory palace",
    emoji: "💾",
    color: C.memory,
    category: "memory",
    handles: { inputs: 1, outputs: 1 },
    source: "mempalace",
    details: "Serializes agent state (facts, decisions, code patterns) into persistent storage. Supports KV, R2, or D1 backends.",
  },
  memPalaceRecall: {
    label: "Memory Recall",
    description: "Retrieve relevant memories by semantic similarity",
    emoji: "🔮",
    color: C.memory,
    category: "memory",
    handles: { inputs: 1, outputs: 1 },
    source: "mempalace",
    details: "Queries the memory palace using semantic search (Vectorize) to find relevant prior context, decisions, and patterns.",
  },
  contextWindow: {
    label: "Context Window",
    description: "Track and manage agent context budget (fuel gauge)",
    emoji: "⛽",
    color: C.memory,
    category: "memory",
    handles: { inputs: 1, outputs: 2 },
    source: "Omega Harness",
    details: "Monitors token usage across the session. Two outputs: continue (fuel remaining) and emergency-detach (near limit).",
  },
  envVarStore: {
    label: "Env Variable Store",
    description: "Store data in environment variables to reduce token cost",
    emoji: "🔑",
    color: C.memory,
    category: "memory",
    handles: { inputs: 1, outputs: 1 },
    source: "lambda-RLM",
    details: "RLM pattern: store intermediate results as env vars instead of passing through context. Reduces token cost almost infinitely for recurring data.",
  },

  /* ══════════════════════════════════════════════
     SKILL — Self-evolving capability framework
     ══════════════════════════════════════════════ */
  skillRouter: {
    label: "Skill Router",
    description: "Route tasks to the best matching skill by utility score",
    emoji: "🎯",
    color: C.skill,
    category: "skill",
    handles: { inputs: 1, outputs: 3 },
    source: "Memento-Skills",
    details: "Analyzes incoming task, scores available skills by relevance/utility, routes to the highest-scoring skill. Falls back to skill-creator if no match.",
  },
  skillExecutor: {
    label: "Skill Executor",
    description: "Execute a skill in sandboxed environment",
    emoji: "⚙️",
    color: C.skill,
    category: "skill",
    handles: { inputs: 1, outputs: 1 },
    source: "Memento-Skills",
    details: "Runs a skill (code function) in a sandboxed environment. Captures output, errors, and execution metadata for the reflection loop.",
  },
  skillReflector: {
    label: "Skill Reflector",
    description: "Reflect on execution — learn, improve, evolve the skill",
    emoji: "🪞",
    color: C.skill,
    category: "skill",
    handles: { inputs: 1, outputs: 2 },
    source: "Memento-Skills",
    details: "The R in Read, Execute, Reflect, Write. Analyzes execution results, identifies improvements, and either updates the skill or creates a new one.",
  },
  skillCreator: {
    label: "Skill Creator",
    description: "Generate new skills from task descriptions via LLM",
    emoji: "🔨",
    color: C.skill,
    category: "skill",
    handles: { inputs: 1, outputs: 1 },
    source: "Memento-Skills",
    details: "When no existing skill matches, generates a new skill (code + metadata + tests) using LLM. The skill is stored in the skill library for future use.",
  },
  skillLibrary: {
    label: "Skill Library",
    description: "SQLite-backed registry of all available skills",
    emoji: "📚",
    color: C.skill,
    category: "skill",
    handles: { inputs: 1, outputs: 1 },
    source: "Memento-Skills",
    details: "Persistent catalog of skills with metadata (description, utility score, usage count, last updated). Backed by D1 or SQLite.",
  },

  /* ══════════════════════════════════════════════
     PROTOCOL — MCP and communication standards
     ══════════════════════════════════════════════ */
  mcpServer: {
    label: "MCP Server",
    description: "Model Context Protocol server for AI tool access",
    emoji: "🤖",
    color: C.protocol,
    category: "protocol",
    handles: { inputs: 1, outputs: 2 },
    source: "servers",
    details: "Reference MCP implementation. Provides standardized tool interface for LLMs to access external capabilities.",
  },
  mcpCloudflare: {
    label: "MCP Cloudflare",
    description: "Domain-specific MCP servers for Cloudflare services",
    emoji: "☁️",
    color: C.protocol,
    category: "protocol",
    handles: { inputs: 1, outputs: 2 },
    source: "mcp-server-cloudflare",
    details: "15+ domain-specific MCP servers: Workers, Radar, Container, Browser, Logpush, AI Gateway, AutoRAG, DNS Analytics, CASB, GraphQL, and more.",
  },
  mcpToolRegistry: {
    label: "MCP Tool Registry",
    description: "Dynamic registry of available MCP tools per server",
    emoji: "🧰",
    color: C.protocol,
    category: "protocol",
    handles: { inputs: 1, outputs: 1 },
    source: "mcp-server-cloudflare",
    details: "Typed tool definitions organized by domain. Each tool has input/output schemas, authentication requirements, and rate limits.",
  },
  mcpTransport: {
    label: "MCP Transport",
    description: "Streamable HTTP + SSE transport for remote MCP",
    emoji: "📡",
    color: C.protocol,
    category: "protocol",
    handles: { inputs: 1, outputs: 1 },
    source: "mcp-server-cloudflare",
    details: "Remote transport layer supporting streamable-http and Server-Sent Events. Enables distributed MCP servers across Workers.",
  },
  copilotCLI: {
    label: "Copilot CLI SDK",
    description: "GitHub Copilot CLI interface for terminal-based agents",
    emoji: "💻",
    color: C.protocol,
    category: "protocol",
    handles: { inputs: 1, outputs: 1 },
    source: "Omega Harness",
    details: "The runtime layer that drives everything. Copilot CLI SDK manages agent sessions, tool dispatch, and context orchestration from the terminal.",
  },

  /* ══════════════════════════════════════════════
     RESEARCH — Autoresearch and continuous learning
     ══════════════════════════════════════════════ */
  autoresearchLoop: {
    label: "Autoresearch Loop",
    description: "Perpetual research cycle — discover, extract, compile",
    emoji: "🔬",
    color: C.research,
    category: "research",
    handles: { inputs: 1, outputs: 2 },
    source: "awesome-autoresearch",
    details: "Karpathy-inspired autoresearch. Autonomous loop: identify knowledge gaps, search, extract, validate, store. Keeps running perpetually.",
  },
  webSearchAgent: {
    label: "Web Search Agent",
    description: "AI-powered web search with citation extraction",
    emoji: "🔎",
    color: C.research,
    category: "research",
    handles: { inputs: 1, outputs: 1 },
    source: "awesome-autoresearch",
    details: "Uses search APIs + LLM to find, extract, and cite relevant information from the web. Returns structured results with source URLs.",
  },
  paperAnalyzer: {
    label: "Paper Analyzer",
    description: "Extract key findings from research papers and docs",
    emoji: "📄",
    color: C.research,
    category: "research",
    handles: { inputs: 1, outputs: 1 },
    source: "awesome-autoresearch",
    details: "Reads PDFs, markdown, and web pages. Extracts key findings, methodologies, and conclusions into structured knowledge.",
  },
  knowledgeGraph: {
    label: "Knowledge Graph",
    description: "Build and query entity-relationship graphs",
    emoji: "🕸️",
    color: C.research,
    category: "research",
    handles: { inputs: 1, outputs: 1 },
    source: "Omega Harness",
    details: "Stores extracted knowledge as a graph of entities, relationships, and facts. Queryable for agent decision-making.",
  },

  /* ══════════════════════════════════════════════
     COMPILER — Knowledge compilation and wiki generation
     ══════════════════════════════════════════════ */
  wikiCompiler: {
    label: "Wiki Compiler",
    description: "Compile sources into interlinked markdown wiki pages",
    emoji: "📖",
    color: C.compiler,
    category: "compiler",
    handles: { inputs: 1, outputs: 1 },
    source: "llm-wiki-compiler",
    details: "Two-phase pipeline: concept extraction then wiki page generation. Produces interlinked markdown with wikilinks, YAML frontmatter, and cross-references.",
  },
  conceptExtractor: {
    label: "Concept Extractor",
    description: "Extract key concepts and entities from raw text",
    emoji: "💡",
    color: C.compiler,
    category: "compiler",
    handles: { inputs: 1, outputs: 1 },
    source: "llm-wiki-compiler",
    details: "Phase 1 of wiki compilation. Uses LLM to identify concepts, definitions, relationships, and hierarchies from source material.",
  },
  incrementalBuilder: {
    label: "Incremental Builder",
    description: "SHA-256 change detection for incremental recompilation",
    emoji: "🔄",
    color: C.compiler,
    category: "compiler",
    handles: { inputs: 1, outputs: 1 },
    source: "llm-wiki-compiler",
    details: "Only recompiles pages whose source material has changed (SHA-256 hash comparison). Dramatically reduces LLM token cost for large wikis.",
  },
  wikilinkResolver: {
    label: "Wikilink Resolver",
    description: "Resolve [[wikilinks]] to actual page paths",
    emoji: "🔗",
    color: C.compiler,
    category: "compiler",
    handles: { inputs: 1, outputs: 1 },
    source: "llm-wiki-compiler",
    details: "Post-processing step: resolves all [[wikilink]] references to actual file paths, creating a navigable knowledge graph.",
  },

  /* ══════════════════════════════════════════════
     TRAINING — Model optimization (RLM + MegaTrain patterns)
     ══════════════════════════════════════════════ */
  rlmDecomposer: {
    label: "RLM Decomposer",
    description: "Lambda-calculus recursive task decomposition (SPLIT/MAP/REDUCE)",
    emoji: "λ",
    color: C.training,
    category: "training",
    handles: { inputs: 1, outputs: 2 },
    source: "lambda-RLM",
    details: "Replaces free-form recursive code with typed functional runtime. Operators: SPLIT, MAP, FILTER, REDUCE, CONCAT, CROSS. Formal termination guarantees.",
  },
  rlmLeafSolver: {
    label: "RLM Leaf Solver",
    description: "Bounded LLM inference for leaf subproblems",
    emoji: "🍃",
    color: C.training,
    category: "training",
    handles: { inputs: 1, outputs: 1 },
    source: "lambda-RLM",
    details: "Terminal node in RLM decomposition tree. Each leaf is a bounded subproblem solved by a single LLM call. Guarantees tractable inference.",
  },
  doubleBuffer: {
    label: "Double Buffer",
    description: "Overlapped data transfer for pipeline efficiency",
    emoji: "⚡",
    color: C.training,
    category: "training",
    handles: { inputs: 1, outputs: 1 },
    source: "MegaTrain",
    details: "MegaTrain pattern: CPU to GPU double-buffering for overlapped weight transfer. Applied to agent pipelines for async data staging.",
  },
  gradientCheckpoint: {
    label: "Checkpoint",
    description: "Save/restore agent state at pipeline checkpoints",
    emoji: "💿",
    color: C.training,
    category: "training",
    handles: { inputs: 1, outputs: 1 },
    source: "MegaTrain",
    details: "Inspired by gradient checkpointing — save agent state at strategic points so pipelines can resume from checkpoints on failure.",
  },

  /* ══════════════════════════════════════════════
     STORAGE — Persistent data backends
     ══════════════════════════════════════════════ */
  kvStore: {
    label: "Workers KV",
    description: "Global key-value store (eventually consistent)",
    emoji: "🗝️",
    color: C.storage,
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare KV",
  },
  r2Bucket: {
    label: "R2 Bucket",
    description: "S3-compatible object storage (zero egress)",
    emoji: "🪣",
    color: C.storage,
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare R2",
  },
  d1Database: {
    label: "D1 Database",
    description: "Serverless SQLite on the edge",
    emoji: "🗄️",
    color: C.storage,
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare D1",
  },
  hyperdrive: {
    label: "Hyperdrive",
    description: "Connection pooling for external PostgreSQL/MySQL",
    emoji: "🚄",
    color: C.storage,
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Hyperdrive",
    details: "Accelerates queries to existing databases by pooling connections at the edge. Reduces latency for external DB access.",
  },

  /* ══════════════════════════════════════════════
     NETWORK — Connectivity and security
     ══════════════════════════════════════════════ */
  tunnel: {
    label: "Cloudflare Tunnel",
    description: "Secure connection to origin servers",
    emoji: "🔒",
    color: C.network,
    category: "network",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Tunnel",
  },
  zeroTrust: {
    label: "Zero Trust",
    description: "Identity-aware access control for agent endpoints",
    emoji: "🛡️",
    color: C.network,
    category: "network",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Zero Trust",
    details: "Protects agent endpoints with identity verification, device posture checks, and least-privilege access policies.",
  },

  /* ══════════════════════════════════════════════
     TRANSFORM — Data reshaping and routing
     ══════════════════════════════════════════════ */
  jsonTransform: {
    label: "JSON Transform",
    description: "Parse, map, and reshape data",
    emoji: "🔄",
    color: C.transform,
    category: "transform",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Workers",
  },
  htmlRewriter: {
    label: "HTML Rewriter",
    description: "Stream HTML transformations (lol-html)",
    emoji: "✂️",
    color: C.transform,
    category: "transform",
    handles: { inputs: 1, outputs: 1 },
    source: "Cloudflare Workers",
  },
  filter: {
    label: "Filter / Branch",
    description: "Conditional routing based on data",
    emoji: "🔀",
    color: C.transform,
    category: "transform",
    handles: { inputs: 1, outputs: 2 },
    source: "Cloudflare Workers",
  },
  promptTemplate: {
    label: "Prompt Template",
    description: "Render dynamic prompts with variable injection",
    emoji: "📝",
    color: C.transform,
    category: "transform",
    handles: { inputs: 1, outputs: 1 },
    source: "claude-cookbooks",
    details: "Jinja2-style prompt templates with variable interpolation. Supports dynamic system prompts, few-shot examples, and context injection.",
  },

  /* ══════════════════════════════════════════════
     OUTPUT — Terminal nodes (sinks)
     ══════════════════════════════════════════════ */
  httpResponse: {
    label: "HTTP Response",
    description: "Return response to the client",
    emoji: "📤",
    color: C.output,
    category: "output",
    handles: { inputs: 1, outputs: 0 },
    source: "Cloudflare Workers",
  },
  logOutput: {
    label: "Logger",
    description: "Log data to Workers Logpush or console",
    emoji: "📋",
    color: C.output,
    category: "output",
    handles: { inputs: 1, outputs: 0 },
    source: "Cloudflare Workers",
  },
  queueProducer: {
    label: "Queue Producer",
    description: "Send messages to Cloudflare Queues",
    emoji: "📬",
    color: C.output,
    category: "output",
    handles: { inputs: 1, outputs: 0 },
    source: "Cloudflare Queues",
  },
  notificationSink: {
    label: "Notification",
    description: "Send alerts via Slack, Discord, Telegram, or email",
    emoji: "🔔",
    color: C.output,
    category: "output",
    handles: { inputs: 1, outputs: 0 },
    source: "Archon",
    details: "Multi-platform notification via Archon adapter system. Supports Slack, Discord, Telegram, email, and custom webhooks.",
  },

  /* ══════════════════════════════════════════════
     KNOWLEDGE — Library & reference sources
     (from PACKTPub_The_Digital_Library_Of_Alexandria)
     ══════════════════════════════════════════════ */
  packtSearch: {
    label: "PacktPub Search",
    description: "Search 9,200+ PacktPublishing code repos by keyword or topic",
    emoji: "📚",
    color: C.research,
    category: "research",
    handles: { inputs: 1, outputs: 1 },
    source: "PACKTPub_Digital_Library",
    details: "Full-text search across 9,200+ PacktPublishing repos organized by 18 tech categories. Returns matched repos with descriptions, topics, and code sample URLs.",
  },
  documentIngest: {
    label: "Document Ingest",
    description: "Upload and parse PDFs, EPUBs, PPTX, and other documents",
    emoji: "📄",
    color: C.compiler,
    category: "compiler",
    handles: { inputs: 1, outputs: 1 },
    source: "PACKTPub_Digital_Library",
    details: "Multi-format document ingestion supporting PDF, EPUB, MOBI, DOCX, PPTX, CSV, and 20+ other formats. Extracts text, metadata, and structure for downstream processing.",
  },
  bookIndex: {
    label: "Book Index",
    description: "Alphabetical & topic-organized reference index of technical books",
    emoji: "📖",
    color: C.research,
    category: "research",
    handles: { inputs: 1, outputs: 1 },
    source: "PACKTPub_Digital_Library",
    details: "Auto-generated index of all technical books organized A-Z and by 18 topic categories (AI/ML, Web Dev, Cloud, Security, DevOps, etc.). Updated weekly.",
  },
  referenceResolver: {
    label: "Reference Resolver",
    description: "Resolve cross-references between documents and code repos",
    emoji: "🔗",
    color: C.compiler,
    category: "compiler",
    handles: { inputs: 1, outputs: 1 },
    source: "PACKTPub_Digital_Library",
    details: "Links book content to live code samples in PacktPublishing repos. Resolves chapter references to specific directories/files in the corresponding GitHub repository.",
  },
  trainingDataExtractor: {
    label: "Training Data Extractor",
    description: "Extract structured training data from documents for fine-tuning",
    emoji: "🎓",
    color: C.training,
    category: "training",
    handles: { inputs: 1, outputs: 2 },
    source: "PACKTPub_Digital_Library",
    details: "Extracts Q&A pairs, code examples, concept definitions, and structured data from technical documents. Outputs training-ready JSONL for fine-tuning or RAG ingestion.",
  },
};

/* ─── Palette groups (sidebar categories) ───────────────────── */

export interface PaletteGroup {
  name: string;
  emoji: string;
  keys: string[];
}

export const paletteGroups: PaletteGroup[] = [
  {
    name: "Triggers",
    emoji: "⚡",
    keys: ["httpTrigger", "cronTrigger", "webhookTrigger", "queueTrigger", "eventTrigger", "gitPushTrigger"],
  },
  {
    name: "Compute",
    emoji: "⛅",
    keys: ["worker", "durableObject", "pagesFunction", "containerSandbox", "browserRenderer"],
  },
  {
    name: "AI & Inference",
    emoji: "🧠",
    keys: ["workersAI", "vectorize", "autoRAG", "aiGateway", "embeddingEngine"],
  },
  {
    name: "Agents",
    emoji: "🚀",
    keys: ["agentOrchestrator", "subAgent", "archonWorkflow", "archonPlanNode", "archonValidateNode", "metaHarness"],
  },
  {
    name: "Memory",
    emoji: "🏰",
    keys: ["memPalace", "memPalaceStore", "memPalaceRecall", "contextWindow", "envVarStore"],
  },
  {
    name: "Skills",
    emoji: "🎯",
    keys: ["skillRouter", "skillExecutor", "skillReflector", "skillCreator", "skillLibrary"],
  },
  {
    name: "Protocols",
    emoji: "🤖",
    keys: ["mcpServer", "mcpCloudflare", "mcpToolRegistry", "mcpTransport", "copilotCLI"],
  },
  {
    name: "Research",
    emoji: "🔬",
    keys: ["autoresearchLoop", "webSearchAgent", "paperAnalyzer", "knowledgeGraph", "packtSearch", "bookIndex"],
  },
  {
    name: "Compiler",
    emoji: "📖",
    keys: ["wikiCompiler", "conceptExtractor", "incrementalBuilder", "wikilinkResolver", "documentIngest", "referenceResolver"],
  },
  {
    name: "Training & RLM",
    emoji: "λ",
    keys: ["rlmDecomposer", "rlmLeafSolver", "doubleBuffer", "gradientCheckpoint", "trainingDataExtractor"],
  },
  {
    name: "Storage",
    emoji: "🗄️",
    keys: ["kvStore", "r2Bucket", "d1Database", "hyperdrive"],
  },
  {
    name: "Network",
    emoji: "🔒",
    keys: ["tunnel", "zeroTrust"],
  },
  {
    name: "Transform",
    emoji: "🔄",
    keys: ["jsonTransform", "htmlRewriter", "filter", "promptTemplate"],
  },
  {
    name: "Output",
    emoji: "📤",
    keys: ["httpResponse", "logOutput", "queueProducer", "notificationSink"],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Pre-built Workflow Templates
   ═══════════════════════════════════════════════════════════════ */

export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  emoji: string;
  nodes: Node[];
  edges: Edge[];
}

/* ── Template 1: Omega Agent Pipeline (full stack) ── */

const omegaNodes: Node[] = [
  { id: "t-http", type: "agentNode", position: { x: 30, y: 260 }, data: { ...nodeTemplates.httpTrigger, nodeKey: "httpTrigger" } },
  { id: "a-orch", type: "agentNode", position: { x: 280, y: 200 }, data: { ...nodeTemplates.agentOrchestrator, nodeKey: "agentOrchestrator" } },
  { id: "m-recall", type: "agentNode", position: { x: 540, y: 60 }, data: { ...nodeTemplates.memPalaceRecall, nodeKey: "memPalaceRecall" } },
  { id: "s-router", type: "agentNode", position: { x: 540, y: 220 }, data: { ...nodeTemplates.skillRouter, nodeKey: "skillRouter" } },
  { id: "p-mcp", type: "agentNode", position: { x: 540, y: 380 }, data: { ...nodeTemplates.mcpCloudflare, nodeKey: "mcpCloudflare" } },
  { id: "ai-brain", type: "agentNode", position: { x: 800, y: 140 }, data: { ...nodeTemplates.workersAI, nodeKey: "workersAI" } },
  { id: "s-exec", type: "agentNode", position: { x: 800, y: 300 }, data: { ...nodeTemplates.skillExecutor, nodeKey: "skillExecutor" } },
  { id: "m-store", type: "agentNode", position: { x: 1060, y: 200 }, data: { ...nodeTemplates.memPalaceStore, nodeKey: "memPalaceStore" } },
  { id: "o-resp", type: "agentNode", position: { x: 1300, y: 260 }, data: { ...nodeTemplates.httpResponse, nodeKey: "httpResponse" } },
];

const omegaEdges: Edge[] = [
  { id: "oe1", source: "t-http", target: "a-orch", animated: true, style: { stroke: C.agent } },
  { id: "oe2", source: "a-orch", target: "m-recall", sourceHandle: "out-0", animated: true, style: { stroke: C.memory } },
  { id: "oe3", source: "a-orch", target: "s-router", sourceHandle: "out-1", animated: true, style: { stroke: C.skill } },
  { id: "oe4", source: "a-orch", target: "p-mcp", sourceHandle: "out-2", animated: true, style: { stroke: C.protocol } },
  { id: "oe5", source: "m-recall", target: "ai-brain", animated: true, style: { stroke: C.ai } },
  { id: "oe6", source: "s-router", target: "s-exec", animated: true, style: { stroke: C.skill } },
  { id: "oe7", source: "ai-brain", target: "m-store", animated: true, style: { stroke: C.memory } },
  { id: "oe8", source: "s-exec", target: "m-store", animated: true, style: { stroke: C.memory } },
  { id: "oe9", source: "m-store", target: "o-resp", animated: true, style: { stroke: C.output } },
];

/* ── Template 2: RAG + Wiki Compiler Pipeline ── */

const ragWikiNodes: Node[] = [
  { id: "rw-trigger", type: "agentNode", position: { x: 30, y: 180 }, data: { ...nodeTemplates.webhookTrigger, nodeKey: "webhookTrigger" } },
  { id: "rw-search", type: "agentNode", position: { x: 260, y: 100 }, data: { ...nodeTemplates.webSearchAgent, nodeKey: "webSearchAgent" } },
  { id: "rw-embed", type: "agentNode", position: { x: 260, y: 280 }, data: { ...nodeTemplates.embeddingEngine, nodeKey: "embeddingEngine" } },
  { id: "rw-vec", type: "agentNode", position: { x: 500, y: 280 }, data: { ...nodeTemplates.vectorize, nodeKey: "vectorize" } },
  { id: "rw-extract", type: "agentNode", position: { x: 500, y: 100 }, data: { ...nodeTemplates.conceptExtractor, nodeKey: "conceptExtractor" } },
  { id: "rw-wiki", type: "agentNode", position: { x: 740, y: 180 }, data: { ...nodeTemplates.wikiCompiler, nodeKey: "wikiCompiler" } },
  { id: "rw-r2", type: "agentNode", position: { x: 980, y: 120 }, data: { ...nodeTemplates.r2Bucket, nodeKey: "r2Bucket" } },
  { id: "rw-log", type: "agentNode", position: { x: 980, y: 280 }, data: { ...nodeTemplates.logOutput, nodeKey: "logOutput" } },
];

const ragWikiEdges: Edge[] = [
  { id: "rwe1", source: "rw-trigger", target: "rw-search", animated: true, style: { stroke: C.research } },
  { id: "rwe2", source: "rw-trigger", target: "rw-embed", animated: true, style: { stroke: C.ai } },
  { id: "rwe3", source: "rw-search", target: "rw-extract", animated: true, style: { stroke: C.compiler } },
  { id: "rwe4", source: "rw-embed", target: "rw-vec", animated: true, style: { stroke: C.ai } },
  { id: "rwe5", source: "rw-extract", target: "rw-wiki", animated: true, style: { stroke: C.compiler } },
  { id: "rwe6", source: "rw-vec", target: "rw-wiki", animated: true, style: { stroke: C.compiler } },
  { id: "rwe7", source: "rw-wiki", target: "rw-r2", animated: true, style: { stroke: C.storage } },
  { id: "rwe8", source: "rw-wiki", target: "rw-log", animated: true, style: { stroke: C.output } },
];

/* ── Template 3: Autoresearch Loop (Perpetual) ── */

const autoresearchNodes: Node[] = [
  { id: "ar-cron", type: "agentNode", position: { x: 30, y: 180 }, data: { ...nodeTemplates.cronTrigger, nodeKey: "cronTrigger" } },
  { id: "ar-loop", type: "agentNode", position: { x: 260, y: 180 }, data: { ...nodeTemplates.autoresearchLoop, nodeKey: "autoresearchLoop" } },
  { id: "ar-web", type: "agentNode", position: { x: 500, y: 80 }, data: { ...nodeTemplates.webSearchAgent, nodeKey: "webSearchAgent" } },
  { id: "ar-paper", type: "agentNode", position: { x: 500, y: 280 }, data: { ...nodeTemplates.paperAnalyzer, nodeKey: "paperAnalyzer" } },
  { id: "ar-kg", type: "agentNode", position: { x: 740, y: 180 }, data: { ...nodeTemplates.knowledgeGraph, nodeKey: "knowledgeGraph" } },
  { id: "ar-mem", type: "agentNode", position: { x: 980, y: 100 }, data: { ...nodeTemplates.memPalaceStore, nodeKey: "memPalaceStore" } },
  { id: "ar-queue", type: "agentNode", position: { x: 980, y: 280 }, data: { ...nodeTemplates.queueProducer, nodeKey: "queueProducer" } },
];

const autoresearchEdges: Edge[] = [
  { id: "are1", source: "ar-cron", target: "ar-loop", animated: true, style: { stroke: C.research } },
  { id: "are2", source: "ar-loop", target: "ar-web", sourceHandle: "out-0", animated: true, style: { stroke: C.research } },
  { id: "are3", source: "ar-loop", target: "ar-paper", sourceHandle: "out-1", animated: true, style: { stroke: C.research } },
  { id: "are4", source: "ar-web", target: "ar-kg", animated: true, style: { stroke: C.research } },
  { id: "are5", source: "ar-paper", target: "ar-kg", animated: true, style: { stroke: C.research } },
  { id: "are6", source: "ar-kg", target: "ar-mem", animated: true, style: { stroke: C.memory } },
  { id: "are7", source: "ar-kg", target: "ar-queue", animated: true, style: { stroke: C.output } },
];

/* ── Template 4: Skill Evolution Loop ── */

const skillEvoNodes: Node[] = [
  { id: "se-event", type: "agentNode", position: { x: 30, y: 180 }, data: { ...nodeTemplates.eventTrigger, nodeKey: "eventTrigger" } },
  { id: "se-router", type: "agentNode", position: { x: 260, y: 180 }, data: { ...nodeTemplates.skillRouter, nodeKey: "skillRouter" } },
  { id: "se-exec", type: "agentNode", position: { x: 520, y: 80 }, data: { ...nodeTemplates.skillExecutor, nodeKey: "skillExecutor" } },
  { id: "se-create", type: "agentNode", position: { x: 520, y: 280 }, data: { ...nodeTemplates.skillCreator, nodeKey: "skillCreator" } },
  { id: "se-reflect", type: "agentNode", position: { x: 770, y: 180 }, data: { ...nodeTemplates.skillReflector, nodeKey: "skillReflector" } },
  { id: "se-lib", type: "agentNode", position: { x: 1020, y: 100 }, data: { ...nodeTemplates.skillLibrary, nodeKey: "skillLibrary" } },
  { id: "se-notify", type: "agentNode", position: { x: 1020, y: 280 }, data: { ...nodeTemplates.notificationSink, nodeKey: "notificationSink" } },
];

const skillEvoEdges: Edge[] = [
  { id: "see1", source: "se-event", target: "se-router", animated: true, style: { stroke: C.skill } },
  { id: "see2", source: "se-router", target: "se-exec", sourceHandle: "out-0", animated: true, style: { stroke: C.skill } },
  { id: "see3", source: "se-router", target: "se-create", sourceHandle: "out-2", animated: true, style: { stroke: C.skill } },
  { id: "see4", source: "se-exec", target: "se-reflect", animated: true, style: { stroke: C.skill } },
  { id: "see5", source: "se-create", target: "se-reflect", animated: true, style: { stroke: C.skill } },
  { id: "see6", source: "se-reflect", target: "se-lib", sourceHandle: "out-0", animated: true, style: { stroke: C.skill } },
  { id: "see7", source: "se-reflect", target: "se-notify", sourceHandle: "out-1", animated: true, style: { stroke: C.output } },
];

/* ── Template 5: RLM Recursive Decomposition ── */

const rlmNodes: Node[] = [
  { id: "rlm-http", type: "agentNode", position: { x: 30, y: 200 }, data: { ...nodeTemplates.httpTrigger, nodeKey: "httpTrigger" } },
  { id: "rlm-decomp", type: "agentNode", position: { x: 280, y: 200 }, data: { ...nodeTemplates.rlmDecomposer, nodeKey: "rlmDecomposer" } },
  { id: "rlm-leaf1", type: "agentNode", position: { x: 540, y: 100 }, data: { ...nodeTemplates.rlmLeafSolver, nodeKey: "rlmLeafSolver" } },
  { id: "rlm-leaf2", type: "agentNode", position: { x: 540, y: 300 }, data: { ...nodeTemplates.rlmLeafSolver, nodeKey: "rlmLeafSolver" } },
  { id: "rlm-transform", type: "agentNode", position: { x: 780, y: 200 }, data: { ...nodeTemplates.jsonTransform, nodeKey: "jsonTransform" } },
  { id: "rlm-env", type: "agentNode", position: { x: 1020, y: 120 }, data: { ...nodeTemplates.envVarStore, nodeKey: "envVarStore" } },
  { id: "rlm-resp", type: "agentNode", position: { x: 1020, y: 300 }, data: { ...nodeTemplates.httpResponse, nodeKey: "httpResponse" } },
];

const rlmEdges: Edge[] = [
  { id: "rlme1", source: "rlm-http", target: "rlm-decomp", animated: true, style: { stroke: C.training } },
  { id: "rlme2", source: "rlm-decomp", target: "rlm-leaf1", sourceHandle: "out-0", animated: true, style: { stroke: C.training } },
  { id: "rlme3", source: "rlm-decomp", target: "rlm-leaf2", sourceHandle: "out-1", animated: true, style: { stroke: C.training } },
  { id: "rlme4", source: "rlm-leaf1", target: "rlm-transform", animated: true, style: { stroke: C.transform } },
  { id: "rlme5", source: "rlm-leaf2", target: "rlm-transform", animated: true, style: { stroke: C.transform } },
  { id: "rlme6", source: "rlm-transform", target: "rlm-env", animated: true, style: { stroke: C.memory } },
  { id: "rlme7", source: "rlm-transform", target: "rlm-resp", animated: true, style: { stroke: C.output } },
];

/* ── Template 6: Simple Cloudflare Worker (original demo) ── */

const simpleNodes: Node[] = [
  { id: "trigger-1", type: "agentNode", position: { x: 50, y: 240 }, data: { ...nodeTemplates.httpTrigger, nodeKey: "httpTrigger" } },
  { id: "worker-1", type: "agentNode", position: { x: 320, y: 160 }, data: { ...nodeTemplates.worker, nodeKey: "worker" } },
  { id: "ai-1", type: "agentNode", position: { x: 600, y: 80 }, data: { ...nodeTemplates.workersAI, nodeKey: "workersAI" } },
  { id: "kv-1", type: "agentNode", position: { x: 600, y: 300 }, data: { ...nodeTemplates.kvStore, nodeKey: "kvStore" } },
  { id: "transform-1", type: "agentNode", position: { x: 880, y: 180 }, data: { ...nodeTemplates.jsonTransform, nodeKey: "jsonTransform" } },
  { id: "response-1", type: "agentNode", position: { x: 1140, y: 240 }, data: { ...nodeTemplates.httpResponse, nodeKey: "httpResponse" } },
];

const simpleEdges: Edge[] = [
  { id: "e-trigger-worker", source: "trigger-1", target: "worker-1", animated: true, style: { stroke: C.compute } },
  { id: "e-worker-ai", source: "worker-1", target: "ai-1", animated: true, style: { stroke: C.ai } },
  { id: "e-worker-kv", source: "worker-1", target: "kv-1", animated: true, style: { stroke: C.storage } },
  { id: "e-ai-transform", source: "ai-1", target: "transform-1", animated: true, style: { stroke: C.transform } },
  { id: "e-kv-transform", source: "kv-1", target: "transform-1", animated: true, style: { stroke: C.transform } },
  { id: "e-transform-response", source: "transform-1", target: "response-1", animated: true, style: { stroke: C.output } },
];

/* ── Template 7: Knowledge Acquisition Pipeline ── */

const knowledgeNodes: Node[] = [
  { id: "ka-cron", type: "agentNode", position: { x: 30, y: 200 }, data: { ...nodeTemplates.cronTrigger, nodeKey: "cronTrigger" } },
  { id: "ka-search", type: "agentNode", position: { x: 280, y: 120 }, data: { ...nodeTemplates.packtSearch, nodeKey: "packtSearch" } },
  { id: "ka-ingest", type: "agentNode", position: { x: 280, y: 300 }, data: { ...nodeTemplates.documentIngest, nodeKey: "documentIngest" } },
  { id: "ka-extract", type: "agentNode", position: { x: 540, y: 120 }, data: { ...nodeTemplates.conceptExtractor, nodeKey: "conceptExtractor" } },
  { id: "ka-ref", type: "agentNode", position: { x: 540, y: 300 }, data: { ...nodeTemplates.referenceResolver, nodeKey: "referenceResolver" } },
  { id: "ka-embed", type: "agentNode", position: { x: 780, y: 80 }, data: { ...nodeTemplates.embeddingEngine, nodeKey: "embeddingEngine" } },
  { id: "ka-wiki", type: "agentNode", position: { x: 780, y: 240 }, data: { ...nodeTemplates.wikiCompiler, nodeKey: "wikiCompiler" } },
  { id: "ka-train", type: "agentNode", position: { x: 780, y: 400 }, data: { ...nodeTemplates.trainingDataExtractor, nodeKey: "trainingDataExtractor" } },
  { id: "ka-vec", type: "agentNode", position: { x: 1040, y: 120 }, data: { ...nodeTemplates.vectorize, nodeKey: "vectorize" } },
  { id: "ka-r2", type: "agentNode", position: { x: 1040, y: 300 }, data: { ...nodeTemplates.r2Bucket, nodeKey: "r2Bucket" } },
];

const knowledgeEdges: Edge[] = [
  { id: "kae1", source: "ka-cron", target: "ka-search", animated: true, style: { stroke: C.research } },
  { id: "kae2", source: "ka-cron", target: "ka-ingest", animated: true, style: { stroke: C.compiler } },
  { id: "kae3", source: "ka-search", target: "ka-extract", animated: true, style: { stroke: C.compiler } },
  { id: "kae4", source: "ka-ingest", target: "ka-ref", animated: true, style: { stroke: C.compiler } },
  { id: "kae5", source: "ka-extract", target: "ka-embed", animated: true, style: { stroke: C.ai } },
  { id: "kae6", source: "ka-extract", target: "ka-wiki", animated: true, style: { stroke: C.compiler } },
  { id: "kae7", source: "ka-ref", target: "ka-wiki", animated: true, style: { stroke: C.compiler } },
  { id: "kae8", source: "ka-ref", target: "ka-train", animated: true, style: { stroke: C.training } },
  { id: "kae9", source: "ka-embed", target: "ka-vec", animated: true, style: { stroke: C.ai } },
  { id: "kae10", source: "ka-wiki", target: "ka-r2", animated: true, style: { stroke: C.storage } },
  { id: "kae11", source: "ka-train", target: "ka-r2", animated: true, style: { stroke: C.storage } },
];

/* ── Export all templates ── */

export const workflowTemplates: WorkflowTemplate[] = [
  {
    id: "omega-pipeline",
    name: "Omega Agent Pipeline",
    description: "Full-stack agent: orchestrator, memory, skills, MCP, AI, persist, respond",
    emoji: "🚀",
    nodes: omegaNodes,
    edges: omegaEdges,
  },
  {
    id: "rag-wiki",
    name: "RAG + Wiki Compiler",
    description: "Search, extract, embed, vectorize, compile wiki, store in R2",
    emoji: "📖",
    nodes: ragWikiNodes,
    edges: ragWikiEdges,
  },
  {
    id: "autoresearch",
    name: "Autoresearch Loop",
    description: "Perpetual research: cron, search, analyze, knowledge graph, memory",
    emoji: "🔬",
    nodes: autoresearchNodes,
    edges: autoresearchEdges,
  },
  {
    id: "skill-evolution",
    name: "Skill Evolution Loop",
    description: "Self-evolving: route, execute/create, reflect, update skill library",
    emoji: "🎯",
    nodes: skillEvoNodes,
    edges: skillEvoEdges,
  },
  {
    id: "rlm-decompose",
    name: "RLM Recursive Decomposition",
    description: "Lambda-calculus task decomposition, leaf solving, reduce, env store",
    emoji: "λ",
    nodes: rlmNodes,
    edges: rlmEdges,
  },
  {
    id: "simple-worker",
    name: "Simple Cloudflare Worker",
    description: "HTTP, Worker, AI + KV, Transform, Response",
    emoji: "⛅",
    nodes: simpleNodes,
    edges: simpleEdges,
  },
  {
    id: "knowledge-acquisition",
    name: "Knowledge Acquisition Pipeline",
    description: "Search PacktPub, ingest docs, extract concepts, compile wiki, train, vectorize",
    emoji: "📚",
    nodes: knowledgeNodes,
    edges: knowledgeEdges,
  },
];

/* Backward-compat default exports */
export const defaultNodes = omegaNodes;
export const defaultEdges = omegaEdges;
