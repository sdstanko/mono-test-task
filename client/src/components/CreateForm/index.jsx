import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import make from '../../stores/make';
import SelectWrapper from '../SelectWrapper';
import styles from './CreateForm.module.css';
import Button from '../UI/Button';

const CreateForm = observer(({ form }) => {
    useEffect(() => {
        make.getMakes();
    }, []);

    return (
        <form className={styles.form}>
            <div>
                <label htmlFor={form.$('name').id}>{form.$('name').label}</label>
                <input className={styles.input} {...form.$('name').bind()} />
                <p className={styles.error}>{form.$('name').error}</p>
            </div>

            <div>
                <label htmlFor={form.$('make').id}>{form.$('make').label}</label>
                <SelectWrapper
                    field={form.$('make')}
                    options={make.makes.map(({ abrv }) => ({ value: abrv, label: abrv }))}
                    className={styles.select}
                />
                <p className={styles.error}>{form.$('make').error}</p>
            </div>

            <div>
                <label htmlFor={form.$('picture').id}>{form.$('picture').label}</label>
                <input className={styles.input} {...form.$('picture').bind()} />
                <p className={styles.error}>{form.$('picture').error}</p>
            </div>

            <Button type="submit" onClickAction={form.onSubmit}>Create model</Button>
        </form>
    );
});

export default CreateForm;
