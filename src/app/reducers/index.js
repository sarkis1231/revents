import {combineReducers} from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
export default combineReducers({
  test: testReducer,
  events: eventReducer,
});
