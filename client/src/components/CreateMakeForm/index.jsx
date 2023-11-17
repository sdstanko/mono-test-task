import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './CreateMakeForm.module.css';
import Button from '../UI/Button';
import FormInput from '../FormInput';
import { form } from '../../utils/makeFormObjects';

const CreateModelForm = observer(() => {
    return (
        <form className={styles.form}>
            <FormInput field={form.$('name')} />
            <FormInput field={form.$('abrv')} />

            <Button type="submit" onClickAction={form.onSubmit}>
                Create make
            </Button>
        </form>
    );
});

export default CreateModelForm;
