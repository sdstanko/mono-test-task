import { makeObservable, observable, action } from 'mobx';
import convertToParams from '../utils/convertToParams';

class Filter {
    paramsObj = {
        page: 'limit=9',
        makes: '',
        sort: '',
    };

    params = 'limit=9';

    constructor() {
        makeObservable(this, {
            params: observable,
            paramsObj: observable,
            changeSort: action,
            changeMakes: action,
            changePage: action,
        });
    }

    changePage(page) {
        this.paramsObj.page = convertToParams.convertPage(page);
        this.collectParams();
    }

    changeMakes(makes) {
        this.paramsObj.makes = convertToParams.convertMakes(makes);
        this.collectParams();
    }

    changeSort(sort) {
        this.paramsObj.sort = sort;
        this.collectParams();
    }

    collectParams() {
        this.params = convertToParams.collectParams(this.paramsObj);
    }
}

export default new Filter();
