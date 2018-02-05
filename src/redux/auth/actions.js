import axios from 'axios';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  COMPLETE_INFORMATION,
  COMPLETE_INFORMATION_FAIL,
  COMPLETE_INFORMATION_SUCCESS
} from './types';

export const login = values => async (dispatch, getState) => {
  dispatch({ type: LOGIN });
  try {
    const bodyFormData = new FormData();
    bodyFormData.append('user', values.username);
    bodyFormData.append('pass', values.password);
    const { data } = await axios({
      url: 'https://api.ssis.nu/login/',
      method: 'post',
      // data: qs.stringify({ user: values.username, pass: values.password }),
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (data.result === 'OK') {
      dispatch({ type: LOGIN_SUCCESS, user: { username: data.user } });
      return 'success';
    } else {
      dispatch({ type: LOGIN_FAIL, error: 'Fel uppgifter' });
      throw new Error('login error');
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, error: err.message });
    throw err;
  }
};

export const fillOutInformation = values => (dispatch, getState) => {
  dispatch({ type: COMPLETE_INFORMATION });
  dispatch({ type: COMPLETE_INFORMATION_SUCCESS, payload: values });
};
