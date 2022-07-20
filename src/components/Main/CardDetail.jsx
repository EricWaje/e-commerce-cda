import React from 'react';
import style from './CardDetail.module.css';
import Counter from '../Counter/Counter';

const CardDetail = ({ item }) => {
    const onAdd = () => {
        console.log('Paso de función por prop');
    };
    return (
        <div className={style.detail}>
            <img src={item.img} alt={item.name} />
            <div className={style.info}>
                <h2>{item.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nulla voluptas consequuntur aut quia fugit cumque
                    aperiam, corporis voluptate repudiandae ducimus qui, beatae
                    architecto culpa dolore nemo illum, enim iste?
                </p>
                <h4>#{item.categoria}</h4>
                <h3>$ {item.price}.-</h3>
                <Counter stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default CardDetail;
