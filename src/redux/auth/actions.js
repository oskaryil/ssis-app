import axios from 'axios';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  COMPLETE_INFORMATION,
  COMPLETE_INFORMATION_FAIL,
  COMPLETE_INFORMATION_SUCCESS
} from './types';
import config from '../../config';

axios.defaults.baseURL = config.apiUrl;

export const login = values => async (dispatch, getState) => {
  dispatch({ type: LOGIN });
  try {
    const { data } = await axios({
      url: `/users/login`,
      method: 'post',
      data: values
    });
    dispatch({ type: LOGIN_SUCCESS, user: data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, error: err.message });
    throw err;
  }
};

export const logout = () => async dispatch => {
  return dispatch({ type: LOGOUT });
};

export const signup = values => async (dispatch, getState) => {
  dispatch({ type: SIGNUP });
  try {
    const { data } = await axios({
      url: `/users/signup`,
      method: 'post',
      data: values
    });
    dispatch({ type: SIGNUP_SUCCESS, user: data });
  } catch (err) {
    console.log(err.response);
    dispatch({ type: SIGNUP_FAIL, error: err.message });
    throw err;
  }
};

export const fillOutInformation = values => async (dispatch, getState) => {
  dispatch({ type: COMPLETE_INFORMATION });
  try {
    const { data } = await axios({
      url: `/users/me`,
      method: 'patch',
      data: values,
      headers: {
        Authorization: `${getState().auth.user.token}`
      }
    });
    dispatch({ type: COMPLETE_INFORMATION_SUCCESS, user: data.user });
  } catch (err) {
    dispatch({ type: COMPLETE_INFORMATION_FAIL, error: err.message });
  }
};
