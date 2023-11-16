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

        for (let key in paramsObj) {
            if (paramsObj[key]) {
                paramsArr.push(paramsObj[key]);
            }
        }
        return paramsArr.join('&');
    }
}

export default new ConvertToParams();
