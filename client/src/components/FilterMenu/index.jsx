import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './FilterMenu.module.css';
import MakeStore from '../../stores/MakeStore';
import FilterStore from '../../stores/FilterStore';

import SelectWrapper from '../SelectWrapper';

const sortOptions = [
    { value: 'sortByWord=asc', label: 'A-Z' },
    { value: 'sortByWord=desc', label: 'Z-A' },
    { value: 'sortByTime=asc', label: 'Old first' },
    { value: 'sortByTime=desc', label: 'New first' },
];

const FilterMenu = observer(() => {
    useEffect(() => {
        MakeStore.getMakes();
    }, []);

    return (
        <div className={styles.filter}>
            <SelectWrapper
                onChangeAction={({ value }) => FilterStore.changeSort(value)}
                options={sortOptions}
                classNameProp={styles.filter__item}
                defaultValue={sortOptions[3]}
            />

            <SelectWrapper
                onChangeAction={(value) => FilterStore.changeMakes(value)}
                options={MakeStore.makes.map(({ abrv }) => ({ value: abrv, label: abrv }))}
                classNameProp={[styles.filter__item, styles.filter__item_big].join(' ')}
                placeholder="Select brands"
                isMulti
            />
        </div>
    );
});

export default FilterMenu;
