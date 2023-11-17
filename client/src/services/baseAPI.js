import axios from 'axios';
const baseUrl = 'http://localhost:4000';

export class Base {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async getAll(params) {
        const { data } = await axios.get(baseUrl + this.endpoint + (params ? `?${params}` : ''));
        return data;
    }

    async create(data) {
        const { data: responseData } = await axios.post(baseUrl + this.endpoint, data);
        return responseData;
    }
}
