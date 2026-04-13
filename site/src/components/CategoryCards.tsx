import { useEffect, useRef, useState } from "react";
import { categories } from "../data/repos";
import type { Category, Repo } from "../data/repos";

function CategoryCards() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setVisibleCards(prev => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" style={styles.section}>
      <h2 className="section-title">📂 Explore by Category</h2>
      <p className="section-subtitle">10 categories spanning the full Cloudflare ecosystem</p>

      <div style={styles.grid}>
        {categories.map((cat: Category, i: number) => (
          <div
            key={cat.name}
            ref={(el) => { cardsRef.current[i] = el; }}
            data-index={i}
            style={{
              ...styles.card,
              borderLeft: `4px solid ${cat.color}`,
              opacity: visibleCards.has(i) ? 1 : 0,
              transform: visibleCards.has(i) ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${(i % 3) * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.boxShadow = `0 8px 40px ${cat.color}30, inset 0 0 0 1px ${cat.color}40`;
              el.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.boxShadow = "none";
              el.style.transform = visibleCards.has(i) ? "translateY(0)" : "translateY(30px)";
            }}
          >
            <div style={styles.cardHeader}>
              <span style={styles.emoji}>{cat.emoji}</span>
              <div>
                <h3 style={styles.cardTitle}>{cat.name}</h3>
                <div style={styles.meta}>
                  <span style={{ ...styles.metaBadge, background: `${cat.color}20`, color: cat.color }}>
                    {cat.repos} repos
                  </span>
                  <span style={{ ...styles.metaBadge, background: `${cat.color}20`, color: cat.color }}>
                    ⭐ {cat.totalStars.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <p style={styles.desc}>{cat.description}</p>
            <div style={styles.repoList}>
              {cat.topRepos.map((repo: Repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.repoLink}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${cat.color}15`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${cat.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.2)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent";
                  }}
                >
                  <div style={styles.repoTop}>
                    <span style={styles.repoName}>{repo.name}</span>
                    <span style={styles.repoStars}>⭐ {repo.stars.toLocaleString()}</span>
                  </div>
                  <span style={styles.repoDesc}>{repo.description}</span>
                  <span style={{ ...styles.langBadge, color: cat.color }}>{repo.language}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    gap: 24,
  },
  card: {
    background: "var(--bg-card)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius)",
    padding: 24,
    transition: "all 0.5s ease",
    cursor: "default",
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    marginBottom: 12,
  },
  emoji: {
    fontSize: "2.2rem",
    lineHeight: 1,
  },
  cardTitle: {
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "var(--text-primary)",
    marginBottom: 6,
  },
  meta: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap" as const,
  },
  metaBadge: {
    fontSize: "0.75rem",
    padding: "2px 10px",
    borderRadius: 20,
    fontWeight: 600,
  },
  desc: {
    color: "var(--text-secondary)",
    fontSize: "0.9rem",
    marginBottom: 16,
    lineHeight: 1.5,
  },
  repoList: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 8,
  },
  repoLink: {
    display: "block",
    background: "rgba(0,0,0,0.2)",
    borderRadius: 8,
    padding: "10px 14px",
    textDecoration: "none",
    border: "1px solid transparent",
    transition: "all 0.2s ease",
  },
  repoTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  repoName: {
    fontWeight: 700,
    color: "var(--text-primary)",
    fontSize: "0.9rem",
  },
  repoStars: {
    fontSize: "0.8rem",
    color: "var(--cf-yellow)",
    fontWeight: 600,
  },
  repoDesc: {
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    display: "block",
    marginBottom: 4,
  },
  langBadge: {
    fontSize: "0.7rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: 0.5,
  },
};

export default CategoryCards;
