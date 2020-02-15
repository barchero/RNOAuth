import {authActions} from '../authActions.enum';
import ServiceHandler from "../../../model/services/serviceHandler";

export function login({username, password}) {
    return dispatch => {
        dispatch({
            type: authActions.AUTH_LOGIN_LOADING
        });

        ServiceHandler.getService('auth.AuthService').login({
            username: username,
            password: password
        }).then((data) => {
            dispatch({
                type: authActions.AUTH_LOGIN_SUCCESS,
                payload: data
            })
        }).catch((err) => {
            dispatch({
                type: authActions.AUTH_LOGIN_ERROR,
                payload: err
            })
        })
    };
}
