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
        case authActions.AUTH_LOGIN:
            return {...state, loading: true};
        default:
            return initialState;
    }
}
