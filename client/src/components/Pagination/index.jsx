import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import ModelStore from '../../stores/ModelStore';
import FilterStore from '../../stores/FilterStore';
import styles from './Pagination.module.css';

const Pagination = observer(() => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [pagesCountArray, setPagesCountArray] = useState([]);

    useEffect(() => {
        getCountAndSetState();
    }, [ModelStore.models]);

    const getCountAndSetState = async () => {
        await ModelStore.getModelsPageCount();
        setPagesCountArray([...Array(ModelStore.modelsPageCount).keys()]);
    };

    const clickHandler = (i) => {
        setActiveBtn(i);
        FilterStore.changePage(i);
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
