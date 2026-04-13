import type { Node, Edge } from "@xyflow/react";

/* ─── Node-type registry (n8n-style categories) ──────────────── */

export interface AgentNodeData {
  label: string;
  description: string;
  emoji: string;
  color: string;
  category: "trigger" | "compute" | "ai" | "storage" | "network" | "output" | "transform" | "agent";
  handles?: { inputs: number; outputs: number };
}

export const nodeTemplates: Record<string, AgentNodeData> = {
  /* ── Triggers ── */
  httpTrigger: {
    label: "HTTP Trigger",
    description: "Incoming HTTP request starts the workflow",
    emoji: "🌐",
    color: "#3b82f6",
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
  },
  cronTrigger: {
    label: "Cron Trigger",
    description: "Scheduled execution on a timer",
    emoji: "⏰",
    color: "#3b82f6",
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
  },
  webhookTrigger: {
    label: "Webhook",
    description: "External webhook fires this workflow",
    emoji: "🔔",
    color: "#3b82f6",
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
  },
  queueTrigger: {
    label: "Queue Consumer",
    description: "Process messages from Cloudflare Queues",
    emoji: "📨",
    color: "#3b82f6",
    category: "trigger",
    handles: { inputs: 0, outputs: 1 },
  },

  /* ── Compute ── */
  worker: {
    label: "Worker",
    description: "Execute JavaScript/TypeScript on the edge",
    emoji: "⛅",
    color: "#f59e0b",
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
  },
  durableObject: {
    label: "Durable Object",
    description: "Stateful coordination with strong consistency",
    emoji: "🏗️",
    color: "#f59e0b",
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
  },
  pagesFunction: {
    label: "Pages Function",
    description: "Server-side function for Cloudflare Pages",
    emoji: "📄",
    color: "#f59e0b",
    category: "compute",
    handles: { inputs: 1, outputs: 1 },
  },

  /* ── AI ── */
  workersAI: {
    label: "Workers AI",
    description: "Run AI inference at the edge (LLM, embeddings, image)",
    emoji: "🧠",
    color: "#10b981",
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
  },
  vectorize: {
    label: "Vectorize",
    description: "Vector similarity search for RAG pipelines",
    emoji: "📐",
    color: "#10b981",
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
  },
  autoRAG: {
    label: "AutoRAG",
    description: "Automatic RAG pipeline on Workers AI",
    emoji: "🔍",
    color: "#10b981",
    category: "ai",
    handles: { inputs: 1, outputs: 1 },
  },

  /* ── Agent ── */
  agentOrchestrator: {
    label: "Agent Orchestrator",
    description: "Master orchestrator — plans context for sub-agents",
    emoji: "🚀",
    color: "#6366f1",
    category: "agent",
    handles: { inputs: 1, outputs: 3 },
  },
  subAgent: {
    label: "Sub-Agent",
    description: "Booster stage — executes a scoped task within context budget",
    emoji: "🔥",
    color: "#8b5cf6",
    category: "agent",
    handles: { inputs: 1, outputs: 1 },
  },
  mcpServer: {
    label: "MCP Server",
    description: "Model Context Protocol server for AI tool access",
    emoji: "🤖",
    color: "#6366f1",
    category: "agent",
    handles: { inputs: 1, outputs: 2 },
  },

  /* ── Storage ── */
  kvStore: {
    label: "Workers KV",
    description: "Global key-value store (eventually consistent)",
    emoji: "🗝️",
    color: "#a855f7",
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
  },
  r2Bucket: {
    label: "R2 Bucket",
    description: "S3-compatible object storage (zero egress)",
    emoji: "🪣",
    color: "#a855f7",
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
  },
  d1Database: {
    label: "D1 Database",
    description: "Serverless SQLite on the edge",
    emoji: "🗄️",
    color: "#a855f7",
    category: "storage",
    handles: { inputs: 1, outputs: 1 },
  },

  /* ── Network ── */
  tunnel: {
    label: "Cloudflare Tunnel",
    description: "Secure connection to origin servers",
    emoji: "🔒",
    color: "#ef4444",
    category: "network",
    handles: { inputs: 1, outputs: 1 },
  },
  gateway: {
    label: "AI Gateway",
    description: "Proxy & cache AI API calls with rate limiting",
    emoji: "🚪",
    color: "#ef4444",
    category: "network",
    handles: { inputs: 1, outputs: 1 },
  },

  /* ── Transform ── */
  jsonTransform: {
    label: "JSON Transform",
    description: "Parse, map, and reshape data",
    emoji: "🔄",
    color: "#06b6d4",
    category: "transform",
    handles: { inputs: 1, outputs: 1 },
  },
  htmlRewriter: {
    label: "HTML Rewriter",
    description: "Stream HTML transformations (lol-html)",
    emoji: "✂️",
    color: "#06b6d4",
    category: "transform",
    handles: { inputs: 1, outputs: 1 },
  },
  filter: {
    label: "Filter / Branch",
    description: "Conditional routing based on data",
    emoji: "🔀",
    color: "#06b6d4",
    category: "transform",
    handles: { inputs: 1, outputs: 2 },
  },

  /* ── Output ── */
  httpResponse: {
    label: "HTTP Response",
    description: "Return response to the client",
    emoji: "📤",
    color: "#14b8a6",
    category: "output",
    handles: { inputs: 1, outputs: 0 },
  },
  logOutput: {
    label: "Logger",
    description: "Log data to Workers Logpush or console",
    emoji: "📋",
    color: "#14b8a6",
    category: "output",
    handles: { inputs: 1, outputs: 0 },
  },
  queueProducer: {
    label: "Queue Producer",
    description: "Send messages to Cloudflare Queues",
    emoji: "📬",
    color: "#14b8a6",
    category: "output",
    handles: { inputs: 1, outputs: 0 },
  },
};

/* ─── Palette groups (for the sidebar) ──────────────────────── */

export interface PaletteGroup {
  name: string;
  emoji: string;
  keys: string[];
}

export const paletteGroups: PaletteGroup[] = [
  { name: "Triggers", emoji: "⚡", keys: ["httpTrigger", "cronTrigger", "webhookTrigger", "queueTrigger"] },
  { name: "Compute", emoji: "⛅", keys: ["worker", "durableObject", "pagesFunction"] },
  { name: "AI", emoji: "🧠", keys: ["workersAI", "vectorize", "autoRAG"] },
  { name: "Agents", emoji: "🚀", keys: ["agentOrchestrator", "subAgent", "mcpServer"] },
  { name: "Storage", emoji: "🗄️", keys: ["kvStore", "r2Bucket", "d1Database"] },
  { name: "Network", emoji: "🌐", keys: ["tunnel", "gateway"] },
  { name: "Transform", emoji: "🔄", keys: ["jsonTransform", "htmlRewriter", "filter"] },
  { name: "Output", emoji: "📤", keys: ["httpResponse", "logOutput", "queueProducer"] },
];

/* ─── Default demo workflow ─────────────────────────────────── */

export const defaultNodes: Node[] = [
  {
    id: "trigger-1",
    type: "agentNode",
    position: { x: 50, y: 240 },
    data: { ...nodeTemplates.httpTrigger, nodeKey: "httpTrigger" },
  },
  {
    id: "worker-1",
    type: "agentNode",
    position: { x: 320, y: 160 },
    data: { ...nodeTemplates.worker, nodeKey: "worker" },
  },
  {
    id: "ai-1",
    type: "agentNode",
    position: { x: 600, y: 80 },
    data: { ...nodeTemplates.workersAI, nodeKey: "workersAI" },
  },
  {
    id: "kv-1",
    type: "agentNode",
    position: { x: 600, y: 300 },
    data: { ...nodeTemplates.kvStore, nodeKey: "kvStore" },
  },
  {
    id: "transform-1",
    type: "agentNode",
    position: { x: 880, y: 180 },
    data: { ...nodeTemplates.jsonTransform, nodeKey: "jsonTransform" },
  },
  {
    id: "response-1",
    type: "agentNode",
    position: { x: 1140, y: 240 },
    data: { ...nodeTemplates.httpResponse, nodeKey: "httpResponse" },
  },
];

export const defaultEdges: Edge[] = [
  { id: "e-trigger-worker", source: "trigger-1", target: "worker-1", animated: true, style: { stroke: "#f59e0b" } },
  { id: "e-worker-ai", source: "worker-1", target: "ai-1", animated: true, style: { stroke: "#10b981" } },
  { id: "e-worker-kv", source: "worker-1", target: "kv-1", animated: true, style: { stroke: "#a855f7" } },
  { id: "e-ai-transform", source: "ai-1", target: "transform-1", animated: true, style: { stroke: "#06b6d4" } },
  { id: "e-kv-transform", source: "kv-1", target: "transform-1", animated: true, style: { stroke: "#06b6d4" } },
  { id: "e-transform-response", source: "transform-1", target: "response-1", animated: true, style: { stroke: "#14b8a6" } },
];
