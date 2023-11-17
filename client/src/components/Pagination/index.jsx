import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import model from '../../stores/model';
import filter from '../../stores/filter';
import styles from './Pagination.module.css';
import { useState } from 'react';

const Pagination = observer(() => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [pagesCountArray, setPagesCountArray] = useState([]);

    useEffect(() => {
        getCountAndSetState();
    }, [model.models]);

    const getCountAndSetState = async () => {
        await model.getModelsPageCount();
        setPagesCountArray([...Array(model.modelsPageCount).keys()]);
    };

    const clickHandler = (i) => {
        setActiveBtn(i);
        filter.changePage(i);
    };

    return (
        <div className={styles.pagination}>
            {pagesCountArray.map((el) => (
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
