import React, { useEffect } from 'react';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';
import styles from './FilterMenu.module.css';
import make from '../../stores/make';
import filter from '../../stores/filter';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const sortOptions = [
    { value: 'sortByWord=asc', label: 'A-Z' },
    { value: 'sortByWord=desc', label: 'Z-A' },
    { value: 'sortByTime=asc', label: 'Old first' },
    { value: 'sortByTime=desc', label: 'New first' },
];

const FilterMenu = observer(() => {
    useEffect(() => {
        make.getMakes();
    }, []);

    return (
        <div className={styles.filter}>
            <Link to="/create">
                <Button>Create model</Button>
            </Link>
            <div className={styles.filter__selects}>
                <Select
                    onChange={({ value }) => filter.changeSort(value)}
                    options={sortOptions}
                    className={styles.filter__item}
                    defaultValue={sortOptions[3]}
                    isSearchable={false}
                    styles={{
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: state.isFocused ? '#a4c3b2' : '#f6fff8',
                            color: state.isFocused ? '#000' : '#000',
                        }),
                    }}
                />

                <Select
                    onChange={(value) => filter.changeMakes(value)}
                    options={make.makes.map(({ abrv }) => ({ value: abrv, label: abrv }))}
                    className={[styles.filter__item, styles.filter__item_big].join(' ')}
                    placeholder="Select brands"
                    isSearchable={false}
                    isMulti
                    styles={{
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: state.isFocused ? '#a4c3b2' : '#f6fff8',
                            color: state.isFocused ? '#000' : '#000',
                        }),
                    }}
                />
            </div>
        </div>
    );
});

export default FilterMenu;
