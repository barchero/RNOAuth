import {AvailableHttpClients} from './availableHttpClient.enum';
import {AxiosClient} from './clients/AxiosClient';


export class HttpClientHandler {
    private static clients = {};

    static getClient(clientNameType) {
        if (!HttpClientHandler.clients[clientNameType]) {
            HttpClientHandler.clients[clientNameType] = HttpClientHandler.createClient(clientNameType);
        }
        return HttpClientHandler.clients[clientNameType];
    }

    private static createClient(clientNameType) {
        switch (clientNameType) {
            case AvailableHttpClients.AXIOS:
                return new AxiosClient();
        }
    }

    static getMiddlewares() {
        const middlewares = [];
        const clients = HttpClientHandler.clients;
        for (const prop in clients) {
            if (Object.prototype.hasOwnProperty.call(clients, prop) && clients[prop].getMiddleware) {
                middlewares.push(clients[prop].getMiddleware());
            }
        }
        return middlewares;
    }
}
