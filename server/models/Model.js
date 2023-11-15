import ApiError from '../error/ApiError.js';
import { Model } from '../schemas/Model.js';
import { Make } from '../schemas/Make.js';

export class ModelModel {
    async create(name, makeId) {
        const candidate = await Model.findOne({ name });
        if (candidate) {
            return ApiError.forbidden('Model with this name already exists');
        }

        const make = await Make.findOne({ _id: makeId });

        if (!make) {
            return ApiError.notFound('Manufacturer not found');
        }

        const model = new Model({
            name,
            abrv: make.abrv,
            makeId,
        });

        make.models.push(model._id);
        await make.save();

        return await model.save();
    }

    async getAll() {
        let models;
        try {
            models = await Model.find();
        } catch (e) {}

        if (models.length === 0) {
            return ApiError.notFound(`Models not found`);
        }
        return models;
    }

    async findById(_id) {
        let model;
        try {
            model = await Model.findById(_id);
        } catch (e) {}

        if (!model) {
            return ApiError.notFound(`Model with this id doesn't exists`);
        }
        return model;
    }

    async update(_id, makeId, name) {
        let model;
        try {
            model = await Model.findById(_id);
            const prevMakeId = model.makeId;

            if (prevMakeId != makeId) {
                const prevMake = await Make.findById(prevMakeId);
                const newModelsArr = prevMake.models.filter((modelId) => modelId != _id);
                await Make.findByIdAndUpdate(prevMakeId, { models: newModelsArr });
                const newMake = await Make.findById(makeId);
                await Make.findByIdAndUpdate(makeId, { models: [...newMake.models, _id] });
                model = await Model.findByIdAndUpdate(
                    _id,
                    {
                        makeId,
                        name,
                        abrv: newMake.abrv,
                    },
                    { returnDocument: 'after' },
                );
            } else {
                model = await Model.findByIdAndUpdate(
                    _id,
                    {
                        name,
                    },
                    { returnDocument: 'after' },
                );
            }
        } catch (e) {}

        if (!model) {
            return ApiError.notFound(`Model with this id doesn't exists`);
        }

        return model;
    }

    async delete(_id) {
        let model;

        try {
            model = await Model.findByIdAndDelete(_id);
        } catch (e) {}

        if (!model) {
            return ApiError.notFound(`Model with this id doesn't exists`);
        }

        return model;
    }
}
