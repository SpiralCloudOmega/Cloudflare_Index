import { useCallback, useRef, useState, useMemo } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from "@xyflow/react";
import type { Connection, ReactFlowInstance } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import AgentNodeComponent from "./AgentNode";
import {
  nodeTemplates,
  paletteGroups,
  defaultNodes,
  defaultEdges,
} from "../data/agentNodes";

const nodeTypes = { agentNode: AgentNodeComponent };

let nodeId = 100;
function getNextId() {
  return `node-${nodeId++}`;
}

function AgentBuilderInner() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(true);
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#f6821f" },
          },
          eds
        )
      ),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const templateKey = event.dataTransfer.getData("application/agentnode");
      if (!templateKey || !nodeTemplates[templateKey]) return;

      const template = nodeTemplates[templateKey];

      if (rfInstance && reactFlowWrapper.current) {
        const bounds = reactFlowWrapper.current.getBoundingClientRect();
        const position = rfInstance.screenToFlowPosition({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
        });

        const newNode = {
          id: getNextId(),
          type: "agentNode",
          position,
          data: { ...template, nodeKey: templateKey },
        };

        setNodes((nds) => [...nds, newNode]);
      }
    },
    [rfInstance, setNodes]
  );

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: (typeof nodes)[number]) => {
      const d = node.data as Record<string, unknown>;
      setSelectedInfo(
        `${d.emoji} ${d.label}\n${d.description}\nCategory: ${d.category}`
      );
    },
    []
  );

  const onPaneClick = useCallback(() => setSelectedInfo(null), []);

  const handleClear = useCallback(() => {
    setNodes([]);
    setEdges([]);
    setSelectedInfo(null);
  }, [setNodes, setEdges]);

  const handleReset = useCallback(() => {
    setNodes(defaultNodes);
    setEdges(defaultEdges);
    setSelectedInfo(null);
  }, [setNodes, setEdges]);

  const nodeCount = nodes.length;
  const edgeCount = edges.length;

  const minimapColors = useMemo(
    () => ({
      nodeColor: (node: (typeof nodes)[number]) => {
        const d = node.data as Record<string, string>;
        return d.color ?? "#666";
      },
    }),
    []
  );

  return (
    <section id="builder" style={sectionStyle}>
      <h2 className="section-title">🚀 Agent Workflow Builder</h2>
      <p className="section-subtitle">
        Drag nodes from the palette and connect them — n8n-style visual builder
        for Cloudflare agent architectures
      </p>

      {/* Toolbar */}
      <div style={toolbarStyle}>
        <button style={btnStyle} onClick={() => setPaletteOpen((p) => !p)}>
          {paletteOpen ? "◀ Hide" : "▶ Palette"}
        </button>
        <button style={btnStyle} onClick={handleReset}>
          ↺ Demo
        </button>
        <button style={{ ...btnStyle, color: "#ef4444" }} onClick={handleClear}>
          ✕ Clear
        </button>
        <span style={statBadge}>
          {nodeCount} nodes · {edgeCount} edges
        </span>
        {selectedInfo && (
          <span style={infoBadge}>{selectedInfo.split("\n")[0]}</span>
        )}
      </div>

      <div style={builderWrap}>
        {/* ── Palette Sidebar ── */}
        {paletteOpen && (
          <aside style={paletteStyle}>
            <div style={paletteHeader}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>
                📦 Node Palette
              </span>
            </div>
            <div style={paletteScroll}>
              {paletteGroups.map((group) => (
                <div key={group.name} style={groupStyle}>
                  <div style={groupTitle}>
                    {group.emoji} {group.name}
                  </div>
                  {group.keys.map((key) => {
                    const tmpl = nodeTemplates[key];
                    return (
                      <div
                        key={key}
                        draggable
                        onDragStart={(e) => {
                          e.dataTransfer.setData("application/agentnode", key);
                          e.dataTransfer.effectAllowed = "move";
                        }}
                        style={{
                          ...paletteTile,
                          borderColor: `${tmpl.color}40`,
                        }}
                      >
                        <span style={{ fontSize: 16 }}>{tmpl.emoji}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 600,
                              color: tmpl.color,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {tmpl.label}
                          </div>
                          <div
                            style={{
                              fontSize: 9,
                              color: "var(--text-muted)",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {tmpl.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* ── Canvas ── */}
        <div ref={reactFlowWrapper} style={canvasStyle}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setRfInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            fitView
            snapToGrid
            snapGrid={[20, 20]}
            defaultEdgeOptions={{ animated: true, style: { stroke: "#f6821f" } }}
            proOptions={{ hideAttribution: false }}
            style={{ background: "var(--bg-primary)" }}
          >
            <Controls
              position="bottom-right"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
            />
            <MiniMap
              nodeColor={minimapColors.nodeColor}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
              maskColor="rgba(10,14,26,0.8)"
              position="bottom-left"
            />
            <Background
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="rgba(148,163,184,0.1)"
            />
          </ReactFlow>
        </div>
      </div>

      {/* Detail panel */}
      {selectedInfo && (
        <div style={detailPanel}>
          {selectedInfo.split("\n").map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: i === 0 ? 14 : 12,
                fontWeight: i === 0 ? 700 : 400,
                color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function AgentBuilder() {
  return (
    <ReactFlowProvider>
      <AgentBuilderInner />
    </ReactFlowProvider>
  );
}

/* ─── Inline styles ─────────────────────────────────────────── */

const sectionStyle: React.CSSProperties = {
  padding: "80px 24px 40px",
  maxWidth: 1400,
  margin: "0 auto",
};

const toolbarStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 12,
  flexWrap: "wrap",
};

const btnStyle: React.CSSProperties = {
  background: "var(--bg-secondary)",
  color: "var(--text-primary)",
  border: "1px solid var(--border-color)",
  borderRadius: 8,
  padding: "6px 14px",
  fontSize: 12,
  fontWeight: 600,
  cursor: "pointer",
};

const statBadge: React.CSSProperties = {
  background: "var(--bg-card)",
  borderRadius: 8,
  padding: "5px 12px",
  fontSize: 11,
  color: "var(--text-muted)",
  border: "1px solid var(--border-color)",
};

const infoBadge: React.CSSProperties = {
  background: "rgba(246,130,31,0.1)",
  borderRadius: 8,
  padding: "5px 12px",
  fontSize: 11,
  color: "var(--cf-orange)",
  border: "1px solid rgba(246,130,31,0.3)",
  marginLeft: "auto",
};

const builderWrap: React.CSSProperties = {
  display: "flex",
  height: 600,
  border: "1px solid var(--border-color)",
  borderRadius: 12,
  overflow: "hidden",
  background: "var(--bg-primary)",
};

const paletteStyle: React.CSSProperties = {
  width: 220,
  minWidth: 220,
  background: "var(--bg-secondary)",
  borderRight: "1px solid var(--border-color)",
  display: "flex",
  flexDirection: "column",
};

const paletteHeader: React.CSSProperties = {
  padding: "12px 14px",
  borderBottom: "1px solid var(--border-color)",
  color: "var(--text-primary)",
};

const paletteScroll: React.CSSProperties = {
  flex: 1,
  overflowY: "auto",
  padding: "8px 10px",
};

const groupStyle: React.CSSProperties = {
  marginBottom: 12,
};

const groupTitle: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  color: "var(--text-muted)",
  textTransform: "uppercase",
  letterSpacing: 1,
  marginBottom: 6,
  padding: "0 4px",
};

const paletteTile: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 10px",
  marginBottom: 4,
  borderRadius: 8,
  border: "1px solid",
  background: "var(--bg-card)",
  cursor: "grab",
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
};

const canvasStyle: React.CSSProperties = {
  flex: 1,
  height: "100%",
};

const detailPanel: React.CSSProperties = {
  marginTop: 12,
  background: "var(--bg-card)",
  border: "1px solid var(--border-color)",
  borderRadius: 12,
  padding: "16px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};
