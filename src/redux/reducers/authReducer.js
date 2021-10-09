import {
  LOGIN_SUCCESS_ADMIN,
  LOGIN_SUCCESS_USER,
  LOGIN_FAIL,
  LOGOUT,
  LOADING,
  EMAIL_LOGIN_DATA,
} from "../types";

const initialState = {
  isLoggedIn: false,
  isLoggedInAdmin: false,
  isLoggedInUser: false,
  userRole: "",
  loading: false,
  loginData: {},
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS_ADMIN:
      return {
        ...state,
        isLoggedInAdmin: true,
      };
    case LOGIN_SUCCESS_USER:
      return {
        ...state,
        isLoggedInUser: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case EMAIL_LOGIN_DATA:
      return { ...state, loginData: payload, userRole: payload.roleType };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isLoggedInAdmin: false,
        isLoggedInUser: false,
        loginData: {},
        userRole: "",
      };
    case LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
export default authReducer;
