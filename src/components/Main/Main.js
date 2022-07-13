import React, { useEffect, useState } from 'react';
import Boton from '../ui/Boton';
import Layout from '../ui/Layout';
import styles from './Main.module.css';

const Main = ({ saludo }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('me meustro una sola vez');
        //trer info de una API externa
    }, []);

    useEffect(() => {
        console.log('me meustro cada vez que cambia la dependencia');
        //trer info de una API externa
    }, [count]);

    console.log('Me muestro en cada render');

    return (
        <div className={styles.main}>
            <h2 onClick={() => setCount(count + 1)}>Main</h2>
            <Layout>
                <p>{saludo}</p>
                <h2>Otro children</h2>
                <Boton variant="primary" texto="Soy el boton del main" />
                <Boton variant="secondary" texto="Soy otro boton del main" />
            </Layout>
        </div>
    );
};

export default Main;
