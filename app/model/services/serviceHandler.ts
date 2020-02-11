import {AuthService} from './auth/auth.service';
import {HttpClientHandler} from '../../http/HttpClient';
import {AvailableHttpClients} from '../../http/availableHttpClient.enum';

export default class ServiceHandler {
    private static services = [];

    static createService(serviceName,) {
        switch (serviceName) {
            case 'auth.AuthService':
                return new AuthService(HttpClientHandler.getClient(AvailableHttpClients.DEFAULT));
                break;
        }
    }

    static getService(serviceName: string) {
        if (!ServiceHandler.services[serviceName]) {
            ServiceHandler.services[serviceName] = ServiceHandler.createService(serviceName);
        }
        return ServiceHandler.services[serviceName];
    }
}
