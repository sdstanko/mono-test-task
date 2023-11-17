import { makeObservable, observable, flow } from 'mobx';
import { Make } from '../services/makeAPI';

const makeAPI = new Make('/makes');

class MakeStore {
    makes = [];

    constructor() {
        makeObservable(this, {
            makes: observable,
            getMakes: flow,
            createMake: flow,
        });
    }

    *getMakes() {
        this.makes = yield makeAPI.getAll();
    }

    *createMake(data) {
        return yield makeAPI.create(data);
    }
}

export default new MakeStore();
