# ☁️ Cloudflare Product Ecosystem & Open Source Map

> *A guide to understanding Cloudflare's products and the open source repositories that power them.*

Founded in 2009, Cloudflare operates one of the world's largest and most interconnected networks, spanning 330+ cities across 120+ countries and serving 20M+ internet properties. Their mission — *"to help build a better Internet"* — is reflected in a deep commitment to open source: from the QUIC protocol and WireGuard implementations, to full developer runtimes and AI frameworks, much of what powers Cloudflare's global network is freely available on GitHub.

---

## 🗺️ Quick Reference

| Product Area | Key Repos | Docs |
|---|---|---|
| Workers Runtime | [workerd](https://github.com/cloudflare/workerd), [workers-sdk](https://github.com/cloudflare/workers-sdk), [miniflare](https://github.com/cloudflare/miniflare) | [Workers Docs](https://developers.cloudflare.com/workers/) |
| Networking / Proxy | [pingora](https://github.com/cloudflare/pingora), [cloudflared](https://github.com/cloudflare/cloudflared) | [Tunnel Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) |
| Security / TLS / PKI | [cfssl](https://github.com/cloudflare/cfssl), [boringtun](https://github.com/cloudflare/boringtun), [circl](https://github.com/cloudflare/circl) | [SSL Docs](https://developers.cloudflare.com/ssl/) |
| AI Platform | [agents](https://github.com/cloudflare/agents), [ai](https://github.com/cloudflare/ai), [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | [Workers AI Docs](https://developers.cloudflare.com/workers-ai/) |
| Zero Trust | [cloudflared](https://github.com/cloudflare/cloudflared), [boringtun](https://github.com/cloudflare/boringtun) | [Cloudflare One](https://developers.cloudflare.com/cloudflare-one/) |
| DNS | [quiche](https://github.com/cloudflare/quiche), [dns-over-https](https://github.com/cloudflare/dns-over-https) | [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) |
| Storage | [workerd](https://github.com/cloudflare/workerd) | [R2](https://developers.cloudflare.com/r2/), [KV](https://developers.cloudflare.com/kv/), [D1](https://developers.cloudflare.com/d1/) |
| Developer SDKs | [cloudflare-go](https://github.com/cloudflare/cloudflare-go), [cloudflare-typescript](https://github.com/cloudflare/cloudflare-typescript), [python-cloudflare](https://github.com/cloudflare/python-cloudflare) | [API Docs](https://developers.cloudflare.com/api/) |
| Monitoring | [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter), [pint](https://github.com/cloudflare/pint) | [Analytics](https://developers.cloudflare.com/analytics/) |
| Web Framework | [lol-html](https://github.com/cloudflare/lol-html), [workers-sdk](https://github.com/cloudflare/workers-sdk) | [Pages Docs](https://developers.cloudflare.com/pages/) |
| Infrastructure as Code | [terraform-provider-cloudflare](https://github.com/cloudflare/terraform-provider-cloudflare), [cf-terraforming](https://github.com/cloudflare/cf-terraforming) | [Terraform Docs](https://developers.cloudflare.com/terraform/) |
| QUIC / HTTP/3 | [quiche](https://github.com/cloudflare/quiche) | [Blog](https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/) |

---

## ⛅ Developer Platform

### Cloudflare Workers

Cloudflare Workers is a serverless JavaScript, TypeScript, and WebAssembly runtime that executes at 330+ edge locations globally. It offers true zero cold starts, sub-millisecond median response times, and a standards-compliant runtime (using the same V8 isolates as Chrome). Workers has become the foundation for Pages Functions, Durable Objects, and the broader developer platform.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [workerd](https://github.com/cloudflare/workerd) | 8,107⭐ | The open-source C++ / JS runtime that powers Workers in production |
| [workers-sdk](https://github.com/cloudflare/workers-sdk) | 3,951⭐ | Wrangler CLI, Pages tooling, and the full Workers developer toolchain |
| [miniflare](https://github.com/cloudflare/miniflare) | 3,908⭐ | Local development simulator for Workers — runs your code exactly as it runs in production |
| [workers-rs](https://github.com/cloudflare/workers-rs) | 3,414⭐ | Write Cloudflare Workers in 100% Rust compiled to WebAssembly |
| [wrangler-legacy](https://github.com/cloudflare/wrangler-legacy) | 3,192⭐ | Wrangler v1 (archived; use workers-sdk for Wrangler v2+) |
| [worker-template](https://github.com/cloudflare/worker-template) | — | Minimal template for bootstrapping a new Worker project |

📖 Docs: https://developers.cloudflare.com/workers/

---

### Cloudflare Pages

Cloudflare Pages offers JAMstack-style hosting with full-stack capabilities via Workers integration. Every push to a Git branch triggers a build and deployment, with instant rollbacks and unlimited preview environments. Pages Functions brings Workers to every project automatically.

**Key repositories:**

- [workers-sdk](https://github.com/cloudflare/workers-sdk) — Pages tooling is bundled here; `wrangler pages` commands live in this monorepo
- [cloudflare-docs](https://github.com/cloudflare/cloudflare-docs) — All Pages documentation, open source and contribution-friendly

📖 Docs: https://developers.cloudflare.com/pages/

---

### Durable Objects

Durable Objects are stateful compute primitives — each object has a unique identity, persistent storage, and runs in exactly one location at a time globally. They're designed for coordination, synchronization, real-time collaboration, multiplayer games, and WebSocket management.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [actors](https://github.com/cloudflare/actors) | — | Higher-level actor model API built on top of Durable Objects |
| [workerd](https://github.com/cloudflare/workerd) | 8,107⭐ | Contains the full Durable Objects runtime implementation |

📖 Docs: https://developers.cloudflare.com/durable-objects/

---

### Workers KV

Workers KV is a globally replicated, eventually consistent key-value store built for edge compute. Data written in one region is available across all 330+ Cloudflare locations within seconds. Ideal for configuration, feature flags, A/B testing data, and session state.

📖 Docs: https://developers.cloudflare.com/kv/

---

### D1 — Serverless SQL

D1 is Cloudflare's serverless relational database built on SQLite. It runs at the edge, supports full SQL queries, and integrates directly with Workers via bindings — no connection pooling needed. D1 supports read replication for globally distributed read performance.

📖 Docs: https://developers.cloudflare.com/d1/

---

### R2 — Object Storage

R2 is Cloudflare's S3-compatible object storage with **zero egress fees** — a direct challenge to AWS S3's data transfer pricing. R2 supports the full S3 API, Workers bindings, public buckets, and event notifications via Workers. Popular for media, backups, and large-scale data pipelines.

📖 Docs: https://developers.cloudflare.com/r2/

---

### Cloudflare Queues

Cloudflare Queues is a managed message queue for Workers — send, batch, and consume messages asynchronously across Workers. Supports at-least-once delivery, consumer concurrency controls, and dead-letter queues. Ideal for decoupling microservices, background jobs, and event-driven workflows.

📖 Docs: https://developers.cloudflare.com/queues/

---

### Cloudflare Stream

Stream is Cloudflare's managed video platform — upload, encode, store, and deliver video at scale without managing infrastructure. Stream supports adaptive bitrate streaming (HLS/DASH), live video, recording, and embedding via a JavaScript player. Built directly on Cloudflare's network for global low-latency delivery.

📖 Docs: https://developers.cloudflare.com/stream/

---

## 🤖 AI Platform

### Workers AI

Workers AI lets developers run 50+ open-source AI models — LLMs, image classifiers, embedding models, speech recognition, and more — directly at the edge without provisioning or managing GPUs. Models run on Cloudflare's global GPU network with Workers bindings for zero-latency access from your code.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [ai](https://github.com/cloudflare/ai) | 993⭐ | Workers AI binding types and client library |
| [ai-utils](https://github.com/cloudflare/ai-utils) | 182⭐ | Developer utilities for building with Workers AI |
| [ai-search-snippet](https://github.com/cloudflare/ai-search-snippet) | 8⭐ | Embeddable AI-powered search snippet component |

📖 Docs: https://developers.cloudflare.com/workers-ai/

---

### Vectorize

Vectorize is Cloudflare's managed vector database, purpose-built for semantic search, recommendation systems, and Retrieval-Augmented Generation (RAG) pipelines. It stores dense vector embeddings and enables fast approximate nearest-neighbor (ANN) queries, all directly queryable from Workers.

📖 Docs: https://developers.cloudflare.com/vectorize/

---

### AutoRAG

AutoRAG is Cloudflare's fully managed, end-to-end Retrieval-Augmented Generation pipeline. Point it at an R2 bucket, and it automatically ingests documents, chunks text, generates embeddings via Workers AI, indexes into Vectorize, and exposes a query API — all without writing pipeline code.

**Key repositories:**

- [autorag](https://github.com/cloudflare/autorag) — AutoRAG configuration, examples, and SDK

📖 Docs: https://developers.cloudflare.com/autorag/

---

### AI Gateway

AI Gateway is a management and observability layer that sits in front of AI API calls to providers like OpenAI, Anthropic, Hugging Face, and more. It provides semantic caching (reducing costs), rate limiting, request logging, fallback routing across providers, and real-time analytics — all configured through the Cloudflare dashboard.

📖 Docs: https://developers.cloudflare.com/ai-gateway/

---

### Cloudflare Agents

The Cloudflare Agents framework enables developers to build stateful, long-running AI agents entirely on Workers infrastructure. Agents can maintain conversation history, schedule future tasks, stream responses over WebSockets, call external tools, and persist state across sessions using Durable Objects.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [agents](https://github.com/cloudflare/agents) | 4,702⭐ | Full Cloudflare Agents SDK — state management, scheduling, streaming |
| [agents-starter](https://github.com/cloudflare/agents-starter) | 1,223⭐ | Batteries-included starter kit for building AI agents |
| [awesome-agents](https://github.com/cloudflare/awesome-agents) | 187⭐ | Curated examples and community projects using Cloudflare Agents |
| [agent-skills-discovery-rfc](https://github.com/cloudflare/agent-skills-discovery-rfc) | 227⭐ | RFC for standardizing agent skill and capability discovery |
| [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | 3,589⭐ | Model Context Protocol server exposing Cloudflare APIs to AI assistants |

📖 Docs: https://developers.cloudflare.com/agents/

---

## 🌐 Networking & Infrastructure

### Cloudflare Tunnel

Cloudflare Tunnel creates an outbound-only encrypted connection from your infrastructure to Cloudflare's network — no inbound firewall rules, no public IP required. `cloudflared` runs as a lightweight daemon, establishing persistent tunnels to the nearest Cloudflare PoP. Used by millions of developers to securely expose local services, self-hosted apps, and internal tools.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [cloudflared](https://github.com/cloudflare/cloudflared) | 13,703⭐ | The tunnel daemon — written in Go, cross-platform, supports SSH, HTTP, TCP |
| [argo-tunnel-examples](https://github.com/cloudflare/argo-tunnel-examples) | — | Collection of real-world Cloudflare Tunnel usage examples |

📖 Docs: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/

---

### Pingora — High-Performance HTTP Proxy Framework

Pingora is Cloudflare's open-source Rust framework for building fast, programmable network proxies and HTTP services. It was built to replace Cloudflare's internal nginx-based proxy after years of scaling challenges — Pingora now processes **trillions of requests per day** on Cloudflare's network, delivering ~70ms faster TTFB and 160× fewer connections to origin servers compared to the prior architecture.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [pingora](https://github.com/cloudflare/pingora) | 26,353⭐ | The full proxy library — async Rust, TLS, HTTP/1+2, connection pooling |

📖 Blog: https://blog.cloudflare.com/pingora-open-source/

---

### QUIC & HTTP/3

Cloudflare is a founding contributor to the IETF QUIC standardization effort. `quiche` is their production QUIC and HTTP/3 implementation in Rust, used internally at Cloudflare and adopted by major projects including curl, NGINX experimental patches, and Android. It supports QUIC v1 (RFC 9000), HTTP/3 (RFC 9114), and the MASQUE proxying protocol.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [quiche](https://github.com/cloudflare/quiche) | 11,382⭐ | Production QUIC + HTTP/3 library in Rust with C FFI bindings |

📖 Blog: https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/

---

### BGP & RPKI

Cloudflare operates one of the world's largest BGP networks and is a strong advocate for route security. Their RPKI tooling enables route origin validation to prevent BGP hijacks — a critical internet security issue.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [gortr](https://github.com/cloudflare/gortr) | — | RPKI-to-Router (RTR) server implementation in Go |
| [rpki-tool](https://github.com/cloudflare/rpki-tool) | — | RPKI route validation and analysis utilities |
| [ipbgp](https://github.com/cloudflare/ipbgp) | — | BGP routing utilities and experimentation tools |

---

### Magic Transit / Spectrum

Magic Transit provides network-layer (L3/L4) DDoS protection for IP infrastructure — protecting entire IP prefixes by routing traffic through Cloudflare's scrubbing network before delivery. Spectrum extends Cloudflare's TCP/UDP proxying to arbitrary ports and protocols, enabling DDoS protection and acceleration for game servers, custom TCP applications, and more.

📖 Docs: https://developers.cloudflare.com/magic-transit/

---

### eBPF & Kernel Networking

Cloudflare's network team extensively uses eBPF for low-latency packet filtering, custom metrics, and kernel-level networking without patching the kernel. They open-source their tooling for the broader Linux community.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter) | 2,548⭐ | Prometheus exporter for custom eBPF metrics from the Linux kernel |
| [bpftools](https://github.com/cloudflare/bpftools) | 1,230⭐ | BPF-based packet inspection and analysis toolkit |
| [tubular](https://github.com/cloudflare/tubular) | 323⭐ | Programmable socket dispatch and BPF socket API enhancements |

---

## 🔐 Security & Zero Trust

### CFSSL — PKI Toolkit

CFSSL is Cloudflare's battle-tested PKI and TLS toolkit, written in Go. It started as Cloudflare's internal CA management system and is now one of the most widely adopted open-source certificate authority implementations — used by **Kubernetes**, CoreOS/Fedora CoreOS, and thousands of organizations. CFSSL handles certificate signing, bundling, OCSP, and multi-tier CA hierarchies.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [cfssl](https://github.com/cloudflare/cfssl) | 9,385⭐ | Full PKI toolkit: CA management, cert signing, TLS bundling, REST API |

📖 Blog: https://blog.cloudflare.com/introducing-cfssl/

---

### Zero Trust Network Access (Cloudflare One)

Cloudflare One is Cloudflare's Zero Trust network platform — combining access control (ZTNA), secure web gateway (SWG), CASB, email security, and DLP into a single control plane. The `cloudflared` daemon and WARP client are the key open-source components enabling Zero Trust connectivity for devices and services.

**Key repositories:**

- [cloudflared](https://github.com/cloudflare/cloudflared) — Tunnel daemon powering application-level Zero Trust access

📖 Docs: https://developers.cloudflare.com/cloudflare-one/

---

### boringtun — WireGuard® in Rust

boringtun is Cloudflare's userspace WireGuard® implementation in Rust. It powers **Cloudflare WARP** (1.1.1.1 app) and **Cloudflare Gateway** VPN tunnels. Being a userspace implementation, it runs without kernel modules, making it portable across Linux, macOS, and embedded systems.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [boringtun](https://github.com/cloudflare/boringtun) | 6,974⭐ | Userspace WireGuard® in Rust — async, cross-platform, no kernel module needed |

---

### CIRCL — Cryptographic Research Library

CIRCL (Cloudflare Interoperable Reusable Cryptographic Library) is Cloudflare's Go library for cutting-edge cryptographic primitives. It includes **post-quantum algorithms** (Kyber/ML-KEM, SIDH, CSIDH), elliptic curve implementations, zero-knowledge proofs (VOPRF), password-authenticated key exchange (PAKE/OPAQUE), and more. CIRCL is research-grade but used in Cloudflare production for post-quantum TLS experiments.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [circl](https://github.com/cloudflare/circl) | 1,651⭐ | Post-quantum crypto, VOPRF, PAKEs, SIDH, CSIDH, hash-to-curve, and more |

📖 Blog: https://blog.cloudflare.com/introducing-circl/

---

### Privacy Pass

Privacy Pass is a cryptographic token protocol that allows users to prove they passed a challenge (like a CAPTCHA) once and redeem that proof anonymously later — without any linkability between issuance and redemption. Cloudflare co-authored the IETF Privacy Pass specification and ships support in its challenge platform.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [privacypass-ts](https://github.com/cloudflare/privacypass-ts) | 42⭐ | TypeScript implementation of the Privacy Pass protocol |
| [pat-app](https://github.com/cloudflare/pat-app) | — | Privacy Access Token demo application |

---

### NTS — Network Time Security

Cloudflare operates one of the world's most used public NTP services (`time.cloudflare.com`) and open-sources their Network Time Security (NTS) implementation. NTS is an IETF standard that adds TLS-based authentication to NTP, preventing time spoofing attacks.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [cfnts](https://github.com/cloudflare/cfnts) | — | Cloudflare's NTS (Network Time Security) server/client implementation in Rust |

---

### Post-Quantum Cryptography

Cloudflare is a global leader in deploying post-quantum cryptography at internet scale. They've been running post-quantum key exchange experiments in TLS since 2019 and were among the first to deploy NIST-standardized post-quantum algorithms (ML-KEM / Kyber) in production HTTPS.

**Key repositories:**

- [circl](https://github.com/cloudflare/circl) — Contains Kyber, SIDH, CSIDH, and other PQC implementations
- [tls-tris](https://github.com/cloudflare/tls-tris) — Experimental fork of Go's TLS stack with post-quantum and TLS 1.3 support

📖 Blog: https://blog.cloudflare.com/post-quantum-for-all/

---

### Flan — Lightweight Vulnerability Scanner

Flan Scan is Cloudflare's open-source Docker-based network vulnerability scanner — a lightweight wrapper around `nmap` and the Vulners vulnerability database that generates structured scan reports. Built after Cloudflare found commercial scanners too heavyweight for rapid internal use.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [flan](https://github.com/cloudflare/flan) | 4,148⭐ | Docker-based nmap + Vulners vulnerability scanner with JSON/HTML output |

---

## 🛠️ Developer SDKs & Tools

Cloudflare maintains official API client libraries for most major programming languages, all generated from the same OpenAPI spec for consistency.

| Language | Repo | Stars | Description |
|----------|------|-------|-------------|
| Go | [cloudflare-go](https://github.com/cloudflare/cloudflare-go) | 1,954⭐ | Official Go client library for the Cloudflare API |
| TypeScript / Node | [cloudflare-typescript](https://github.com/cloudflare/cloudflare-typescript) | 688⭐ | Official TypeScript/Node.js library with full type coverage |
| Python | [python-cloudflare](https://github.com/cloudflare/python-cloudflare) | ~600⭐ | Official Python API library |
| Rust | [cloudflare-rs](https://github.com/cloudflare/cloudflare-rs) | 307⭐ | Rust client library for the Cloudflare API |
| PHP | [cloudflare-php](https://github.com/cloudflare/cloudflare-php) | 666⭐ | PHP API library |
| Terraform | [terraform-provider-cloudflare](https://github.com/cloudflare/terraform-provider-cloudflare) | 1,241⭐ | Official HashiCorp Terraform provider for all Cloudflare resources |

**Other essential tools:**

| Repo | Stars | Description |
|------|-------|-------------|
| [cf-terraforming](https://github.com/cloudflare/cf-terraforming) | 1,342⭐ | Import existing Cloudflare configuration into Terraform state + HCL |
| [cloudflare-docs](https://github.com/cloudflare/cloudflare-docs) | 4,577⭐ | All Cloudflare developer documentation — open source, accepts PRs |
| [workers-sdk](https://github.com/cloudflare/workers-sdk) | 3,951⭐ | Wrangler CLI (`wrangler deploy`, `wrangler dev`, `wrangler pages`) |

📖 Docs: https://developers.cloudflare.com/api/

---

## 📊 Observability & Monitoring

Cloudflare runs one of the world's most complex distributed systems at scale, and they open-source the internal observability tools they build. These are production-hardened tools used by Cloudflare's own SRE teams.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter) | 2,548⭐ | Prometheus exporter for custom kernel metrics via eBPF programs |
| [pint](https://github.com/cloudflare/pint) | 1,013⭐ | Prometheus rule linter and validator — catches mistakes before they page you |
| [unsee](https://github.com/cloudflare/unsee) | 705⭐ | Web dashboard for Alertmanager — groups, silences, and visualizes alerts |
| [alertmanager2es](https://github.com/cloudflare/alertmanager2es) | 250⭐ | Forwards Alertmanager notifications to Elasticsearch for long-term storage |
| [sciuro](https://github.com/cloudflare/sciuro) | 180⭐ | Bridge between Alertmanager and Kubernetes Node conditions |
| [tubular](https://github.com/cloudflare/tubular) | 323⭐ | eBPF-powered socket dispatch with monitoring capabilities |

---

## 🎨 Web & Frontend

Cloudflare open-sources the web frameworks and UI components that power their own dashboard and developer tooling.

**Key repositories:**

| Repo | Stars | Description |
|------|-------|-------------|
| [lol-html](https://github.com/cloudflare/lol-html) | 1,959⭐ | Low Output Latency HTML rewriter — streaming HTML parsing/rewriting in Rust, powering `HTMLRewriter` in Workers |
| [wildebeest](https://github.com/cloudflare/wildebeest) | 2,108⭐ | ActivityPub/Mastodon-compatible server built entirely on Workers, D1, and Pages |
| [cf-ui](https://github.com/cloudflare/cf-ui) | 1,291⭐ | Cloudflare's original React UI component framework (largely superseded by Kumo) |
| [kumo](https://github.com/cloudflare/kumo) | 971⭐ | Cloudflare's modern design system and component library |
| [react-gateway](https://github.com/cloudflare/react-gateway) | 575⭐ | React portal component for rendering children outside the component tree |
| [a11y-focus-scope](https://github.com/cloudflare/a11y-focus-scope) | 35⭐ | Accessibility utility for managing keyboard focus scope in modals/dialogs |
| [a11y-focus-store](https://github.com/cloudflare/a11y-focus-store) | 25⭐ | Accessibility utility for saving and restoring focus state |

**Notable framework integration:**

`lol-html` is particularly significant — it is the Rust implementation underlying the `HTMLRewriter` API available in all Cloudflare Workers, enabling streaming HTML transformation at the edge without buffering full responses. The Cloudflare developer docs site was [migrated to Astro](https://blog.cloudflare.com/open-source-all-the-way-down-upgrading-our-developer-documentation/) in 2025.

---

## 🌍 Open Source Philosophy

Cloudflare has a mature and deeply embedded open source culture. Their approach:

- **Heavy internal consumers**: Core infrastructure runs on open source — Linux, nginx (historically), PostgreSQL, many Rust crates, and the broader CNCF ecosystem
- **Major upstream contributors**: Projects like `quiche`, `boringtun`, and `pingora` are Cloudflare originations that have been adopted broadly across the internet
- **OSS project sponsors**: Cloudflare funds and sponsors Ladybird browser, Astro, TanStack, and many other ecosystem projects
- **Open documentation**: All developer docs at `developers.cloudflare.com` are open source at [cloudflare-docs](https://github.com/cloudflare/cloudflare-docs) — pull requests welcome
- **Open standards participation**: Cloudflare actively participates in IETF standardization for QUIC, HTTP/3, Privacy Pass, TLS, and post-quantum cryptography
- **Licensing**: Most open source repos use Apache 2.0, MIT, or BSD-3-Clause licenses

**Key reading:**

- [Open Source Two-Way Street](https://blog.cloudflare.com/open-source-two-way-street/) — Cloudflare's OSS philosophy
- [Open Source All the Way Down](https://blog.cloudflare.com/open-source-all-the-way-down-upgrading-our-developer-documentation/) — Open-sourcing developer docs with Astro
- [Pingora Open Source Announcement](https://blog.cloudflare.com/pingora-open-source/) — How and why Cloudflare built and released Pingora
- [Workers Open Source](https://blog.cloudflare.com/workerd-open-source-workers-runtime/) — Open-sourcing the Workers runtime (workerd)

---

## 🔗 Developer Resources

| Resource | URL |
|----------|-----|
| Developer Docs | https://developers.cloudflare.com/ |
| Developer Discord | https://discord.cloudflare.com/ |
| Cloudflare Blog | https://blog.cloudflare.com/ |
| Open Source Portal | https://cloudflare.github.io/ |
| GitHub Organization | https://github.com/cloudflare |
| System Status | https://www.cloudflarestatus.com/ |
| Cloudflare TV | https://cloudflare.tv/ |
| Community Forum | https://community.cloudflare.com/ |
| Pricing | https://www.cloudflare.com/plans/ |
| Workers Playground | https://workers.cloudflare.com/playground |
| API Explorer | https://developers.cloudflare.com/api/ |

---

*This document is maintained alongside the [CLOUDFLARE_INDEX.md](CLOUDFLARE_INDEX.md) and [CLOUDFLARE_TOPICS.md](CLOUDFLARE_TOPICS.md) index files.*
