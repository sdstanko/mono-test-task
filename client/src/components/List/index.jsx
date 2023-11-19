import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import makeStore from '../../stores/MakeStore';
import ListItem from '../ListItem';
import styles from './List.module.css';

const List = observer(() => {
    useEffect(() => {
        makeStore.getMakes();
    }, []);

    return (
        <div className={styles.list}>
            {makeStore.makes.map((el, i) => (
                <ListItem item={el} key={i} />
            ))}
        </div>
    );
});

export default List;
