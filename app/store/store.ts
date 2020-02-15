import {applyMiddleware, compose, createStore} from 'redux';
import {MainReducer} from './mainReducer';
import ServiceHandler from '../model/services/serviceHandler';
import thunk from "redux-thunk";

MainReducer.init();
ServiceHandler.init();

const reducers = MainReducer.getReducers();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducers, middlewares);
