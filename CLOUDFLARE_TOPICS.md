# ☁️ Cloudflare Repositories by Topic

> *Explore all 478 Cloudflare open-source repositories organized by technology area.*

![Repositories](https://img.shields.io/badge/Repositories-478-orange?style=flat-square&logo=cloudflare)
![Stars](https://img.shields.io/badge/Total%20Stars-233%2C749-yellow?style=flat-square&logo=github)
![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-green?style=flat-square)

---

## 🧭 How to Use This File

Each category section contains:
- A brief description of what's in that category
- **🌟 Highlights** — the top 5 repos by star count (quick wins for developers)
- A **collapsible full table** — all repos in the category alphabetically

**New to Cloudflare?** Start with [Workers & Serverless](#workers--serverless) or [AI & Machine Learning](#ai--machine-learning).  
**Building secure systems?** Check [Security & Cryptography](#security--cryptography) and [Networking & Infrastructure](#networking--infrastructure).  
**Looking for SDKs?** Go to [Developer Tools & SDKs](#developer-tools--sdks).

> 📖 See [CLOUDFLARE_ECOSYSTEM.md](CLOUDFLARE_ECOSYSTEM.md) for a full product-to-repo mapping guide.

---

## 🗺️ Topic Overview

| # | Category | Repos | ⭐ Total Stars | Top Repository |
|---|----------|-------|---------------|----------------|
| 1 | 📦 [Libraries & Utilities](#libraries--utilities) | 204 | 41,975 | [gokey](https://github.com/cloudflare/gokey) (2,417⭐) |
| 2 | ⛅ [Workers & Serverless](#workers--serverless) | 106 | 57,504 | [moltworker](https://github.com/cloudflare/moltworker) (9,806⭐) |
| 3 | 🔐 [Security & Cryptography](#security--cryptography) | 50 | 28,588 | [cfssl](https://github.com/cloudflare/cfssl) (9,385⭐) |
| 4 | 🛠️ [Developer Tools & SDKs](#developer-tools--sdks) | 34 | 6,329 | [cloudflare-go](https://github.com/cloudflare/cloudflare-go) (1,954⭐) |
| 5 | 🌐 [Networking & Infrastructure](#networking--infrastructure) | 25 | 60,738 | [pingora](https://github.com/cloudflare/pingora) (26,353⭐) |
| 6 | 🤖 [AI & Machine Learning](#ai--machine-learning) | 19 | 25,948 | [vinext](https://github.com/cloudflare/vinext) (7,710⭐) |
| 7 | 📖 [Documentation & Examples](#documentation--examples) | 16 | 6,582 | [cloudflare-docs](https://github.com/cloudflare/cloudflare-docs) (4,577⭐) |
| 8 | 🎨 [Web & Frontend](#web--frontend) | 10 | 3,234 | [cf-ui](https://github.com/cloudflare/cf-ui) (1,291⭐) |
| 9 | 📊 [Observability & Monitoring](#observability--monitoring) | 9 | 2,704 | [pint](https://github.com/cloudflare/pint) (1,013⭐) |
| 10 | 🗄️ [Databases & Storage](#databases--storage) | 5 | 147 | [hyperdrive-demo](https://github.com/cloudflare/hyperdrive-demo) (15⭐) |

---

## 📦 Libraries & Utilities

> General-purpose Rust, Go, and C libraries, algorithms, data structures, parsers, runtime utilities, and miscellaneous tools from Cloudflare's engineering teams. This is the largest category — it's the "toolbox" of reusable components that power Cloudflare's internal services and are shared with the community. Notable entries include `lol-html` (HTML rewriter powering Workers' HTMLRewriter API), `foundations` (Cloudflare's Rust service framework), and `cobweb` (COBOL-to-Wasm compiler).

**204 repositories** · **41,975 total stars**

### 🌟 Highlights

- **[gokey](https://github.com/cloudflare/gokey)** (2,417⭐) — A simple vaultless password manager in Go
- **[meet](https://github.com/cloudflare/meet)** (2,289⭐) — 
- **[wildebeest](https://github.com/cloudflare/wildebeest)** (2,108⭐) — Wildebeest is an ActivityPub and Mastodon-compatible server
- **[lol-html](https://github.com/cloudflare/lol-html)** (1,959⭐) — Low output latency streaming HTML parser/rewriter with CSS selector-based API
- **[foundations](https://github.com/cloudflare/foundations)** (1,569⭐) — Cloudflare's Rust service foundations library.

<details>
<summary>View all 204 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [.github](https://github.com/cloudflare/.github) | Cloudflare's template for open source community resources | — | 36 |
| [ahocorasick](https://github.com/cloudflare/ahocorasick) | A Golang implementation of the Aho-Corasick string matching algorithm | Go | 706 |
| [ai](https://github.com/cloudflare/ai) |  | TypeScript | 993 |
| [aloha-rs](https://github.com/cloudflare/aloha-rs) |  | Rust | 7 |
| [api-schemas](https://github.com/cloudflare/api-schemas) |  | — | 163 |
| [Area1API](https://github.com/cloudflare/Area1API) | Sample API code for public use by customers. | Python | 2 |
| [backgridjs.com](https://github.com/cloudflare/backgridjs.com) | Documentation site for Backgrid | HTML | 9 |
| [backoff](https://github.com/cloudflare/backoff) | Backoff timer shared between several projects. | Go | 47 |
| [bbperf](https://github.com/cloudflare/bbperf) | bbperf | Python | 15 |
| [binast-benches](https://github.com/cloudflare/binast-benches) | Benchmarks for BinAST | Makefile | 1 |
| [bm](https://github.com/cloudflare/bm) | A Golang implementation of Bentley/McIlroy long string compression | Go | 119 |
| [brotli-go](https://github.com/cloudflare/brotli-go) |  | C | 7 |
| [buffer](https://github.com/cloudflare/buffer) | Circular buffer backed by MMAPed file for golang | Go | 90 |
| [cardinality-estimator](https://github.com/cloudflare/cardinality-estimator) | A crate for estimating the cardinality of distinct elements in a stream or dataset. | Rust | 31 |
| [cf-ip-rewrite](https://github.com/cloudflare/cf-ip-rewrite) |  | PHP | 15 |
| [cf-reqwest](https://github.com/cloudflare/cf-reqwest) | This is a fork of the great reqwest library with some features that were not accepted to the upst... | Rust | 20 |
| [cf-sealion-api](https://github.com/cloudflare/cf-sealion-api) |  | TypeScript | 1 |
| [cf-webhook-relay](https://github.com/cloudflare/cf-webhook-relay) |  | JavaScript | 37 |
| [cf_benchmark](https://github.com/cloudflare/cf_benchmark) |  | Go | 45 |
| [cfweb3](https://github.com/cloudflare/cfweb3) |  | JavaScript | 319 |
| [chaussette](https://github.com/cloudflare/chaussette) |  | Rust | 18 |
| [chrome-devtools-rs](https://github.com/cloudflare/chrome-devtools-rs) | Rust library for the Chrome Devtools Protocol | Rust | 64 |
| [claire](https://github.com/cloudflare/claire) | A Cloudflare WebExtension | JavaScript | 100 |
| [cloudflare-access-for-atlassian](https://github.com/cloudflare/cloudflare-access-for-atlassian) | Authenticate Atlasssian products when using Cloudflare Access | Java | 51 |
| [cloudflare-access-for-sentry](https://github.com/cloudflare/cloudflare-access-for-sentry) |  | Python | 16 |
| [Cloudflare-CPanel](https://github.com/cloudflare/Cloudflare-CPanel) | Provides a CPanel Plugin to allow one click Cloudflare setup. | PHP | 145 |
| [cloudflare-gcp](https://github.com/cloudflare/cloudflare-gcp) | Google Cloud Function to push json files from GC Storage to Big Query | JavaScript | 89 |
| [cloudflare-ingress-controller](https://github.com/cloudflare/cloudflare-ingress-controller) | A Kubernetes ingress controller for Cloudflare's Argo Tunnels | Go | 369 |
| [Cloudflare-Magento](https://github.com/cloudflare/Cloudflare-Magento) | A Cloudflare plugin for Magento2. | PHP | 52 |
| [cloudflare-php](https://github.com/cloudflare/cloudflare-php) | PHP library for the Cloudflare v4 API | PHP | 666 |
| [Cloudflare-Pivotal-Cloud-Foundry](https://github.com/cloudflare/Cloudflare-Pivotal-Cloud-Foundry) |  | Go | 6 |
| [Cloudflare-Policies](https://github.com/cloudflare/Cloudflare-Policies) |  | — | 21 |
| [cloudflare-rs](https://github.com/cloudflare/cloudflare-rs) | Rust library for the Cloudflare v4 API | Rust | 307 |
| [Cloudflare-WordPress](https://github.com/cloudflare/Cloudflare-WordPress) | A Cloudflare plugin for WordPress | PHP | 236 |
| [cloudflare.design](https://github.com/cloudflare/cloudflare.design) |  | JavaScript | 28 |
| [cloudflare.github.io](https://github.com/cloudflare/cloudflare.github.io) | Cloudflare ❤️ Open Source | CSS | 431 |
| [cloudflarejs](https://github.com/cloudflare/cloudflarejs) | CloudflareJS is a robust and highly performant API for placing your JavaScript on the page and sa... | — | 6 |
| [cloudflaretv-apps](https://github.com/cloudflare/cloudflaretv-apps) |  | — | 2 |
| [cobol.demos.cloudflare.com](https://github.com/cloudflare/cobol.demos.cloudflare.com) |  | HTML | 1 |
| [cobweb](https://github.com/cloudflare/cobweb) | COBOL to WebAssembly compiler | COBOL | 391 |
| [collapsify](https://github.com/cloudflare/collapsify) | Collapsify inlines all the resources of a page into a single document | JavaScript | 213 |
| [color](https://github.com/cloudflare/color) |  | JavaScript | 60 |
| [comodo](https://github.com/cloudflare/comodo) | Comodo  | Go | 15 |
| [complainer](https://github.com/cloudflare/complainer) |  Complainer's job is to send notifications to different services when tasks fail on Mesos cluster. | Go | 80 |
| [conf](https://github.com/cloudflare/conf) | Really, really simple key=val configuration file parser | Go | 38 |
| [connection-coalescing-imc22](https://github.com/cloudflare/connection-coalescing-imc22) |  | Jupyter Notebook | 3 |
| [Coupe](https://github.com/cloudflare/Coupe) | A tool for communicating between web pages | JavaScript | 33 |
| [ct-log](https://github.com/cloudflare/ct-log) | A low-cost Certificate Transparency log for deployment in the cloud. | Go | 42 |
| [daphne](https://github.com/cloudflare/daphne) | Implementation of DAP | Rust | 143 |
| [deadorbit](https://github.com/cloudflare/deadorbit) | Polyglot utility to log errors in Node and the browser | JavaScript | 16 |
| [developer-summer-challenge](https://github.com/cloudflare/developer-summer-challenge) |  | HTML | 10 |
| [devweek](https://github.com/cloudflare/devweek) | A collection of example solutions for the Developer Challenges. | TypeScript | 19 |
| [dkim](https://github.com/cloudflare/dkim) | DKIM (RFC6376) implementation | Rust | 56 |
| [dmarc](https://github.com/cloudflare/dmarc) |  | Rust | 14 |
| [doca](https://github.com/cloudflare/doca) | A CLI tool that scaffolds API documentation based on JSON HyperSchemas. | JavaScript | 228 |
| [doca-bootstrap-theme](https://github.com/cloudflare/doca-bootstrap-theme) | Doca theme using Twitter Bootstrap | JavaScript | 12 |
| [docker-phan](https://github.com/cloudflare/docker-phan) | Dockerization of the Phan PHP static analysis tool | Shell | 59 |
| [dog](https://github.com/cloudflare/dog) | Durable Object Groups | TypeScript | 291 |
| [doom-wasm](https://github.com/cloudflare/doom-wasm) | Chocolate Doom WebAssembly port with WebSockets support | C | 387 |
| [ecdysis](https://github.com/cloudflare/ecdysis) | A library for graceful restarts in Rust | Rust | 296 |
| [embed-box](https://github.com/cloudflare/embed-box) | Universal install guide for embed codes and CMS plugins. | JavaScript | 77 |
| [entropy-map](https://github.com/cloudflare/entropy-map) | Low-latency hash map using minimal perfect hash functions and compact encoding. | Rust | 38 |
| [eslint-config-cloudflare](https://github.com/cloudflare/eslint-config-cloudflare) |  | — | 2 |
| [exim-cve-2019-10149-data](https://github.com/cloudflare/exim-cve-2019-10149-data) | Data Collection Related to Exim CVE-2019-10149 | — | 3 |
| [filterforge](https://github.com/cloudflare/filterforge) | Tool for solving BPF filters and crafting packets based on these. | Python | 35 |
| [flow-pipeline](https://github.com/cloudflare/flow-pipeline) | A set of tools and examples to run a flow-pipeline (sFlow, NetFlow) | Go | 190 |
| [fortiche](https://github.com/cloudflare/fortiche) |  | Fortran | 8 |
| [foundations](https://github.com/cloudflare/foundations) | Cloudflare's Rust service foundations library. | Rust | 1,569 |
| [fourq](https://github.com/cloudflare/fourq) | Package fourq implements FourQ, a high-speed elliptic curve at the 128-bit security level. | Go | 54 |
| [freighter](https://github.com/cloudflare/freighter) | A fast, modular, and operationally boring Rust private registry implementation. | Rust | 138 |
| [fyz](https://github.com/cloudflare/fyz) |  | JavaScript | — |
| [gatelogic](https://github.com/cloudflare/gatelogic) | Gatelogic - Somewhat reactive programming framework in Python | Python | 11 |
| [GCS-Logshare-Setup-Script](https://github.com/cloudflare/GCS-Logshare-Setup-Script) | Script to automate Cloudflare ELS logs into Google BigQuery and Google Data Studio | Shell | 13 |
| [generator-cf-module](https://github.com/cloudflare/generator-cf-module) | Yeoman Generator for Cloudflare | JavaScript | 3 |
| [GHC-Errbot](https://github.com/cloudflare/GHC-Errbot) | A Google Hangouts Chat Backend for Errbot | Python | 22 |
| [go-ipfs-blocklist](https://github.com/cloudflare/go-ipfs-blocklist) |  | Go | 1 |
| [go-originframe](https://github.com/cloudflare/go-originframe) |  | Go | 9 |
| [go-stream](https://github.com/cloudflare/go-stream) |  | Go | 161 |
| [goflow](https://github.com/cloudflare/goflow) | The high-scalability sFlow/NetFlow/IPFIX collector used internally at Cloudflare. | Go | 917 |
| [goimports-nogroup](https://github.com/cloudflare/goimports-nogroup) | A patched goimports that does not divide imports into groups. | Go | 3 |
| [gokey](https://github.com/cloudflare/gokey) | A simple vaultless password manager in Go | Go | 2,417 |
| [golibs](https://github.com/cloudflare/golibs) | Various small golang libraries | Go | 416 |
| [golz4](https://github.com/cloudflare/golz4) | Golang interface to LZ4 compression | C | 100 |
| [goser](https://github.com/cloudflare/goser) | Code for talk about Go Serialization | Go | 79 |
| [gosession2](https://github.com/cloudflare/gosession2) | Code for GoSF: Go Session 2 | Go | 8 |
| [har-sanitizer](https://github.com/cloudflare/har-sanitizer) |  | TypeScript | 241 |
| [hello-world-container-image](https://github.com/cloudflare/hello-world-container-image) | Example container image for running on Cloudflare's container runtime | Go | 10 |
| [hellogopher](https://github.com/cloudflare/hellogopher) | Hellogopher: "just clone and make" your conventional Go project | Makefile | 1,146 |
| [helm-charts](https://github.com/cloudflare/helm-charts) |  | Smarty | 138 |
| [homebrew-cloudflare](https://github.com/cloudflare/homebrew-cloudflare) |  | Ruby | 114 |
| [html-rewriter-wasm](https://github.com/cloudflare/html-rewriter-wasm) | WebAssembly version of HTMLRewriter | TypeScript | 209 |
| [images.pages.dev](https://github.com/cloudflare/images.pages.dev) |  | TypeScript | 127 |
| [instaflare](https://github.com/cloudflare/instaflare) |  | JavaScript | 4 |
| [ipvs](https://github.com/cloudflare/ipvs) | Package ipvs allows you to manage Linux IPVS services and destinations | Go | 180 |
| [jgc-talks](https://github.com/cloudflare/jgc-talks) | Code samples and data used in talk preparation by John Graham-Cumming | Go | 96 |
| [jpegtran](https://github.com/cloudflare/jpegtran) | jpegtran fork with significant performance improvements | C | 144 |
| [json-schema-loader](https://github.com/cloudflare/json-schema-loader) | Webpack loader that resolves both internal and external JSON Schema references. | JavaScript | 24 |
| [json-schema-tools](https://github.com/cloudflare/json-schema-tools) | Packages for working with JSON Schema and JSON Hyper-Schema | JavaScript | 340 |
| [JSON.is](https://github.com/cloudflare/JSON.is) | Open-source documentation for common JSON formats. | JavaScript | 303 |
| [keyless](https://github.com/cloudflare/keyless) | Cloudflare's Keyless SSL Server Reference Implementation | C | 275 |
| [kv-asset-handler](https://github.com/cloudflare/kv-asset-handler) | Routes requests to KV assets | TypeScript | 259 |
| [langchain-cloudflare](https://github.com/cloudflare/langchain-cloudflare) | LangChain integrations for Cloudflare | Python | 27 |
| [lazyhtml](https://github.com/cloudflare/lazyhtml) | HTML5-compliant parser and serializer than enables building transformation pipeline in a pluggabl... | Rust | 142 |
| [linux](https://github.com/cloudflare/linux) | Cloudflare Linux Kernel Patches | — | 142 |
| [ljmm](https://github.com/cloudflare/ljmm) |  | C | 6 |
| [lockbox](https://github.com/cloudflare/lockbox) | Offline encryption of Kubernetes Secrets | Go | 183 |
| [logsclient](https://github.com/cloudflare/logsclient) |  | Go | 23 |
| [logshare](https://github.com/cloudflare/logshare) | logshare is a library & CLI client for retrieving logs from Cloudflare's Enterprise Log Share ser... | Go | 80 |
| [lol-html](https://github.com/cloudflare/lol-html) | Low output latency streaming HTML parser/rewriter with CSS selector-based API | Rust | 1,959 |
| [loom](https://github.com/cloudflare/loom) | Easier to read LuaJIT dumps | Lua | 179 |
| [lua-aho-corasick](https://github.com/cloudflare/lua-aho-corasick) |  | C++ | 158 |
| [lua-re2](https://github.com/cloudflare/lua-re2) | RE2's C and Lua interface | Lua | 35 |
| [lua-resty-cookie](https://github.com/cloudflare/lua-resty-cookie) | Lua library for HTTP cookie manipulations for OpenResty/ngx_lua | Perl | 349 |
| [lua-resty-json](https://github.com/cloudflare/lua-resty-json) | json lib for lua and C | C | 178 |
| [lua-resty-limit](https://github.com/cloudflare/lua-resty-limit) |  | — | 3 |
| [luajit-mm](https://github.com/cloudflare/luajit-mm) | Luajit take full advantage of lower 2G memory on AMD64 platform. | C | 36 |
| [matched-data-cli](https://github.com/cloudflare/matched-data-cli) | Tool to interact with the firewall matched data feature. | Rust | 21 |
| [media-manager](https://github.com/cloudflare/media-manager) |  | — | 1 |
| [meet](https://github.com/cloudflare/meet) |  | TypeScript | 2,289 |
| [migp-go](https://github.com/cloudflare/migp-go) |  | Go | 26 |
| [mitm.watch](https://github.com/cloudflare/mitm.watch) |  | Go | 17 |
| [mitmengine](https://github.com/cloudflare/mitmengine) | A MITM (monster-in-the-middle) detection tool. Used to build MALCOLM: | Go | 816 |
| [mmap-sync](https://github.com/cloudflare/mmap-sync) | Rust library for concurrent data access, using memory-mapped files, zero-copy deserialization, an... | Rust | 621 |
| [mod_cloudflare](https://github.com/cloudflare/mod_cloudflare) |  | C | 259 |
| [ModCloudFlareIIS](https://github.com/cloudflare/ModCloudFlareIIS) |  | C# | 16 |
| [modules-rollup-esm](https://github.com/cloudflare/modules-rollup-esm) | Template for modules, rollup, es modules | JavaScript | 8 |
| [modules-webpack-commonjs](https://github.com/cloudflare/modules-webpack-commonjs) | Template for modules, webpack, commonjs | JavaScript | 5 |
| [nel-rs](https://github.com/cloudflare/nel-rs) | Basic Rust utilities for building NEL reports from network errors. | Rust | 11 |
| [net-originframe](https://github.com/cloudflare/net-originframe) |  | Go | 4 |
| [netjet](https://github.com/cloudflare/netjet) | Express middleware to generate preload headers | JavaScript | 155 |
| [networkquality-rs](https://github.com/cloudflare/networkquality-rs) |  | Rust | 75 |
| [ngx_brotli_module](https://github.com/cloudflare/ngx_brotli_module) | Brotli module for NGINX, including the encoder | C | 116 |
| [octopus](https://github.com/cloudflare/octopus) | The Octopus is part of our network automation pipeline. Its job is to aggregate data from differe... | Go | 38 |
| [odoh-analysis](https://github.com/cloudflare/odoh-analysis) |  | M4 | 11 |
| [odoh-client-go](https://github.com/cloudflare/odoh-client-go) | Oblivious DoH client | Go | 82 |
| [odoh-client-rs](https://github.com/cloudflare/odoh-client-rs) | Oblivious DoH client application written in Rust | Rust | 73 |
| [odoh-go](https://github.com/cloudflare/odoh-go) | Oblivious DoH library in Go | Go | 146 |
| [odoh-rs](https://github.com/cloudflare/odoh-rs) | Oblivious DoH library in Rust | Rust | 188 |
| [ohttp-analysis](https://github.com/cloudflare/ohttp-analysis) |  | M4 | 9 |
| [opaque-core](https://github.com/cloudflare/opaque-core) |  | Go | 47 |
| [opaque-ea](https://github.com/cloudflare/opaque-ea) |  | Go | 66 |
| [origin-ca-issuer](https://github.com/cloudflare/origin-ca-issuer) | cert-manager issuer for Origin CA | Go | 315 |
| [origin-pull](https://github.com/cloudflare/origin-pull) |  | CSS | 5 |
| [pages-action](https://github.com/cloudflare/pages-action) | 🛑 DEPRECATED, please use wrangler-action | JavaScript | 468 |
| [pages-build-image](https://github.com/cloudflare/pages-build-image) |  | — | 43 |
| [pal](https://github.com/cloudflare/pal) | PAL: A secret bootstrapping tool for Docker | Go | 85 |
| [parquet-tsdb-poc](https://github.com/cloudflare/parquet-tsdb-poc) | A POC for a tsdb storage using parquet | Go | 43 |
| [pat-app](https://github.com/cloudflare/pat-app) |  | Go | 25 |
| [pat-go](https://github.com/cloudflare/pat-go) | Private Access Tokens reference implementation | Go | 38 |
| [playwright](https://github.com/cloudflare/playwright) | Playwright fork that works with Cloudflare Browser Rendering | TypeScript | 104 |
| [playwright-mcp](https://github.com/cloudflare/playwright-mcp) | Playwright MCP fork that works with Cloudflare Browser Rendering | TypeScript | 239 |
| [pmtud](https://github.com/cloudflare/pmtud) | Path MTU daemon - broadcast lost ICMP packets on ECMP networks | C | 257 |
| [privacy-gateway-client-library](https://github.com/cloudflare/privacy-gateway-client-library) |  | Rust | 24 |
| [privacy-gateway-server-go](https://github.com/cloudflare/privacy-gateway-server-go) | An Oblivious HTTP gateway | Go | 83 |
| [production-saas](https://github.com/cloudflare/production-saas) | (WIP) Example SaaS application built in public on the Cloudflare stack! | TypeScript | 1,151 |
| [promsaint](https://github.com/cloudflare/promsaint) | Nagios to Prometheus integration | Go | 23 |
| [py-mmdb-encoder](https://github.com/cloudflare/py-mmdb-encoder) | Create mmdb files to encode prefix lists. | Python | 31 |
| [rakelimit](https://github.com/cloudflare/rakelimit) | A fair-share ratelimiter implemented in BPF | C | 206 |
| [random-employee-chat](https://github.com/cloudflare/random-employee-chat) |  | JavaScript | 27 |
| [raven-lua](https://github.com/cloudflare/raven-lua) | A Lua interface to Sentry | Lua | 120 |
| [realtimekit-ios-core](https://github.com/cloudflare/realtimekit-ios-core) | Swift package definitions for RealtimeKitCore | Swift | 3 |
| [recapn](https://github.com/cloudflare/recapn) | A WIP Cap'n Proto implementation in Rust written from the ground up | Rust | 70 |
| [receipt-printer](https://github.com/cloudflare/receipt-printer) | Code to drive the receipt printer in the Cloudflare London office that outputs randomness | Python | 96 |
| [redoctober](https://github.com/cloudflare/redoctober) | Go server for two-man rule style file encryption and decryption. | Go | 1,419 |
| [redox](https://github.com/cloudflare/redox) |  | JavaScript | 7 |
| [redux-grim](https://github.com/cloudflare/redux-grim) |  | JavaScript | 21 |
| [research.cloudflare.com](https://github.com/cloudflare/research.cloudflare.com) |  | JavaScript | 33 |
| [roughtime](https://github.com/cloudflare/roughtime) | A secure clock-synchronization protocol for when rough is enough. | Go | 169 |
| [salt-cloudflare](https://github.com/cloudflare/salt-cloudflare) | Cloudflare salt module allows you to manage zones on Cloudflare from salt. | Python | 37 |
| [sandbox](https://github.com/cloudflare/sandbox) | Simple Linux seccomp rules without writing any code | C | 524 |
| [semgrep-config-test](https://github.com/cloudflare/semgrep-config-test) |  | — | — |
| [semver_bash](https://github.com/cloudflare/semver_bash) | Semantic Versioning in Bash | Shell | 268 |
| [service](https://github.com/cloudflare/service) |  | Go | 37 |
| [shellflip](https://github.com/cloudflare/shellflip) | Graceful process restarts in Rust | Rust | 519 |
| [sliceslice-rs](https://github.com/cloudflare/sliceslice-rs) | A fast implementation of single-pattern substring search using SIMD acceleration. | Rust | 100 |
| [slirpnetstack](https://github.com/cloudflare/slirpnetstack) | slirp4netns implementation using gvisor/netstack | Go | 131 |
| [SortaSQL](https://github.com/cloudflare/SortaSQL) | An extension to PostgreSQL allowing Kyoto Cabinets to be used as a backing data store. | C | 52 |
| [spdget](https://github.com/cloudflare/spdget) | A curl-like utility that connects over SPDY. | Go | 16 |
| [speedtest](https://github.com/cloudflare/speedtest) | Component to perform network speed tests against Cloudflare's edge network | JavaScript | 677 |
| [sqlalchemy-clickhouse](https://github.com/cloudflare/sqlalchemy-clickhouse) |  | Python | 323 |
| [ssh-log-cli](https://github.com/cloudflare/ssh-log-cli) |  | Rust | 24 |
| [Stout](https://github.com/cloudflare/Stout) | A reliable static website deploy tool | Go | 753 |
| [stout.is](https://github.com/cloudflare/stout.is) | Documentation for Stout | Stylus | 4 |
| [stpyv8](https://github.com/cloudflare/stpyv8) | Python 3 and JavaScript interoperability. Successor To PyV8 (https://github.com/flier/pyv8) | C++ | 518 |
| [stream-angular](https://github.com/cloudflare/stream-angular) |  | TypeScript | 13 |
| [stream-react](https://github.com/cloudflare/stream-react) |  | TypeScript | 199 |
| [stream-wordpress](https://github.com/cloudflare/stream-wordpress) |  | JavaScript | 8 |
| [stripe.pages.dev](https://github.com/cloudflare/stripe.pages.dev) |  | CSS | 49 |
| [submit.pages.dev](https://github.com/cloudflare/submit.pages.dev) |  | HTML | 40 |
| [svg-hush](https://github.com/cloudflare/svg-hush) | Make it safe to serve untrusted SVG files | Rust | 420 |
| [telescope](https://github.com/cloudflare/telescope) | Cross-browser web performance testing agent | TypeScript | 276 |
| [tf-migrate](https://github.com/cloudflare/tf-migrate) | CLI tool for upgrading the terraform-provider-cloudflare to a new major version | Go | 19 |
| [transifex-client](https://github.com/cloudflare/transifex-client) | HTTP Client API for the Transifex translation service | JavaScript | 6 |
| [trie-hard](https://github.com/cloudflare/trie-hard) | Novel implementation of a Trie data structure optimized for small, sparse maps | Rust | 588 |
| [turnstile-firebase-app-check](https://github.com/cloudflare/turnstile-firebase-app-check) |  | TypeScript | 6 |
| [typical.design](https://github.com/cloudflare/typical.design) | A website feature common design tropes for testing Eager apps. | Stylus | 3 |
| [ui-migration-stats](https://github.com/cloudflare/ui-migration-stats) | Migrating between frameworks can be hard. Having some way to quantify the migration can help with... | JavaScript | 7 |
| [utahfs](https://github.com/cloudflare/utahfs) | UtahFS is an encrypted storage system that provides a user-friendly FUSE drive backed by cloud st... | Go | 819 |
| [vpnc-scripts](https://github.com/cloudflare/vpnc-scripts) | clone from http://git.infradead.org/users/dwmw2/vpnc-scripts.git/ | Shell | 11 |
| [webcm](https://github.com/cloudflare/webcm) | 🧩 Components Manager for the Web. Free, open-source, and fast! | TypeScript | 80 |
| [wildcard](https://github.com/cloudflare/wildcard) | Wildcard matching | Rust | 213 |
| [wildebeest](https://github.com/cloudflare/wildebeest) | Wildebeest is an ActivityPub and Mastodon-compatible server | TypeScript | 2,108 |
| [wirefilter](https://github.com/cloudflare/wirefilter) | An execution engine for Wireshark-like filters | Rust | 1,101 |
| [xdpcap](https://github.com/cloudflare/xdpcap) | tcpdump like XDP packet capture | Go | 760 |

</details>

---

## ⛅ Workers & Serverless

> Everything needed to build, test, and deploy on Cloudflare Workers — the world's most widely-used edge serverless platform. Includes `workerd` (the open-source JS/Wasm runtime), `wrangler` (the CLI), `miniflare` (local dev simulator), and a huge collection of starter templates, bindings, and framework integrations. Also covers Durable Objects, Workers KV, R2, D1, and Cloudflare Pages integrations.

**106 repositories** · **57,504 total stars**

### 🌟 Highlights

- **[moltworker](https://github.com/cloudflare/moltworker)** (9,806⭐) — Run OpenClaw, (formerly Moltbot, formerly Clawdbot) on Cloudflare Workers
- **[workerd](https://github.com/cloudflare/workerd)** (8,107⭐) — The JavaScript / Wasm runtime that powers Cloudflare Workers
- **[workers-sdk](https://github.com/cloudflare/workers-sdk)** (3,951⭐) — ⛅️ Home to Wrangler, the CLI for Cloudflare Workers®
- **[miniflare](https://github.com/cloudflare/miniflare)** (3,908⭐) — 🔥 Fully-local simulator for Cloudflare Workers. For the latest version, see https://github.com/cloudflare/workers-sdk...
- **[capnweb](https://github.com/cloudflare/capnweb)** (3,762⭐) — JavaScript/TypeScript-native, low-boilerplate, object-capability RPC system

<details>
<summary>View all 106 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [access-crl-worker-template](https://github.com/cloudflare/access-crl-worker-template) | A worker that can be used for doing basic CRL checks. It assumes that the request has gone throug... | JavaScript | 12 |
| [actors](https://github.com/cloudflare/actors) | An easier way to build with Cloudflare Durable Objects | TypeScript | 356 |
| [binast-cf-worker](https://github.com/cloudflare/binast-cf-worker) | Serve BinAST via a Cloudflare Worker | JavaScript | 18 |
| [cabidela](https://github.com/cloudflare/cabidela) | Cabidela is a small, fast, eval-less, Cloudflare Workers compatible, dynamic JSON Schema validator. | TypeScript | 28 |
| [capnweb](https://github.com/cloudflare/capnweb) | JavaScript/TypeScript-native, low-boilerplate, object-capability RPC system | TypeScript | 3,762 |
| [cf-identity-dynamic](https://github.com/cloudflare/cf-identity-dynamic) | A highly customizable block page built in Cloudflare Workers that provides enriched Access Deny r... | JavaScript | 45 |
| [chanfana](https://github.com/cloudflare/chanfana) | OpenAPI 3 and 3.1 schema generator and validator for Hono, itty-router and more! | TypeScript | 725 |
| [chatgpt-plugin](https://github.com/cloudflare/chatgpt-plugin) | Build ChatGPT plugins with Cloudflare's Developer Platform 🤖 | JavaScript | 293 |
| [cloudflare-prometheus-exporter](https://github.com/cloudflare/cloudflare-prometheus-exporter) | Export Cloudflare metrics to Prometheus. Built on Cloudflare Workers with Durable Objects for sta... | TypeScript | 145 |
| [cloudflare-workers-wasm-demo](https://github.com/cloudflare/cloudflare-workers-wasm-demo) |  | C | 152 |
| [cobol-worker](https://github.com/cloudflare/cobol-worker) |  | COBOL | 41 |
| [cobol-worker-template](https://github.com/cloudflare/cobol-worker-template) | A Cloudflare worker that runs COBOL. | JavaScript | 64 |
| [containers](https://github.com/cloudflare/containers) | Enhance your Workers with serverless containers | TypeScript | 243 |
| [custom-device-posture-integration-example-worker](https://github.com/cloudflare/custom-device-posture-integration-example-worker) | Example implementation of a worker for custom device posture integrations | JavaScript | 7 |
| [d1-northwind](https://github.com/cloudflare/d1-northwind) | Northwind Traders D1 Demo | TypeScript | 153 |
| [dart-worker-hello-world](https://github.com/cloudflare/dart-worker-hello-world) | Dart hello world for Cloudflare Workers | Dart | 39 |
| [db-connect](https://github.com/cloudflare/db-connect) | :rocket: Connect your SQL database to Cloudflare Workers | TypeScript | 149 |
| [deploy.workers.cloudflare.com](https://github.com/cloudflare/deploy.workers.cloudflare.com) | ✨ Deploy Cloudflare Workers applications with (almost) no-config, using GitHub Actions | JavaScript | 73 |
| [dmarc-email-worker](https://github.com/cloudflare/dmarc-email-worker) | DMARC reports processor using Cloudflare Workers and Email Workers | TypeScript | 163 |
| [doom-workers](https://github.com/cloudflare/doom-workers) | Website and Message Router source code for the Multiplayer Doom on Cloudflare Workers tech demo | JavaScript | 196 |
| [durable-chat-template](https://github.com/cloudflare/durable-chat-template) |  | TypeScript | 5 |
| [durable-objects-rollup-esm](https://github.com/cloudflare/durable-objects-rollup-esm) | Template for durable objects, rollup, es modules | JavaScript | 32 |
| [durable-objects-template](https://github.com/cloudflare/durable-objects-template) |  | JavaScript | 58 |
| [durable-objects-typescript-rollup-esm](https://github.com/cloudflare/durable-objects-typescript-rollup-esm) |  | TypeScript | 48 |
| [durable-objects-webpack-commonjs](https://github.com/cloudflare/durable-objects-webpack-commonjs) | Template for durable objects, webpack, commonjs | JavaScript | 22 |
| [ecommerce-bundles-workers-example](https://github.com/cloudflare/ecommerce-bundles-workers-example) |  | Vue | 89 |
| [kotlin-worker-hello-world](https://github.com/cloudflare/kotlin-worker-hello-world) |  | Kotlin | 70 |
| [kubernetes-access-worker-example](https://github.com/cloudflare/kubernetes-access-worker-example) | Example implementation of an Access-protected private Kubernetes API | TypeScript | 2 |
| [kv-worker-migrate](https://github.com/cloudflare/kv-worker-migrate) |  | JavaScript | 18 |
| [lasso](https://github.com/cloudflare/lasso) | A Worker that caches wrangler's binary dependencies, so you can install wrangler if NPM or GitHub... | JavaScript | 14 |
| [managed-component-to-cloudflare-worker](https://github.com/cloudflare/managed-component-to-cloudflare-worker) | Deploy Managed Components as Cloudflare Workers and use them in Cloudflare Zaraz | TypeScript | 24 |
| [matched-data-worker](https://github.com/cloudflare/matched-data-worker) |  | TypeScript | 7 |
| [mcp](https://github.com/cloudflare/mcp) | MCP server for the Cloudflare API | TypeScript | 324 |
| [miniflare](https://github.com/cloudflare/miniflare) | 🔥 Fully-local simulator for Cloudflare Workers. For the latest version, see https://github.com/cl... | TypeScript | 3,908 |
| [miniflare-esbuild-ava](https://github.com/cloudflare/miniflare-esbuild-ava) | Example project using Miniflare, esbuild and AVA | JavaScript | 14 |
| [miniflare-typescript-esbuild-jest](https://github.com/cloudflare/miniflare-typescript-esbuild-jest) | Example project using Miniflare, TypeScript, esbuild and Jest | TypeScript | 89 |
| [moltworker](https://github.com/cloudflare/moltworker) | Run OpenClaw, (formerly Moltbot, formerly Clawdbot) on Cloudflare Workers | TypeScript | 9,806 |
| [next-on-pages](https://github.com/cloudflare/next-on-pages) | CLI to build and develop Next.js apps for Cloudflare Pages | TypeScript | 1,498 |
| [odoh-proxy-worker](https://github.com/cloudflare/odoh-proxy-worker) |  | — | 2 |
| [perl-worker-hello-world](https://github.com/cloudflare/perl-worker-hello-world) |  | Perl | 13 |
| [php-worker-hello-world](https://github.com/cloudflare/php-worker-hello-world) |  | PHP | 128 |
| [postgrest-worker-example](https://github.com/cloudflare/postgrest-worker-example) | Example Workers function for interfacing with a PostgreSQL database, using PostgREST | JavaScript | 21 |
| [privacy-gateway-relay](https://github.com/cloudflare/privacy-gateway-relay) | A Oblivious HTTP ("OHTTP") Relay built on Cloudflare Workers. | JavaScript | 32 |
| [pubsub](https://github.com/cloudflare/pubsub) | A set of useful helper methods for writing functions to handle Cloudflare Pub/Sub messages (https... | TypeScript | 36 |
| [puppeteer](https://github.com/cloudflare/puppeteer) | Puppeteer Core fork that works with Cloudflare Browser Workers | TypeScript | 362 |
| [pyodide-build-scripts](https://github.com/cloudflare/pyodide-build-scripts) | Automated build processes for Cloudflare Workers Pyodide distribution | Python | 6 |
| [python-worker-hello-world](https://github.com/cloudflare/python-worker-hello-world) | Python hello world for Cloudflare Workers | JavaScript | 276 |
| [python-workers-examples](https://github.com/cloudflare/python-workers-examples) |  | Python | 273 |
| [queues-web-crawler](https://github.com/cloudflare/queues-web-crawler) | A web crawler built with Cloudflare Queues, Browser Rendering, and Workers KV. | TypeScript | 186 |
| [react-workers-template](https://github.com/cloudflare/react-workers-template) | Example project showing how to deploy your React application to Cloudflare Workers Sites | JavaScript | 46 |
| [reason-worker-hello-world](https://github.com/cloudflare/reason-worker-hello-world) | Reason hello world for Cloudflare Workers | Reason | 21 |
| [rustwasm-worker-template](https://github.com/cloudflare/rustwasm-worker-template) | A template for kick starting a Cloudflare Worker project using workers-rs. Write your Cloudflare ... | Rust | 385 |
| [saffron](https://github.com/cloudflare/saffron) | The cron parser powering Cron Triggers on Cloudflare Workers | Rust | 246 |
| [scala-worker-hello-world](https://github.com/cloudflare/scala-worker-hello-world) | Scala hello world for Cloudflare Workers | Scala | 24 |
| [scala-worker-kv](https://github.com/cloudflare/scala-worker-kv) | Scala example of Workers KV | Scala | 5 |
| [securitytxt-worker](https://github.com/cloudflare/securitytxt-worker) | The worker that serves Cloudflare's security.txt! | JavaScript | 56 |
| [serverless-action](https://github.com/cloudflare/serverless-action) |  | Dockerfile | 125 |
| [serverless-cloudflare-workers](https://github.com/cloudflare/serverless-cloudflare-workers) | Serverless provider plugin for Cloudflare Workers | JavaScript | 181 |
| [serverless-registry](https://github.com/cloudflare/serverless-registry) | A container registry backed by Workers and R2. | TypeScript | 1,370 |
| [service-worker-custom-build](https://github.com/cloudflare/service-worker-custom-build) | Template for webpack-based custom build of a service worker | JavaScript | 8 |
| [templates](https://github.com/cloudflare/templates) | Templates for Cloudflare Workers | TypeScript | 1,910 |
| [turnstile-demo-workers](https://github.com/cloudflare/turnstile-demo-workers) | A simple demo with a Turnstile-protected form, using Cloudflare Workers. | HTML | 266 |
| [wasm-coredump](https://github.com/cloudflare/wasm-coredump) | Cloudflare Workers Wasm Coredump Service | Rust | 44 |
| [websocket-template](https://github.com/cloudflare/websocket-template) | Example template for working with the WebSocketPair API in Cloudflare Workers. | JavaScript | 130 |
| [worker-emscripten-template](https://github.com/cloudflare/worker-emscripten-template) |  | JavaScript | 67 |
| [worker-performance-examples](https://github.com/cloudflare/worker-performance-examples) | Scripts which can be used to test the performance of various providers | JavaScript | 27 |
| [worker-sentry](https://github.com/cloudflare/worker-sentry) | Sentry over Access for Worker | JavaScript | 50 |
| [worker-sites-init](https://github.com/cloudflare/worker-sites-init) | tropical irradiation | JavaScript | 2 |
| [worker-sites-template](https://github.com/cloudflare/worker-sites-template) |  | HTML | 81 |
| [worker-speedtest-template](https://github.com/cloudflare/worker-speedtest-template) |  | JavaScript | 217 |
| [worker-template](https://github.com/cloudflare/worker-template) | a template to kickstart your Cloudflare worker! | JavaScript | 215 |
| [worker-template-fetch](https://github.com/cloudflare/worker-template-fetch) |  | JavaScript | 20 |
| [worker-template-mysql](https://github.com/cloudflare/worker-template-mysql) | Reference demo and modified MySQL driver to connect Cloudflare Workers to a relational database. | JavaScript | 59 |
| [worker-template-postgres](https://github.com/cloudflare/worker-template-postgres) | Reference demo and modified PostgreSQL driver to connect Cloudflare Workers to a relational datab... | JavaScript | 91 |
| [worker-template-redirect](https://github.com/cloudflare/worker-template-redirect) |  | JavaScript | 10 |
| [worker-template-router](https://github.com/cloudflare/worker-template-router) |  | JavaScript | 237 |
| [worker-template-static](https://github.com/cloudflare/worker-template-static) |  | JavaScript | 16 |
| [worker-typescript-template](https://github.com/cloudflare/worker-typescript-template) | ʕ •́؈•̀) TypeScript template for Cloudflare Workers | TypeScript | 446 |
| [workerd](https://github.com/cloudflare/workerd) | The JavaScript / Wasm runtime that powers Cloudflare Workers | C++ | 8,107 |
| [workerd-tools](https://github.com/cloudflare/workerd-tools) | Prebuilt tools and utilities required for ongoing development in the workerd repo. | CMake | 5 |
| [workers-access-external-auth-example](https://github.com/cloudflare/workers-access-external-auth-example) |  | JavaScript | 28 |
| [workers-aws-template](https://github.com/cloudflare/workers-aws-template) | Cloudflare Workers template for accessing AWS services such as DynamoDB and SQS | JavaScript | 128 |
| [workers-chat-demo](https://github.com/cloudflare/workers-chat-demo) |  | JavaScript | 1,085 |
| [workers-docs](https://github.com/cloudflare/workers-docs) | 🌥👷‍♀️ The documentation site for Cloudflare Workers | — | 104 |
| [workers-for-platforms-example](https://github.com/cloudflare/workers-for-platforms-example) | A great place for platforms to get started on Cloudflare Workers! | TypeScript | 423 |
| [workers-google-analytics](https://github.com/cloudflare/workers-google-analytics) | Middleware for Google Analytics tracking in Workers | JavaScript | 31 |
| [workers-graphql-gateway-example](https://github.com/cloudflare/workers-graphql-gateway-example) | GraphQL running on Cloudflare Workers | JavaScript | 85 |
| [workers-graphql-server](https://github.com/cloudflare/workers-graphql-server) | 🔥Lightning-fast, globally distributed Apollo GraphQL server, deployed at the edge using Cloudflar... | TypeScript | 785 |
| [workers-honeycomb-logger](https://github.com/cloudflare/workers-honeycomb-logger) | A library to easily send request events and traces to https://honeycomb.io | TypeScript | 83 |
| [workers-mcp](https://github.com/cloudflare/workers-mcp) | Talk to a Cloudflare Worker from Claude Desktop! | TypeScript | 633 |
| [workers-nodejs-compat-matrix](https://github.com/cloudflare/workers-nodejs-compat-matrix) | https://workers-nodejs-compat-matrix.pages.dev | JavaScript | 16 |
| [workers-oauth-provider](https://github.com/cloudflare/workers-oauth-provider) | OAuth provider library for Cloudflare Workers | TypeScript | 1,746 |
| [workers-py](https://github.com/cloudflare/workers-py) | Write Cloudflare Workers in 100% Python via Pyodide. | Python | 73 |
| [workers-react-pwa-example](https://github.com/cloudflare/workers-react-pwa-example) |  | JavaScript | 86 |
| [workers-rs](https://github.com/cloudflare/workers-rs) | Write Cloudflare Workers in 100% Rust via WebAssembly | Rust | 3,414 |
| [workers-sdk](https://github.com/cloudflare/workers-sdk) | ⛅️ Home to Wrangler, the CLI for Cloudflare Workers® | TypeScript | 3,951 |
| [workers-types](https://github.com/cloudflare/workers-types) | TypeScript type definitions for authoring Cloudflare Workers. | TypeScript | 368 |
| [workers-wasi](https://github.com/cloudflare/workers-wasi) |  | C++ | 154 |
| [workers-web-experiments](https://github.com/cloudflare/workers-web-experiments) | Public web experiments by the Cloudflare Workers team | TypeScript | 220 |
| [workers-webpack-example](https://github.com/cloudflare/workers-webpack-example) | An example of building a Cloudflare Worker with Webpack | JavaScript | 33 |
| [workers-wonnx](https://github.com/cloudflare/workers-wonnx) |  | Rust | 50 |
| [workers.cloudflare.com](https://github.com/cloudflare/workers.cloudflare.com) | The Cloudflare Workers website. | JavaScript | 156 |
| [workerskv.gui](https://github.com/cloudflare/workerskv.gui) | (WIP) A cross-platform Desktop application for exploring Workers KV Namespace data | Svelte | 317 |
| [workflows-starter](https://github.com/cloudflare/workflows-starter) | A starter template for Cloudflare Workflows.  | TypeScript | 46 |
| [wrangler-action](https://github.com/cloudflare/wrangler-action) | 🧙‍♀️ easily deploy cloudflare workers applications using wrangler and github actions | TypeScript | 1,803 |
| [wrangler-legacy](https://github.com/cloudflare/wrangler-legacy) | 🤠  Home to Wrangler v1 (deprecated) | Rust | 3,192 |

</details>

---

## 🔐 Security & Cryptography

> Cloudflare's security open source spans from foundational PKI tooling (CFSSL, used by Kubernetes and the broader Go ecosystem) to post-quantum cryptography (CIRCL with Kyber/SIDH implementations), WireGuard (boringtun, powers WARP), and zero-knowledge privacy protocols (Privacy Pass). Also includes NTS (Network Time Security), vulnerability scanning (Flan), and access control utilities.

**50 repositories** · **28,588 total stars**

### 🌟 Highlights

- **[cfssl](https://github.com/cloudflare/cfssl)** (9,385⭐) — CFSSL: Cloudflare's PKI and TLS toolkit
- **[boringtun](https://github.com/cloudflare/boringtun)** (6,974⭐) — Userspace WireGuard® Implementation in Rust
- **[flan](https://github.com/cloudflare/flan)** (4,148⭐) — A pretty sweet vulnerability scanner
- **[circl](https://github.com/cloudflare/circl)** (1,651⭐) — CIRCL: Cloudflare Interoperable Reusable Cryptographic Library
- **[sslconfig](https://github.com/cloudflare/sslconfig)** (1,310⭐) — Cloudflare's Internet facing SSL configuration

<details>
<summary>View all 50 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [advisories](https://github.com/cloudflare/advisories) | This repo functions as the hub for "open sourced" closed source vulnerabilities/advisories as wel... | Python | 6 |
| [arcnact](https://github.com/cloudflare/arcnact) | ARC & ACT Anonymous Credentials | — | 1 |
| [authr](https://github.com/cloudflare/authr) | :key: a flexible and expressive approach to access-control | PHP | 52 |
| [awesome-agents](https://github.com/cloudflare/awesome-agents) | Awesome Agents | TypeScript | 187 |
| [azul](https://github.com/cloudflare/azul) | Tiled transparency logs libraries and applications | Rust | 46 |
| [badupnp](https://github.com/cloudflare/badupnp) | Web service to test if SSDP/UPnP is exposed to the internet | Makefile | 17 |
| [blindrsa-ts](https://github.com/cloudflare/blindrsa-ts) | A TypeScript Library for Blind RSA Signature protocol | JavaScript | 32 |
| [bn256](https://github.com/cloudflare/bn256) | Package bn256 implements a particular bilinear group. | Go | 133 |
| [boring](https://github.com/cloudflare/boring) | BoringSSL bindings for the Rust programming language. | Rust | 482 |
| [boringssl-pq](https://github.com/cloudflare/boringssl-pq) | Fork of BoringSSL that adds hybrid post-quantum key exchange | C | 24 |
| [boringtun](https://github.com/cloudflare/boringtun) | Userspace WireGuard® Implementation in Rust | Rust | 6,974 |
| [certbot-dns-cloudflare](https://github.com/cloudflare/certbot-dns-cloudflare) |  | Python | 26 |
| [certinel](https://github.com/cloudflare/certinel) | A sentry for zero-hit TLS certificate changes in Go | Go | 56 |
| [certmgr](https://github.com/cloudflare/certmgr) | Automated certificate management using a CFSSL CA. | Go | 229 |
| [cf-nocompress](https://github.com/cloudflare/cf-nocompress) | An nginx module to prevent generic compression oracles | C | 10 |
| [cf-tls](https://github.com/cloudflare/cf-tls) | A duplicate of Go's crypto/tls, with additional helper functions | Go | 21 |
| [cfnts](https://github.com/cloudflare/cfnts) | Cloudflare's implementation of the NTS protocol written in Rust | Rust | 177 |
| [cfrpki](https://github.com/cloudflare/cfrpki) | Cloudflare's RPKI Toolbox | Go | 179 |
| [cfssl](https://github.com/cloudflare/cfssl) | CFSSL: Cloudflare's PKI and TLS toolkit | Go | 9,385 |
| [cfssl_trust](https://github.com/cloudflare/cfssl_trust) | CFSSL's CA trust store repository | Go | 311 |
| [circl](https://github.com/cloudflare/circl) | CIRCL: Cloudflare Interoperable Reusable Cryptographic Library | Go | 1,651 |
| [docker-opentsdb](https://github.com/cloudflare/docker-opentsdb) | Dockerfiles for OpenTSDB | Shell | 33 |
| [flan](https://github.com/cloudflare/flan) | A pretty sweet vulnerability scanner | Python | 4,148 |
| [go](https://github.com/cloudflare/go) | Go with Cloudflare experimental patches | Go | 370 |
| [gokeyless](https://github.com/cloudflare/gokeyless) | Go implementation of the keyless protocol | Go | 505 |
| [gortr](https://github.com/cloudflare/gortr) | The RPKI-to-Router server used at Cloudflare | Go | 319 |
| [js-rpc-and-entrypoints-demo](https://github.com/cloudflare/js-rpc-and-entrypoints-demo) |  | TypeScript | 66 |
| [msft-risky-user-ad-sync](https://github.com/cloudflare/msft-risky-user-ad-sync) | This repository deploys a Cloudflare Scheduled Worker which synchronises users flagged by Azure's... | JavaScript | 4 |
| [nginx-google-oauth](https://github.com/cloudflare/nginx-google-oauth) | Lua module to add Google OAuth to nginx | Lua | 429 |
| [opaque-ts](https://github.com/cloudflare/opaque-ts) | A TypeScript library for OPAQUE Asymmetric Password-Authenticated Key Exchange Protocol | TypeScript | 107 |
| [openauth-template-24](https://github.com/cloudflare/openauth-template-24) |  | TypeScript | — |
| [openssl-deprecate-rc4](https://github.com/cloudflare/openssl-deprecate-rc4) | Small patch for OpenSSL that deprecates the use of RC4 | — | 10 |
| [opentsdb_exporter](https://github.com/cloudflare/opentsdb_exporter) | Prometheus exporter for OpenTSDB | Go | 24 |
| [plexi](https://github.com/cloudflare/plexi) | Your Key Transparency auditor companion | Rust | 40 |
| [pp-browser-extension](https://github.com/cloudflare/pp-browser-extension) | Client for Privacy Pass protocol providing unlinkable cryptographic tokens  | TypeScript | 397 |
| [privacypass-attester](https://github.com/cloudflare/privacypass-attester) | A TypeScript Attester using Turnstile for the Privacy Pass Authentication Protocol | TypeScript | 14 |
| [privacypass-config](https://github.com/cloudflare/privacypass-config) | Development and deployment CLI for Cloudflare Privacy Pass implementation | TypeScript | 8 |
| [privacypass-issuer](https://github.com/cloudflare/privacypass-issuer) | A TypeScript Issuer for the Privacy Pass Authentication Protocol | TypeScript | 22 |
| [privacypass-origin](https://github.com/cloudflare/privacypass-origin) | A TypeScript Origin for the Privacy Pass Authentication Protocol | TypeScript | 10 |
| [privacypass-ts](https://github.com/cloudflare/privacypass-ts) | A TypeScript Library for the Privacy Pass Issuance Protocol | TypeScript | 42 |
| [qtls-pq](https://github.com/cloudflare/qtls-pq) |  | — | 13 |
| [rpki-rtr-client](https://github.com/cloudflare/rpki-rtr-client) |  | Python | 21 |
| [sshcert](https://github.com/cloudflare/sshcert) | A package for handling ssh certificates | Go | 4 |
| [sslconfig](https://github.com/cloudflare/sslconfig) | Cloudflare's Internet facing SSL configuration | — | 1,310 |
| [sslsaas-examples](https://github.com/cloudflare/sslsaas-examples) | Cloudflare's SSL for SaaS examples in various programming languages. | Java | 18 |
| [tls-tris](https://github.com/cloudflare/tls-tris) | crypto/tls, now with 100% more 1.3. THE API IS NOT STABLE AND DOCUMENTATION IS NOT GUARANTEED. | Go | 299 |
| [vinext-agents-example](https://github.com/cloudflare/vinext-agents-example) | vinext ⨉ agents sdk | TypeScript | 108 |
| [voprf-ts](https://github.com/cloudflare/voprf-ts) | A TypeScript library for Oblivious Pseudorandom Functions | TypeScript | 38 |
| [zkp-ecdsa](https://github.com/cloudflare/zkp-ecdsa) | Proves knowledge of an ECDSA-P256 signature under one of many public keys that are stored in a list. | TypeScript | 226 |
| [zt-hostname-ip-list-sync](https://github.com/cloudflare/zt-hostname-ip-list-sync) | Synchronize DNS with Zero Trust IP Lists | JavaScript | 4 |

</details>

---

## 🛠️ Developer Tools & SDKs

> Official Cloudflare API client libraries in Go, TypeScript, Python, Rust, and PHP, plus the Terraform provider (managing Cloudflare config as code) and cf-terraforming (importing existing config). These are the official, supported ways to integrate Cloudflare programmatically into any tech stack.

**34 repositories** · **6,329 total stars**

### 🌟 Highlights

- **[cloudflare-go](https://github.com/cloudflare/cloudflare-go)** (1,954⭐) — The official Go library for the Cloudflare API
- **[cf-terraforming](https://github.com/cloudflare/cf-terraforming)** (1,342⭐) — A command line utility to facilitate terraforming your existing Cloudflare resources.
- **[terraform-provider-cloudflare](https://github.com/cloudflare/terraform-provider-cloudflare)** (1,241⭐) — Cloudflare Terraform Provider
- **[cloudflare-typescript](https://github.com/cloudflare/cloudflare-typescript)** (688⭐) — The official TypeScript library for the Cloudflare API
- **[cloudflare-python](https://github.com/cloudflare/cloudflare-python)** (424⭐) — The official Python library for the Cloudflare API

<details>
<summary>View all 34 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [astro-blog-starter-template-brayden](https://github.com/cloudflare/astro-blog-starter-template-brayden) |  | Astro | — |
| [astro-blog-starter-template-brayden1](https://github.com/cloudflare/astro-blog-starter-template-brayden1) |  | Astro | 2 |
| [babel-preset-cf](https://github.com/cloudflare/babel-preset-cf) | Babel preset for Cloudflare | JavaScript | 7 |
| [binary-install](https://github.com/cloudflare/binary-install) | Install binary applications via npm | JavaScript | 48 |
| [cf-product-infrastructure-templates](https://github.com/cloudflare/cf-product-infrastructure-templates) | Collection of infrastructure as code templates to aid in customer onboarding to Cloudflare produc... | HCL | 3 |
| [cf-terraforming](https://github.com/cloudflare/cf-terraforming) | A command line utility to facilitate terraforming your existing Cloudflare resources. | Go | 1,342 |
| [cfdeploy](https://github.com/cloudflare/cfdeploy) | Cloudflare Deployment Tool | Go | 27 |
| [chanfana-openapi-template-11](https://github.com/cloudflare/chanfana-openapi-template-11) |  | TypeScript | 3 |
| [cloudflare-go](https://github.com/cloudflare/cloudflare-go) | The official Go library for the Cloudflare API | Go | 1,954 |
| [cloudflare-plugin-backend](https://github.com/cloudflare/cloudflare-plugin-backend) |  | PHP | 21 |
| [cloudflare-plugin-frontend](https://github.com/cloudflare/cloudflare-plugin-frontend) | A React/Redux front-end for Cloudflare's WordPress, Magento2, and cPanel plugins. | JavaScript | 35 |
| [cloudflare-python](https://github.com/cloudflare/cloudflare-python) | The official Python library for the Cloudflare API | Python | 424 |
| [cloudflare-typescript](https://github.com/cloudflare/cloudflare-typescript) | The official TypeScript library for the Cloudflare API | TypeScript | 688 |
| [d1-template-123](https://github.com/cloudflare/d1-template-123) |  | TypeScript | — |
| [d1-template-12344](https://github.com/cloudflare/d1-template-12344) |  | TypeScript | — |
| [d1-template-333](https://github.com/cloudflare/d1-template-333) |  | TypeScript | 1 |
| [d1-template-666](https://github.com/cloudflare/d1-template-666) |  | TypeScript | — |
| [d1-template-777](https://github.com/cloudflare/d1-template-777) |  | TypeScript | — |
| [d1-template-888](https://github.com/cloudflare/d1-template-888) |  | TypeScript | — |
| [eslint-plugin-cflint](https://github.com/cloudflare/eslint-plugin-cflint) | ESLint rules for Cloudflare | JavaScript | 15 |
| [InstantPlugin](https://github.com/cloudflare/InstantPlugin) | Convert an embed code to a plugin. | JavaScript | 13 |
| [node-cloudflare](https://github.com/cloudflare/node-cloudflare) | Node.js API for Client API | JavaScript | 336 |
| [pages-plugins](https://github.com/cloudflare/pages-plugins) |  | TypeScript | 62 |
| [pipelines-starter](https://github.com/cloudflare/pipelines-starter) | Starter template for Cloudflare Pipelines, which let you ingest real time data streams and load i... | TypeScript | 14 |
| [python-cloudflare-cli4](https://github.com/cloudflare/python-cloudflare-cli4) |  | Python | 6 |
| [react-router-hono-fullstack-template](https://github.com/cloudflare/react-router-hono-fullstack-template) |  | TypeScript | 7 |
| [template-registry](https://github.com/cloudflare/template-registry) |  A simple API via a Worker that serves all the template content | TypeScript | 62 |
| [terraform-provider-cloudflare](https://github.com/cloudflare/terraform-provider-cloudflare) | Cloudflare Terraform Provider | Go | 1,241 |
| [to-do-list-kv-template-100](https://github.com/cloudflare/to-do-list-kv-template-100) |  | TypeScript | — |
| [to-do-list-kv-template-123](https://github.com/cloudflare/to-do-list-kv-template-123) |  | TypeScript | — |
| [to-do-list-kv-template99](https://github.com/cloudflare/to-do-list-kv-template99) |  | TypeScript | 1 |
| [turnstile-firebase-app-check-provider](https://github.com/cloudflare/turnstile-firebase-app-check-provider) |  | TypeScript | 12 |
| [vite-react-template-bray](https://github.com/cloudflare/vite-react-template-bray) |  | TypeScript | 4 |
| [vite-react-template-brayden](https://github.com/cloudflare/vite-react-template-brayden) |  | TypeScript | 1 |

</details>

---

## 🌐 Networking & Infrastructure

> The low-level networking stack that Cloudflare has built and open-sourced — starting with Pingora (the Rust HTTP proxy framework processing trillions of requests, now open source with 26k stars), quiche (QUIC + HTTP/3 in Rust), and cloudflared (the Tunnel daemon). Also covers BGP/RPKI route security, eBPF networking tools, and the graceful process restart library tableflip.

**25 repositories** · **60,738 total stars**

### 🌟 Highlights

- **[pingora](https://github.com/cloudflare/pingora)** (26,353⭐) — A library for building fast, reliable and evolvable network services.
- **[cloudflared](https://github.com/cloudflare/cloudflared)** (13,703⭐) — Cloudflare Tunnel client
- **[quiche](https://github.com/cloudflare/quiche)** (11,382⭐) — 🥧 Savoury implementation of the QUIC transport protocol and HTTP/3
- **[tableflip](https://github.com/cloudflare/tableflip)** (3,177⭐) — Graceful process restarts in Go
- **[ebpf_exporter](https://github.com/cloudflare/ebpf_exporter)** (2,548⭐) — Prometheus exporter for custom eBPF metrics

<details>
<summary>View all 25 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [apt-transport-cloudflared](https://github.com/cloudflare/apt-transport-cloudflared) |  | Go | 22 |
| [argo-tunnel-examples](https://github.com/cloudflare/argo-tunnel-examples) |  | HCL | 242 |
| [bbmp2kafka](https://github.com/cloudflare/bbmp2kafka) | BMP to Kafka processor | Go | 28 |
| [bpftools](https://github.com/cloudflare/bpftools) | BPF Tools - packet analyst toolkit | Python | 1,230 |
| [cbpfc](https://github.com/cloudflare/cbpfc) | cBPF to C or eBPF compiler | Go | 214 |
| [cf-dnssec-demo-domain-1](https://github.com/cloudflare/cf-dnssec-demo-domain-1) |  | HTML | 4 |
| [cf-dnssec-demo-domain-2](https://github.com/cloudflare/cf-dnssec-demo-domain-2) |  | HTML | 3 |
| [cloudflared](https://github.com/cloudflare/cloudflared) | Cloudflare Tunnel client | Go | 13,703 |
| [dns](https://github.com/cloudflare/dns) | Clone of https://github.com/miekg/dns | Go | 68 |
| [dnschanger_detector](https://github.com/cloudflare/dnschanger_detector) | Detect DNSChanger and Notify Visitors | JavaScript | 16 |
| [ebpf_exporter](https://github.com/cloudflare/ebpf_exporter) | Prometheus exporter for custom eBPF metrics | Go | 2,548 |
| [fgbgp](https://github.com/cloudflare/fgbgp) |  | Go | 50 |
| [isbgpsafeyet.com](https://github.com/cloudflare/isbgpsafeyet.com) | Is BGP safe yet? | HTML | 319 |
| [lua-resty-logger-socket](https://github.com/cloudflare/lua-resty-logger-socket) | Raw-socket-based Logger Library for Nginx (based on ngx_lua) | Raku | 494 |
| [mmproxy](https://github.com/cloudflare/mmproxy) | mmproxy, the magical PROXY protocol gateway | C | 505 |
| [moq-rs](https://github.com/cloudflare/moq-rs) | Rust implementation of the IETF MoQ Transport protocol | Rust | 99 |
| [mpp-proxy](https://github.com/cloudflare/mpp-proxy) |  | TypeScript | 54 |
| [pingora](https://github.com/cloudflare/pingora) | A library for building fast, reliable and evolvable network services. | Rust | 26,353 |
| [postgres-postgrest-cloudflared-example](https://github.com/cloudflare/postgres-postgrest-cloudflared-example) | Create a PostgreSQL database with a REST API, exposed to the internet securely with Cloudflare Tu... | — | 68 |
| [proxy-everything](https://github.com/cloudflare/proxy-everything) |  | Go | 2 |
| [quiche](https://github.com/cloudflare/quiche) | 🥧 Savoury implementation of the QUIC transport protocol and HTTP/3 | Rust | 11,382 |
| [quiche-mallard](https://github.com/cloudflare/quiche-mallard) | quiche fork with congestion & zero-copy patches | Rust | 1 |
| [tableflip](https://github.com/cloudflare/tableflip) | Graceful process restarts in Go | Go | 3,177 |
| [the-deep-dive-into-how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-monda](https://github.com/cloudflare/the-deep-dive-into-how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-monda) |  | Shell | 16 |
| [udpgrm](https://github.com/cloudflare/udpgrm) | UDP Graceful Restart Marshal | C | 140 |

</details>

---

## 🤖 AI & Machine Learning

> Cloudflare's AI platform open source — from the agents framework (build stateful AI agents on Workers with persistence, scheduling, and streaming) to MCP server support (Model Context Protocol), AutoRAG (managed RAG pipelines using R2 + Vectorize), and Workers AI utilities. Cloudflare positions itself as the edge AI platform, running 50+ open-source models at the edge with no GPU management.

**19 repositories** · **25,948 total stars**

### 🌟 Highlights

- **[vinext](https://github.com/cloudflare/vinext)** (7,710⭐) — Vite plugin that reimplements the Next.js API surface — deploy anywhere
- **[vibesdk](https://github.com/cloudflare/vibesdk)** (4,930⭐) — An open-source vibe coding platform that helps you build your own vibe-coding platform, built entirely on Cloudflare ...
- **[agents](https://github.com/cloudflare/agents)** (4,702⭐) — Build and deploy AI Agents on Cloudflare 
- **[mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** (3,589⭐) — 
- **[agents-starter](https://github.com/cloudflare/agents-starter)** (1,223⭐) — A starter kit for building ai agents on Cloudflare

<details>
<summary>View all 19 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [agent-skills-discovery-rfc](https://github.com/cloudflare/agent-skills-discovery-rfc) | A mechanism for discovering Agent Skills using the .well-known URI path prefix as specified in RF... | — | 227 |
| [agents](https://github.com/cloudflare/agents) | Build and deploy AI Agents on Cloudflare  | TypeScript | 4,702 |
| [agents-starter](https://github.com/cloudflare/agents-starter) | A starter kit for building ai agents on Cloudflare | TypeScript | 1,223 |
| [ai-search-snippet](https://github.com/cloudflare/ai-search-snippet) | AI Search embeddable snippet for Cloudflare AI Search | TypeScript | 8 |
| [ai-utils](https://github.com/cloudflare/ai-utils) | Developer toolkit that makes it simple to build with the Workers AI platform. | TypeScript | 182 |
| [llm-chat-app-template](https://github.com/cloudflare/llm-chat-app-template) |  | JavaScript | 4 |
| [llm-chat-app-template-brayden](https://github.com/cloudflare/llm-chat-app-template-brayden) |  | JavaScript | — |
| [mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) |  | TypeScript | 3,589 |
| [openai-workers-relay](https://github.com/cloudflare/openai-workers-relay) | A relay server for OpenAI's realtime API, for Cloudflare Workers | TypeScript | 158 |
| [partykit](https://github.com/cloudflare/partykit) | PartyKit, for Workers | TypeScript | 1,067 |
| [sandbox-sdk](https://github.com/cloudflare/sandbox-sdk) | Run sandboxed code environments on Cloudflare's edge network | TypeScript | 946 |
| [skills](https://github.com/cloudflare/skills) | Skills for teaching agents how to build on Cloudflare. | — | 786 |
| [tensorflow-nata](https://github.com/cloudflare/tensorflow-nata) | Our model uses a convolutional neural network and TensorFlow to infer if an image is a Pastel de ... | Jupyter Notebook | 25 |
| [vibesdk](https://github.com/cloudflare/vibesdk) | An open-source vibe coding platform that helps you build your own vibe-coding platform, built ent... | TypeScript | 4,930 |
| [vibesdk-templates](https://github.com/cloudflare/vibesdk-templates) | Official repository for templates catalog powering VibeSDK | TypeScript | 86 |
| [vinext](https://github.com/cloudflare/vinext) | Vite plugin that reimplements the Next.js API surface — deploy anywhere | TypeScript | 7,710 |
| [web-bot-auth](https://github.com/cloudflare/web-bot-auth) | Sign and verify orchestrated HTTP requests | Rust | 117 |
| [workers-ai-provider](https://github.com/cloudflare/workers-ai-provider) | A Workers AI provider for the vercel AI SDK | TypeScript | 115 |
| [workers-airtable-form](https://github.com/cloudflare/workers-airtable-form) | Example codebase showing how to handle form data using Cloudflare Workers serverless functions - ... | JavaScript | 73 |

</details>

---

## 📖 Documentation & Examples

> Cloudflare's own documentation is open source — cloudflare-docs (4.5k stars) is one of the most actively maintained developer doc sites, now running on Astro. This category also includes the cloudflare-blog code samples repository, demo projects from Developer Week events, and reference implementations.

**16 repositories** · **6,582 total stars**

### 🌟 Highlights

- **[cloudflare-docs](https://github.com/cloudflare/cloudflare-docs)** (4,577⭐) — Cloudflare’s documentation
- **[cloudflare-blog](https://github.com/cloudflare/cloudflare-blog)** (1,225⭐) — Cloudflare Blog code samples
- **[cloudflare-docs-engine](https://github.com/cloudflare/cloudflare-docs-engine)** (225⭐) — A documentation engine built on Gatsby, powering Cloudflare’s docs https://github.com/cloudflare/cloudflare-docs
- **[containers-demos](https://github.com/cloudflare/containers-demos)** (211⭐) — 
- **[realtime-examples](https://github.com/cloudflare/realtime-examples)** (136⭐) — 

<details>
<summary>View all 16 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [binjs-demo](https://github.com/cloudflare/binjs-demo) | Demo application for BinAST | JavaScript | 9 |
| [cf-sealion-demo](https://github.com/cloudflare/cf-sealion-demo) |  | TypeScript | — |
| [cloudflare-blog](https://github.com/cloudflare/cloudflare-blog) | Cloudflare Blog code samples | C | 1,225 |
| [cloudflare-docs](https://github.com/cloudflare/cloudflare-docs) | Cloudflare’s documentation | MDX | 4,577 |
| [cloudflare-docs-engine](https://github.com/cloudflare/cloudflare-docs-engine) | A documentation engine built on Gatsby, powering Cloudflare’s docs https://github.com/cloudflare/... | JavaScript | 225 |
| [containers-demos](https://github.com/cloudflare/containers-demos) |  | TypeScript | 211 |
| [docs-examples](https://github.com/cloudflare/docs-examples) | Examples surfaced in the Cloudflare Docs | TypeScript | 17 |
| [hugo-cloudflare-docs](https://github.com/cloudflare/hugo-cloudflare-docs) |  | JavaScript | 16 |
| [json-schema-example-loader](https://github.com/cloudflare/json-schema-example-loader) | Webpack loader that transforms JSON Schemas (without $refs) into examples. | JavaScript | 14 |
| [notebook-examples](https://github.com/cloudflare/notebook-examples) | These examples demonstrate how to use the Cloudflare API within interactive Python notebooks. | Python | 24 |
| [pages-fns-with-wasm-demo](https://github.com/cloudflare/pages-fns-with-wasm-demo) |  | TypeScript | 35 |
| [pages-stream-demo](https://github.com/cloudflare/pages-stream-demo) |  | HTML | 37 |
| [privacy-gateway-client-demo](https://github.com/cloudflare/privacy-gateway-client-demo) |  | Objective-C | 6 |
| [realtime-examples](https://github.com/cloudflare/realtime-examples) |  | TypeScript | 136 |
| [realtimekit-web-examples](https://github.com/cloudflare/realtimekit-web-examples) | Web examples for Cloudflare RealtimeKit :rocket: | TypeScript | 41 |
| [webcm-docs](https://github.com/cloudflare/webcm-docs) | Documentation for Web Component Manager (WebCM) | JavaScript | 9 |

</details>

---

## 🎨 Web & Frontend

> Frontend-focused libraries, UI frameworks, and web application projects. Includes Kumo (Cloudflare's modern React component library), CF-UI (the older UI framework), lol-html (the streaming HTML rewriter powering HTMLRewriter in Workers), wildebeest (an ActivityPub/Mastodon server built entirely on Workers), and accessibility utilities.

**10 repositories** · **3,234 total stars**

### 🌟 Highlights

- **[cf-ui](https://github.com/cloudflare/cf-ui)** (1,291⭐) — :gem: Cloudflare UI Framework
- **[kumo](https://github.com/cloudflare/kumo)** (971⭐) — Cloudflare's component library for building modern web applications.
- **[react-gateway](https://github.com/cloudflare/react-gateway)** (575⭐) — Render React DOM into a new context (aka "Portal")
- **[react-modal2](https://github.com/cloudflare/react-modal2)** (276⭐) — :thought_balloon: Simple modal component for React.
- **[realtimekit-ui](https://github.com/cloudflare/realtimekit-ui)** (48⭐) — RealtimeKit UI provides pre-built, ready-to-use UI components for integrating with Cloudflare RealtimeKit

<details>
<summary>View all 10 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [a11y-focus-scope](https://github.com/cloudflare/a11y-focus-scope) | Accessibility util for scoping focus to an element. | JavaScript | 35 |
| [a11y-focus-store](https://github.com/cloudflare/a11y-focus-store) | Accessibility util for storing/restoring focus. | JavaScript | 25 |
| [cf-ui](https://github.com/cloudflare/cf-ui) | :gem: Cloudflare UI Framework | JavaScript | 1,291 |
| [font-awesome-glyph](https://github.com/cloudflare/font-awesome-glyph) |  | HTML | 5 |
| [kumo](https://github.com/cloudflare/kumo) | Cloudflare's component library for building modern web applications. | TypeScript | 971 |
| [react-gateway](https://github.com/cloudflare/react-gateway) | Render React DOM into a new context (aka "Portal") | JavaScript | 575 |
| [react-modal2](https://github.com/cloudflare/react-modal2) | :thought_balloon: Simple modal component for React. | JavaScript | 276 |
| [realtimekit-ios-ui](https://github.com/cloudflare/realtimekit-ios-ui) | Swift package definitions for RealtimeKitUI | Swift | 6 |
| [realtimekit-ui](https://github.com/cloudflare/realtimekit-ui) | RealtimeKit UI provides pre-built, ready-to-use UI components for integrating with Cloudflare Rea... | TypeScript | 48 |
| [realtimekit-ui-addons](https://github.com/cloudflare/realtimekit-ui-addons) |  | TypeScript | 2 |

</details>

---

## 📊 Observability & Monitoring

> Cloudflare's internal monitoring tooling, open-sourced for the community. Built around Prometheus — ebpf_exporter lets you write custom eBPF programs and export their metrics to Prometheus, while pint validates Prometheus rules at scale. Also includes Alertmanager integrations, alert dashboards (unsee), and network monitoring utilities.

**9 repositories** · **2,704 total stars**

### 🌟 Highlights

- **[pint](https://github.com/cloudflare/pint)** (1,013⭐) — Prometheus rule linter/validator
- **[unsee](https://github.com/cloudflare/unsee)** (705⭐) — Alert dashboard for Prometheus Alertmanager
- **[tubular](https://github.com/cloudflare/tubular)** (323⭐) — BSD socket API on steroids
- **[alertmanager2es](https://github.com/cloudflare/alertmanager2es)** (250⭐) — Receives HTTP webhook notifications from AlertManager and inserts them into an Elasticsearch index for searching and ...
- **[sciuro](https://github.com/cloudflare/sciuro)** (180⭐) — Alertmanager to Kubernetes Node conditions bridge

<details>
<summary>View all 9 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [alertmanager2es](https://github.com/cloudflare/alertmanager2es) | Receives HTTP webhook notifications from AlertManager and inserts them into an Elasticsearch inde... | Go | 250 |
| [cloudflare-grafana-app](https://github.com/cloudflare/cloudflare-grafana-app) | (DEPRECATED.) Cloudflare Grafana App allows for the collection and graphing of Cloudflare analyti... | JavaScript | 60 |
| [ipfs-gateway-monitor](https://github.com/cloudflare/ipfs-gateway-monitor) |  | Go | 35 |
| [kafka_zookeeper_exporter](https://github.com/cloudflare/kafka_zookeeper_exporter) | Prometheus exporter for Kafka cluster state stored in ZooKeeper | Go | 71 |
| [pint](https://github.com/cloudflare/pint) | Prometheus rule linter/validator | Go | 1,013 |
| [psi_exporter](https://github.com/cloudflare/psi_exporter) | Prometheus exporter for Pressure Stall Information (PSI) from Linux kernel. | Rust | 67 |
| [sciuro](https://github.com/cloudflare/sciuro) | Alertmanager to Kubernetes Node conditions bridge | Starlark | 180 |
| [tubular](https://github.com/cloudflare/tubular) | BSD socket API on steroids | C | 323 |
| [unsee](https://github.com/cloudflare/unsee) | Alert dashboard for Prometheus Alertmanager | Go | 705 |

</details>

---

## 🗄️ Databases & Storage

> Storage solutions for the Cloudflare edge: D1 (SQLite-based distributed SQL), R2 (S3-compatible object storage with zero egress), Workers KV (globally-replicated key-value), Durable Objects (consistent stateful storage), and Queue. Also includes experimental database adapters and storage research projects.

**5 repositories** · **147 total stars**

### 🌟 Highlights

- **[hyperdrive-demo](https://github.com/cloudflare/hyperdrive-demo)** (15⭐) — A demo site for @cloudflare Hyperdrive (makes databases fast) - https://developers.cloudflare.com/hyperdrive/
- **[r2-data-catalog-examples](https://github.com/cloudflare/r2-data-catalog-examples)** (6⭐) — 
- **[r2-explorer-template-9](https://github.com/cloudflare/r2-explorer-template-9)** (1⭐) — 
- **[r2-explorer-template123](https://github.com/cloudflare/r2-explorer-template123)** (1⭐) — 
- **[lua-upstream-cache-nginx-module](https://github.com/cloudflare/lua-upstream-cache-nginx-module)** (124⭐) — Nginx module for ngx_lua to provide Lua API to inspect upstream http cache meta-data

<details>
<summary>View all 5 repositories in this category</summary>

| Repository | Description | Language | ⭐ Stars |
|------------|-------------|----------|---------|
| [hyperdrive-demo](https://github.com/cloudflare/hyperdrive-demo) | A demo site for @cloudflare Hyperdrive (makes databases fast) - https://developers.cloudflare.com... | TypeScript | 15 |
| [lua-upstream-cache-nginx-module](https://github.com/cloudflare/lua-upstream-cache-nginx-module) | Nginx module for ngx_lua to provide Lua API to inspect upstream http cache meta-data | C | 124 |
| [r2-data-catalog-examples](https://github.com/cloudflare/r2-data-catalog-examples) |  | Python | 6 |
| [r2-explorer-template-9](https://github.com/cloudflare/r2-explorer-template-9) |  | TypeScript | 1 |
| [r2-explorer-template123](https://github.com/cloudflare/r2-explorer-template123) |  | TypeScript | 1 |

</details>

---

## 🔄 Regenerating This File

```bash
python scripts/generate_cloudflare_index.py --topics
```

*Generated from [Cloudflare GitHub Organization](https://github.com/cloudflare)*