import React from 'react';
import styles from './Grid.module.css';
import { observer } from 'mobx-react-lite';
import model from '../../stores/model';
import GridItem from '../GridItem';
import { useEffect } from 'react';
import filter from '../../stores/filter';

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
