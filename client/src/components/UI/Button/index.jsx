import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, onClickAction }) => {

    return (
        <button type={type} className={styles.button} onClick={onClickAction}>
            {children}
        </button>
    );
};

export default Button;
