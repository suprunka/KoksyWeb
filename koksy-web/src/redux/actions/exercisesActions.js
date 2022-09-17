import { EXCERCISES_WORKOUT_FETCHED_SUCCESS, EXCERCISE_FETCHED_SUCCESS, EXCERCISE_FETCHED_ERROR, EXCERCISES_WORKOUT_FETCHED_ERROR } from "../types";
import { trackPromise } from 'react-promise-tracker';
import { getError } from './errorActions';
import { get } from "../../Services/api";


export const workoutsExercisesFetchedSuccess = (payload) => ({
  type: EXCERCISES_WORKOUT_FETCHED_SUCCESS,
  payload: payload,
});
export const exerciseFetchedSuccess = (payload) => ({
  type: EXCERCISE_FETCHED_SUCCESS,
  payload: payload,
});
export const exerciseFetchedError = () => ({
  type: EXCERCISE_FETCHED_ERROR,
});

export const workoutsExercisesFetchedError = () => ({
    type: EXCERCISES_WORKOUT_FETCHED_ERROR,
  });
  
export const fetchForWorkout = (workoutId) => async (dispatch) => {
  try {
    console.log(workoutId)

    const { data } = await trackPromise(get(`workoutdays/${workoutId}/workouts`));
    console.log(data)
    dispatch(workoutsExercisesFetchedSuccess(data));
  }
  catch (err) {
    console.log(err)
    dispatch(getError(err));
    dispatch(workoutsExercisesFetchedError(err));
  }
};
export const fetchOne = (id) => async (dispatch) => {
  try {
    const { data } = await trackPromise(get(`workouts/${id}`));
    dispatch(exerciseFetchedSuccess(data));
  }
  catch (err) {
    dispatch(exerciseFetchedError(err));
  }
};