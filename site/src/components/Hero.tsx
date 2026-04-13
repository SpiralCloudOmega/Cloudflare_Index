import { useState, useEffect, useRef } from "react";
import { totalRepos, totalStars, totalForks } from "../data/repos";

function useCountUp(target: number, duration = 2000): number {
  const [count, setCount] = useState(0);
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

function Hero() {
  const repos = useCountUp(totalRepos, 1800);
  const stars = useCountUp(totalStars, 2200);
  const forks = useCountUp(totalForks, 2000);

  const handleExplore = () => {
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <section style={styles.hero}>
      <div style={styles.gradientOverlay} />

      {dots.map(dot => (
        <div
          key={dot.id}
          style={{
            position: "absolute",
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
            borderRadius: "50%",
            background: "rgba(246, 130, 31, 0.4)",
            animation: `dotFloat ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      <div style={styles.content}>
        <h1 style={styles.title}>☁️ Cloudflare Open Source Explorer</h1>
        <p style={styles.subtitle}>
          Explore <strong style={{ color: "var(--cf-orange)" }}>{totalRepos}+</strong> open-source repositories
          powering the Internet — from edge networking to AI agents
        </p>

        <div style={styles.badges}>
          <div style={{ ...styles.badge, animationDelay: "0.1s" }}>
            <span style={styles.badgeNumber}>{repos.toLocaleString()}</span>
            <span style={styles.badgeLabel}>Repositories</span>
          </div>
          <div style={{ ...styles.badge, animationDelay: "0.3s" }}>
            <span style={{ ...styles.badgeNumber, color: "var(--cf-yellow)" }}>⭐ {stars.toLocaleString()}</span>
            <span style={styles.badgeLabel}>Stars</span>
          </div>
          <div style={{ ...styles.badge, animationDelay: "0.5s" }}>
            <span style={{ ...styles.badgeNumber, color: "var(--cf-purple)" }}>🍴 {forks.toLocaleString()}</span>
            <span style={styles.badgeLabel}>Forks</span>
          </div>
        </div>

        <button onClick={handleExplore} style={styles.exploreBtn}>
          Explore ↓
        </button>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "var(--bg-primary)",
  },
  gradientOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(246,130,31,0.12) 0%, rgba(99,102,241,0.1) 40%, rgba(16,185,129,0.08) 70%, rgba(30,58,95,0.15) 100%)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 12s ease infinite",
    zIndex: 0,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "40px 24px",
    maxWidth: 900,
    animation: "fadeInUp 1s ease-out",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 900,
    marginBottom: 20,
    background: "linear-gradient(135deg, #ffffff, #f6821f, #6366f1)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "none",
    lineHeight: 1.2,
    filter: "drop-shadow(0 0 30px rgba(246,130,31,0.3))",
  },
  subtitle: {
    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
    color: "var(--text-secondary)",
    marginBottom: 40,
    lineHeight: 1.8,
  },
  badges: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap" as const,
    marginBottom: 48,
  },
  badge: {
    background: "rgba(17, 24, 39, 0.8)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(246, 130, 31, 0.2)",
    borderRadius: 16,
    padding: "20px 32px",
    minWidth: 160,
    animation: "fadeInUp 0.8s ease-out forwards",
    opacity: 0,
    transition: "all 0.3s ease",
  },
  badgeNumber: {
    display: "block",
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "var(--cf-orange)",
    marginBottom: 4,
  },
  badgeLabel: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    textTransform: "uppercase" as const,
    letterSpacing: 1,
  },
  exploreBtn: {
    background: "linear-gradient(135deg, var(--cf-orange), #e06000)",
    color: "#fff",
    border: "none",
    borderRadius: 50,
    padding: "14px 40px",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    animation: "pulse 2s ease-in-out infinite",
    boxShadow: "0 4px 20px rgba(246, 130, 31, 0.4)",
    transition: "transform 0.2s ease",
  },
};

export default Hero;
