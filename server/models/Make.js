import ApiError from '../error/ApiError.js';
import { Make } from '../schemas/Make.js';

export class MakeModel {
    async create(name, abrv, next) {
        const candidate = await Make.findOne({ name });
        if (candidate) {
            return ApiError.forbidden('Manufacture with this name already exists')
        }

        const manufacturer = new Make({
            name,
            abrv,
        });
        return await manufacturer.save();
    }

    async getAll() {
        return await Make.find();
    }
}
