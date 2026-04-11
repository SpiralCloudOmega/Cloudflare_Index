export interface Repo {
  name: string;
  stars: number;
  description: string;
  language: string;
  url: string;
  category: string;
}

export interface Category {
  name: string;
  emoji: string;
  color: string;
  repos: number;
  totalStars: number;
  description: string;
  topRepos: Repo[];
}

export const categories: Category[] = [
  {
    name: "Networking & Infrastructure",
    emoji: "🌐",
    color: "#3b82f6",
    repos: 25,
    totalStars: 60738,
    description: "Pingora, QUIC/HTTP3, Cloudflare Tunnel, BGP/RPKI, eBPF networking",
    topRepos: [
      { name: "pingora", stars: 26353, description: "Rust HTTP proxy framework powering Cloudflare's edge", language: "Rust", url: "https://github.com/cloudflare/pingora", category: "Networking" },
      { name: "cloudflared", stars: 13703, description: "Cloudflare Tunnel client (formerly Argo Tunnel)", language: "Go", url: "https://github.com/cloudflare/cloudflared", category: "Networking" },
      { name: "quiche", stars: 11382, description: "QUIC + HTTP/3 implementation in Rust", language: "Rust", url: "https://github.com/cloudflare/quiche", category: "Networking" },
      { name: "roughtime", stars: 496, description: "Roughtime — encrypted time synchronization protocol", language: "Go", url: "https://github.com/cloudflare/roughtime", category: "Networking" },
      { name: "gortr", stars: 326, description: "RPKI-to-Router protocol Go implementation", language: "Go", url: "https://github.com/cloudflare/gortr", category: "Networking" },
      { name: "net", stars: 225, description: "Cloudflare networking libraries", language: "Go", url: "https://github.com/cloudflare/net", category: "Networking" },
      { name: "tubular", stars: 181, description: "eBPF-based L4 load balancer framework", language: "Go", url: "https://github.com/cloudflare/tubular", category: "Networking" },
      { name: "xdpcap", stars: 163, description: "Packet capture using XDP", language: "Go", url: "https://github.com/cloudflare/xdpcap", category: "Networking" },
    ]
  },
  {
    name: "Workers & Serverless",
    emoji: "⛅",
    color: "#f59e0b",
    repos: 106,
    totalStars: 57504,
    description: "Wrangler, workerd, Miniflare, Durable Objects, Pages",
    topRepos: [
      { name: "workerd", stars: 8107, description: "Open-source Workers JavaScript/Wasm runtime", language: "C++", url: "https://github.com/cloudflare/workerd", category: "Workers" },
      { name: "workers-sdk", stars: 3951, description: "Wrangler CLI + Workers dev toolchain", language: "TypeScript", url: "https://github.com/cloudflare/workers-sdk", category: "Workers" },
      { name: "miniflare", stars: 3600, description: "Local Workers simulator for development", language: "TypeScript", url: "https://github.com/cloudflare/miniflare", category: "Workers" },
      { name: "workers-types", stars: 491, description: "TypeScript type definitions for Workers API", language: "TypeScript", url: "https://github.com/cloudflare/workers-types", category: "Workers" },
      { name: "worker-template", stars: 240, description: "Official starter template for Workers", language: "JavaScript", url: "https://github.com/cloudflare/worker-template", category: "Workers" },
      { name: "workers-rs", stars: 2400, description: "Write Workers in 100% Rust via wasm-bindgen", language: "Rust", url: "https://github.com/cloudflare/workers-rs", category: "Workers" },
      { name: "kv-asset-handler", stars: 156, description: "Serve static assets from Workers KV", language: "TypeScript", url: "https://github.com/cloudflare/kv-asset-handler", category: "Workers" },
      { name: "pages-plugins", stars: 145, description: "Official Pages Functions plugins", language: "TypeScript", url: "https://github.com/cloudflare/pages-plugins", category: "Workers" },
    ]
  },
  {
    name: "Libraries & Utilities",
    emoji: "📦",
    color: "#8b5cf6",
    repos: 204,
    totalStars: 41975,
    description: "Rust/Go/C libraries, parsers, algorithms, tools",
    topRepos: [
      { name: "gokey", stars: 2417, description: "Vaultless password manager in Go", language: "Go", url: "https://github.com/cloudflare/gokey", category: "Libraries" },
      { name: "lol-html", stars: 1959, description: "Streaming HTML rewriter in Rust", language: "Rust", url: "https://github.com/cloudflare/lol-html", category: "Libraries" },
      { name: "foundations", stars: 1569, description: "Modular Rust service foundations library", language: "Rust", url: "https://github.com/cloudflare/foundations", category: "Libraries" },
      { name: "bn256", stars: 205, description: "BN256 pairing implementation in Go", language: "Go", url: "https://github.com/cloudflare/bn256", category: "Libraries" },
      { name: "odoh-go", stars: 131, description: "Oblivious DNS over HTTPS library", language: "Go", url: "https://github.com/cloudflare/odoh-go", category: "Libraries" },
      { name: "stpyv8", stars: 2080, description: "Python V8 JavaScript engine bindings", language: "C++", url: "https://github.com/nicholasgriffintn/stpyv8", category: "Libraries" },
      { name: "tableflip", stars: 920, description: "Graceful process restarts in Go", language: "Go", url: "https://github.com/cloudflare/tableflip", category: "Libraries" },
      { name: "golibs", stars: 405, description: "Various Go utility libraries", language: "Go", url: "https://github.com/cloudflare/golibs", category: "Libraries" },
    ]
  },
  {
    name: "Security & Cryptography",
    emoji: "🔐",
    color: "#ef4444",
    repos: 50,
    totalStars: 28588,
    description: "CFSSL, boringtun, CIRCL, Zero Trust, post-quantum",
    topRepos: [
      { name: "cfssl", stars: 9385, description: "PKI/TLS toolkit used in Kubernetes", language: "Go", url: "https://github.com/cloudflare/cfssl", category: "Security" },
      { name: "boringtun", stars: 6974, description: "Userspace WireGuard implementation in Rust", language: "Rust", url: "https://github.com/cloudflare/boringtun", category: "Security" },
      { name: "flan", stars: 4148, description: "Lightweight vulnerability scanner", language: "Python", url: "https://github.com/cloudflare/flan", category: "Security" },
      { name: "circl", stars: 1400, description: "Cryptographic library — post-quantum, elliptic curves", language: "Go", url: "https://github.com/cloudflare/circl", category: "Security" },
      { name: "tls-tris", stars: 580, description: "TLS 1.3 experimental fork of crypto/tls", language: "Go", url: "https://github.com/cloudflare/tls-tris", category: "Security" },
      { name: "gokeyless", stars: 465, description: "Go implementation of Keyless SSL server", language: "Go", url: "https://github.com/cloudflare/gokeyless", category: "Security" },
      { name: "certutil", stars: 152, description: "Certificate utilities library", language: "Go", url: "https://github.com/cloudflare/certutil", category: "Security" },
      { name: "opaque-ea", stars: 95, description: "OPAQUE password-authenticated key exchange", language: "Go", url: "https://github.com/cloudflare/opaque-ea", category: "Security" },
    ]
  },
  {
    name: "AI & Machine Learning",
    emoji: "🤖",
    color: "#10b981",
    repos: 19,
    totalStars: 25948,
    description: "Workers AI, Agents, MCP Server, AutoRAG, Vectorize",
    topRepos: [
      { name: "agents", stars: 4702, description: "Build AI agents on Cloudflare Workers", language: "TypeScript", url: "https://github.com/cloudflare/agents", category: "AI" },
      { name: "cloudflare-ai", stars: 2350, description: "Workers AI SDK and examples", language: "TypeScript", url: "https://github.com/cloudflare/cloudflare-ai", category: "AI" },
      { name: "mcp-server-cloudflare", stars: 1840, description: "Model Context Protocol server for Cloudflare APIs", language: "TypeScript", url: "https://github.com/cloudflare/mcp-server-cloudflare", category: "AI" },
      { name: "autorag", stars: 950, description: "Automatic RAG pipeline on Workers AI", language: "TypeScript", url: "https://github.com/cloudflare/autorag", category: "AI" },
      { name: "ai-utils", stars: 320, description: "AI utility functions for Workers", language: "TypeScript", url: "https://github.com/cloudflare/ai-utils", category: "AI" },
      { name: "chatgpt-plugin", stars: 280, description: "ChatGPT plugin running on Workers", language: "TypeScript", url: "https://github.com/cloudflare/chatgpt-plugin", category: "AI" },
    ]
  },
  {
    name: "Developer Tools & SDKs",
    emoji: "🛠️",
    color: "#06b6d4",
    repos: 34,
    totalStars: 6329,
    description: "Go/Python/TypeScript SDKs, Terraform, CLI tools",
    topRepos: [
      { name: "cloudflare-go", stars: 1954, description: "Official Go API client library", language: "Go", url: "https://github.com/cloudflare/cloudflare-go", category: "DevTools" },
      { name: "cf-terraforming", stars: 1342, description: "Import Cloudflare config to Terraform HCL", language: "Go", url: "https://github.com/cloudflare/cf-terraforming", category: "DevTools" },
      { name: "terraform-provider-cloudflare", stars: 1241, description: "Official Terraform provider", language: "Go", url: "https://github.com/cloudflare/terraform-provider-cloudflare", category: "DevTools" },
      { name: "cloudflare-python", stars: 520, description: "Official Python API client", language: "Python", url: "https://github.com/cloudflare/cloudflare-python", category: "DevTools" },
      { name: "cloudflare-typescript", stars: 410, description: "Official TypeScript/Node.js API client", language: "TypeScript", url: "https://github.com/cloudflare/cloudflare-typescript", category: "DevTools" },
      { name: "node-cloudflare", stars: 318, description: "Cloudflare API client for Node.js", language: "JavaScript", url: "https://github.com/cloudflare/node-cloudflare", category: "DevTools" },
      { name: "wrangler-legacy", stars: 3276, description: "Wrangler v1 CLI (legacy)", language: "Rust", url: "https://github.com/cloudflare/wrangler-legacy", category: "DevTools" },
    ]
  },
  {
    name: "Documentation & Examples",
    emoji: "📖",
    color: "#f97316",
    repos: 16,
    totalStars: 6582,
    description: "Official docs (Astro), blog samples, demos, templates",
    topRepos: [
      { name: "cloudflare-docs", stars: 4577, description: "Official developer documentation (Astro)", language: "TypeScript", url: "https://github.com/cloudflare/cloudflare-docs", category: "Docs" },
      { name: "templates", stars: 680, description: "Official Cloudflare Workers templates gallery", language: "TypeScript", url: "https://github.com/cloudflare/templates", category: "Docs" },
      { name: "worker-examples", stars: 420, description: "Example Workers for common use cases", language: "JavaScript", url: "https://github.com/cloudflare/worker-examples", category: "Docs" },
      { name: "workers-graphql-gateway", stars: 155, description: "GraphQL gateway example on Workers", language: "TypeScript", url: "https://github.com/cloudflare/workers-graphql-gateway", category: "Docs" },
    ]
  },
  {
    name: "Web & Frontend",
    emoji: "🎨",
    color: "#ec4899",
    repos: 10,
    totalStars: 3234,
    description: "Kumo, CF UI, React components, accessibility",
    topRepos: [
      { name: "wildebeest", stars: 2108, description: "ActivityPub/Mastodon server on Workers + D1", language: "TypeScript", url: "https://github.com/cloudflare/wildebeest", category: "Web" },
      { name: "cf-ui", stars: 1291, description: "Cloudflare UI framework and components", language: "JavaScript", url: "https://github.com/cloudflare/cf-ui", category: "Web" },
      { name: "react-gateway", stars: 265, description: "React gateway for server-side rendering", language: "JavaScript", url: "https://github.com/cloudflare/react-gateway", category: "Web" },
      { name: "color", stars: 175, description: "Cloudflare color palette utility", language: "JavaScript", url: "https://github.com/cloudflare/color", category: "Web" },
    ]
  },
  {
    name: "Observability & Monitoring",
    emoji: "📊",
    color: "#14b8a6",
    repos: 9,
    totalStars: 2704,
    description: "eBPF exporter, Prometheus tooling, Alertmanager",
    topRepos: [
      { name: "ebpf_exporter", stars: 2548, description: "eBPF-based Prometheus exporter", language: "Go", url: "https://github.com/cloudflare/ebpf_exporter", category: "Observability" },
      { name: "pint", stars: 1013, description: "Prometheus rule linter and CI checker", language: "Go", url: "https://github.com/cloudflare/pint", category: "Observability" },
      { name: "unsee", stars: 650, description: "Alertmanager dashboard for Prometheus", language: "Go", url: "https://github.com/cloudflare/unsee", category: "Observability" },
      { name: "complainer", stars: 325, description: "Notification relay for Marathon/Mesos failures", language: "Go", url: "https://github.com/cloudflare/complainer", category: "Observability" },
    ]
  },
  {
    name: "Databases & Storage",
    emoji: "🗄️",
    color: "#a855f7",
    repos: 5,
    totalStars: 147,
    description: "D1, R2, KV, Durable Objects, Queues",
    topRepos: [
      { name: "d1-northwind", stars: 82, description: "Northwind Traders demo on D1 + Workers", language: "TypeScript", url: "https://github.com/cloudflare/d1-northwind", category: "Storage" },
      { name: "hyperdrive-demo", stars: 15, description: "Hyperdrive connection pooling demo", language: "TypeScript", url: "https://github.com/cloudflare/hyperdrive-demo", category: "Storage" },
      { name: "queues-web-crawler", stars: 50, description: "Web crawler using Cloudflare Queues", language: "TypeScript", url: "https://github.com/cloudflare/queues-web-crawler", category: "Storage" },
    ]
  },
];

export const totalRepos = 478;
export const totalStars = 233749;
export const totalForks = 43163;

export const allTopRepos = categories.flatMap(c => c.topRepos);

/** Language distribution across all repos */
export const languageDistribution: Record<string, number> = {
  TypeScript: 142,
  Go: 98,
  Rust: 67,
  JavaScript: 54,
  Python: 38,
  "C++": 22,
  C: 18,
  Shell: 12,
  Other: 27,
};

/** Timeline milestones */
export const milestones = [
  { year: 2014, event: "CFSSL open-sourced — first major CF open-source project" },
  { year: 2017, event: "Cloudflare Workers launched — serverless at the edge" },
  { year: 2019, event: "Wrangler CLI released — Workers developer toolchain" },
  { year: 2020, event: "quiche (QUIC/HTTP3) open-sourced in Rust" },
  { year: 2022, event: "D1 & R2 launched — full storage on the edge" },
  { year: 2023, event: "Workers AI announced — inference at the edge" },
  { year: 2024, event: "Pingora open-sourced — 26k+ stars, biggest CF release" },
  { year: 2025, event: "AI Agents framework — agentic computing on Workers" },
];
