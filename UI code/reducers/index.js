import { combineReducers } from 'redux';
import foodReducer from '../reducers/foodReducer';

export default combineReducers({
  reducer: foodReducer
});
