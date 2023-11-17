import React from 'react';
import Button from '../UI/Button';
import styles from './GridItem.module.css';
import { useNavigate } from 'react-router-dom';

const GridItem = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.item}>
            <div className={styles.photo}>
                <img
                    className={styles.picture}
                    src={
                        item.picture ??
                        'https://t4.ftcdn.net/jpg/00/89/55/15/360_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg'
                    }
                    alt=""
                />
            </div>
            <div className={styles.item__body}>
                <div className={styles.item__text}>
                    <span className={styles.title}>{item.abrv}</span>
                    {item.name && <span className={styles.subtitle}>{item.name}</span>}
                </div>
                <Button onClickAction={() => navigate(`/create/${item._id}`)}>
                    Edit
                </Button>
            </div>
        </div>
    );
};

export default GridItem;
