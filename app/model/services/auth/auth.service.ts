import {UserInterface} from '../../entities/auth/User.interface';

export class AuthService {
    constructor(private httpClient) {}

    login({username, password}): Promise<UserInterface> {
        return this.httpClient.post('/login', {
            username: username,
            password: password
        });
    }

}
