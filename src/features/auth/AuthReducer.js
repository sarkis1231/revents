import {LOGIN_USER, SIGN_OUT_USER} from './AuthConstants';

const INITIALSTATE = {
  currentUser: {},
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.creds.email,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {},
      };
    default:
      return state;
  }
};
