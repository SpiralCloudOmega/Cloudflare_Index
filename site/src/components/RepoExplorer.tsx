import { useState, useMemo } from "react";
import { allTopRepos, categories } from "../data/repos";
import type { Repo } from "../data/repos";

type SortKey = "stars" | "name";

function RepoExplorer() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("stars");
  const [sortAsc, setSortAsc] = useState(false);

  const filtered = useMemo(() => {
    let repos: Repo[] = allTopRepos;
    if (activeCategory) {
      repos = repos.filter(r => r.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      repos = repos.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.language.toLowerCase().includes(q)
      );
    }
    repos = [...repos].sort((a, b) => {
      const mul = sortAsc ? 1 : -1;
      if (sortKey === "stars") return (a.stars - b.stars) * mul;
      return a.name.localeCompare(b.name) * mul;
    });
    return repos;
  }, [search, activeCategory, sortKey, sortAsc]);

  const uniqueCategories = [...new Set(allTopRepos.map(r => r.category))];

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  return (
    <section id="explorer" style={styles.section}>
      <h2 className="section-title">🔍 Repository Explorer</h2>
      <p className="section-subtitle">Search and filter across top Cloudflare repositories</p>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search repos by name, language, or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
        <div style={styles.pills}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              ...styles.pill,
              background: !activeCategory ? "var(--cf-orange)" : "var(--bg-card)",
              color: !activeCategory ? "#fff" : "var(--text-secondary)",
            }}
          >
            All
          </button>
          {uniqueCategories.map(cat => {
            const catData = categories.find(c => c.topRepos.some(r => r.category === cat));
            const color = catData?.color || "var(--cf-orange)";
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                style={{
                  ...styles.pill,
                  background: activeCategory === cat ? color : `${color}20`,
                  color: activeCategory === cat ? "#fff" : color,
                  borderColor: activeCategory === cat ? color : "transparent",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th} onClick={() => handleSort("name")}>
                Name {sortKey === "name" ? (sortAsc ? "↑" : "↓") : ""}
              </th>
              <th style={{ ...styles.th, cursor: "pointer" }} onClick={() => handleSort("stars")}>
                Stars {sortKey === "stars" ? (sortAsc ? "↑" : "↓") : ""}
              </th>
              <th style={styles.th}>Language</th>
              <th style={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={4} style={styles.empty}>
                  No repositories found matching &quot;{search}&quot;
                </td>
              </tr>
            ) : (
              filtered.map((repo, i) => (
                <tr
                  key={repo.name}
                  style={{
                    ...styles.tr,
                    animation: `fadeInUp 0.4s ease-out ${i * 0.03}s forwards`,
                    opacity: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLTableRowElement).style.background = "rgba(246,130,31,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLTableRowElement).style.background = "transparent";
                  }}
                >
                  <td style={styles.td}>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" style={styles.repoLink}>
                      {repo.name}
                    </a>
                  </td>
                  <td style={{ ...styles.td, color: "var(--cf-yellow)", fontWeight: 700 }}>
                    ⭐ {repo.stars.toLocaleString()}
                  </td>
                  <td style={styles.td}>
                    <span style={styles.langBadge}>{repo.language}</span>
                  </td>
                  <td style={{ ...styles.td, color: "var(--text-muted)" }}>{repo.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 24px",
    maxWidth: 1280,
    margin: "0 auto",
  },
  controls: {
    marginBottom: 32,
  },
  searchInput: {
    width: "100%",
    padding: "14px 20px",
    background: "var(--bg-card)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius)",
    color: "var(--text-primary)",
    fontSize: "1rem",
    outline: "none",
    marginBottom: 16,
    backdropFilter: "blur(8px)",
    transition: "border-color 0.3s ease",
  },
  pills: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap" as const,
  },
  pill: {
    padding: "6px 16px",
    borderRadius: 20,
    border: "1px solid transparent",
    cursor: "pointer",
    fontSize: "0.8rem",
    fontWeight: 600,
    transition: "all 0.2s ease",
    whiteSpace: "nowrap" as const,
  },
  tableWrap: {
    overflowX: "auto" as const,
    borderRadius: "var(--radius)",
    border: "1px solid var(--border-color)",
    background: "var(--bg-card)",
    backdropFilter: "blur(12px)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "0.9rem",
  },
  th: {
    textAlign: "left" as const,
    padding: "14px 16px",
    color: "var(--text-muted)",
    fontWeight: 600,
    borderBottom: "1px solid var(--border-color)",
    cursor: "pointer",
    textTransform: "uppercase" as const,
    fontSize: "0.75rem",
    letterSpacing: 1,
    whiteSpace: "nowrap" as const,
  },
  tr: {
    transition: "background 0.2s ease",
  },
  td: {
    padding: "12px 16px",
    borderBottom: "1px solid rgba(148,163,184,0.05)",
    verticalAlign: "top" as const,
  },
  repoLink: {
    color: "var(--cf-orange)",
    fontWeight: 700,
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
  },
  langBadge: {
    background: "rgba(99,102,241,0.15)",
    color: "var(--cf-purple)",
    padding: "2px 10px",
    borderRadius: 12,
    fontSize: "0.75rem",
    fontWeight: 600,
    whiteSpace: "nowrap" as const,
  },
  empty: {
    textAlign: "center" as const,
    padding: 40,
    color: "var(--text-muted)",
    fontSize: "1rem",
  },
};

export default RepoExplorer;
