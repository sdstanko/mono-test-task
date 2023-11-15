import ApiError from '../error/ApiError.js';
import { Model } from '../schemas/Model.js';
import { Make } from '../schemas/Make.js';

export class ModelModel {
    async create(name, abrv, makeId) {
        const candidate = await Model.findOne({ name });
        if (candidate) {
            return ApiError.forbidden('Model with this name already exists');
        }

        const manufacturerElement = await Make.findOne({ _id: makeId });

        if (!manufacturerElement) {
            return ApiError.notFound('Manufacturer not found');
        }

        const model = new Model({
            name,
            abrv,
            makeId,
        });

        manufacturerElement.models.push(model._id);
        await manufacturerElement.save();

        return await model.save();
    }
}
