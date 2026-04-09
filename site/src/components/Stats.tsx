import { useState, useEffect, useRef } from "react";
import { totalRepos, totalStars, totalForks, categories } from "../data/repos";

function useCountUp(target: number, duration = 2000, startOnView = true): [number, React.RefObject<HTMLDivElement | null>] {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!startOnView || !elRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return [count, elRef];
}

function Stats() {
  const [repos, reposRef] = useCountUp(totalRepos, 1500);
  const [stars, starsRef] = useCountUp(totalStars, 2000);
  const [forks, forksRef] = useCountUp(totalForks, 1800);
  const [cats, catsRef] = useCountUp(categories.length, 1200);

  const statsData = [
    { icon: "📦", value: repos, label: "Repositories", color: "var(--cf-orange)", ref: reposRef },
    { icon: "⭐", value: stars, label: "Stars", color: "var(--cf-yellow)", ref: starsRef },
    { icon: "🍴", value: forks, label: "Forks", color: "var(--cf-purple)", ref: forksRef },
    { icon: "📂", value: cats, label: "Categories", color: "var(--cf-green)", ref: catsRef },
    { icon: "💻", value: null, label: "#1 Language", color: "var(--cf-cyan)", ref: null, text: "TypeScript" },
  ];

  return (
    <section id="stats" style={styles.section}>
      <div style={styles.grid}>
        {statsData.map((stat, i) => (
          <div
            key={stat.label}
            ref={stat.ref}
            style={{
              ...styles.card,
              animationDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${stat.color}40`;
              (e.currentTarget as HTMLDivElement).style.borderColor = `${stat.color}60`;
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-color)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
            }}
          >
            <span style={styles.icon}>{stat.icon}</span>
            <span style={{ ...styles.value, color: stat.color }}>
              {stat.text ?? stat.value!.toLocaleString()}
            </span>
            <span style={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "60px 24px",
    maxWidth: 1200,
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
  },
  card: {
    background: "var(--bg-card)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius)",
    padding: "28px 20px",
    textAlign: "center" as const,
    animation: "fadeInUp 0.6s ease-out forwards",
    opacity: 0,
    cursor: "default",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "2rem",
    display: "block",
    marginBottom: 8,
  },
  value: {
    display: "block",
    fontSize: "1.8rem",
    fontWeight: 800,
    marginBottom: 4,
  },
  label: {
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    textTransform: "uppercase" as const,
    letterSpacing: 1.5,
  },
};

export default Stats;
