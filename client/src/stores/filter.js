import { makeObservable, observable, action } from 'mobx';

class Filter {
    paramsObj = {
        page: '',
        makes: '',
        sort: '',
    };

    params = '';

    constructor() {
        makeObservable(this, {
            params: observable,
            paramsObj: observable,
            changeSort: action,
            changeMakes: action,
        });
    }

    changePage(page) {}

    changeMakes(makes) {
		const makesParam = new URLSearchParams();
        makes.forEach(({ value }) => makesParam.append('make', value));
        this.paramsObj.makes = makesParam;
        this.collectParams();
    }

    changeSort(sort) {
        this.paramsObj.sort = sort;
        this.collectParams();
    }

    collectParams() {
        const paramsArr = [];

        for (let key in this.paramsObj) {
            if (this.paramsObj[key]) {
                paramsArr.push(this.paramsObj[key]);
            }
        }
        this.params = paramsArr.join('&');
    }
}

export default new Filter();
