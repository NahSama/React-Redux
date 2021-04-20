import * as types from "../actionTypes";
import initialState from "../initialState";

// eslint-disable-next-line no-unused-vars
export default function courseReducer(state = initialState.courses, action){
    switch (action.type){
        case types.CREATE_COURSE: 
            return [...state, {...action.course}];
        //The new state is fetched from the api, no need to hold the prevState
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default: 
            return state;
    }
}