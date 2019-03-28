import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
export default combineReducers({
  form: formReducer,
  test: testReducer,
  events: eventReducer,
});
