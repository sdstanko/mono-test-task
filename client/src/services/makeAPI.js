import { Base } from './baseAPI';

class Make extends Base {
    constructor(endpoint) {
        super(endpoint);
    }
}

export default new Make('/makes');
