import React from 'react';
import Grid from '../../components/Grid';
import styles from './Models.module.css';
import { observer } from 'mobx-react-lite';
import model from '../../stores/model';
import FilterMenu from '../../components/FilterMenu';

const Models = observer(() => {
    return (
        <div className={styles.models}>
            <FilterMenu/>
            <Grid />
        </div>
    );
});

export default Models;
