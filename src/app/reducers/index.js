import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/modals/modalReducer';
import AuthReducer from '../../features/auth/AuthReducer';
export default combineReducers({
  form: formReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: AuthReducer,
});
