function QuickStart() {
  const commands = [
    {
      title: "Create a Workers Project",
      icon: "⛅",
      command: "npm create cloudflare@latest my-app",
      description: "Scaffold a new Cloudflare Workers project with Wrangler",
      color: "#f59e0b",
    },
    {
      title: "Install Wrangler CLI",
      icon: "🛠️",
      command: "npm install -g wrangler",
      description: "The official CLI for developing and deploying Workers",
      color: "#06b6d4",
    },
    {
      title: "Deploy to Workers",
      icon: "🚀",
      command: "wrangler deploy",
      description: "Ship your code to Cloudflare's global edge network",
      color: "#10b981",
    },
    {
      title: "Run Locally",
      icon: "💻",
      command: "wrangler dev",
      description: "Local development with remote bindings (D1, KV, R2)",
      color: "#8b5cf6",
    },
    {
      title: "Use AI on the Edge",
      icon: "🤖",
      command: "wrangler ai models list",
      description: "Browse 50+ AI models available on Workers AI",
      color: "#ec4899",
    },
    {
      title: "Manage Secrets",
      icon: "🔐",
      command: "wrangler secret put API_KEY",
      description: "Securely store secrets for your Workers",
      color: "#ef4444",
    },
  ];

  const handleCopy = (text: string, e: React.MouseEvent) => {
    navigator.clipboard.writeText(text);
    const btn = e.currentTarget as HTMLButtonElement;
    btn.textContent = "✓";
    setTimeout(() => { btn.textContent = "📋"; }, 1500);
  };

  return (
    <section id="quickstart" style={styles.section}>
      <h2 className="section-title">🚀 Quick Start</h2>
      <p className="section-subtitle">Get up and running with Cloudflare in seconds</p>

      <div style={styles.grid}>
        {commands.map((cmd, i) => (
          <div
            key={cmd.title}
            style={{
              ...styles.card,
              animationDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = `${cmd.color}60`;
              el.style.boxShadow = `0 8px 40px ${cmd.color}15`;
              el.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--border-color)";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            <div style={styles.cardHeader}>
              <span style={styles.icon}>{cmd.icon}</span>
              <h3 style={{ ...styles.cardTitle, color: cmd.color }}>{cmd.title}</h3>
            </div>
            <p style={styles.desc}>{cmd.description}</p>
            <div style={styles.codeWrap}>
              <code style={styles.code}>{cmd.command}</code>
              <button
                onClick={(e) => handleCopy(cmd.command, e)}
                style={styles.copyBtn}
                aria-label={`Copy command: ${cmd.command}`}
              >
                📋
              </button>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: 20,
  },
  card: {
    background: "var(--bg-card)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--border-color)",
    borderRadius: "var(--radius)",
    padding: 24,
    animation: "fadeInUp 0.6s ease-out forwards",
    opacity: 0,
    transition: "all 0.3s ease",
    cursor: "default",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  icon: {
    fontSize: "1.5rem",
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: 700,
  },
  desc: {
    color: "var(--text-muted)",
    fontSize: "0.85rem",
    marginBottom: 16,
    lineHeight: 1.5,
  },
  codeWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: 8,
    padding: "10px 14px",
    border: "1px solid rgba(148, 163, 184, 0.08)",
  },
  code: {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: "0.82rem",
    color: "var(--cf-green)",
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  copyBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    padding: "2px 4px",
    borderRadius: 4,
    transition: "background 0.2s ease",
    flexShrink: 0,
  },
};

export default QuickStart;
