import {authActions} from '../authActions.enum';
import {UserInterface} from '../../../model/entities/auth/User.interface';

interface LoginState {
    loading: boolean;
    user: UserInterface;
}

const initialState: LoginState = {
    user: undefined,
    loading: false
};

export function loginReducer(
    state = initialState,
    action: {
        type: authActions,
        payload: {}
    }
): LoginState {
    switch (action.type) {
        case authActions.AUTH_LOGIN_LOADING:
            return {...state, loading: true};
        case authActions.AUTH_LOGIN_SUCCESS:
            return {...state, loading: false};
        case authActions.AUTH_LOGIN_ERROR:
            return {...state, loading: false};
        default:
            return initialState;
    }
}
