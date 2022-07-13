import React, { useState } from 'react';

const Counter = () => {
    //const estado = useState();
    //console.log(estado);
    const [count, setCount] = useState(0);
    const [texto, setTexto] = useState('Inicial');
    const [data, setData] = useState({ name: 'Eric' });
    const [lista, setLista] = useState([
        { name: 'Eric', id: 1 },
        { name: 'Juan', id: 2 },
        { name: 'Fer', id: 3 },
    ]);

    const aumentar = () => {
        //console.log('click');
        setCount(count + 1);
        //  x = 1;
    };

    const cambiarTexto = () => {
        setTexto('otro');
    };

    return (
        <div style={{ padding: '30px', margin: '20px' }}>
            <h1 onClick={aumentar}>{count}</h1>
            <button onClick={cambiarTexto}>Cambiar texto</button>
            <h2>Texto: {texto}</h2>
            <h2>Texto: {data.name}</h2>
            {lista.map((elemento) => (
                <p key={elemento.id}>{elemento.name}</p>
            ))}
            {/* {lista.map((elemento) => (
                <OtroComponente elemento={elemento}/>
            ))} */}
        </div>
    );
};

export default Counter;
