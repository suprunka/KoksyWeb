import { GET_ERRORS } from '../types';
export default function (state = {} , action) {
   switch(action.type) {
      case GET_ERRORS:
         return { ...state, error: action.payload.message };
      default:
         return state;
   }
}