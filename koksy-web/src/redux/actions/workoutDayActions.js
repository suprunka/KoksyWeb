import { WORKOUT_DAYS_LIST_FETCHED_SUCCESS, WORKOUT_DAYS_LIST_FETCHED_ERROR, WORKOUT_DAY_FETCHED_SUCCESS } from "../types";
import { trackPromise } from 'react-promise-tracker';
import { getError } from './errorActions';
import { get } from "../../Services/api";


export const workoutsFetchedSuccess = (payload) => ({
  type: WORKOUT_DAYS_LIST_FETCHED_SUCCESS,
  payload: payload,
});
export const workoutDayFetchedSuccess = (payload) => ({
  type: WORKOUT_DAY_FETCHED_SUCCESS,
  payload: payload,
});
export const workoutsFetchedError = () => ({
  type: WORKOUT_DAYS_LIST_FETCHED_ERROR,
});

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await trackPromise(get('workoutdays'));
    dispatch(workoutsFetchedSuccess(data));
  }
  catch (err) {
    dispatch(getError(err));
    dispatch(workoutsFetchedError(err));
  }
};
export const fetchOne = (id) => async (dispatch) => {
  try {
    const { data } = await trackPromise(get(`workoutdays/${id}`));
    dispatch(workoutDayFetchedSuccess(data));
  }
  catch (err) {
    dispatch(getError(err));
  }
};