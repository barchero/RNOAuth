import {authActions} from '../actions.enum';

export default class LoginActions {
    constructor(private dispatch) {}

    login({username, password}) {
        this.dispatch({
            type: authActions.AUTH_LOGIN,
        });
    }
}
