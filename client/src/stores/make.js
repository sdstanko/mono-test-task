import { makeObservable, observable, computed, action, flow } from 'mobx';
import axios from 'axios';

class Make {
    makes = [];

    constructor() {
        makeObservable(this, {
            makes: observable,
            getMakes: flow,
        });
    }

    *getMakes() {
        const { data } = yield axios.get('http://localhost:4000/makes');
        this.makes = data;
    }
}

export default new Make();
