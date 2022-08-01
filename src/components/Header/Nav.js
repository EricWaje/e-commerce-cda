import React, { useContext } from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const categories = [
    {
        id: 1,
        name: 'Remeras',
        path: '/category/remeras',
    },
    {
        id: 2,
        name: 'Camisas',
        path: '/category/camisas',
    },
    {
        id: 3,
        name: 'Gorras',
        path: '/category/gorras',
    },
    {
        id: 4,
        name: 'Billeteras',
        path: '/category/billeteras',
    },
    {
        id: 5,
        name: 'Riñoneras',
        path: '/category/rinoneras',
    },
];

const Nav = ({ isInHedaer, prueba }) => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <Link className={s.logo} to="/">
                <h2>CDA</h2>
            </Link>

            <ul>
                {categories.map((categorie) => (
                    <Link
                        key={categorie.id}
                        className={isInHedaer ? s.linkNav : s.linkFooter}
                        to={categorie.path}
                    >
                        {categorie.name}
                    </Link>
                ))}
            </ul>
            <div className={s.favCart}>
                <Link className={s.fav} to="/favorites">
                    Favorites
                </Link>
                <Link className={s.cart} to="/cart">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <img
                            src={isInHedaer ? carrito : 'logo192.png'}
                            alt="logo"
                            className={s.logoCart}
                        />

                        <span>
                            {totalUnidades === 0 ? null : totalUnidades}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
