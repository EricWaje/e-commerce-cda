import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../../context/FavContext';
import s from './Card.module.css';
import { isIn } from '../../utils/utils';

const Card = ({ prod }) => {
    const { addToFav, fav } = useContext(FavContext);

    const isInFav = isIn(fav, prod.id);

    return (
        <div className={s.card}>
            <img src={prod.img} alt={prod.name} />
            <div className={s.info}>
                <h3>{prod.name}</h3>
                <h4>$ {prod.price}</h4>
                <Link className={s.detalle} to={`/detail/${prod.id}`}>
                    Ver Detalle
                </Link>
                <button onClick={() => addToFav(prod)}>
                    {isInFav ? 'Ya está en fav' : 'Agregar a fav'}
                </button>
            </div>
        </div>
    );
};

export default Card;
