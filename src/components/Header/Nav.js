import React from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';
//import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = ({ isInHedaer, prueba }) => {
    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <h2>CDA</h2>
            <ul>
                <li onClick={prueba}>{isInHedaer ? 'Remeras' : 'Instagram'}</li>
                <li>{isInHedaer ? 'Camisas' : 'Facebok'}</li>
                <li>{isInHedaer ? 'Gorras' : 'Linkedin'}</li>
            </ul>
            {/* {isInHedaer ? <img src="logo192.png" /> : <img src={carrito} />} */}
            <img src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
            {/* <img src='adress desde la web' alt="logo" /> */}
            {/* <AiOutlineShoppingCart size={30} color="red" /> */}
        </nav>
    );
};

export default Nav;
