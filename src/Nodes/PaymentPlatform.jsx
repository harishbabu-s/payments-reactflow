// CustomNode.jsx
import React from 'react';
import { Handle } from '@xyflow/react';
import { RxCross2 } from "react-icons/rx";


const PaymentPlatformNode = ({ data, isConnectable }) => {
    return (
        <div>
            <Handle
                type="target"
                position={data.targetPosition}
                isConnectable={isConnectable}
            />
            <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
                <span>{data.label}</span>
                <button onClick={data.onDelete} style={{ marginLeft: '10px' }}>
                    <RxCross2 />
                </button>
            </div>
        </div>
    );
};

export default PaymentPlatformNode;
