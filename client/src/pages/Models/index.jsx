import React from 'react';
import Grid from '../../components/Grid';
import styles from './Models.module.css';
import { observer } from 'mobx-react-lite';
import FilterMenu from '../../components/FilterMenu';
import Pagination from '../../components/Pagination';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const Models = observer(() => {
    return (
        <div className={styles.models}>
            <div className={styles.models__top}>
                <Link to="/create/models">
                    <Button>Create model</Button>
                </Link>
                <FilterMenu />
            </div>
            <Grid />
            <Pagination />
        </div>
    );
});

export default Models;
