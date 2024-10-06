// CustomNode.jsx
import React, { useState } from 'react';

const PaymentAmountNode = () => {
    const [input, setInput] = useState(0);
    const [amount, setAmount] = useState(0);

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            setAmount(input);
            setInput('');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <h3 style={{ margin: 0 }}>Payment Amount</h3>
            <input
                id='amount'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder='Enter Amount'
            />
            <span style={{ fontSize: '24px' }}>{amount}</span>
        </div>
    );
};

export default PaymentAmountNode;
