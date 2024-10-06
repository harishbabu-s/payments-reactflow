// CustomNode.jsx
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";


const PaymentPlatformNode = ({ data, onDelete }) => {
    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <span>{data.label}</span>
            <button onClick={data.onDelete} style={{ marginLeft: '10px' }}>
                <RxCross2 />
            </button>
        </div>
    );
};

export default PaymentPlatformNode;
