import { makeObservable, observable, action } from 'mobx';

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
        const pageParamObj = {
            skip: page * 9,
            limit: 9,
        };
        const pageParam = new URLSearchParams(pageParamObj);
        this.paramsObj.page = pageParam;
        this.collectParams();
    }

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
