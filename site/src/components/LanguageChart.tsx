import { languageDistribution } from "../data/repos";

function LanguageChart() {
  const entries = Object.entries(languageDistribution).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  const maxCount = entries[0][1];

  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    Go: "#00ADD8",
    Rust: "#dea584",
    JavaScript: "#f7df1e",
    Python: "#3776AB",
    "C++": "#f34b7d",
    C: "#555555",
    Shell: "#89e051",
    Other: "#6366f1",
  };

  return (
    <section id="languages" style={styles.section}>
      <h2 className="section-title">💻 Language Distribution</h2>
      <p className="section-subtitle">Programming languages across {total} Cloudflare repositories</p>

      <div style={styles.chart}>
        {entries.map(([lang, count], i) => {
          const pct = ((count / total) * 100).toFixed(1);
          const barWidth = (count / maxCount) * 100;
          const color = colors[lang] || "#6366f1";

          return (
            <div
              key={lang}
              style={{
                ...styles.row,
                animationDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
              }}
            >
              <div style={styles.labelWrap}>
                <span style={{ ...styles.langDot, background: color }} />
                <span style={styles.langName}>{lang}</span>
                <span style={styles.langCount}>{count} repos</span>
                <span style={styles.langPct}>{pct}%</span>
              </div>
              <div style={styles.barBg}>
                <div
                  style={{
                    ...styles.barFill,
                    width: `${barWidth}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    boxShadow: `0 0 12px ${color}40`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Pie-style summary strip */}
      <div style={styles.pieStrip}>
        {entries.map(([lang, count]) => {
          const pct = (count / total) * 100;
          const color = colors[lang] || "#6366f1";
          return (
            <div
              key={lang}
              title={`${lang}: ${pct.toFixed(1)}%`}
              style={{
                width: `${pct}%`,
                height: 8,
                background: color,
                minWidth: 4,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 24px",
    maxWidth: 900,
    margin: "0 auto",
  },
  chart: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 32,
  },
  row: {
    animation: "fadeInUp 0.5s ease-out forwards",
    opacity: 0,
    transition: "transform 0.2s ease",
    cursor: "default",
  },
  labelWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  langDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    flexShrink: 0,
  },
  langName: {
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "var(--text-primary)",
    minWidth: 100,
  },
  langCount: {
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    minWidth: 70,
  },
  langPct: {
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    fontWeight: 600,
    fontFamily: "monospace",
  },
  barBg: {
    height: 8,
    background: "rgba(148, 163, 184, 0.08)",
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
    transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  pieStrip: {
    display: "flex",
    borderRadius: 6,
    overflow: "hidden",
    border: "1px solid var(--border-color)",
  },
};

export default LanguageChart;
