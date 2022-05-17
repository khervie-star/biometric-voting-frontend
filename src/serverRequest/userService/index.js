import API from '../axios/API';
import { axiosWrapper } from "../axios/axios-wrapper"
import Auth from "../../helper/Auth";

const baseUrl = "https://gvoting.herokuapp.com/api/";


// const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));


export const userService = {
  login,
  axiosLogin,
  logout,
  register,
  axiosRegister,
  getActiveElections,
  axiosGetActiveElections,
  getSingleElection,
  axiosGetSingleElection,

};


function login(data) {
  return axiosWrapper.post(`${baseUrl}/login`, data)
    .then(res => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      console.log(res)
      Auth.setUserToken(res.data.token)
      return res;
    });
}

function axiosLogin(data) {
  return API({
    method: "POST",
    url: `/login`,
    data: data
  })
    .then(res => {
      console.log(res)
      Auth.setUserToken(res.data.success.token);
      return res;
    })
    .catch(error => {
      console.log(error)
      throw error;
    });
};


function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to home page
  Auth.logout()
}

function register(user) {
  return axiosWrapper.post(`${baseUrl}/register-voter`, user)
    .then(res => {
      console.log(res)
      Auth.setUserToken(res.data.success.token);
      return res;
    });
}

function axiosRegister(data) {
  return API({
    method: "POST",
    url: `/register-voter`,
    data: data
  })
    .then(res => {
      console.log(res)
      Auth.setUserToken(res.data.success.token);
      return res;
    })
    .catch(error => {
      console.log(error)
      throw error;
    });
};

// Elections
function getActiveElections() {
  return axiosWrapper.get(`${baseUrl}/active-elections`)
}

function axiosGetActiveElections() {
  return API({
    method: "GET",
    url: `/active-elections`,
  })
    .then(res => {
      console.log(res)
      return res;
    })
    .catch(error => {
      console.log(error)
      throw error;
    });
};


function getSingleElection(electionSlug) {
  return axiosWrapper.get(`${baseUrl}/election/${electionSlug}`)
}

function axiosGetSingleElection(electionSlug) {
  return API({
    method: "GET",
    url: `/active-elections/${electionSlug}`,
  })
    .then(res => {
      console.log(res)
      return res;
    })
    .catch(error => {
      console.log(error)
      throw error;
    });
}


// function update(id, params) {
//   return axiosWrapper.put(`${baseUrl}/${id}`, params)
//     .then(x => {
//       // update stored user if the logged in user updated their own record
//       if (id === userSubject.value.id) {
//         // update local storage
//         const user = { ...userSubject.value, ...params };
//         localStorage.setItem('user', JSON.stringify(user));

//         // publish updated user to subscribers
//         userSubject.next(user);
//       }
//       return x;
//     });
// }

// // prefixed with underscored because delete is a reserved word in javascript
// function _delete(id) {
//   return axiosWrapper.delete(`${baseUrl}/${id}`);
// }
