import React, { useEffect } from 'react';
import ListItem from '../ListItem';
import styles from './List.module.css';
import { observer } from 'mobx-react-lite';
import make from '../../stores/make';

const List = observer(() => {
    useEffect(() => {
        make.getMakes();
    }, []);

    return (
        <div className={styles.list}>
            {make.makes.map((el, i) => (
                <ListItem item={el} key={i} />
            ))}
        </div>
    );
});

export default List;
