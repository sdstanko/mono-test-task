import { makeObservable, observable, computed, action, flow } from 'mobx';
import { Model } from '../services/modelAPI';
import filter from './filter';

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
            deleteModel: flow,
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
        this.modelsPageCount = yield modelAPI.getPageCount(filter.paramsForPageCount, 9);
    }

    *createModel(data) {
        const model = yield modelAPI.createModel(data);
        return model;
    }

    *updateModel(data) {
        const model = yield modelAPI.updateModel(data);
        return model;
    }

    *deleteModel(id) {
        const model = yield modelAPI.deleteModel(id);
        yield this.getModels(filter.params);
        return model;
    }
}

export default new ModelStore();
