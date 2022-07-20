import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardContainer from './CardContainer';
import Cart from './Cart/Cart';
import DetailContainer from './DetailContainer';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<CardContainer />} />
                <Route
                    path="/category/:categoryId"
                    element={<CardContainer />}
                />
                <Route path="/detail/:id" element={<DetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default Main;
