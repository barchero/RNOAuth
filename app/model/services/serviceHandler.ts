import {AuthService} from './auth/auth.service';
import {HttpClientHandler} from '../../http/HttpClientHandler';
import {AvailableHttpClients} from '../../http/availableHttpClient.enum';

export default class ServiceHandler {
    private static services = {};

    static init() {
        ServiceHandler.services['auth.AuthService'] = new AuthService(HttpClientHandler.getClient(AvailableHttpClients.DEFAULT));
    }

    static getService(serviceName: string) {
        return ServiceHandler.services[serviceName];
    }
}
