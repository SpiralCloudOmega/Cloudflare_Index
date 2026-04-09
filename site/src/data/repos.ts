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
      { name: "pingora", stars: 26353, description: "Rust HTTP proxy framework", language: "Rust", url: "https://github.com/cloudflare/pingora", category: "Networking" },
      { name: "cloudflared", stars: 13703, description: "Cloudflare Tunnel client", language: "Go", url: "https://github.com/cloudflare/cloudflared", category: "Networking" },
      { name: "quiche", stars: 11382, description: "QUIC + HTTP/3 in Rust", language: "Rust", url: "https://github.com/cloudflare/quiche", category: "Networking" },
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
      { name: "moltworker", stars: 9806, description: "OpenClaw game engine on Workers", language: "TypeScript", url: "https://github.com/cloudflare/moltworker", category: "Workers" },
      { name: "workerd", stars: 8107, description: "Open-source Workers JS/Wasm runtime", language: "C++", url: "https://github.com/cloudflare/workerd", category: "Workers" },
      { name: "workers-sdk", stars: 3951, description: "Wrangler CLI + dev toolchain", language: "TypeScript", url: "https://github.com/cloudflare/workers-sdk", category: "Workers" },
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
      { name: "lol-html", stars: 1959, description: "Streaming HTML rewriter", language: "Rust", url: "https://github.com/cloudflare/lol-html", category: "Libraries" },
      { name: "foundations", stars: 1569, description: "Rust service foundations library", language: "Rust", url: "https://github.com/cloudflare/foundations", category: "Libraries" },
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
      { name: "cfssl", stars: 9385, description: "PKI/TLS toolkit for Kubernetes", language: "Go", url: "https://github.com/cloudflare/cfssl", category: "Security" },
      { name: "boringtun", stars: 6974, description: "Userspace WireGuard in Rust", language: "Rust", url: "https://github.com/cloudflare/boringtun", category: "Security" },
      { name: "flan", stars: 4148, description: "Vulnerability scanner", language: "Python", url: "https://github.com/cloudflare/flan", category: "Security" },
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
      { name: "vinext", stars: 7710, description: "Next.js as a Vite plugin for edge", language: "TypeScript", url: "https://github.com/cloudflare/vinext", category: "AI" },
      { name: "vibesdk", stars: 4930, description: "Vibe coding IDE on Workers", language: "TypeScript", url: "https://github.com/cloudflare/vibesdk", category: "AI" },
      { name: "agents", stars: 4702, description: "AI Agent framework for Workers", language: "TypeScript", url: "https://github.com/cloudflare/agents", category: "AI" },
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
      { name: "cloudflare-go", stars: 1954, description: "Official Go API library", language: "Go", url: "https://github.com/cloudflare/cloudflare-go", category: "DevTools" },
      { name: "cf-terraforming", stars: 1342, description: "Import CF config to Terraform", language: "Go", url: "https://github.com/cloudflare/cf-terraforming", category: "DevTools" },
      { name: "terraform-provider-cloudflare", stars: 1241, description: "Official Terraform provider", language: "Go", url: "https://github.com/cloudflare/terraform-provider-cloudflare", category: "DevTools" },
    ]
  },
  {
    name: "Documentation & Examples",
    emoji: "📖",
    color: "#f97316",
    repos: 16,
    totalStars: 6582,
    description: "Official docs (Astro), blog samples, demos",
    topRepos: [
      { name: "cloudflare-docs", stars: 4577, description: "Official developer documentation", language: "TypeScript", url: "https://github.com/cloudflare/cloudflare-docs", category: "Docs" },
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
      { name: "cf-ui", stars: 1291, description: "Cloudflare UI framework", language: "JavaScript", url: "https://github.com/cloudflare/cf-ui", category: "Web" },
      { name: "wildebeest", stars: 2108, description: "ActivityPub/Mastodon on Workers", language: "TypeScript", url: "https://github.com/cloudflare/wildebeest", category: "Web" },
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
      { name: "ebpf_exporter", stars: 2548, description: "eBPF Prometheus exporter", language: "Go", url: "https://github.com/cloudflare/ebpf_exporter", category: "Observability" },
      { name: "pint", stars: 1013, description: "Prometheus rule linter", language: "Go", url: "https://github.com/cloudflare/pint", category: "Observability" },
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
      { name: "hyperdrive-demo", stars: 15, description: "Hyperdrive connection pooling demo", language: "TypeScript", url: "https://github.com/cloudflare/hyperdrive-demo", category: "Storage" },
    ]
  },
];

export const totalRepos = 478;
export const totalStars = 233749;
export const totalForks = 43163;

export const allTopRepos = categories.flatMap(c => c.topRepos);
