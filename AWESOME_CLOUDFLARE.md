# ⛅ Awesome Cloudflare

> A curated collection of community-built tools, frameworks, resources, and projects that extend the Cloudflare ecosystem.

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

---

## 📋 Contents

- [Official Resources](#-official-resources)
- [Community Awesome Lists](#-community-awesome-lists)
- [Frameworks & Libraries](#-frameworks--libraries)
- [AI & Agents](#-ai--agents)
- [Workers Tools](#-workers-tools)
- [Storage & Databases](#-storage--databases)
- [Security & Privacy](#-security--privacy)
- [Networking & DNS](#-networking--dns)
- [DevOps & Deployment](#-devops--deployment)
- [Templates & Starters](#-templates--starters)
- [Community Projects](#-community-projects)
- [Learning Resources](#-learning-resources)

---

## 🏠 Official Resources

| Resource | Description |
|----------|-------------|
| [Cloudflare Developers](https://developers.cloudflare.com/) | Official developer documentation portal |
| [Cloudflare Blog](https://blog.cloudflare.com/) | Engineering blog with deep-dives and announcements |
| [Cloudflare TV](https://cloudflare.tv/) | Live and recorded tech talks and product demos |
| [Developer Discord](https://discord.cloudflare.com/) | Official community Discord server |
| [Community Forum](https://community.cloudflare.com/) | Questions, answers, and discussion |
| [Cloudflare Radar](https://radar.cloudflare.com/) | Real-time global internet intelligence |
| [Speed Test](https://speed.cloudflare.com/) | Network performance testing tool |
| [1.1.1.1](https://1.1.1.1/) | Privacy-first DNS resolver |
| [Cloudflare Status](https://www.cloudflarestatus.com/) | System status page |
| [Open Source Portal](https://cloudflare.github.io/) | Cloudflare's open source project showcase |
| [GitHub Organization](https://github.com/cloudflare) | 478+ public repositories |

---

## 🌟 Community Awesome Lists

The community maintains several excellent curated lists:

| List | Stars | Focus |
|------|-------|-------|
| [irazasyed/awesome-cloudflare](https://github.com/irazasyed/awesome-cloudflare) | 1,000+ | Comprehensive Workers tools, DNS, analytics, community links |
| [zhuima/awesome-cloudflare](https://github.com/zhuima/awesome-cloudflare) | 800+ | Indie developer tools — image hosting, CMS, URL shorteners, AI |
| [ghostwriternr/awesome-cloudflare](https://github.com/ghostwriternr/awesome-cloudflare) | 200+ | Workers, D1, R2, Pages, Durable Objects, AI, SDKs |
| [qual1x0/awesome-cloudflare-containers](https://github.com/qual1x0/awesome-cloudflare-containers) | New | Container-focused: registries, CLI, deployment patterns |

---

## 🔧 Frameworks & Libraries

### Edge-Native Web Frameworks

| Framework | Description | Repo |
|-----------|-------------|------|
| **Hono** | Ultra-fast (~14KB) edge web framework. 400k+ ops/sec. Runs on Workers, Deno, Bun, Node.js | [honojs/hono](https://github.com/honojs/hono) |
| **RedwoodSDK** | Server-first React on Cloudflare — RSC, type-safe routing, SQL, Vite | [redwoodjs/sdk](https://github.com/redwoodjs/sdk) |
| **Remix** | Full-stack React framework with Workers adapter | [remix-run/remix](https://github.com/remix-run/remix) |
| **SvelteKit** | Svelte framework with Cloudflare adapter | [sveltejs/kit](https://github.com/sveltejs/kit) |
| **Astro** | Content-first framework — powers Cloudflare's own docs | [withastro/astro](https://github.com/withastro/astro) |
| **Nuxt** | Vue.js framework with nitro/Workers deployment | [nuxt/nuxt](https://github.com/nuxt/nuxt) |
| **Next.js (via vinext)** | Next.js API reimplemented as Vite plugin for edge | [cloudflare/vinext](https://github.com/cloudflare/vinext) |

### Realtime & Collaboration

| Tool | Description | Repo |
|------|-------------|------|
| **PartyKit** | Real-time multiplayer framework on Durable Objects | [cloudflare/partykit](https://github.com/cloudflare/partykit) |
| **PartyServer** | Lightweight WebSocket server for Durable Objects | included in partykit |
| **hono-party** | Hono adapter for PartyKit WebSocket rooms | [partykit/hono-party](https://github.com/cloudflare/partykit/tree/main/packages/hono-party) |

### Utility Libraries

| Library | Description | Repo |
|---------|-------------|------|
| **lol-html** | Low-latency streaming HTML rewriter (powers HTMLRewriter) | [cloudflare/lol-html](https://github.com/cloudflare/lol-html) |
| **itty-router** | Tiny (~450 bytes) router for Workers | [kwhitley/itty-router](https://github.com/kwhitley/itty-router) |
| **toucan-js** | Sentry client for Workers (error tracking) | [robertcepa/toucan-js](https://github.com/robertcepa/toucan-js) |
| **worktop** | Minimal Workers framework with typed routing | [lukeed/worktop](https://github.com/lukeed/worktop) |
| **miniflare** | Local Workers simulator for development | [cloudflare/miniflare](https://github.com/cloudflare/miniflare) |
| **wrangler** | Official Workers CLI (in workers-sdk) | [cloudflare/workers-sdk](https://github.com/cloudflare/workers-sdk) |

---

## 🤖 AI & Agents

### Official AI Tools

| Tool | Stars | Description |
|------|-------|-------------|
| [agents](https://github.com/cloudflare/agents) | 4,702⭐ | Full AI agent framework with persistent state via Durable Objects |
| [agents-starter](https://github.com/cloudflare/agents-starter) | 1,223⭐ | Batteries-included starter for deploying AI agents |
| [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | 3,589⭐ | Official MCP server — connect AI assistants to Cloudflare services |
| [ai-utils](https://github.com/cloudflare/ai-utils) | 182⭐ | Utility library for Workers AI (streaming, model wrappers) |
| [vibesdk](https://github.com/cloudflare/vibesdk) | 4,930⭐ | Open-source vibe coding IDE on Workers |
| [awesome-agents](https://github.com/cloudflare/awesome-agents) | 187⭐ | Curated list of AI agent examples |
| [agent-skills-discovery-rfc](https://github.com/cloudflare/agent-skills-discovery-rfc) | 227⭐ | RFC for discovering agent skills via .well-known URI |

### Community AI Projects

| Project | Description |
|---------|-------------|
| **AutoRAG** | Managed RAG pipeline: ingest from R2, embed, index, query |
| **AI Gateway** | Management layer for AI API calls — caching, rate limiting, routing |
| **Vectorize** | Managed vector database for semantic search |
| **Workers AI** | Run 50+ open-source AI models at the edge |

> 💡 **Workers AI Pricing**: As low as $0.045/M input tokens (Llama 3.2 8B). See [CLOUDFLARE_PRICING.md](CLOUDFLARE_PRICING.md) for full details.

---

## ⛅ Workers Tools

### Development & Testing

| Tool | Description |
|------|-------------|
| [workerd](https://github.com/cloudflare/workerd) | Open-source Workers JS/Wasm runtime (8,107⭐) |
| [miniflare](https://github.com/cloudflare/miniflare) | Fully local Workers simulator (3,908⭐) |
| [workers-sdk](https://github.com/cloudflare/workers-sdk) | Wrangler CLI + complete dev toolchain (3,951⭐) |
| [workers-rs](https://github.com/cloudflare/workers-rs) | Write Workers in Rust → Wasm (3,414⭐) |
| [worker-template](https://github.com/cloudflare/worker-template) | Minimal Workers starter template |

### Workers Ecosystem

| Project | Description |
|---------|-------------|
| [moltworker](https://github.com/cloudflare/moltworker) | OpenClaw game engine on Workers (9,806⭐) — showcases Workers capabilities |
| [wildebeest](https://github.com/cloudflare/wildebeest) | ActivityPub/Mastodon server on Workers (2,108⭐) |
| [pages-action](https://github.com/cloudflare/pages-action) | GitHub Action for deploying to Pages |
| [cloudflare-workers-router](https://github.com/tsndr/cloudflare-workers-router) | Community router for Workers |

---

## 🗄️ Storage & Databases

| Product | Type | Pricing Highlight |
|---------|------|-------------------|
| **D1** | Serverless SQLite | 25B reads free/mo, $0.001/M after |
| **R2** | Object storage (S3-compat) | $0.015/GB/mo, zero egress |
| **KV** | Key-value store | Globally replicated, eventually consistent |
| **Durable Objects** | Stateful compute | Persistent storage per object instance |
| **Queues** | Message queues | Async workflow processing |
| **Hyperdrive** | Connection pooling | Accelerates existing Postgres connections |
| **Vectorize** | Vector database | For AI/ML embeddings and semantic search |

### Community Storage Tools

| Tool | Description |
|------|-------------|
| [sqlalchemy-clickhouse](https://github.com/cloudflare/sqlalchemy-clickhouse) | SQLAlchemy adapter for ClickHouse |
| [d1-northwind](https://github.com/cloudflare/d1-northwind) | Northwind demo database on D1 |

---

## 🔐 Security & Privacy

### Official Security Tools

| Tool | Stars | Description |
|------|-------|-------------|
| [cfssl](https://github.com/cloudflare/cfssl) | 9,385⭐ | PKI/TLS toolkit — used by Kubernetes ecosystem |
| [boringtun](https://github.com/cloudflare/boringtun) | 6,974⭐ | Userspace WireGuard in Rust (powers WARP) |
| [flan](https://github.com/cloudflare/flan) | 4,148⭐ | Vulnerability scanner (nmap + Vulners) |
| [circl](https://github.com/cloudflare/circl) | 1,651⭐ | Cryptographic library — post-quantum, OPRF |
| [privacypass-ts](https://github.com/cloudflare/privacypass-ts) | — | IETF Privacy Pass in TypeScript |
| [cfnts](https://github.com/cloudflare/cfnts) | — | Network Time Security in Rust |

### Zero Trust Stack

| Component | Description |
|-----------|-------------|
| **Cloudflare Access** | Zero Trust application access (replaces VPN) |
| **Gateway** | Secure web gateway + DNS filtering |
| **Browser Isolation** | Run risky web content remotely |
| **WARP** | Client powered by boringtun (WireGuard) |
| **Email Security** | Anti-phishing (formerly Area 1) |
| **DLP** | Data loss prevention |

---

## 🌐 Networking & DNS

| Tool | Stars | Description |
|------|-------|-------------|
| [pingora](https://github.com/cloudflare/pingora) | 26,353⭐ | Rust HTTP proxy framework (replaces nginx internally) |
| [quiche](https://github.com/cloudflare/quiche) | 11,382⭐ | QUIC + HTTP/3 in Rust |
| [cloudflared](https://github.com/cloudflare/cloudflared) | 13,703⭐ | Tunnel client — zero-config inbound connections |
| [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter) | 2,548⭐ | eBPF Prometheus exporter |
| [dns-over-https](https://github.com/cloudflare/dns-over-https) | — | DoH client/server reference |
| [gortr](https://github.com/cloudflare/gortr) | — | RPKI-to-Router server in Go |

### DNS Tools (Community)

| Tool | Description |
|------|-------------|
| [1.1.1.1](https://1.1.1.1/) | Privacy-first DNS resolver |
| [WARP](https://1.1.1.1/) | VPN client with WireGuard |
| [Cloudflare Radar](https://radar.cloudflare.com/) | Global internet intelligence dashboard |

---

## 🚀 DevOps & Deployment

| Tool | Description |
|------|-------------|
| [terraform-provider-cloudflare](https://github.com/cloudflare/terraform-provider-cloudflare) | Official Terraform provider (1,241⭐) |
| [cf-terraforming](https://github.com/cloudflare/cf-terraforming) | Import Cloudflare config into Terraform (1,342⭐) |
| [pages-action](https://github.com/cloudflare/pages-action) | GitHub Action for Pages deployment |
| [wrangler-action](https://github.com/cloudflare/wrangler-action) | GitHub Action for Workers deployment |
| [cloudflare-go](https://github.com/cloudflare/cloudflare-go) | Go API client (1,954⭐) |
| [python-cloudflare](https://github.com/cloudflare/python-cloudflare) | Python API client |
| [cloudflare-rs](https://github.com/cloudflare/cloudflare-rs) | Rust API client (307⭐) |
| [cloudflare-php](https://github.com/cloudflare/cloudflare-php) | PHP API client (666⭐) |

---

## 📦 Templates & Starters

| Template | Description |
|----------|-------------|
| [cloudflare/templates](https://github.com/cloudflare/templates) | Official collection of Workers/Pages starters |
| [worker-template](https://github.com/cloudflare/worker-template) | Minimal Workers JavaScript template |
| [worker-typescript-template](https://github.com/cloudflare/worker-typescript-template) | TypeScript Workers template |
| [agents-starter](https://github.com/cloudflare/agents-starter) | AI agents starter kit (1,223⭐) |
| [pages-plugins](https://github.com/cloudflare/pages-plugins) | Pages middleware plugins |

### Framework Starters

```bash
# Create a new Workers project with Hono
npm create cloudflare@latest -- --framework=hono

# Create a React SPA on Pages
npm create cloudflare@latest -- --framework=react

# Create an Astro site (used by Cloudflare docs)
npm create cloudflare@latest -- --framework=astro

# Create a Next.js project for Workers
npm create cloudflare@latest -- --framework=next
```

---

## 🎨 Community Projects

### Notable Community Builds

| Project | Description |
|---------|-------------|
| **Wildebeest** | Mastodon/ActivityPub server entirely on Workers |
| **MoltWorker** | Full game engine running in Workers (9,806⭐) |
| **Meet** | Video meeting app on Cloudflare (2,289⭐) |
| **Cobweb** | COBOL-to-WebAssembly compiler (391⭐) |
| **Gokey** | Vaultless password manager in Go (2,417⭐) |
| **Claire** | Cloudflare browser extension (100⭐) |

### Indie Developer Favorites

| Tool | Use Case |
|------|----------|
| Disposable Email on Workers | Temporary email services using Email Routing |
| URL Shorteners | Custom short links with Workers + KV |
| Image Hosting | R2-backed image storage with Workers transform |
| Analytics | Privacy-friendly analytics with Workers + D1 |
| Blog/CMS | Static blogs with Pages + D1 |

---

## 📚 Learning Resources

### Official Learning

| Resource | Link |
|----------|------|
| Developer Learning Paths | [developers.cloudflare.com/learning-paths/](https://developers.cloudflare.com/learning-paths/) |
| Workers AI Cookbook | [developers.cloudflare.com/workers-ai/guides/](https://developers.cloudflare.com/workers-ai/guides/) |
| Build with Workers Tutorial | [developers.cloudflare.com/workers/tutorials/](https://developers.cloudflare.com/workers/tutorials/) |
| LearnMCP Interactive Lab | [learnmcp.examples.workers.dev](https://learnmcp.examples.workers.dev/) |

### Blog Deep-Dives

| Post | Topic |
|------|-------|
| [How We Built Pingora](https://blog.cloudflare.com/how-we-built-pingora/) | Replacing nginx with Rust |
| [Open Source: Two-Way Street](https://blog.cloudflare.com/open-source-two-way-street/) | Cloudflare's OSS philosophy |
| [Workerd Open Source](https://blog.cloudflare.com/workerd-open-source-workers-runtime/) | Workers runtime goes open |
| [Introducing AutoRAG](https://blog.cloudflare.com/introducing-autorag-on-cloudflare/) | Managed RAG pipeline |
| [QUIC and Rust](https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/) | quiche development story |

### Community Content

| Platform | Description |
|----------|-------------|
| [Cloudflare Developer Discord](https://discord.cloudflare.com/) | Official community chat |
| [r/CloudFlare](https://www.reddit.com/r/CloudFlare/) | Reddit community |
| [Community Forum](https://community.cloudflare.com/) | Q&A and troubleshooting |
| [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudflare) | Tagged questions |

---

## 🔗 Related Files in This Repo

| File | Description |
|------|-------------|
| [CLOUDFLARE_INDEX.md](CLOUDFLARE_INDEX.md) | A–Z index of all 478 Cloudflare repos |
| [CLOUDFLARE_TOPICS.md](CLOUDFLARE_TOPICS.md) | Repos by technology category |
| [CLOUDFLARE_ECOSYSTEM.md](CLOUDFLARE_ECOSYSTEM.md) | Product-to-repo mapping guide |
| [CLOUDFLARE_PRICING.md](CLOUDFLARE_PRICING.md) | Pricing reference for all services *(planned)* |
| [CLOUDFLARE_MCP.md](CLOUDFLARE_MCP.md) | MCP integration guide *(planned)* |

---

*Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.*
