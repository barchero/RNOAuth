import {authActions} from '../authActions.enum';

export function login({username, password}) {
    return {
        type: authActions.AUTH_LOGIN,
    };
}
