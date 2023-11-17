import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Grid.module.css';
import model from '../../stores/model';
import filter from '../../stores/filter';
import GridItem from '../GridItem';

const Grid = observer(() => {

    useEffect(() => {
        model.getModels(filter.params);
    }, [filter.params])

    return (
        <div className={styles.grid}>
            {model.models.map((el, i) => (
                <GridItem item={el} key={i}/>
            ))}
        </div>
    );
});

export default Grid;
