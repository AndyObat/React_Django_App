import {GET_LEADS } from '../actions/types';

const initialState = {
    leads: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            };
    };
};