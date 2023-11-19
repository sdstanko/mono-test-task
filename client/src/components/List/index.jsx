import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import MakeStore from '../../stores/MakeStore';
import ListItem from '../ListItem';
import styles from './List.module.css';

const List = observer(() => {
    useEffect(() => {
        MakeStore.getMakes();
    }, []);

    return (
        <div className={styles.list}>
            {MakeStore.makes.map((el, i) => (
                <ListItem item={el} key={i} />
            ))}
        </div>
    );
});

export default List;
