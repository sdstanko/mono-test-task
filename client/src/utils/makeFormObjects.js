import yup from 'mobx-react-form/lib/validators/YUP';
import * as $pkg from 'yup';
import MobxReactForm from 'mobx-react-form';
import make from '../stores/make';

const fields = [
    {
        name: 'name',
        label: 'Name',
        placeholder: 'Insert make name',
    },
    {
        name: 'abrv',
        label: 'Abbreviation',
        placeholder: 'Insert make abbreviation',
    },
];

const $schema = (y) =>
    y.object().shape({
        name: y
            .string()
            .min(1, 'must be atleast 1 symbol')
            .max(50, 'Too Long!')
            .required('Required'),
        abrv: y
            .string()
            .min(1, 'must be atleast 1 symbol')
            .max(50, 'Too Long!')
            .required('Required'),
    });

const plugins = {
    yup: yup({
        package: $pkg,
        schema: $schema,
        extend: ({ validator, form }) => {
            // access yup validator and form instances
        },
    }),
};

const hooks = {
    async onSuccess(form) {
        const values = form.values();
        let response;

        response = await make.createMake(values);

        if (response._id) {
            alert('Make created');
        } else {
            alert(response.message);
        }
        form.reset();
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    },
};

export const form = new MobxReactForm({ fields }, { plugins, hooks });
