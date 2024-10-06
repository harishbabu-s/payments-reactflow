export const addNode = (label, nodes) => {
    function randomInRange(min, max){
        return Math.floor(Math.random() * (max-min +1)) + min;
    };

    return {
      id: `${nodes.length + 2}`,
      position: { x: randomInRange(500,550), y: randomInRange(150,500)},
      data: {
        label: label,
      },
      type: 'paymentPlatform',
    };
  };
  
  export const deleteNode = (nodeId, nodes, edges, setNodes, setEdges) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  };
  