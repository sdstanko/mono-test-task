import ApiError from '../error/ApiError.js';
import { MakeModel } from '../models/Make.js';

class ManufacturerController {
    constructor() {
        this.model = new MakeModel();
    }

    create = async (req, res, next) => {
        try {
            const { name, abrv } = req.body;
            const manufacturer = await this.model.create(name, abrv);
            return res.json(manufacturer);
        } catch (e) {
          return next(e)
        }
    };

    getAll = async (req, res) => {
        const manufacturers = await this.model.getAll();
        return res.json(manufacturers);
    };
}

export default new ManufacturerController();
