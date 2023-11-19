import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import modelStore from '../../stores/ModelStore';
import filterStore from '../../stores/FilterStore';
import styles from './Pagination.module.css';

const Pagination = observer(() => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [pagesCountArray, setPagesCountArray] = useState([]);

    useEffect(() => {
        getCountAndSetState();
    }, [modelStore.models]);

    const getCountAndSetState = async () => {
        await modelStore.getModelsPageCount();
        setPagesCountArray([...Array(modelStore.modelsPageCount).keys()]);
    };

    const clickHandler = (i) => {
        setActiveBtn(i);
        filterStore.changePage(i);
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
