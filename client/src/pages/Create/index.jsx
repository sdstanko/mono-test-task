import React from 'react';
import { useParams } from 'react-router-dom';
import CreateForm from '../../components/CreateForm';
import { form } from '../../components/CreateForm/formObjects';
import styles from './Create.module.css';

const Create = () => {
    const params = useParams()

    return (
        <div className={styles.create}>
            <CreateForm form={form} id={params?.id}/>
        </div>
    );
};

export default Create;
