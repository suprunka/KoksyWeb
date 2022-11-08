import { LOGIN_SUCCESS } from '../types';
export default function (state = {token:''} , action) {
   switch(action.type) {
      case LOGIN_SUCCESS:
         localStorage.setItem('token',action.payload)
         return { ...state, token: action.payload };
      default:
         return state;
   }
}