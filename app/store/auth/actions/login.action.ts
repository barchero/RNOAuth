import {authActions} from '../authActions.enum';

export function login({username, password}) {
    return {
        types: [authActions.AUTH_LOGIN_LOADING, authActions.AUTH_LOGIN_SUCCESS, authActions.AUTH_LOGIN_ERROR],
        payload: {
            request: {
                url: '/'
            }
        }
    };
}
