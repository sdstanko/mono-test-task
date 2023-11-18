import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import make from '../../stores/make';
import model from '../../stores/model';
import SelectWrapper from '../SelectWrapper';
import styles from './CreateForm.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import FormInput from '../FormInput';
import { form } from '../../utils/modelFormObjects';
import { useNavigate } from 'react-router-dom';

const CreateModelForm = observer(({ id }) => {
    const [item, setItem] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        make.getMakes();

        if (id) {
            model.getModelById(id).then((item) => {
                if (item?.status === 404) {
                    navigate('/create/models');
                }
                setItem(item);
            });
        } else {
            form.reset();
        }
    }, []);

    useEffect(() => {
        if (item) {
            form.$('id').value = item._id;
            form.$('name').value = item.name;
            form.$('make').value = { value: item.makeId, label: item.abrv };
            form.$('picture').value = item.picture;
        }
    }, [item]);

    return (
        <form className={styles.form}>
            <FormInput field={form.$('name')} />

            <div>
                <label htmlFor={form.$('make').id}>{form.$('make').label}</label>
                <SelectWrapper
                    field={form.$('make')}
                    options={make.makes.map(({ _id, abrv }) => ({ value: _id, label: abrv }))}
                    className={styles.select}
                />
            </div>

            <FormInput field={form.$('picture')} />

            <Button type="submit" onClickAction={form.onSubmit}>
                {id ? 'Update model' : 'Create model'}
            </Button>
        </form>
    );
});

export default CreateModelForm;
