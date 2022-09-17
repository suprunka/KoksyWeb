import { combineReducers } from 'redux'
import authorReducer from './authReducer';
import errorReducer from './errorReducer';
import exerciseReducer from './exerciseReducer';
import workoutDaysReducer from './workoutDayReducer';

export default combineReducers({
    authState: authorReducer,
    errors: errorReducer,
    workoutDays: workoutDaysReducer,
    exercise: exerciseReducer
})
