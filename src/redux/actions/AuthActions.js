import { LOGIN_SUCCESS ,LOGOUT_SUCCESS, REGISTER_SUCCESS} from "../types";
import { trackPromise } from 'react-promise-tracker';
import { getError } from './errorActions';
import { post } from "../../Services/api";


export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
  });
    
  export const loginAction = (request) => async (dispatch) => {
    try {
      console.log(request)
      const { data } = await trackPromise(post("users/login",request));
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(getError(err));
    }
  };    

  export const registerAction = (request) => async (dispatch) => {
    try {
      console.log(request)
      const { data } = await trackPromise(post("users/register",request));
      dispatch(registerSuccess(data));
    } catch (err) {
      dispatch(getError(err));
    }
  };
export const logoutAction = () => async (dispatch) => {
      dispatch(logoutSuccess());
  };