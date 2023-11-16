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
            getModelsPageCount: flow,
        });
    }

    *getModels(params) {
        this.models = yield modelAPI.getAll(params);
    }

    *getModelsPageCount() {
        this.modelsPageCount = yield modelAPI.getPageCount(9);
    }
}

export default new ModelStore();