import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import type { AgentNodeData } from "../data/agentNodes";

type AgentNodeType = Node<AgentNodeData & { nodeKey: string }>;

function AgentNodeComponent({ data, selected }: NodeProps<AgentNodeType>) {
  const nodeData = data as AgentNodeData & { nodeKey: string };
  const inputs = nodeData.handles?.inputs ?? 1;
  const outputs = nodeData.handles?.outputs ?? 1;

  return (
    <div
      className="agent-node"
      style={{
        borderColor: selected ? nodeData.color : "rgba(148,163,184,0.2)",
        boxShadow: selected ? `0 0 20px ${nodeData.color}40` : "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Input handles */}
      {Array.from({ length: inputs }).map((_, i) => (
        <Handle
          key={`in-${i}`}
          type="target"
          position={Position.Left}
          id={`in-${i}`}
          style={{
            top: inputs === 1 ? "50%" : `${((i + 1) / (inputs + 1)) * 100}%`,
            background: nodeData.color,
            width: 10,
            height: 10,
            border: "2px solid #0a0e1a",
          }}
        />
      ))}

      {/* Node header */}
      <div className="agent-node-header" style={{ background: `${nodeData.color}20` }}>
        <span className="agent-node-emoji">{nodeData.emoji}</span>
        <span className="agent-node-label" style={{ color: nodeData.color }}>
          {nodeData.label}
        </span>
      </div>

      {/* Node body */}
      <div className="agent-node-body">
        <span className="agent-node-desc">{nodeData.description}</span>
        <span
          className="agent-node-badge"
          style={{ background: `${nodeData.color}20`, color: nodeData.color }}
        >
          {nodeData.category}
        </span>
      </div>

      {/* Output handles */}
      {Array.from({ length: outputs }).map((_, i) => (
        <Handle
          key={`out-${i}`}
          type="source"
          position={Position.Right}
          id={`out-${i}`}
          style={{
            top: outputs === 1 ? "50%" : `${((i + 1) / (outputs + 1)) * 100}%`,
            background: nodeData.color,
            width: 10,
            height: 10,
            border: "2px solid #0a0e1a",
          }}
        />
      ))}
    </div>
  );
}

export default memo(AgentNodeComponent);
