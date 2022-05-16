import API from "../axios/API";
import Auth from "../../helper/Auth";

export const login = async (email, password) => {
  const body = { email, password };
  return await API({
    method: "POST",
    url: "/login",
    data: body
  }).then(res => {
    Auth.setUserToken(res.data.success);
    console.log(res)
    return res;
  });
};

export const register = async (email, first_name, last_name, middle_name, gender, password, password2) => {
  const reg_body = {
    email, first_name, last_name, middle_name, gender, password, password2
  };
  return await API({
    method: "POST",
    url: "/register-voter",
    data: reg_body
  }).then(res => {
    Auth.setUserToken(res.data.success.token);
    console.log(res)
    return res;
  });
};
