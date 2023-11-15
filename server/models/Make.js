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

    async getAll() {
        let makes;

        try {
            makes = await Make.find();
        } catch (e) {
            return ApiError.internal('Server error');
        }

        if (makes.length === 0) {
            return ApiError.notFound('None manufactures found');
        }

        return makes;
    }

    async findById(_id, next) {
        let make;
        try {
            make = await Make.findById(_id);
        } catch (e) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        if (!make) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        return make;
    }

    async update(_id, name, abrv) {
        let make;

        try {
            make = await Make.findByIdAndUpdate(
                _id,
                {
                    name,
                    abrv,
                },
                { returnDocument: 'after' },
            );
        } catch (e) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        if (!make) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        return make;
    }

    async delete(_id) {
        let make;

        try {
            make = await Make.findByIdAndDelete(_id);
        } catch (e) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        if (!make) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        return make;
    }
}
