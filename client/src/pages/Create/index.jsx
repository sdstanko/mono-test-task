import React from 'react';
import CreateForm from '../../components/CreateForm';
import { form } from '../../components/CreateForm/formObjects';
import styles from './Create.module.css';

const Create = () => {
    return (
        <div className={styles.create}>
            <CreateForm form={form} />
        </div>
    );
};

export default Create;
