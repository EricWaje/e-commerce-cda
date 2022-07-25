import React, { useState } from 'react';
import styles from './Counter.module.css';
//import { useNavigate } from 'react-router-dom';

const Counter = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    //const navigate = useNavigate();

    const aumentar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        initial < count && setCount(count - 1);
    };

    /* const reset = () => {
        setCount(initial);
        navigate('/cart');
    }; */

    const agregar = () => {
        onAdd(count);
    };

    return (
        <div className={styles.counter}>
            <div className={styles.addSub}>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={aumentar}>+</button>
            </div>

            <div>
                <button className={styles.add} onClick={agregar}>
                    Add
                </button>
                {/* <button onClick={reset}>Reset</button> */}
            </div>
        </div>
    );
};

export default Counter;
