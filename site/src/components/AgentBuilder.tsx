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
  workflowTemplates,
} from "../data/agentNodes";
import type { AgentNodeData } from "../data/agentNodes";

const nodeTypes = { agentNode: AgentNodeComponent };

let nodeId = 100;
function getNextId() {
  return `node-${nodeId++}`;
}

function AgentBuilderInner() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(workflowTemplates[0].nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(workflowTemplates[0].edges);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(true);
  const [selectedNode, setSelectedNode] = useState<(AgentNodeData & { nodeKey: string }) | null>(null);
  const [activeTemplate, setActiveTemplate] = useState(workflowTemplates[0].id);
  const [templateMenuOpen, setTemplateMenuOpen] = useState(false);

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
      const d = node.data as AgentNodeData & { nodeKey: string };
      setSelectedNode(d);
    },
    []
  );

  const onPaneClick = useCallback(() => setSelectedNode(null), []);

  const handleClear = useCallback(() => {
    setNodes([]);
    setEdges([]);
    setSelectedNode(null);
    setActiveTemplate("");
  }, [setNodes, setEdges]);

  const handleLoadTemplate = useCallback(
    (templateId: string) => {
      const tmpl = workflowTemplates.find((t) => t.id === templateId);
      if (!tmpl) return;
      setNodes(tmpl.nodes);
      setEdges(tmpl.edges);
      setActiveTemplate(tmpl.id);
      setSelectedNode(null);
      setTemplateMenuOpen(false);
      setTimeout(() => rfInstance?.fitView({ padding: 0.15 }), 100);
    },
    [setNodes, setEdges, rfInstance]
  );

  const handleExport = useCallback(() => {
    const workflow = {
      name: "Custom Omega Workflow",
      exported: new Date().toISOString(),
      nodes: nodes.map((n) => ({
        id: n.id,
        type: (n.data as Record<string, unknown>).nodeKey,
        position: n.position,
        label: (n.data as Record<string, unknown>).label,
      })),
      edges: edges.map((e) => ({
        source: e.source,
        target: e.target,
        sourceHandle: e.sourceHandle,
        targetHandle: e.targetHandle,
      })),
    };
    const blob = new Blob([JSON.stringify(workflow, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "omega-workflow.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [nodes, edges]);

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
      <h2 className="section-title">🚀 Omega Agent Workflow Builder</h2>
      <p className="section-subtitle">
        Drag nodes from the palette and connect them — n8n-style visual builder
        for Cloudflare agent architectures. 14 categories, {Object.keys(nodeTemplates).length} node types, {workflowTemplates.length} pre-built workflows.
      </p>

      {/* ── Toolbar ── */}
      <div style={toolbarStyle}>
        <button style={btnStyle} onClick={() => setPaletteOpen((p) => !p)}>
          {paletteOpen ? "◀ Hide" : "▶ Palette"}
        </button>

        {/* Template selector */}
        <div style={{ position: "relative" }}>
          <button
            style={{ ...btnStyle, background: activeTemplate ? "rgba(99,102,241,0.15)" : "var(--bg-secondary)" }}
            onClick={() => setTemplateMenuOpen((p) => !p)}
          >
            📋 Templates ▾
          </button>
          {templateMenuOpen && (
            <div style={templateDropdown}>
              {workflowTemplates.map((tmpl) => (
                <button
                  key={tmpl.id}
                  style={{
                    ...templateItem,
                    background: tmpl.id === activeTemplate ? "rgba(99,102,241,0.15)" : "transparent",
                  }}
                  onClick={() => handleLoadTemplate(tmpl.id)}
                >
                  <span>{tmpl.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-primary)" }}>{tmpl.name}</div>
                    <div style={{ fontSize: 10, color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {tmpl.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button style={btnStyle} onClick={handleExport} title="Export workflow as JSON">
          📥 Export
        </button>
        <button style={{ ...btnStyle, color: "#ef4444" }} onClick={handleClear}>
          ✕ Clear
        </button>
        <span style={statBadge}>
          {nodeCount} nodes · {edgeCount} edges
        </span>
        {selectedNode && (
          <span style={{ ...infoBadge, borderColor: `${selectedNode.color}40`, color: selectedNode.color, background: `${selectedNode.color}10` }}>
            {selectedNode.emoji} {selectedNode.label}
          </span>
        )}
      </div>

      {/* ── Main area ── */}
      <div style={builderWrap}>
        {/* ── Palette Sidebar ── */}
        {paletteOpen && (
          <aside style={paletteStyle}>
            <div style={paletteHeader}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>
                📦 Node Palette
              </span>
              <span style={{ fontSize: 10, color: "var(--text-muted)" }}>
                {Object.keys(nodeTemplates).length} nodes
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

      {/* ── Detail panel ── */}
      {selectedNode && (
        <div style={{ ...detailPanel, borderColor: `${selectedNode.color}30` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 28 }}>{selectedNode.emoji}</span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: selectedNode.color }}>
                {selectedNode.label}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                {selectedNode.description}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            <span style={{ ...detailBadge, background: `${selectedNode.color}20`, color: selectedNode.color }}>
              {selectedNode.category}
            </span>
            {selectedNode.source && (
              <span style={{ ...detailBadge, background: "rgba(148,163,184,0.1)", color: "var(--text-secondary)" }}>
                📦 {selectedNode.source}
              </span>
            )}
            <span style={{ ...detailBadge, background: "rgba(148,163,184,0.1)", color: "var(--text-muted)" }}>
              {selectedNode.handles?.inputs ?? 1} in · {selectedNode.handles?.outputs ?? 1} out
            </span>
          </div>
          {selectedNode.details && (
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6, padding: "8px 0", borderTop: "1px solid var(--border-color)" }}>
              {selectedNode.details}
            </div>
          )}
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
  borderRadius: 8,
  padding: "5px 12px",
  fontSize: 11,
  border: "1px solid",
  marginLeft: "auto",
  fontWeight: 600,
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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
};

const detailBadge: React.CSSProperties = {
  display: "inline-block",
  fontSize: 10,
  fontWeight: 600,
  padding: "3px 10px",
  borderRadius: 9999,
  textTransform: "uppercase",
  letterSpacing: 0.5,
};

const templateDropdown: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: 4,
  width: 320,
  background: "var(--bg-secondary)",
  border: "1px solid var(--border-color)",
  borderRadius: 10,
  padding: 6,
  zIndex: 50,
  boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
};

const templateItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",
  padding: "10px 12px",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  textAlign: "left",
  fontSize: 13,
  color: "var(--text-primary)",
  transition: "background 0.15s ease",
};
