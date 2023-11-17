import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import make from '../../stores/make';
import ListItem from '../ListItem';
import styles from './List.module.css';

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
