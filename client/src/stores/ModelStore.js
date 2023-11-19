import { makeObservable, observable, flow } from 'mobx';
import modelAPI from '../services/modelAPI';
import FilterStore from './FilterStore';

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
        this.modelsPageCount = yield modelAPI.getPageCount(FilterStore.paramsForPageCount, 9);
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
        yield this.getModels(FilterStore.params);
        return model;
    }

}

export default new ModelStore();
