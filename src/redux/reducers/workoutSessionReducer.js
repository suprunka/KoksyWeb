import {
    WORKOUT_LAST_SESSION_FETCHED_SUCCESS,
} from '../types';
export default function (state = { lastSessions: [] }, action) {
    switch (action.type) {
        case WORKOUT_LAST_SESSION_FETCHED_SUCCESS:
            return { ...state, lastSessions: action.payload };
        default:
            return state;
    }
}