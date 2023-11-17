import { Base } from './baseAPI';

export class Model extends Base {
    constructor(endpoint) {
        super(endpoint);
    }

    async getPageCount(params, limit) {
        const models = await this.getAll(params);
        return Math.ceil(models.length / limit);
    }

    async createModel(data) {
        const { name, make, picture } = data;
        const makeId = make.value;

        const model = await this.create({ name, makeId, picture });
        return model;
    }

    async updateModel(data) {
        const { id, name, make, picture } = data;
        const makeId = make.value;

        const model = await this.update(id, { name, makeId, picture });
        return model;
    }

    async deleteModel(id) {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const model = await this.delete(id);
            return model;
        }
        return;
    }
}
