import {combineReducers} from 'redux';
import {loginReducer} from './auth/reducers/login.reducer';

export class MainReducer {

    private static reducers = {};

    static init() {
        MainReducer.reducers['app.loginReducer'] = loginReducer;
    }

    static getReducers() {
        return combineReducers(MainReducer.reducers);
    }
}
