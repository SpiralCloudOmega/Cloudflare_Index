#!/usr/bin/env python3
"""
Generate CLOUDFLARE_INDEX.md and CLOUDFLARE_TOPICS.md from the Cloudflare GitHub Organization.

Usage:
    python scripts/generate_cloudflare_index.py [--topics] [--json]

Options:
    --topics    Also generate CLOUDFLARE_TOPICS.md
    --json      Output stats as JSON instead of writing files
"""

import json
import os
import sys
import time
import argparse
from datetime import datetime, timezone
from collections import defaultdict
from urllib.request import urlopen, Request
from urllib.error import HTTPError


GITHUB_API = "https://api.github.com"
ORG = "cloudflare"


def get_headers():
    token = os.environ.get("GITHUB_TOKEN")
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "cloudflare-index-generator/1.0",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def fetch_all_repos():
    """Fetch all public repos from the cloudflare org."""
    repos = []
    page = 1
    per_page = 100
    while True:
        url = f"{GITHUB_API}/orgs/{ORG}/repos?type=public&per_page={per_page}&page={page}&sort=full_name"
        req = Request(url, headers=get_headers())
        try:
            with urlopen(req) as resp:
                batch = json.loads(resp.read())
                if not batch:
                    break
                repos.extend(batch)
                print(f"  Fetched page {page}: {len(batch)} repos (total: {len(repos)})", file=sys.stderr)
                if len(batch) < per_page:
                    break
                page += 1
                time.sleep(0.3)
        except HTTPError as e:
            if e.code == 403:
                print(f"  Rate limited on page {page}, waiting 60s...", file=sys.stderr)
                time.sleep(60)
                continue
            raise
    return repos


def categorize(repo):
    name = repo["name"].lower()
    desc = (repo.get("description") or "").lower()
    topics = [t.lower() for t in repo.get("topics", [])]
    combined = f"{name} {desc} {' '.join(topics)}"

    # AI & Machine Learning
    if any(w in name for w in ["ai-", "-ai", "ai_", "_ai", "llm", "vibe", "mcp-server", "autorag", "vectorize"]):
        return "AI & Machine Learning"
    if any(w in combined for w in ["workers-ai", "autorag", "vectorize", "ai gateway", "ai search", "machine learning", "language model"]):
        return "AI & Machine Learning"
    if any(w in topics for w in ["ai", "agents", "llm", "machine-learning"]):
        return "AI & Machine Learning"
    if repo["name"].lower() in ["agents", "vibesdk", "vinext", "ai-search-snippet", "sandbox-sdk"]:
        return "AI & Machine Learning"

    # Workers & Serverless
    if any(w in name for w in ["worker", "wrangler", "workerd", "miniflare", "cloudworker", "durable"]):
        return "Workers & Serverless"
    if any(w in topics for w in ["cloudflare-workers", "workers", "durable-objects", "serverless"]):
        return "Workers & Serverless"
    if repo["name"].lower() in ["capnweb", "wrangler-legacy", "workers-rs", "workers-sdk", "workerd"]:
        return "Workers & Serverless"

    # Security & Cryptography
    if any(w in name for w in ["ssl", "tls", "pki", "cert", "crypto", "cipher", "fips", "kyber", "ecdh", "rsa", "auth", "zero-trust", "waf", "firewall", "flan", "boring", "cfssl", "cfnts", "nts", "privacypass", "privacy-pass", "voprf", "oblivious"]):
        return "Security & Cryptography"
    if any(w in combined for w in ["zero trust", "wireguard", "vulnerability scan", "post-quantum"]):
        return "Security & Cryptography"
    if any(w in topics for w in ["cryptography", "privacy-pass", "tls", "authentication", "zero-trust", "pki", "crypto", "kyber", "voprf", "blindrsa", "token", "post-quantum"]):
        return "Security & Cryptography"
    if repo["name"].lower() in ["authr", "flan", "advisories", "badupnp", "cf-nocompress"]:
        return "Security & Cryptography"

    # Networking & Infrastructure
    if any(w in name for w in ["quic", "bgp", "routing", "pingora", "cloudflared", "rpki", "argo", "dns", "ddos", "nat", "bpf", "ebpf", "proxy", "tunnel", "packet", "socket"]):
        return "Networking & Infrastructure"
    if any(w in topics for w in ["bgp", "rpki", "dns", "quic", "networking", "proxy"]):
        return "Networking & Infrastructure"
    if repo["name"].lower() in ["pingora", "quiche", "cloudflared", "tableflip", "bpftools"]:
        return "Networking & Infrastructure"

    # Observability & Monitoring
    if any(w in name for w in ["monitor", "metric", "prometheus", "grafana", "alert", "exporter", "telemetry", "analytics"]):
        return "Observability & Monitoring"
    if any(w in topics for w in ["prometheus", "monitoring", "alertmanager", "ebpf", "telemetry"]):
        return "Observability & Monitoring"

    # Databases & Storage
    if any(w in name for w in ["database", "sql", "storage", "cache", "queue", "blob", "backup", "durable", "redis", "nosql"]):
        return "Databases & Storage"
    if any(w in topics for w in ["sql", "database", "cache", "storage"]):
        return "Databases & Storage"

    # Developer Tools & SDKs
    if any(w in name for w in ["sdk", "terraform", "plugin", "provider", "cookbook", "boilerplate", "scaffold", "starter"]):
        return "Developer Tools & SDKs"
    if any(w in topics for w in ["sdk", "terraform", "cli"]):
        return "Developer Tools & SDKs"
    if repo["name"].lower() in ["cf-terraforming", "cloudflare-go", "python-cloudflare", "node-cloudflare", "binary-install", "cfdeploy", "babel-preset-cf"]:
        return "Developer Tools & SDKs"

    # Web & Frontend
    if any(w in name for w in ["kumo", "cf-ui", "-ui", "react-", "vue-", "component", "a11y", "accessibility"]):
        return "Web & Frontend"
    if any(w in topics for w in ["react", "vue", "frontend", "components", "a11y", "accessibility"]):
        return "Web & Frontend"
    if repo["name"].lower() in ["kumo", "cf-ui", "a11y-focus-scope", "a11y-focus-store"]:
        return "Web & Frontend"

    # Documentation & Examples
    if any(w in name for w in ["-docs", "docs-", "-example", "-demo", "-tutorial", "-guide", "-blog", "-sample"]):
        return "Documentation & Examples"
    if repo["name"].lower() in ["cloudflare-docs", "cloudflare-blog", "cloudflare-docs-engine"]:
        return "Documentation & Examples"

    return "Libraries & Utilities"


def generate_index(repos):
    """Generate CLOUDFLARE_INDEX.md content."""
    repos_sorted = sorted(repos, key=lambda r: r["name"].lower())
    total_stars = sum(r.get("stargazers_count", 0) for r in repos)
    total_forks = sum(r.get("forks_count", 0) for r in repos)
    updated = datetime.now(timezone.utc).strftime("%B %Y")

    letter_groups = defaultdict(list)
    for r in repos_sorted:
        first = r["name"][0].upper()
        letter_groups[first if first.isalpha() else "#"].append(r)

    langs = {}
    for r in repos:
        lang = r.get("language") or "Unknown"
        langs[lang] = langs.get(lang, 0) + 1
    top_langs = sorted(langs.items(), key=lambda x: -x[1])[:10]

    letters = sorted(letter_groups.keys())

    lines = [
        "# ☁️ Cloudflare GitHub Repository Index",
        "",
        "> *\"One edge to rule them all — Cloudflare's complete open-source universe.\"*",
        "",
        f"![Repositories](https://img.shields.io/badge/Repositories-{len(repos)}-orange?style=flat-square&logo=cloudflare)",
        f"![Stars](https://img.shields.io/badge/Total%20Stars-{total_stars:,}-yellow?style=flat-square&logo=github)",
        f"![Forks](https://img.shields.io/badge/Total%20Forks-{total_forks:,}-blue?style=flat-square)",
        f"![Last Updated](https://img.shields.io/badge/Last%20Updated-{updated.replace(' ', '%20')}-green?style=flat-square)",
        "",
        "---",
        "",
        "## 📋 Quick Navigation",
        "",
        " ".join(f"[{l}](#{l.lower() if l != '#' else 'numeric'})" for l in letters),
        "",
        "---",
        "",
        "## 📊 Statistics",
        "",
        "| Metric | Value |",
        "|--------|-------|",
        f"| Total Repositories | **{len(repos)}** |",
        f"| Total Stars | **{total_stars:,}** ⭐ |",
        f"| Total Forks | **{total_forks:,}** 🍴 |",
        f"| Top Language | **{top_langs[0][0]}** ({top_langs[0][1]} repos) |",
        "",
        "### 🔤 Language Distribution",
        "",
        "| Language | Count |",
        "|----------|-------|",
        *[f"| {lang} | {count} |" for lang, count in top_langs],
        "",
        "---",
        "",
        "## 📚 Complete Repository Index",
        "",
        "*All repositories alphabetically organized with clickable links.*",
        "",
    ]

    for letter in letters:
        lines.append(f"### {letter}")
        lines.append("")
        lines.append("| Repository | Description | Language | ⭐ Stars |")
        lines.append("|------------|-------------|----------|---------|")
        for r in letter_groups[letter]:
            desc = (r.get("description") or "").replace("|", "\\|").replace("\n", " ")
            if len(desc) > 100:
                desc = desc[:97] + "..."
            lang = r.get("language") or "—"
            stars = r.get("stargazers_count", 0)
            lines.append(f"| [{r['name']}]({r['html_url']}) | {desc} | {lang} | {stars:,} |")
        lines.append("")

    lines += [
        "---",
        "",
        "## 🔄 Regenerating This Index",
        "",
        "This index is auto-generated. To regenerate manually:",
        "",
        "```bash",
        "GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py",
        "```",
        "",
        "Or trigger from the Actions tab → **Update Cloudflare Index** → **Run workflow**.",
        "",
        "---",
        "",
        f"*Generated {datetime.now(timezone.utc).strftime('%Y-%m-%d')} from [Cloudflare GitHub Organization](https://github.com/cloudflare)*",
    ]
    return "\n".join(lines)


def generate_topics(repos):
    """Generate CLOUDFLARE_TOPICS.md content."""
    categories = defaultdict(list)
    for r in repos:
        categories[categorize(r)].append(r)

    total_stars = sum(r.get("stargazers_count", 0) for r in repos)
    updated = datetime.now(timezone.utc).strftime("%B %Y")

    cat_meta = {
        "AI & Machine Learning": {"emoji": "🤖", "desc": "AI agents, Workers AI, MCP servers, vibe coding, AutoRAG, Vectorize, and ML tools built on Cloudflare's edge."},
        "Workers & Serverless": {"emoji": "⛅", "desc": "Cloudflare Workers, Wrangler CLI, Durable Objects, Workers KV, R2, D1, Pages, and the serverless edge runtime."},
        "Security & Cryptography": {"emoji": "🔐", "desc": "Zero Trust, TLS/PKI tooling, WireGuard, CFSSL, post-quantum cryptography, Privacy Pass, CIRCL, and vulnerability scanning."},
        "Networking & Infrastructure": {"emoji": "🌐", "desc": "Pingora, QUIC/HTTP3, BGP/RPKI, Cloudflare Tunnel, eBPF networking, DNS tooling, and high-performance proxy infrastructure."},
        "Observability & Monitoring": {"emoji": "📊", "desc": "Prometheus exporters, eBPF metrics, Alertmanager bridges, log shipping, and monitoring tooling for the edge."},
        "Databases & Storage": {"emoji": "🗄️", "desc": "D1 (SQLite at the edge), KV stores, R2 object storage, Durable Objects, queues, and data storage solutions."},
        "Developer Tools & SDKs": {"emoji": "🛠️", "desc": "Official Cloudflare SDKs (Go, Python, TypeScript), Terraform providers, CLI tools, and scaffolding utilities."},
        "Web & Frontend": {"emoji": "🎨", "desc": "Kumo component library, CF UI Framework, React utilities, accessibility tools, and frontend building blocks."},
        "Documentation & Examples": {"emoji": "📖", "desc": "Official Cloudflare documentation, blog code samples, demo projects, and reference implementations."},
        "Libraries & Utilities": {"emoji": "📦", "desc": "General-purpose Rust/Go/C libraries, algorithms, parsers, and everything else in the Cloudflare open-source toolbox."},
    }

    ordered_cats = sorted(categories.items(), key=lambda x: -len(x[1]))

    lines = [
        "# ☁️ Cloudflare Repositories by Topic",
        "",
        "> *Explore all Cloudflare open-source repositories organized by technology area.*",
        "",
        f"![Repositories](https://img.shields.io/badge/Repositories-{len(repos)}-orange?style=flat-square&logo=cloudflare)",
        f"![Stars](https://img.shields.io/badge/Total%20Stars-{total_stars:,}-yellow?style=flat-square&logo=github)",
        f"![Last Updated](https://img.shields.io/badge/Last%20Updated-{updated.replace(' ', '%20')}-green?style=flat-square)",
        "",
        "---",
        "",
        "## 🗺️ Topic Overview",
        "",
        "| # | Category | Repos | Top Repository |",
        "|---|----------|-------|----------------|",
    ]

    for i, (cat, rlist) in enumerate(ordered_cats, 1):
        meta = cat_meta.get(cat, {"emoji": "📦"})
        top_repo = sorted(rlist, key=lambda r: -r.get("stargazers_count", 0))[0]
        anchor = cat.lower().replace(" & ", "--").replace(" ", "-")
        lines.append(f"| {i} | {meta['emoji']} [{cat}](#{anchor}) | {len(rlist)} | [{top_repo['name']}]({top_repo['html_url']}) ({top_repo.get('stargazers_count',0):,}⭐) |")

    lines += ["", "---", ""]

    for cat, rlist in ordered_cats:
        meta = cat_meta.get(cat, {"emoji": "📦", "desc": ""})
        cat_stars = sum(r.get("stargazers_count", 0) for r in rlist)

        lines += [
            f"## {meta['emoji']} {cat}",
            "",
            f"> {meta['desc']}",
            "",
            f"**{len(rlist)} repositories** · **{cat_stars:,} total stars**",
            "",
            "### 🌟 Highlights",
            "",
        ]

        for r in sorted(rlist, key=lambda r: -r.get("stargazers_count", 0))[:5]:
            desc = r.get("description") or ""
            if len(desc) > 120:
                desc = desc[:117] + "..."
            lines.append(f"- **[{r['name']}]({r['html_url']})** ({r.get('stargazers_count',0):,}⭐) — {desc}")

        lines += [
            "",
            "<details>",
            f"<summary>View all {len(rlist)} repositories in this category</summary>",
            "",
            "| Repository | Description | Language | ⭐ Stars |",
            "|------------|-------------|----------|---------|",
        ]

        for r in sorted(rlist, key=lambda r: r["name"].lower()):
            desc = (r.get("description") or "").replace("|", "\\|").replace("\n", " ")
            if len(desc) > 100:
                desc = desc[:97] + "..."
            lang = r.get("language") or "—"
            stars = r.get("stargazers_count", 0)
            lines.append(f"| [{r['name']}]({r['html_url']}) | {desc} | {lang} | {stars:,} |")

        lines += ["", "</details>", "", "---", ""]

    lines += [
        "## 🔄 Regenerating This File",
        "",
        "```bash",
        "GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py --topics",
        "```",
        "",
        f"*Generated {datetime.now(timezone.utc).strftime('%Y-%m-%d')} from [Cloudflare GitHub Organization](https://github.com/cloudflare)*",
    ]
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--topics", action="store_true", help="Also generate CLOUDFLARE_TOPICS.md")
    parser.add_argument("--json", action="store_true", help="Output stats as JSON")
    args = parser.parse_args()

    print("Fetching repos from Cloudflare GitHub organization...", file=sys.stderr)
    repos = fetch_all_repos()
    print(f"Fetched {len(repos)} repos.", file=sys.stderr)

    if args.json:
        langs = {}
        for r in repos:
            lang = r.get("language") or "Unknown"
            langs[lang] = langs.get(lang, 0) + 1
        stats = {
            "total_repos": len(repos),
            "total_stars": sum(r.get("stargazers_count", 0) for r in repos),
            "total_forks": sum(r.get("forks_count", 0) for r in repos),
            "languages": sorted(langs.items(), key=lambda x: -x[1]),
        }
        print(json.dumps(stats, indent=2))
        return

    print("Generating CLOUDFLARE_INDEX.md...", file=sys.stderr)
    index_content = generate_index(repos)
    with open("CLOUDFLARE_INDEX.md", "w") as f:
        f.write(index_content)
    print(f"Written CLOUDFLARE_INDEX.md ({len(index_content):,} bytes)", file=sys.stderr)

    if args.topics:
        print("Generating CLOUDFLARE_TOPICS.md...", file=sys.stderr)
        topics_content = generate_topics(repos)
        with open("CLOUDFLARE_TOPICS.md", "w") as f:
            f.write(topics_content)
        print(f"Written CLOUDFLARE_TOPICS.md ({len(topics_content):,} bytes)", file=sys.stderr)


if __name__ == "__main__":
    main()
