/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import { register } from "../../ServerRequest";
import history from '../../history'

export const userRegister = (
name,
last_name,
telephone,
email,
password,
password_confirmation
) => dispatch => {
  dispatch({
    type: POST_REGISTER_BEGIN
  });

  return register(name, last_name, telephone, email, password, password_confirmation)
    .then(res => {
      dispatch({
        type: POST_REGISTER_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: POST_REGISTER_FAIL,
        payload: { error }
      });

      throw error;
    });
};

export const POST_REGISTER_BEGIN = "POST_REGISTER_BEGIN";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAIL = "POST_REGISTER_FAIL";
