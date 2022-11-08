import {
    EXCERCISE_FETCHED_SUCCESS,
    EXCERCISES_WORKOUT_FETCHED_SUCCESS,
// EXCERCISES_WORKOUT_FETCHED_ERROR,
// EXCERCISE_FETCHED_ERROR
} from '../types';
export default function (state = { workoutExercises: [], exercise:{} }, action) {
    console.log(action)

    switch (action.type) {
        case EXCERCISE_FETCHED_SUCCESS:
            return { ...state, exercise: action.payload };
        case EXCERCISES_WORKOUT_FETCHED_SUCCESS:
            return { ...state, workoutExercises: action.payload };
        default:
            return state;
    }
}