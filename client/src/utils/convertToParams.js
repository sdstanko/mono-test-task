class ConvertToParams {
    convertPage(page) {
        const pageParamObj = {
            skip: page * 9,
            limit: 9,
        };
        const pageParam = new URLSearchParams(pageParamObj);
        return pageParam;
    }

    convertMakes(makes) {
        const makesParam = new URLSearchParams();
        makes.forEach(({ value }) => makesParam.append('make', value));
        return makesParam;
    }

    collectParams(paramsObj) {
        const paramsArr = [];
        const paramsArrNoSkip = [];

        for (let key in paramsObj) {
            if (paramsObj[key]) {
                paramsArr.push(paramsObj[key]);

                if (key !== 'page') {
                    paramsArrNoSkip.push(paramsObj[key]);
                }
            }
        }

        const result = {
            params: paramsArr.join('&'),
            paramsForPageCount: paramsArrNoSkip.join('&'),
        };
        
        return result;
    }
}

export default new ConvertToParams();
