import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Container.module.css';

const Container = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Container;
