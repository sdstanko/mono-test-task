import ApiError from '../error/ApiError.js';
import { Make } from '../schemas/Make.js';

export class MakeModel {
    async create(name, abrv, next) {
        const candidate = await Make.findOne({ name });
        if (candidate) {
            return ApiError.forbidden('Manufacture with this name already exists');
        }

        const manufacturer = new Make({
            name,
            abrv,
        });
        return await manufacturer.save();
    }

    async findById(_id, next) {
        const make = await Make.findById(_id);
        if (!make) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        return make;
    }

    async update(_id, name, abrv) {
        const make = await Make.findByIdAndUpdate(
            _id,
            {
                name,
                abrv,
            },
            { returnDocument: 'after' },
        );
        if (!make) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        return make;
    }

    async delete(_id) {
        const make = await Make.findByIdAndDelete(_id);
        if (!make) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }
        return make;
    }
}
