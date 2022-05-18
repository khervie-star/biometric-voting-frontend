import Auth from "../../helper/Auth";
import axios from "axios";

const URL = "https://gvoting.herokuapp.com/api";

const API = (config) => {
  //header authorization
  if (Auth.user_token) {
    const token = Auth.getToken();
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`
    };
  }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: "network error",
          status: 500,
        };
      }
      if (error.response.status === 401) {
        Auth.logout();
        throw error;
      }
      return Promise.reject(error);
    }
  );
  // config.baseURL = URL;
  return axios(config);
};
export default API;
