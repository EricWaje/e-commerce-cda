import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';

const CardContainer = () => {
    //guardo los productos en mi estado
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    //logica de traerme los productos
    const { categoryId } = useParams();
    //console.log(categoryId);

    useEffect(() => {
        setLoading(true);
        if (categoryId) {
            fetch(
                `https://fake-products-eric.herokuapp.com/api/products/category/${categoryId}`
            )
                .then((res) => res.json())
                .then((res) => {
                    setItems(res);
                    setLoading(false);
                });
        } else {
            fetch('https://fake-products-eric.herokuapp.com/api/products')
                .then((res) => res.json())
                .then((res) => {
                    setItems(res);
                    setLoading(false);
                });
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
            {loading ? <h1>Cargando...</h1> : <CardList items={items} />}
        </div>
    );
};

export default CardContainer;
