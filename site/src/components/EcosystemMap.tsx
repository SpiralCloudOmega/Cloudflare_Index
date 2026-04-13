import { useState, useRef, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   SpiralCloudOmega Ecosystem Map
   
   Interactive SVG infograph showing all SpiralCloudOmega repos
   as a connected network. Each node is a repo, connections show
   how they integrate within the Omega Harness architecture.
   ═══════════════════════════════════════════════════════════════ */

interface RepoNode {
  id: string;
  label: string;
  emoji: string;
  description: string;
  url: string;
  category: "core" | "agent" | "memory" | "knowledge" | "protocol" | "training" | "template";
  x: number;
  y: number;
}

interface RepoEdge {
  from: string;
  to: string;
  label?: string;
}

const COLORS: Record<string, string> = {
  core: "#f6821f",
  agent: "#6366f1",
  memory: "#ec4899",
  knowledge: "#10b981",
  protocol: "#8b5cf6",
  training: "#e11d48",
  template: "#3b82f6",
};

const nodes: RepoNode[] = [
  // Center — this repo
  { id: "cf-index", label: "Cloudflare_Index", emoji: "☁️", description: "This repo — index of 478+ CF repos + interactive explorer + Omega Harness builder", url: "https://github.com/SpiralCloudOmega/Cloudflare_Index", category: "core", x: 450, y: 300 },

  // Agent tier (top)
  { id: "archon", label: "Archon", emoji: "🏗️", description: "YAML DAG workflow orchestration engine (TypeScript/Bun)", url: "https://github.com/SpiralCloudOmega/Archon", category: "agent", x: 250, y: 100 },
  { id: "meta-harness", label: "meta-harness-tbench2", emoji: "🧪", description: "Terminal-Bench agent scaffold — 76.4% benchmark score", url: "https://github.com/SpiralCloudOmega/meta-harness-tbench2-artifact", category: "agent", x: 650, y: 100 },

  // Memory tier (left)
  { id: "mempalace", label: "mempalace", emoji: "🏰", description: "Persistent AI memory via spatial organization + vector search", url: "https://github.com/SpiralCloudOmega/mempalace", category: "memory", x: 80, y: 260 },
  { id: "memento-skills", label: "Memento-Skills", emoji: "🎯", description: "Self-evolving agent skills — Read→Execute→Reflect→Write loop", url: "https://github.com/SpiralCloudOmega/Memento-Skills", category: "memory", x: 80, y: 400 },

  // Knowledge tier (right)
  { id: "packtpub", label: "PacktPub Library", emoji: "📚", description: "9,200+ PacktPublishing repos + document management web app", url: "https://github.com/SpiralCloudOmega/PACKTPub_The_Digital_Library_Of_Alexandria", category: "knowledge", x: 820, y: 260 },
  { id: "wiki-compiler", label: "llm-wiki-compiler", emoji: "📖", description: "Incremental knowledge compilation into interlinked wikis", url: "https://github.com/SpiralCloudOmega/llm-wiki-compiler", category: "knowledge", x: 820, y: 400 },

  // Protocol tier (bottom)
  { id: "mcp-servers", label: "MCP Servers", emoji: "🤖", description: "Model Context Protocol reference implementations", url: "https://github.com/SpiralCloudOmega/servers", category: "protocol", x: 200, y: 520 },
  { id: "mcp-cf", label: "mcp-server-cloudflare", emoji: "⛅", description: "15+ domain-specific Cloudflare MCP tool servers", url: "https://github.com/SpiralCloudOmega/mcp-server-cloudflare", category: "protocol", x: 450, y: 540 },

  // Training tier (bottom-right)
  { id: "lambda-rlm", label: "lambda-RLM", emoji: "λ", description: "λ-calculus recursive language model with typed operators", url: "https://github.com/SpiralCloudOmega/lambda-RLM", category: "training", x: 700, y: 520 },
  { id: "megatrain", label: "MegaTrain", emoji: "🚂", description: "100B+ param training on single GPU with double-buffering", url: "https://github.com/SpiralCloudOmega/MegaTrain", category: "training", x: 850, y: 540 },

  // Templates
  { id: "vite-template", label: "vite-react-template", emoji: "⚡", description: "Vite+React+Hono+Workers full-stack template", url: "https://github.com/SpiralCloudOmega/vite-react-template", category: "template", x: 150, y: 180 },
  { id: "r2-explorer", label: "r2-explorer-template", emoji: "📁", description: "Google Drive UI for R2 buckets", url: "https://github.com/SpiralCloudOmega/r2-explorer-template", category: "template", x: 750, y: 180 },

  // Research
  { id: "autoresearch", label: "awesome-autoresearch", emoji: "🔬", description: "Karpathy-inspired perpetual research loop patterns", url: "https://github.com/SpiralCloudOmega/awesome-autoresearch", category: "knowledge", x: 450, y: 100 },

  // Best practices
  { id: "claude-bp", label: "claude-code-best-practice", emoji: "📋", description: "Agent team orchestration patterns & coding standards", url: "https://github.com/SpiralCloudOmega/claude-code-best-practice", category: "agent", x: 300, y: 450 },
  { id: "claude-cb", label: "claude-cookbooks", emoji: "🍳", description: "Production-ready Claude API recipes (Python/TypeScript)", url: "https://github.com/SpiralCloudOmega/claude-cookbooks", category: "agent", x: 600, y: 450 },
];

const edges: RepoEdge[] = [
  // Core connections (everything connects to Cloudflare_Index)
  { from: "cf-index", to: "archon", label: "orchestration" },
  { from: "cf-index", to: "meta-harness", label: "benchmarks" },
  { from: "cf-index", to: "mempalace", label: "memory" },
  { from: "cf-index", to: "packtpub", label: "knowledge" },
  { from: "cf-index", to: "mcp-cf", label: "MCP" },
  { from: "cf-index", to: "lambda-rlm", label: "RLM" },
  { from: "cf-index", to: "autoresearch", label: "research" },

  // Agent connections
  { from: "archon", to: "mempalace" },
  { from: "archon", to: "memento-skills" },
  { from: "archon", to: "mcp-servers" },
  { from: "meta-harness", to: "archon" },

  // Knowledge connections
  { from: "packtpub", to: "wiki-compiler" },
  { from: "wiki-compiler", to: "mempalace" },
  { from: "autoresearch", to: "wiki-compiler" },
  { from: "autoresearch", to: "packtpub" },

  // Protocol connections
  { from: "mcp-servers", to: "mcp-cf" },
  { from: "mcp-cf", to: "archon" },

  // Training connections
  { from: "lambda-rlm", to: "megatrain" },
  { from: "packtpub", to: "lambda-rlm" },

  // Template connections
  { from: "vite-template", to: "cf-index" },
  { from: "r2-explorer", to: "packtpub" },

  // Best practices
  { from: "claude-bp", to: "archon" },
  { from: "claude-cb", to: "mcp-servers" },
  { from: "memento-skills", to: "claude-bp" },
];

function EcosystemMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<{ node: RepoNode; x: number; y: number } | null>(null);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger entrance animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getNodeById = useCallback((id: string) => nodes.find(n => n.id === id), []);

  const handleNodeEnter = useCallback((node: RepoNode) => {
    setHoveredNode(node.id);
    setTooltipData({ node, x: node.x, y: node.y });
  }, []);

  const handleNodeLeave = useCallback(() => {
    setHoveredNode(null);
    setTooltipData(null);
  }, []);

  const isConnectedToHovered = useCallback((nodeId: string) => {
    if (!hoveredNode) return false;
    return edges.some(
      e => (e.from === hoveredNode && e.to === nodeId) || (e.to === hoveredNode && e.from === nodeId)
    );
  }, [hoveredNode]);

  const isEdgeConnectedToHovered = useCallback((edge: RepoEdge) => {
    if (!hoveredNode) return false;
    return edge.from === hoveredNode || edge.to === hoveredNode;
  }, [hoveredNode]);

  return (
    <section id="ecosystem-map" ref={sectionRef} style={styles.section}>
      <h2 style={styles.title}>
        🗺️ SpiralCloudOmega Ecosystem Map
      </h2>
      <p style={styles.subtitle}>
        16 interconnected repositories forming the Omega Harness. Hover to explore connections.
      </p>

      {/* Legend */}
      <div style={styles.legend}>
        {Object.entries(COLORS).map(([cat, color]) => (
          <span key={cat} style={{ ...styles.legendItem, borderColor: color }}>
            <span style={{ ...styles.legendDot, background: color }} />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </span>
        ))}
      </div>

      <div style={styles.svgContainer}>
        <svg
          ref={svgRef}
          viewBox="0 0 900 620"
          style={{ width: "100%", maxWidth: 900, height: "auto" }}
        >
          <defs>
            {/* Glow filter */}
            <filter id="eco-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
              <feFlood floodColor="#f6821f" floodOpacity="0.4" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Animated dash */}
            <style>{`
              @keyframes eco-dash {
                to { stroke-dashoffset: -20; }
              }
            `}</style>
          </defs>

          {/* Edges */}
          {edges.map((edge, i) => {
            const from = getNodeById(edge.from);
            const to = getNodeById(edge.to);
            if (!from || !to) return null;
            const isHighlighted = isEdgeConnectedToHovered(edge);
            const dimmed = hoveredNode && !isHighlighted;
            return (
              <line
                key={`edge-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isHighlighted ? "#f6821f" : "rgba(255,255,255,0.12)"}
                strokeWidth={isHighlighted ? 2.5 : 1}
                opacity={dimmed ? 0.05 : animated ? 1 : 0}
                strokeDasharray={isHighlighted ? "6 4" : "none"}
                style={{
                  animation: isHighlighted ? "eco-dash 0.8s linear infinite" : "none",
                  transition: "all 0.3s ease",
                }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const isHovered = hoveredNode === node.id;
            const isConnected = isConnectedToHovered(node.id);
            const dimmed = hoveredNode && !isHovered && !isConnected;
            const radius = node.id === "cf-index" ? 38 : 28;
            return (
              <g
                key={node.id}
                style={{
                  cursor: "pointer",
                  opacity: animated ? (dimmed ? 0.2 : 1) : 0,
                  transition: `opacity 0.3s ease, transform 0.3s ease`,
                  transitionDelay: animated ? `${i * 50}ms` : "0ms",
                }}
                onMouseEnter={() => handleNodeEnter(node)}
                onMouseLeave={handleNodeLeave}
                onClick={() => window.open(node.url, "_blank")}
              >
                {/* Outer ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius + 4}
                  fill="none"
                  stroke={COLORS[node.category]}
                  strokeWidth={isHovered ? 3 : 1.5}
                  opacity={isHovered ? 1 : 0.5}
                  filter={isHovered ? "url(#eco-glow)" : undefined}
                />
                {/* Background circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={isHovered ? COLORS[node.category] : `${COLORS[node.category]}33`}
                  stroke={COLORS[node.category]}
                  strokeWidth={1.5}
                />
                {/* Emoji */}
                <text
                  x={node.x}
                  y={node.y + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={node.id === "cf-index" ? 22 : 16}
                  style={{ pointerEvents: "none" }}
                >
                  {node.emoji}
                </text>
                {/* Label below */}
                <text
                  x={node.x}
                  y={node.y + radius + 16}
                  textAnchor="middle"
                  fill={isHovered ? "#fff" : "rgba(255,255,255,0.7)"}
                  fontSize={10}
                  fontWeight={isHovered ? 700 : 500}
                  fontFamily="system-ui, sans-serif"
                  style={{ pointerEvents: "none" }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {tooltipData && (
          <div
            style={{
              ...styles.tooltip,
              left: `${(tooltipData.x / 900) * 100}%`,
              top: `${(tooltipData.y / 620) * 100 - 12}%`,
              borderColor: COLORS[tooltipData.node.category],
            }}
          >
            <div style={styles.tooltipTitle}>
              {tooltipData.node.emoji} {tooltipData.node.label}
            </div>
            <div style={styles.tooltipDesc}>{tooltipData.node.description}</div>
            <div style={{ ...styles.tooltipBadge, background: COLORS[tooltipData.node.category] }}>
              {tooltipData.node.category}
            </div>
          </div>
        )}
      </div>

      {/* Stats bar */}
      <div style={styles.statsBar}>
        <div style={styles.stat}>
          <span style={styles.statNum}>16</span>
          <span style={styles.statLabel}>Repositories</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNum}>24</span>
          <span style={styles.statLabel}>Connections</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNum}>7</span>
          <span style={styles.statLabel}>Categories</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNum}>9,700+</span>
          <span style={styles.statLabel}>Total Indexed Repos</span>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 24px",
    maxWidth: 960,
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 8,
    background: "linear-gradient(135deg, #f6821f, #fbad41)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    textAlign: "center",
    color: "var(--text-muted)",
    fontSize: "1rem",
    marginBottom: 24,
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
  legend: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap" as const,
    marginBottom: 24,
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.7)",
    padding: "4px 10px",
    borderRadius: 12,
    border: "1px solid",
    background: "rgba(255,255,255,0.04)",
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    display: "inline-block",
  },
  svgContainer: {
    position: "relative" as const,
    background: "rgba(0,0,0,0.3)",
    borderRadius: 16,
    border: "1px solid rgba(246,130,31,0.15)",
    overflow: "hidden",
    padding: 12,
  },
  tooltip: {
    position: "absolute" as const,
    transform: "translate(-50%, -100%)",
    background: "rgba(15,15,30,0.95)",
    border: "1px solid",
    borderRadius: 10,
    padding: "10px 14px",
    maxWidth: 240,
    pointerEvents: "none" as const,
    zIndex: 20,
    backdropFilter: "blur(8px)",
  },
  tooltipTitle: {
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "#fff",
    marginBottom: 4,
  },
  tooltipDesc: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.4,
    marginBottom: 6,
  },
  tooltipBadge: {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 6,
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#fff",
    textTransform: "uppercase" as const,
  },
  statsBar: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    marginTop: 24,
    flexWrap: "wrap" as const,
  },
  stat: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 2,
  },
  statNum: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "var(--cf-orange)",
  },
  statLabel: {
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
};

export default EcosystemMap;
