import axios from 'axios';
const baseUrl = 'http://localhost:4000';

export class Base {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.url = baseUrl + this.endpoint;
    }

    async getAll(params) {
        const { data } = await axios.get(this.url + (params ? `?${params}` : ''));
        return data;
    }

    async getById(id) {
        const { data } = await axios.get(this.url + '/' + id);
        return data;
    }

    async create(data) {
        const { data: responseData } = await axios.post(this.url, data);
        return responseData;
    }

    async update(id, data) {
        const { data: responseData } = await axios.patch(this.url + '/' + id, data);
        return responseData;
    }

    async delete(id) {
        const { data: responseData } = await axios.delete(this.url + '/' + id);
        return responseData;
    }
}
