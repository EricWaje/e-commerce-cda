import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../../context/FavContext';
import s from './Card.module.css';
import { isIn } from '../../utils/utils';
import { motion } from 'framer-motion';

const Card = ({ prod }) => {
    const { addToFav, fav } = useContext(FavContext);

    const isInFav = isIn(fav, prod.id);

    return (
        <motion.div
            viewport={{ once: false }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            initial={{ x: -100 }}
            animate={{ x: -50, opacity: 0 }}
            className={s.card}
        >
            <img src={prod.img} alt={prod.name} />
            <div className={s.info}>
                <h3>{prod.name}</h3>
                <h4>$ {prod.price}</h4>
                <Link className={s.detalle} to={`/detail/${prod.id}`}>
                    Ver Detalle
                </Link>
                <button
                    className={isInFav ? s.favButton : s.favButtonQuit}
                    onClick={() => addToFav(prod)}
                >
                    {isInFav ? 'Quitar de fav' : 'Agregar a fav'}
                </button>
            </div>
        </motion.div>
    );
};

export default Card;
