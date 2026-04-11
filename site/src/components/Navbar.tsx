import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Stats", href: "#stats" },
  { label: "Ecosystem", href: "#graph" },
  { label: "Categories", href: "#categories" },
  { label: "Explorer", href: "#explorer" },
  { label: "Timeline", href: "#timeline" },
  { label: "Languages", href: "#languages" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      ...styles.nav,
      background: scrolled ? "rgba(10, 14, 26, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(148, 163, 184, 0.1)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
    }}>
      <div style={styles.inner}>
        <a href="#top" onClick={(e) => handleNavClick(e, "#top")} style={styles.brand}>
          <span style={styles.brandIcon}>☁️</span>
          <span style={styles.brandText}>CF Index</span>
        </a>

        {/* Desktop links */}
        <div style={styles.links}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={styles.link}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cf-orange)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/SpiralCloudOmega/Cloudflare_Index"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ghButton}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--cf-orange)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--cf-orange)";
            }}
          >
            ⭐ GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={styles.hamburger}
          aria-label="Toggle navigation menu"
        >
          <span style={{
            ...styles.hamburgerLine,
            transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            ...styles.hamburgerLine,
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            ...styles.hamburgerLine,
            transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={styles.mobileLink}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    padding: "0 24px",
  },
  inner: {
    maxWidth: 1280,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    color: "var(--text-primary)",
  },
  brandIcon: {
    fontSize: "1.5rem",
  },
  brandText: {
    fontWeight: 800,
    fontSize: "1.1rem",
    background: "linear-gradient(135deg, #fff, var(--cf-orange))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  link: {
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 500,
    padding: "6px 12px",
    borderRadius: 8,
    transition: "color 0.2s ease",
  },
  ghButton: {
    color: "var(--cf-orange)",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: 700,
    padding: "6px 16px",
    borderRadius: 20,
    border: "1px solid var(--cf-orange)",
    marginLeft: 8,
    transition: "all 0.2s ease",
  },
  hamburger: {
    display: "none",
    flexDirection: "column" as const,
    gap: 5,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
  },
  hamburgerLine: {
    display: "block",
    width: 24,
    height: 2,
    background: "var(--text-secondary)",
    borderRadius: 2,
    transition: "all 0.3s ease",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column" as const,
    padding: "8px 16px 16px",
    background: "rgba(10, 14, 26, 0.98)",
    borderBottom: "1px solid var(--border-color)",
  },
  mobileLink: {
    color: "var(--text-secondary)",
    textDecoration: "none",
    padding: "12px 16px",
    fontSize: "0.95rem",
    fontWeight: 500,
    borderRadius: 8,
  },
};

export default Navbar;
