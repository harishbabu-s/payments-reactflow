// CustomNode.jsx
import React from 'react';


const PaymentOptionNode = ({ data }) => {

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <h3>{data.label}</h3>
            <select onChange={(event) => {
                data.onSelect(event.target.value);
            }}
                value={data.selectedValue}
            >
                {data.options.map((option, index) => (
                    <option key={index} value={option.value} >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PaymentOptionNode;
