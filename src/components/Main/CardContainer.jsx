import React, { useEffect, useState } from 'react';
import CardList from './CardList';

const CardContainer = () => {
    //guardo los productos en mi estado
    const [items, setItems] = useState([]);
    //logica de traerme los productos

    useEffect(() => {
        fetch('https://fake-products-eric.herokuapp.com/api/products')
            .then((res) => res.json())
            .then((res) => setItems(res));
    }, []);

    //console.log(items);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>Artículos</h2>
            <CardList items={items} />
        </div>
    );
};

export default CardContainer;
