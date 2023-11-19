import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './FilterMenu.module.css';
import makeStore from '../../stores/MakeStore';
import filterStore from '../../stores/FilterStore';

import SelectWrapper from '../SelectWrapper';

const sortOptions = [
    { value: 'sortByWord=asc', label: 'A-Z' },
    { value: 'sortByWord=desc', label: 'Z-A' },
    { value: 'sortByTime=asc', label: 'Old first' },
    { value: 'sortByTime=desc', label: 'New first' },
];

const FilterMenu = observer(() => {
    useEffect(() => {
        makeStore.getMakes();
    }, []);

    return (
        <div className={styles.filter}>
            <SelectWrapper
                onChangeAction={({ value }) => filterStore.changeSort(value)}
                options={sortOptions}
                classNameProp={styles.filter__item}
                defaultValue={sortOptions[3]}
            />

            <SelectWrapper
                onChangeAction={(value) => filterStore.changeMakes(value)}
                options={makeStore.makes.map(({ abrv }) => ({ value: abrv, label: abrv }))}
                classNameProp={[styles.filter__item, styles.filter__item_big].join(' ')}
                placeholder="Select brands"
                isMulti
            />
        </div>
    );
});

export default FilterMenu;
