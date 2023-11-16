import React from 'react';
import Grid from '../../components/Grid';
import styles from './Models.module.css';
import { observer } from 'mobx-react-lite';
import FilterMenu from '../../components/FilterMenu';
import Pagination from '../../components/Pagination';

const Models = observer(() => {
    return (
        <div className={styles.models}>
            <FilterMenu/>
            <Grid />
            <Pagination/>
        </div>
    );
});

export default Models;
