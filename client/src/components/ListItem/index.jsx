import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ item }) => {
    return (
        <div className={styles.item}>
            <span>{item.name}</span>
            {item.name !== item.abrv && <span>{` (${item.abrv})`}</span>}
        </div>
    );
};

export default ListItem;
