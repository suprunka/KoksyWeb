import {
    WORKOUT_DAYS_LIST_FETCHED_SUCCESS,
    WORKOUT_DAY_FETCHED_SUCCESS
} from '../types';
export default function (state = { list: [] }, action) {
    switch (action.type) {
        case WORKOUT_DAYS_LIST_FETCHED_SUCCESS:
            return { ...state, list: action.payload };
        case WORKOUT_DAY_FETCHED_SUCCESS:
            return { ...state, item: action.payload };
        default:
            return state;
    }
}