import * as types from "../actionTypes";
import initialState from "../initialState";

// eslint-disable-next-line no-unused-vars
export default function authorReducer(state = initialState.authors, action){
    switch (action.type){
        //The new state is fetched from the api, no need to hold the prevState
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default: 
            return state;
    }
}