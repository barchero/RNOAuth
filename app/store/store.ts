import {applyMiddleware, createStore} from 'redux';
import {MainReducer} from './mainReducer';
import ServiceHandler from '../model/services/serviceHandler';
import {HttpClientHandler} from '../http/HttpClientHandler';

MainReducer.init();
ServiceHandler.init();

const reducers = MainReducer.getReducers();
const middlewares = applyMiddleware.apply(this, HttpClientHandler.getMiddlewares());

export const store = createStore(reducers, middlewares);
