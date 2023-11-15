import { ModelModel } from '../models/Model.js';

class ModelController {
    constructor() {
        this.model = new ModelModel();
    }

    create = async (req, res, next) => {
        const { name, makeId } = req.body;
        const modelItem = await this.model.create(name, makeId);
        return res.json(modelItem);
    };

    getAll = async (req, res, next) => {
        const models = await this.model.getAll();
        return res.json(models);
    };

    findById = async (req, res, next) => {
        const _id = req.params.id;
        const modelItem = await this.model.findById(_id);
        return res.json(modelItem);
    };

    delete = async (req, res, next) => {
        const _id = req.params.id;
        const modelItem = await this.model.delete(_id);
        return res.json(modelItem);
    };

    update = async (req, res, next) => {
        const _id = req.params.id;
        const { makeId, name } = req.body;
        const modelItem = await this.model.update(_id, makeId, name);
        return res.json(modelItem);
    };
}

export default new ModelController();
