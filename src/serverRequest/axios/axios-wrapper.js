import axios from "axios";
import Auth from "../../helper/Auth";
import { userService } from '../userService';
import { toast } from "react-toastify"


export const axiosWrapper = {
  get,
  post,
  postAuth,
  patch,
  delete: _delete
};

function get(url) {
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...authHeader(url) },
    // credentials: 'include',
  };
  return fetch(url, requestOptions).then(handleResponse);

}


function post(url, body) {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function postAuth(url, body) {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse2);
}


function patch(url, body) {
  const requestOptions = {
    method: 'PATCH',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...authHeader(url) },
    // credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}


// prefixed with underscored because delete is a reserved word in javascript
// function _delete(url) {
//   return axios._delete(url, {
//     headers: authHeader(url)
//   })
//     .then(handleResponse)
// }

function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', ...authHeader(url) },
    // credentials: 'include',
  };
  return fetch(url, requestOptions).then(handleResponse);
}


// helper functions

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = Auth.getToken;
  const isLoggedIn = user && user.token;
  // !user ? (null) : (console.log(user.token))
  const isApiUrl = url.startsWith(`https://gvoting.herokuapp.com/api/`);
  console.log(isApiUrl)
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  console.log(response.status)
  console.log(response)
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(text)

    if (!response.ok) {
      if ([403].includes(response.status) && userService.userValue) {
        console.log(response)
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
        toast.info("Token expired, Please login")
      }

      const error = (data && data.message) || data // add-data
      console.log(response, error)
      return Promise.reject(error);
    }
    return data;
  });
}

function handleResponse2(response) {
  console.log(response.status)
  console.log(response)
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(text)

    if (!response.ok) {
      if ([403].includes(response.status) && userService.userValue) {
        console.log(response)
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        userService.logout();
        toast.info("Token expired, Please login")
      }

      const error = (data && data.message) || response.status // add-data
      console.log(error)
      return Promise.reject(error);
    }
    return data;
  });
}

