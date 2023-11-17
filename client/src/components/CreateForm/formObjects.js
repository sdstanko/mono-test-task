import yup from 'mobx-react-form/lib/validators/YUP';
import * as $pkg from 'yup';
import MobxReactForm from 'mobx-react-form';
import model from '../../stores/model';


const fields = [
    {
        name: 'name',
        label: 'Name',
        placeholder: 'Insert model name',
    },
    {
        name: 'make',
        label: 'Make',
    },
    {
        name: 'picture',
        label: 'Picture',
        placeholder: 'Insert image URL',
    },
];

const $schema = (y) =>
    y.object().shape({
        name: y
            .string()
            .min(2, 'must be atleast 2 symbols')
            .max(50, 'Too Long!')
            .required('Required'),
        make: y.object(),
        picture: y
            .string()
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!',
            ),
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
		const response = await model.createModel(form.values())
        if (response._id) {
            alert('Model created')
            form.reset()
        }
    },
    onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
    },
};

export const form = new MobxReactForm({ fields }, { plugins, hooks });
