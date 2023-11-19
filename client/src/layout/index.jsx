import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import filterStore from '../stores/FilterStore';
import styles from './Container.module.css';

const Container = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname !== '/') {
            filterStore.resetParams();
        }
    }, [location]);

    return (
        <div className={styles.container}>
            <Header />
            <Outlet />
        </div>
    );
};

export default Container;
