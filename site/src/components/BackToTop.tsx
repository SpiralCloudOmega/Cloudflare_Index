import { useState, useEffect } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={styles.button}
      aria-label="Scroll to top"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "var(--cf-orange)";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px) scale(1.1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(246, 130, 31, 0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(17, 24, 39, 0.9)";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
      }}
    >
      ↑
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  button: {
    position: "fixed",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "rgba(17, 24, 39, 0.9)",
    color: "var(--cf-orange)",
    border: "1px solid rgba(246, 130, 31, 0.3)",
    fontSize: "1.3rem",
    fontWeight: 800,
    cursor: "pointer",
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(12px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
    animation: "fadeIn 0.3s ease-out",
  },
};

export default BackToTop;
