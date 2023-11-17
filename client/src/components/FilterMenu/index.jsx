import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './FilterMenu.module.css';
import make from '../../stores/make';
import filter from '../../stores/filter';

import SelectWrapper from '../SelectWrapper';

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
            <SelectWrapper
                onChangeAction={({ value }) => filter.changeSort(value)}
                options={sortOptions}
                classNameProp={styles.filter__item}
                defaultValue={sortOptions[3]}
            />

            <SelectWrapper
                onChangeAction={(value) => filter.changeMakes(value)}
                options={make.makes.map(({ abrv }) => ({ value: abrv, label: abrv }))}
                classNameProp={[styles.filter__item, styles.filter__item_big].join(' ')}
                placeholder="Select brands"
                isMulti
            />
        </div>
    );
});

export default FilterMenu;
