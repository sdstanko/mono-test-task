import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import model from '../../stores/model';
import styles from './Pagination.module.css';
import { useState } from 'react';
import filter from '../../stores/filter';

const Pagination = observer(() => {
    useEffect(() => {
        if (!model.modelsPageCount) {
            model.getModelsPageCount();
        }
    }, []);

    const arrayToMapButtons = [...Array(model.modelsPageCount).keys()];

    const [activeBtn, setActiveBtn] = useState(0);

    const clickHandler = (i) => {
        setActiveBtn(i);
        filter.changePage(i);
    };

    return (
        <div className={styles.pagination}>
            {arrayToMapButtons.map((el) => (
                <button
                    onClick={() => clickHandler(el)}
                    className={
                        el === activeBtn ? [styles.button, styles.active].join(' ') : styles.button
                    }
                    key={el}
                >
                    {el + 1}
                </button>
            ))}
        </div>
    );
});

export default Pagination;
