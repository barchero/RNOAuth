import {AvailableHttpClients} from './availableHttpClient.enum';
import {AxiosClient} from './clients/AxiosClient';


export class HttpClientHandler {
    private static clients;

    static getClient(clientNameType: AvailableHttpClients) {
        if (!HttpClientHandler.clients[clientNameType]) {
            HttpClientHandler.clients[clientNameType] = HttpClientHandler.createClient(clientNameType);
        }
    }

    private static createClient(clientNameType: AvailableHttpClients) {
        switch (clientNameType) {
            case AvailableHttpClients.DEFAULT:
            default:
                return new AxiosClient();
        }
    }
}
