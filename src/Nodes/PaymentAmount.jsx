// CustomNode.jsx
import React, { useState } from 'react';
import { Handle } from '@xyflow/react';

const PaymentAmountNode = ({ data, isConnectable }) => {
    const [input, setInput] = useState(0);
    const [amount, setAmount] = useState(0);

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            setAmount(input);
            setInput('');
        }
    };
    const handleChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setInput(value);
        }
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <h3 style={{ margin: 0 }}>Payment Amount</h3>
            <input
                id='amount'
                value={input}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                placeholder='Enter Amount'
            />
            <span style={{ fontSize: '24px' }}>
                ${amount}
            </span>
            <Handle
                type="source"
                position={data.sourcePosition}
                isConnectable={isConnectable}
            />
        </div>
    );
};

export default PaymentAmountNode;
