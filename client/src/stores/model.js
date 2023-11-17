import { makeObservable, observable, computed, action, flow } from 'mobx';
import { Model } from '../services/modelAPI';

const modelAPI = new Model('/models');

class ModelStore {
    models = [];
    modelsPageCount = 0;

    constructor() {
        makeObservable(this, {
            modelsPageCount: observable,
            models: observable,
            getModels: flow,
            createModel: flow,
            updateModel: flow,
            getModelsPageCount: flow,
            getModelById: flow,
        });
    }

    *getModels(params) {
        this.models = yield modelAPI.getAll(params);
    }

    *getModelById(id) {
        return yield modelAPI.getById(id);
    }

    *getModelsPageCount() {
        this.modelsPageCount = yield modelAPI.getPageCount(9);
    }

    *createModel(data) {
        const model = yield modelAPI.createModel(data);
        return model;
    }

    *updateModel(data) {
        const model = yield modelAPI.updateModel(data);
        return model;
    }
}

export default new ModelStore();
