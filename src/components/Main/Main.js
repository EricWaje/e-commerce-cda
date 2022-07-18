import React from 'react';
import CardContainer from './CardContainer';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <CardContainer />
        </div>
    );
};

export default Main;
