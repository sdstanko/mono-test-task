import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';

const SelectWrapper = observer(
    ({ options, field, onChangeAction, defaultValue, placeholder, isMulti, classNameProp }) => {
        return (
            <>
                <Select
                    onChange={onChangeAction}
                    {...field?.bind()}
                    options={options}
                    isSearchable={false}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    isMulti={isMulti}
                    className={classNameProp}
                    styles={{
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: state.isFocused ? '#a4c3b2' : '#f6fff8',
                            color: state.isFocused ? '#000' : '#000',
                        }),
                    }}
                />
                <input className="visually-hidden" type="text" />
            </>
        );
    },
);

export default SelectWrapper;
