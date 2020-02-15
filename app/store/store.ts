import {applyMiddleware, compose, createStore} from 'redux';
import {MainReducer} from './mainReducer';
import ServiceHandler from '../model/services/serviceHandler';
import {HttpClientHandler} from '../http/HttpClientHandler';

MainReducer.init();
ServiceHandler.init();

const reducers = MainReducer.getReducers();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware.apply(this, HttpClientHandler.getMiddlewares()));

export const store = createStore(reducers, middlewares);
