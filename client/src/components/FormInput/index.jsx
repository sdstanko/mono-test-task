import React from 'react';
import styles from './FormInput.module.css';
import { observer } from 'mobx-react-lite';

const FormInput = observer(({ field }) => {
    return (
        <div>
            <label htmlFor={field.id}>{field.label}</label>
            <input className={styles.input} {...field.bind()} />
            <p className={styles.error}>{field.error}</p>
        </div>
    );
});

export default FormInput;
