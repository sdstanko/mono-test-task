import { makeObservable, observable, action } from 'mobx';
import convertToParams from '../utils/convertToParams';

class FilterStore {
    paramsObj = {
        page: 'limit=9',
        makes: '',
        sort: '',
    };

    params = 'limit=9';
    paramsForPageCount = '';

    constructor() {
        makeObservable(this, {
            params: observable,
            paramsObj: observable,
            changeSort: action,
            changeMakes: action,
            changePage: action,
            collectParams: action,
            resetParams: action,
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
        const { params, paramsForPageCount } = convertToParams.collectParams(this.paramsObj);
        this.params = params;
        this.paramsForPageCount = paramsForPageCount;
    }

    resetParams() {
        this.params = 'limit=9';
    }
}

export default new FilterStore();
