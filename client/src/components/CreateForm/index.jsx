import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import make from '../../stores/make';
import model from '../../stores/model';
import SelectWrapper from '../SelectWrapper';
import styles from './CreateForm.module.css';
import Button from '../UI/Button';
import { useState } from 'react';

const CreateForm = observer(({ form, id }) => {
    const [item, setItem] = useState();

    useEffect(() => {
        make.getMakes();

        if (id) {
            model.getModelById(id).then((item) => setItem(item));
        } else {
            form.reset()
        }
    }, []);

    useEffect(() => {
        if (item) {
            form.$('id').value = item._id;
            form.$('name').value = item.name;
            form.$('make').value = {value: item.makeId, label: item.abrv};
            form.$('picture').value = item.picture;
        }
    }, [item]);

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
                    options={make.makes.map(({ _id, abrv }) => ({ value: _id, label: abrv }))}
                    className={styles.select}
                />
            </div>

            <div>
                <label htmlFor={form.$('picture').id}>{form.$('picture').label}</label>
                <input className={styles.input} {...form.$('picture').bind()} />
                <p className={styles.error}>{form.$('picture').error}</p>
            </div>

            <Button type="submit" onClickAction={form.onSubmit}>
                {id ? 'Update model' : 'Create model'}
            </Button>
        </form>
    );
});

export default CreateForm;
