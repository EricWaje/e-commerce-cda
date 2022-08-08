import React from 'react';
import { useParams } from 'react-router-dom';

import Lottie from 'lottie-react';
import CartLottie from '../../assets/cart.json';

const options = {
    animationData: CartLottie,
    loop: true,
    style: {
        width: '10%',
    },
};

const Checkout = () => {
    const { idCompra } = useParams();

    return (
        <div>
            Gracias por tu compra, este es tu código para que puedas seguir el
            envío: {idCompra}
            <Lottie {...options} />
        </div>
    );
};

export default Checkout;
