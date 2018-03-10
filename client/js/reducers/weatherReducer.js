import { weatherAction } from '../actions/actionTypes';

const weatherReducer = function (state = [], action) {
    switch (action.type) {
        case weatherAction.FETCH_RESULTS:
            return Object.assign([], [...action.payload.list]);

        case weatherAction.ERROR_FETCH_RESULTS:
            return [];

        default:
            return state;
    }
};

export default weatherReducer;