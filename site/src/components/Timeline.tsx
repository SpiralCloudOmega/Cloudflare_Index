import { milestones } from "../data/repos";

function Timeline() {
  return (
    <section id="timeline" style={styles.section}>
      <h2 className="section-title">📅 Open Source Timeline</h2>
      <p className="section-subtitle">Key milestones in Cloudflare&apos;s open-source journey</p>

      <div style={styles.timeline}>
        {milestones.map((m, i) => (
          <div
            key={m.year}
            style={{
              ...styles.item,
              animationDelay: `${i * 0.15}s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--cf-orange)";
              el.style.boxShadow = "0 0 30px rgba(246, 130, 31, 0.2)";
              el.style.transform = "translateX(8px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--border-color)";
              el.style.boxShadow = "none";
              el.style.transform = "translateX(0)";
            }}
          >
            <div style={styles.yearBadge}>
              <span style={styles.dot} />
              <span style={styles.year}>{m.year}</span>
            </div>
            <p style={styles.event}>{m.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 24px",
    maxWidth: 800,
    margin: "0 auto",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    position: "relative",
    paddingLeft: 32,
  },
  item: {
    background: "var(--bg-card)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--border-color)",
    borderLeft: "3px solid var(--border-color)",
    borderRadius: "0 var(--radius) var(--radius) 0",
    padding: "20px 24px",
    animation: "fadeInUp 0.6s ease-out forwards",
    opacity: 0,
    transition: "all 0.3s ease",
    cursor: "default",
  },
  yearBadge: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "var(--cf-orange)",
    boxShadow: "0 0 10px rgba(246, 130, 31, 0.5)",
    flexShrink: 0,
  },
  year: {
    fontWeight: 800,
    fontSize: "1.1rem",
    color: "var(--cf-orange)",
    fontFamily: "monospace",
  },
  event: {
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    paddingLeft: 20,
  },
};

export default Timeline;
