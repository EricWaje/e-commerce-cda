import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import style from './CardDetail.module.css';

const DetailContainer = () => {
    const [item, setItem] = useState({});
    //const prueba = useParams();
    //console.log(prueba.id);
    const { id } = useParams();

    const URL = 'https://fake-products-eric.herokuapp.com/api/products/detail';

    useEffect(() => {
        fetch(`${URL}/${id}`)
            .then((res) => res.json())
            .then((res) => setItem(res));
    }, [id]);

    //console.log(item);
    return (
        <div className={style.detailContainer}>
            <CardDetail item={item} />
        </div>
    );
};

export default DetailContainer;
