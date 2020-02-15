import {Config} from '../../conf/conf';
import {AxiosInstance, default as axios} from 'axios';

export class AxiosClient {
    private client: AxiosInstance;
    constructor() {
        this.client = axios.create({
            baseURL: Config.settings.API.url + Config.settings.API.context,
            responseType: 'json'
        });
        // this.client.interceptors = {
        //     response: {
        //
        //
        //     },
        //     request:{
        //
        //     }
        // }
    }

    get(path, callback) {
        return this.client.get(path).then(
            (response) => callback(response.status, response.data)
        );
    }

    patch(path, payload, callback) {
        return this.client.request({
            method: 'PATCH',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => callback(response.status, response.data));
    }

    post(path, payload, callback) {
        return this.client.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => callback(response.status, response.data));
    }
}
