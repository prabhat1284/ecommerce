import axios from "axios";

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS_ADMIN,
  LOGIN_SUCCESS_USER,
  LOGOUT,
} from "../types";
//import config from "../../config/config";

export const login = (userEmail, userPassword) => (dispatch) => {
  const values = { email: userEmail, password: userPassword };
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data: values,
    url: "http://localhost:4000/webapi/userlogin",
  };
  axios(options)
    .then((res) => {
      console.log("the data has been send to the server and posted");
      // when posted successfully , dispatch
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("_id", res.data.user._id);
      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("phone", res.data.user.phone);
      localStorage.setItem("address", res.data.user.address);
      localStorage.setItem("city", res.data.user.city);
      localStorage.setItem("gender", res.data.user.gender);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("status", res.data.user.status);
      localStorage.setItem("info", res.data.user.info);

      if (res.data.user.role === "admin") {
        dispatch({
          type: LOGIN_SUCCESS_ADMIN,
        });
      } else if (res.data.user.role === "user") {
        dispatch({
          type: LOGIN_SUCCESS_USER,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
        });
        alert(res.data.message);
      }
    })
    .catch((err) => {
      alert("invalid userEmail/password");
    });
};

export const logout = () => (dispatch) => {
  const values = {};
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
  };
  dispatch({
    type: LOGOUT,
  });
};
