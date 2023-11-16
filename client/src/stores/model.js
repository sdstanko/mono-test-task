import { makeObservable, observable, computed, action, flow } from 'mobx';
import axios from 'axios';

class Model {
    models = [];

    constructor() {
        makeObservable(this, {
            models: observable,
            getModels: flow,
        });
    }

    *getModels(params) {
        const { data } = yield axios.get(`http://localhost:4000/models?${params}`);
        console.log(data);
        this.models = data;
    }
}

export default new Model();
