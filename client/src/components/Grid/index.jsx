import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Grid.module.css';
import modelStore from '../../stores/ModelStore';
import filterStore from '../../stores/FilterStore';
import GridItem from '../GridItem';

const Grid = observer(() => {
    useEffect(() => {
        modelStore.getModels(filterStore.params);
    }, [filterStore.params]);

    return (
        <div className={styles.grid}>
            {modelStore.models.length ? (
                modelStore.models.map((el, i) => <GridItem item={el} key={i} />)
            ) : (
                <h1>No models found...</h1>
            )}
        </div>
    );
});

export default Grid;
