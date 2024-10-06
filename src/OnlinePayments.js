import React, { useEffect, useState } from 'react';
import { ReactFlow, useNodesState, useEdgesState, MiniMap } from '@xyflow/react';

import { initialNodes } from './Nodes/MainNodes';
import { initialEdges } from './Edges/CustomEdges';
import {addNode, deleteNode} from './AddAndDeleteNode'
import PaymentOptionNode  from './Nodes/PaymentsNode';
import PaymentAmountNode from './Nodes/PaymentAmount';
import PaymentPlatformNode from './Nodes/PaymentPlatform';

import '@xyflow/react/dist/style.css';

const OnlinePayments = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

    const nodeType = {
        paymentOption : PaymentOptionNode,
        paymentAmount : PaymentAmountNode,
        paymentPlatform : PaymentPlatformNode
    }

    const handleAddNode = (label) => {
        const newNode = addNode(label, nodes);
        setNodes((nds) => nds.concat(newNode));
      };
    
      const mappedNodes = nodes.map((node) => {
        if (node.type === 'paymentPlatform') {
          return {
            ...node,
            data: {
              ...node.data,
              onDelete: () => deleteNode(node.id, nodes, edges, setNodes, setEdges),
            },
          };
        }
        return {
          ...node,
          data: {
            ...node.data,
            onSelect: (value) => handleAddNode(value),
          },
        };            
      });

    return (
        <ReactFlow
      nodes={mappedNodes}
      edges={edges}
      nodeTypes={nodeType}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultViewport={defaultViewport}
      minZoom={0.2}
      maxZoom={2}
      fitView
      attributionPosition="bottom-left"
    >
     <MiniMap />
    </ReactFlow>
    );
};

export default OnlinePayments;