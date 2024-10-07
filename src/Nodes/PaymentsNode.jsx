// CustomNode.jsx
import React from 'react';


const PaymentOptionNode = ({ data }) => {

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
            <h3 style={{ marginTop: 10, marginBottom: 5 }}>{data.label}</h3>
            <select onChange={(event) => {
                data.onSelect(event.target.value);
            }}
                value={data.selectedValue}
                style={{ minWidth: '155px', minHeight: '30px' }}
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
