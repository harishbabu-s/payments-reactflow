import React, { useEffect, useState } from 'react';
import { ReactFlow, useNodesState, useEdgesState, MiniMap, addEdge, Controls } from '@xyflow/react';

import { initialNodes } from './Nodes/MainNodes';
import { initialEdges, CustomEdge } from './Edges/CustomEdges';
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

    const edgeType = {
        custom: CustomEdge,
    }

    const handleAddNode = (label) => {
        const newNode = addNode(label, nodes);
        setNodes((nds) => nds.concat(newNode));
      };

    const handleConnect = (params) => {
        if (params.source === params.target) return;

        setEdges((eds) => addEdge(params, eds))
    }

    const handleEdgeDelete = (event, edge) => {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
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
      edgeTypes={edgeType}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={handleConnect}
      onEdgeDoubleClick={handleEdgeDelete}
      defaultViewport={defaultViewport}
      minZoom={0.2}
      maxZoom={2}
      fitView
      attributionPosition="bottom-left"
    >
     <MiniMap />
     <Controls />
    </ReactFlow>
    );
};

export default OnlinePayments;