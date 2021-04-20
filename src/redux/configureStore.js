import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers';
import Thunk from "redux-thunk";

export default function configureStore(initialState){
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancer(applyMiddleware(Thunk, reduxImmutableStateInvariant()))
    );
}