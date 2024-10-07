import { getBezierPath } from "@xyflow/react";

export const initialEdges = [
    { }
];

export const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, style }) => {
    const [path] = getBezierPath({ sourceX, sourceY, targetX, targetY });
    
    return (
      <path id={id} style={style} d={path} fill="transparent" stroke="#FFCC00" strokeWidth={2} />
    );
  };