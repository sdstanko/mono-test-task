import { Base } from './baseAPI';

export class Model extends Base {
    constructor(endpoint) {
        super(endpoint);
    }

    async getPageCount(limit) {
        const models = await this.getAll();
        return Math.floor(models.length / limit);
    }
}
