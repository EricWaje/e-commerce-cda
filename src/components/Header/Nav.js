import React from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        name: 'Remeras',
        path: '/category/remeras',
    },
    {
        id: 2,
        name: 'Camisas',
        path: '/category/remeras',
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
            <Link to="/cart">
                <img src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
            </Link>
        </nav>
    );
};

export default Nav;
