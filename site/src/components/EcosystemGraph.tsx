import { useState } from "react";
import { categories } from "../data/repos";
import type { Category } from "../data/repos";

const WIDTH = 700;
const HEIGHT = 700;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;
const RADIUS = 260;
const CENTER_R = 50;

function EcosystemGraph() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const maxStars = Math.max(...categories.map(c => c.totalStars));

  const nodes = categories.map((cat: Category, i: number) => {
    const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
    const x = CX + Math.cos(angle) * RADIUS;
    const y = CY + Math.sin(angle) * RADIUS;
    const nodeR = 20 + (cat.totalStars / maxStars) * 25;
    return { ...cat, x, y, r: nodeR, index: i };
  });

  const handleNodeClick = (cat: Category) => {
    const el = document.getElementById("categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="graph" style={styles.section}>
      <h2 className="section-title">🌐 Ecosystem Map</h2>
      <p className="section-subtitle">Cloudflare&apos;s open-source universe at a glance</p>

      <div style={styles.svgWrap}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={styles.svg}
        >
          <defs>
            <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f6821f" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f6821f" stopOpacity="0" />
            </radialGradient>
            {nodes.map(node => (
              <radialGradient key={`grad-${node.index}`} id={`grad-${node.index}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={node.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={node.color} stopOpacity="0.3" />
              </radialGradient>
            ))}
          </defs>

          {/* Background glow */}
          <circle cx={CX} cy={CY} r={120} fill="url(#center-glow)" />

          {/* Connection lines */}
          {nodes.map(node => (
            <line
              key={`line-${node.index}`}
              x1={CX}
              y1={CY}
              x2={node.x}
              y2={node.y}
              stroke={hovered === node.index ? node.color : "rgba(148,163,184,0.15)"}
              strokeWidth={hovered === node.index ? 2.5 : 1}
              strokeDasharray={hovered === node.index ? "none" : "4 4"}
              style={{ transition: "all 0.3s ease" }}
            />
          ))}

          {/* Center node */}
          <g style={{ cursor: "pointer" }}>
            <circle
              cx={CX}
              cy={CY}
              r={CENTER_R}
              fill="var(--bg-secondary)"
              stroke="#f6821f"
              strokeWidth={3}
              style={{ filter: "drop-shadow(0 0 15px rgba(246,130,31,0.5))" }}
            >
              <animate
                attributeName="r"
                values={`${CENTER_R};${CENTER_R + 3};${CENTER_R}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={CX}
              y={CY - 6}
              textAnchor="middle"
              fill="#f6821f"
              fontWeight="800"
              fontSize="13"
            >
              ☁️ Cloudflare
            </text>
            <text
              x={CX}
              y={CY + 12}
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="9"
            >
              478 repos
            </text>
          </g>

          {/* Category nodes */}
          {nodes.map(node => {
            const isHovered = hovered === node.index;
            const isSelected = selected === node.index;
            const scale = isHovered || isSelected ? 1.15 : 1;
            return (
              <g
                key={`node-${node.index}`}
                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
                transform={`translate(${node.x}, ${node.y}) scale(${scale}) translate(${-node.x}, ${-node.y})`}
                onMouseEnter={() => setHovered(node.index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  setSelected(node.index === selected ? null : node.index);
                  handleNodeClick(node);
                }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r}
                  fill={`url(#grad-${node.index})`}
                  stroke={node.color}
                  strokeWidth={isHovered || isSelected ? 2.5 : 1.5}
                  style={{
                    filter: isHovered ? `drop-shadow(0 0 12px ${node.color})` : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <animate
                    attributeName="cy"
                    values={`${node.y};${node.y - 4};${node.y}`}
                    dur={`${3 + node.index * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x={node.x}
                  y={node.y - 4}
                  textAnchor="middle"
                  fontSize="14"
                  style={{ pointerEvents: "none" }}
                >
                  {node.emoji}
                </text>
                <text
                  x={node.x}
                  y={node.y + 10}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="7"
                  fontWeight="600"
                  style={{ pointerEvents: "none" }}
                >
                  {node.name.split(" ")[0]}
                </text>
              </g>
            );
          })}

          {/* Tooltip */}
          {hovered !== null && (() => {
            const node = nodes[hovered];
            const tooltipW = 220;
            const tooltipH = 70;
            let tx = node.x - tooltipW / 2;
            let ty = node.y - node.r - tooltipH - 12;
            if (ty < 5) ty = node.y + node.r + 12;
            if (tx < 5) tx = 5;
            if (tx + tooltipW > WIDTH - 5) tx = WIDTH - tooltipW - 5;
            return (
              <g style={{ pointerEvents: "none", animation: "fadeIn 0.2s ease" }}>
                <rect
                  x={tx}
                  y={ty}
                  width={tooltipW}
                  height={tooltipH}
                  rx={8}
                  fill="rgba(10,14,26,0.95)"
                  stroke={node.color}
                  strokeWidth={1}
                />
                <text x={tx + 12} y={ty + 20} fill={node.color} fontWeight="700" fontSize="11">
                  {node.emoji} {node.name}
                </text>
                <text x={tx + 12} y={ty + 36} fill="var(--text-secondary)" fontSize="9">
                  ⭐ {node.totalStars.toLocaleString()} stars · {node.repos} repos
                </text>
                <text x={tx + 12} y={ty + 52} fill="var(--text-muted)" fontSize="8">
                  {node.description.substring(0, 40)}…
                </text>
              </g>
            );
          })()}
        </svg>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 24px",
    maxWidth: 1000,
    margin: "0 auto",
  },
  svgWrap: {
    display: "flex",
    justifyContent: "center",
    padding: "0 16px",
  },
  svg: {
    width: "100%",
    maxWidth: 700,
    height: "auto",
  },
};

export default EcosystemGraph;
