import { makeObservable, observable, flow } from 'mobx';
import { Make } from '../services/makeAPI';

const makeAPI = new Make('/makes');

class MakeStore {
    makes = [];

    constructor() {
        makeObservable(this, {
            makes: observable,
            getMakes: flow,
        });
    }

    *getMakes() {
        this.makes = yield makeAPI.getAll();
    }
}

export default new MakeStore();
