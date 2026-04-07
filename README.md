# ☁️ Cloudflare Open-Source Index

> *"The Internet's on-ramp, edge-to-edge — now fully indexed."*

A comprehensive, community-friendly index of **all 478+ public repositories** from the [Cloudflare GitHub Organization](https://github.com/cloudflare) — the team behind Workers, Pingora, QUIC, Zero Trust, and some of the most widely-deployed network infrastructure on the planet.

[![Repositories](https://img.shields.io/badge/Repositories-478-orange?style=flat-square&logo=cloudflare)](https://github.com/cloudflare)
[![Total Stars](https://img.shields.io/badge/Total%20Stars-233%2C749-yellow?style=flat-square&logo=github)](CLOUDFLARE_INDEX.md)
[![Total Forks](https://img.shields.io/badge/Total%20Forks-43%2C163-blue?style=flat-square)](CLOUDFLARE_INDEX.md)
[![Update Cloudflare Index](https://github.com/SpiralCloudOmega/Cloudflare_Index/actions/workflows/update_cloudflare_index.yml/badge.svg)](https://github.com/SpiralCloudOmega/Cloudflare_Index/actions/workflows/update_cloudflare_index.yml)

---

## 🚀 Browse the Index

| File | What it contains |
|------|-----------------|
| 📋 **[CLOUDFLARE_INDEX.md](CLOUDFLARE_INDEX.md)** | All 478 repos alphabetically (A–Z) with descriptions, languages & star counts |
| 🗂️ **[CLOUDFLARE_TOPICS.md](CLOUDFLARE_TOPICS.md)** | All repos grouped by technology category with highlights & collapsible full lists |

---

## 📂 Repository Structure

```
📁 scripts/
└── generate_cloudflare_index.py  — Regenerate the index from GitHub API

📁 .github/workflows/
└── update_cloudflare_index.yml   — Weekly auto-update (every Monday)

📄 CLOUDFLARE_INDEX.md   — A-to-Z clickable index of all Cloudflare repos
📄 CLOUDFLARE_TOPICS.md  — Topic-organized view (AI/ML, Workers, Security, DNS…)
📄 CONTRIBUTING.md       — How to contribute
📄 LICENSE               — MIT License
```

---

## 🏆 Most-Starred Cloudflare Repos

| # | Repository | Stars | What it is |
|---|------------|-------|-----------|
| 1 | [pingora](https://github.com/cloudflare/pingora) | 26,353 ⭐ | Build fast, reliable network services in Rust |
| 2 | [cloudflared](https://github.com/cloudflare/cloudflared) | 13,703 ⭐ | Cloudflare Tunnel client |
| 3 | [quiche](https://github.com/cloudflare/quiche) | 11,382 ⭐ | QUIC and HTTP/3 implementation in Rust |
| 4 | [moltworker](https://github.com/cloudflare/moltworker) | 9,806 ⭐ | OpenClaw on Cloudflare Workers |
| 5 | [cfssl](https://github.com/cloudflare/cfssl) | 9,385 ⭐ | Cloudflare's PKI and TLS toolkit |
| 6 | [workerd](https://github.com/cloudflare/workerd) | 8,107 ⭐ | The JavaScript/Wasm runtime for Cloudflare Workers |
| 7 | [vinext](https://github.com/cloudflare/vinext) | 7,710 ⭐ | Next.js API reimplemented as a Vite plugin |
| 8 | [boringtun](https://github.com/cloudflare/boringtun) | 6,974 ⭐ | WireGuard® in Rust (userspace) |
| 9 | [vibesdk](https://github.com/cloudflare/vibesdk) | 4,930 ⭐ | Open-source vibe coding platform |
| 10 | [agents](https://github.com/cloudflare/agents) | 4,702 ⭐ | Build and deploy AI Agents on Cloudflare |

---

## 🗂️ Technology Categories

| Category | Repos | What's inside |
|----------|-------|--------------|
| 📦 [Libraries & Utilities](CLOUDFLARE_TOPICS.md#libraries--utilities) | 178 | Rust/Go/C libraries, parsers, algorithms, general utilities |
| ⛅ [Workers & Serverless](CLOUDFLARE_TOPICS.md#workers--serverless) | 106 | Wrangler, workerd, Miniflare, Durable Objects, D1, KV |
| 🔐 [Security & Cryptography](CLOUDFLARE_TOPICS.md#security--cryptography) | 53 | CFSSL, boringtun, CIRCL, Zero Trust, Privacy Pass, post-quantum |
| 🛠️ [Developer Tools & SDKs](CLOUDFLARE_TOPICS.md#developer-tools--sdks) | 36 | Go/Python/TypeScript SDKs, Terraform provider, CLI tools |
| 🌐 [Networking & Infrastructure](CLOUDFLARE_TOPICS.md#networking--infrastructure) | 28 | Pingora, quiche, cloudflared, BGP/RPKI, eBPF networking |
| 🤖 [AI & Machine Learning](CLOUDFLARE_TOPICS.md#ai--machine-learning) | 21 | Workers AI, Agents, MCP Server, AutoRAG, Vectorize |
| 📖 [Documentation & Examples](CLOUDFLARE_TOPICS.md#documentation--examples) | 20 | cloudflare-docs, blog samples, demo projects |
| 🗄️ [Databases & Storage](CLOUDFLARE_TOPICS.md#databases--storage) | 16 | D1, R2, KV, queues, object storage |
| 🎨 [Web & Frontend](CLOUDFLARE_TOPICS.md#web--frontend) | 11 | Kumo, CF-UI, React components, accessibility tools |
| 📊 [Observability & Monitoring](CLOUDFLARE_TOPICS.md#observability--monitoring) | 9 | eBPF exporter, Prometheus tooling, Alertmanager |

---

## 🤖 Notable AI & Serverless Repos

### AI & Agents
- **[agents](https://github.com/cloudflare/agents)** (4,702⭐) — Full framework for building stateful AI agents on Workers
- **[mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** (3,589⭐) — Cloudflare's own MCP (Model Context Protocol) server
- **[vibesdk](https://github.com/cloudflare/vibesdk)** (4,930⭐) — Open-source vibe coding IDE platform
- **[agents-starter](https://github.com/cloudflare/agents-starter)** (1,223⭐) — Starter kit for AI agents on Cloudflare Workers
- **[ai-utils](https://github.com/cloudflare/ai-utils)** — Utility library for Workers AI

### Workers Runtime
- **[workerd](https://github.com/cloudflare/workerd)** (8,107⭐) — The open-source JavaScript/Wasm runtime powering Cloudflare Workers
- **[workers-sdk](https://github.com/cloudflare/workers-sdk)** (3,951⭐) — Wrangler CLI and the entire Workers dev toolchain
- **[miniflare](https://github.com/cloudflare/miniflare)** (3,908⭐) — Fully-local simulator for Cloudflare Workers
- **[workers-rs](https://github.com/cloudflare/workers-rs)** (3,414⭐) — Write Cloudflare Workers in 100% Rust via WebAssembly

---

## 🔐 Security Powerhouses

- **[cfssl](https://github.com/cloudflare/cfssl)** (9,385⭐) — Cloudflare's PKI/TLS toolkit — used worldwide for internal CA management
- **[boringtun](https://github.com/cloudflare/boringtun)** (6,974⭐) — Userspace WireGuard® implementation in Rust
- **[flan](https://github.com/cloudflare/flan)** (4,148⭐) — A pretty sweet vulnerability scanner based on nmap + vulners
- **[circl](https://github.com/cloudflare/circl)** (1,651⭐) — Interoperable Reusable Cryptographic Library (post-quantum, OPRF, etc.)
- **[privacypass-ts](https://github.com/cloudflare/privacypass-ts)** — TypeScript Privacy Pass implementation

---

## 🌐 Networking Excellence

- **[pingora](https://github.com/cloudflare/pingora)** (26,353⭐) — Cloudflare's open-source HTTP proxy framework in Rust, processing trillions of requests
- **[quiche](https://github.com/cloudflare/quiche)** (11,382⭐) — Production-grade QUIC and HTTP/3 in Rust
- **[cloudflared](https://github.com/cloudflare/cloudflared)** (13,703⭐) — Cloudflare Tunnel daemon — zero-config inbound connections
- **[ebpf_exporter](https://github.com/cloudflare/ebpf_exporter)** (2,548⭐) — Prometheus exporter for custom eBPF kernel metrics

---

## 📊 Stats at a Glance

| Metric | Value |
|--------|-------|
| 🏢 Organization | [github.com/cloudflare](https://github.com/cloudflare) |
| 📦 Public Repos | **478** |
| ⭐ Total Stars | **233,749** |
| 🍴 Total Forks | **43,163** |
| 💻 Top Language | **TypeScript** (109 repos) |
| 🦀 Rust repos | **47** |
| 🐹 Go repos | **85** |
| 🐍 Python repos | **23** |
| 🌐 JavaScript repos | **97** |

---

## 🔄 Regenerating the Index

The index is automatically updated **every Monday** via GitHub Actions. To regenerate manually:

```bash
# Clone this repo
git clone https://github.com/SpiralCloudOmega/Cloudflare_Index.git
cd Cloudflare_Index

# With a GitHub token (recommended — avoids 60 req/hr rate limit)
GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py --topics

# Without a token (rate-limited)
python scripts/generate_cloudflare_index.py --topics

# Stats only (JSON output)
GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py --json
```

Or trigger it from the **Actions** tab → **Update Cloudflare Index** → **Run workflow**.

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to improve category definitions, fix descriptions, or add supplementary content.

---

## 📜 License

This index repository is licensed under the [MIT License](LICENSE).  
All Cloudflare repositories linked here remain under their respective open-source licenses.

---

*Inspired by [PacktPublishing — The Digital Library of Alexandria](https://github.com/SpiralCloudOmega/PACKTPub_The_Digital_Library_Of_Alexandria)*
