import { Model } from '../schemas/Model.js';
import { Make } from '../schemas/Make.js';

export class ModelModel {
    async create(name, abrv, makeId) {
        const candidate = await Model.findOne({ name });
        if (candidate) {
            throw new Error('already exists');
        }

        const manufacturerElement = await Make.findOne({ _id: makeId });

        if (!manufacturerElement) {
            throw new Error("manufacturer doesn't exist");
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
