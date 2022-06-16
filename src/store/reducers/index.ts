import { combineReducers } from 'redux';
import userReducer from './user';
import toastsReducer from './toasts';

export default combineReducers({
  user: userReducer,
  toasts: toastsReducer,
});
