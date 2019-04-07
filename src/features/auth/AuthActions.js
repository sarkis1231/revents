import {LOGIN_USER, SIGN_OUT_USER} from './AuthConstants';

export const Login = creds => {
  return {
    type: LOGIN_USER,
    payload: {creds},
  };
};

export const Logout = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
