import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';

const CardContainer = () => {
    //guardo los productos en mi estado
    const [items, setItems] = useState([]);
    //logica de traerme los productos
    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
        if (categoryId) {
            fetch(
                `https://fake-products-eric.herokuapp.com/api/products/category/${categoryId}`
            )
                .then((res) => res.json())
                .then((res) => setItems(res));
        } else {
            fetch('https://fake-products-eric.herokuapp.com/api/products')
                .then((res) => res.json())
                .then((res) => setItems(res));
        }
    }, [categoryId]);

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
