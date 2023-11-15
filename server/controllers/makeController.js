import { MakeModel } from '../models/Make.js';

class ManufacturerController {
    constructor() {
        this.model = new MakeModel();
    }

    create = async (req, res, next) => {
        const { name, abrv } = req.body;
        const manufacturer = await this.model.create(name, abrv);
        return res.json(manufacturer);
    };

    getAll = async (req, res) => {
        const manufacturers = await this.model.getAll();
        return res.json(manufacturers);
    };
}

export default new ManufacturerController();
