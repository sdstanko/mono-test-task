import React from 'react';
import { useNavigate } from 'react-router-dom';
import modelStore from '../../stores/ModelStore';
import Button from '../UI/Button';
import styles from './GridItem.module.css';

const GridItem = ({ item }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.item}>
            <div className={styles.photo}>
                <img
                    className={styles.picture}
                    src={
                        item.picture
                            ? item.picture
                            : 'https://t4.ftcdn.net/jpg/00/89/55/15/360_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg'
                    }
                    alt=""
                />
            </div>
            <div className={styles.item__body}>
                <div className={styles.item__text}>
                    <span className={styles.title}>{item.abrv}</span>
                    {item.name && <span className={styles.subtitle}>{item.name}</span>}
                </div>
                <div className={styles.item__buttons}>
                    <Button onClickAction={() => navigate(`/create/models/${item._id}`)}>
                        Edit
                    </Button>
                    <Button onClickAction={() => modelStore.deleteModel(item._id)} action="delete">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GridItem;
