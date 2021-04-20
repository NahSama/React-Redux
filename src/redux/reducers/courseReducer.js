import * as types from "../actionTypes";

// eslint-disable-next-line no-unused-vars
export default function courseReducer(state = [], action){
    switch (action.type){
        case types.CREATE_COURSE: 
            return [...state, {...action.course}];
        default: 
            return state;
    }
}