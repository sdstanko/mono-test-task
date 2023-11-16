import React from 'react';
import Button from '../UI/Button';
import styles from './ListItem.module.css';

const ListItem = () => {
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
                    <span className={styles.title}>BMW</span>
                    <span className={styles.subtitle}>5 series</span>
                </div>
                <Button>Edit</Button>
            </div>
        </div>
    );
};

export default ListItem;
