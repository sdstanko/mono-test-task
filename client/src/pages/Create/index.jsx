import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CreateModelForm from '../../components/CreateModelForm';
import CreateMakeForm from '../../components/CreateMakeForm';
import styles from './Create.module.css';

const Create = () => {
    const params = useParams();
    const location = useLocation();
    const locationArr = location.pathname.split('/');

    return (
        <div className={styles.create}>
            {locationArr.includes('models') ? (
                <CreateModelForm id={params?.id} />
            ) : locationArr.includes('makes') ? (
                <CreateMakeForm />
            ) : null}
        </div>
    );
};

export default Create;
