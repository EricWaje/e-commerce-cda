import React, { useState } from 'react';

const Counter = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const aumentar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        initial < count && setCount(count - 1);
    };

    return (
        <div style={{ padding: '30px', margin: '20px' }}>
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={aumentar}>+</button>
            <div>
                <button onClick={onAdd}>Add</button>
            </div>
        </div>
    );
};

export default Counter;
