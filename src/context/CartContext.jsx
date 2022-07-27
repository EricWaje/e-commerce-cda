import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    //console.log(props.children);

    const addToCart = (item, cantidad) => {
        // console.log(item);
        // console.log(cantidad);
        //...item => name: 'prodicto 1', stock: 30, price: 200
        //console.log({ ...item, cantidad });
        if (isInCart(item.id)) {
            //sumar la cantidad
            alert('Ya está en el carrito, sumale la cantidad chabon');
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, deleteOne }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
