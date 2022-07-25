import React from 'react';
import style from './CardDetail.module.css';
import Counter from '../Counter/Counter';
import { useNavigate } from 'react-router-dom';

const CardDetail = ({ item }) => {
    //const [numero, setNumero] = useState(0);

    const navigate = useNavigate();
    const onAdd = (cantidad) => {
        console.log(cantidad);
        navigate('/cart');
    };

    /*     if (numero === 0) {
        return <h2>Si se cumple, no muestro el return de abajo</h2>;
    } */

    return (
        <div className={style.detail}>
            <img src={item.img} alt={item.name} />
            <div className={style.info}>
                {/* {
                    numero === 0
                    ? <h2>Esto</h2>
                    : <h2>Lo otro</h2>
                }
                <h2>{numero === 0 ? 'Esto' : 'Lo otro'}</h2> */}
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

/* const foo = (a,b) =>{

}

foo(1,2) 
*/
