import { makeObservable, observable, flow } from 'mobx';
import makeAPI from '../services/makeAPI';

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
