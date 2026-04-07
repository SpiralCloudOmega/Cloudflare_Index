# Contributing to Cloudflare Index

Thank you for your interest in contributing! This repository contains an auto-generated index of all public repositories in the [Cloudflare GitHub organization](https://github.com/cloudflare).

## How It Works

The index files are generated automatically by a Python script that queries the GitHub API:

- **`CLOUDFLARE_INDEX.md`** — alphabetical index of all repos
- **`CLOUDFLARE_TOPICS.md`** — repos organized by technology category

The workflow runs every Monday at 6am UTC and can also be triggered manually from the **Actions** tab.

## Running the Script Locally

```bash
# Basic index only
GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py

# Index + topics
GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py --topics

# JSON stats output
GITHUB_TOKEN=your_token python scripts/generate_cloudflare_index.py --json
```

A `GITHUB_TOKEN` is recommended to avoid rate limiting (60 req/hr unauthenticated vs 5,000 req/hr authenticated).

## Improving Category Detection

The `categorize()` function in `scripts/generate_cloudflare_index.py` maps each repo to a topic category. If a repo is miscategorized, open a PR that updates the keyword lists or adds an explicit name mapping in that function.

## Reporting Issues

- **Miscategorized repo** — open an issue with the repo name and suggested category.
- **Missing repo** — the script fetches all *public* repos; if a repo is missing it may be private or archived.
- **Script bug** — open an issue with the error output and Python version.

## Pull Request Guidelines

1. Keep changes focused — one logical change per PR.
2. Run the script locally and verify the output looks correct before submitting.
3. Do not manually edit `CLOUDFLARE_INDEX.md` or `CLOUDFLARE_TOPICS.md`; they are regenerated on every run.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
