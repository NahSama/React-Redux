import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutatbleStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux dev tooll
    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancer(applyMiddleware(thunk, reduxImmutatbleStateInvariant()))
    );
}