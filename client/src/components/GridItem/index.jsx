import React from 'react';
import Button from '../UI/Button';
import styles from './GridItem.module.css';

const GridItem = ({ item }) => {
    return (
        <div className={styles.item}>
            <div className={styles.photo}>
                <img
                    className={styles.picture}
                    src="https://www.motortrend.com/uploads/2023/05/2024-bmw-5-series-17.jpeg?fit=around%7C875:492"
                    alt=""
                />
            </div>
            <div className={styles.item__body}>
                <div className={styles.item__text}>
                    <span className={styles.title}>{item.abrv}</span>
                    {item.name && <span className={styles.subtitle}>{item.name}</span>}
                </div>
                <Button>Edit</Button>
            </div>
        </div>
    );
};

export default GridItem;
