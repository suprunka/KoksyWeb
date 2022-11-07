import {WORKOUT_SESSION_ADDED_SUCCESS, WORKOUT_SESSION_FETCHED_SUCCESS,WORKOUT_LAST_SESSION_FETCHED_SUCCESS } from "../types";
import { trackPromise } from 'react-promise-tracker';
import { getError } from './errorActions';
import { get, post } from "../../Services/api";


export const workoutSessionFetchedSuccess = (payload) => ({
  type: WORKOUT_SESSION_FETCHED_SUCCESS,
  payload: payload,
});
export const workoutLastSessionFetchedSuccess = (payload) => ({
  type: WORKOUT_LAST_SESSION_FETCHED_SUCCESS,
  payload: payload,
});
export const addSuccess = (payload) => ({
  type: WORKOUT_SESSION_ADDED_SUCCESS,
  payload: payload,
});

export const fetchWorkoutSession = (workoutId) => async (dispatch) => {
  try {
    console.log(workoutId)

    const { data } = await trackPromise(get(`workoutdays/${workoutId}/workouts`));
    dispatch(workoutSessionFetchedSuccess(data));
  }
  catch (err) {
    dispatch(getError(err));
  }
};
export const addSession = (request) => async (dispatch) => {
  try {
    console.log(request)
    const { data } = await trackPromise(post(`WorkoutSessions`, request));
    dispatch(addSuccess(data));
  }
  catch (err) {
    console.log(err)
    dispatch(getError(err));
  }
};
export const fetchLastSessions = (workoutId) => async (dispatch) => {
  try {
    //TODO UserID find in api
    const { data } = await trackPromise(get(`WorkoutSessions/api/users/{userId}/${workoutId}/Sessions` ));
    dispatch(workoutLastSessionFetchedSuccess(data));
  }
  catch (err) {
    console.log(err)
    dispatch(getError(err));
  }
};