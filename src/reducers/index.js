import LoggedIn from './isLoggedIn';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  LoggedIn,
});

export default allReducers;