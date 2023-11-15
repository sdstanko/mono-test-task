import { Make } from '../schemas/Make.js';

export class MakeModel {
    async create(name, abrv) {
        const candidate = await Make.findOne({ name });
        if (candidate) {
            throw new error('already exists');
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
