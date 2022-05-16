/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/login";

const initialState = {
  login_loading: false,
  error: {}
};

 const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        signin_loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        signin_loading: false
      };
    case LOGIN_FAIL:
      return {
        ...state,
        signin_loading: false,
        error: action.payload.error.response.data
      };
    default:
      return state;
  }
};

export default LoginReducer;
