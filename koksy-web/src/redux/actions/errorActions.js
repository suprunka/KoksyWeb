import { GET_ERRORS } from '../types';
import { toast } from "react-toastify";

export function getError(error) {
  return function(dispatch) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
    toast.error(error.message);
  };
}
export default getError;