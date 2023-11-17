import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, type, onClickAction, action }) => {
    return (
        <button
            type={type}
            className={
                action === 'delete' ? [styles.button, styles.delete].join(' ') : styles.button
            }
            onClick={onClickAction}
        >
            {children}
        </button>
    );
};

export default Button;
