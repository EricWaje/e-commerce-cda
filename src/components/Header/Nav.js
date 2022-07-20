import React from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
//NavLink

const Nav = ({ isInHedaer, prueba }) => {
    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <Link to="/">
                <h2>CDA</h2>
            </Link>

            <ul>
                {/* <NavLink
                    to={isInHedaer ? '/remeras' : 'https://www.instagram.com/'}
                    onClick={prueba}
                >
                    {isInHedaer ? 'Remeras' : 'Instagram'}
                </NavLink> */}
                {/* <a href="/camisas">{isInHedaer ? 'Camisas' : 'Facebok'}</a> */}
                <Link to="/category/remeras">
                    {isInHedaer ? 'Remeras' : 'Instagram'}
                </Link>
                <Link to="/category/camisas">
                    {isInHedaer ? 'Camisas' : 'Facebok'}
                </Link>
                <Link to="/category/gorras">
                    {isInHedaer ? 'Gorras' : 'Linkedin'}
                </Link>
            </ul>
            <Link to="/cart">
                <img src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
            </Link>
        </nav>
    );
};

export default Nav;
