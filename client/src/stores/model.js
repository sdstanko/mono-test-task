import { makeObservable, observable, computed, action, flow } from 'mobx';
import axios from 'axios';

class Model {
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
        const { data } = yield axios.get(`http://localhost:4000/models?${params}`);
        this.models = data;
    }

    *getModelsPageCount() {
        const { data } = yield axios.get(`http://localhost:4000/models`);
        const count = Math.floor(data.length / 9);
        this.modelsPageCount = count;
    }
}

export default new Model();
