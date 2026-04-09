function Footer() {
  const links = [
    { label: "GitHub Repository", url: "https://github.com/nicholasgriffintn/Cloudflare_Index" },
    { label: "CLOUDFLARE_INDEX.md", url: "https://github.com/nicholasgriffintn/Cloudflare_Index/blob/main/CLOUDFLARE_INDEX.md" },
    { label: "CLOUDFLARE_TOPICS.md", url: "https://github.com/nicholasgriffintn/Cloudflare_Index/blob/main/CLOUDFLARE_TOPICS.md" },
    { label: "CLOUDFLARE_ECOSYSTEM.md", url: "https://github.com/nicholasgriffintn/Cloudflare_Index/blob/main/CLOUDFLARE_ECOSYSTEM.md" },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.divider} />
      <div style={styles.content}>
        <div style={styles.links}>
          {links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cf-orange-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cf-orange)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={styles.meta}>
          <p style={styles.metaLine}>
            Built with <span style={{ color: "var(--cf-orange)" }}>Vite</span> + <span style={{ color: "var(--cf-cyan)" }}>React</span> · Deployed on GitHub Pages
          </p>
          <p style={styles.metaLine}>
            Based on{" "}
            <a
              href="https://github.com/SpiralCloudOmega/vite-react-template"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.inlineLink}
            >
              SpiralCloudOmega/vite-react-template
            </a>
          </p>
          <p style={styles.metaLine}>
            See also:{" "}
            <a
              href="https://r2-explorer.massadas.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.inlineLink}
            >
              R2 Explorer
            </a>
            {" "}— Google Drive for your R2 buckets
          </p>
        </div>

        <p style={styles.copyright}>
          © {new Date().getFullYear()} Cloudflare Index Explorer
        </p>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: "0 24px 40px",
    maxWidth: 1280,
    margin: "0 auto",
  },
  divider: {
    height: 2,
    background: "linear-gradient(90deg, transparent, var(--cf-orange), transparent)",
    marginBottom: 40,
    borderRadius: 1,
  },
  content: {
    textAlign: "center" as const,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    flexWrap: "wrap" as const,
    marginBottom: 24,
  },
  link: {
    color: "var(--cf-orange)",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 600,
    padding: "6px 14px",
    borderRadius: 8,
    border: "1px solid rgba(246,130,31,0.2)",
    transition: "all 0.2s ease",
  },
  meta: {
    marginBottom: 20,
  },
  metaLine: {
    color: "var(--text-muted)",
    fontSize: "0.85rem",
    marginBottom: 6,
    lineHeight: 1.6,
  },
  inlineLink: {
    color: "var(--cf-orange)",
    textDecoration: "none",
    fontWeight: 600,
  },
  copyright: {
    color: "var(--text-muted)",
    fontSize: "0.75rem",
    opacity: 0.6,
  },
};

export default Footer;
