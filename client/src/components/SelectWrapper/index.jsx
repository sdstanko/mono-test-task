import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';

const SelectWrapper = observer(({ options, field }) => {
    return (
        <>
            <Select
                onChange={({ value }) => field.onChange(value)}
                options={options}
                isSearchable={false}
                styles={{
                    option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isFocused ? '#a4c3b2' : '#f6fff8',
                        color: state.isFocused ? '#000' : '#000',
                    }),
                }}
            />
            <input className="visually-hidden" type="text" {...field.bind()} />
        </>
    );
});

export default SelectWrapper;
