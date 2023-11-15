import { ModelModel } from '../models/Model.js';

class ModelController {
    constructor() {
        this.model = new ModelModel();
    }

    create = async (req, res, next) => {
        const { name, abrv, makeId } = req.body;
        const modelItem = await this.model.create(name, abrv, makeId);
        return res.json(modelItem);
    };
}

export default new ModelController();
