import {combineReducers} from 'redux';
import testReducer from '../../features/testarea/testReducer';
export default combineReducers({
  test: testReducer,
});
