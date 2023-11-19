import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Grid.module.css';
import ModelStore from '../../stores/ModelStore';
import FilterStore from '../../stores/FilterStore';
import GridItem from '../GridItem';

const Grid = observer(() => {
    useEffect(() => {
        ModelStore.getModels(FilterStore.params);
    }, [FilterStore.params]);

    return (
        <div className={styles.grid}>
            {ModelStore.models.length ? (
                ModelStore.models.map((el, i) => <GridItem item={el} key={i} />)
            ) : (
                <h1>No models found...</h1>
            )}
        </div>
    );
});

export default Grid;
