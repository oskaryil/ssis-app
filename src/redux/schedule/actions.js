import axios from 'axios';

import {
  FETCH_CURRENT_CLASS,
  FETCH_CURRENT_CLASS_SUCCESS,
  FETCH_CURRENT_CLASS_FAIL,
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAIL
} from './types';

export const getCurrentClass = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_CURRENT_CLASS });
  try {
    const { data } = await axios({
      method: 'get',
      url: `/schedule/currentclass`,
      headers: {
        Authorization: `${getState().auth.user.token}`
      }
    });
    dispatch({ type: FETCH_CURRENT_CLASS_SUCCESS, class: data });
  } catch (err) {
    dispatch({ type: FETCH_CURRENT_CLASS_FAIL, error: err.message });
  }
};

export function getFullSchedule() {
  return async function getFullScheduleCb(dispatch, getState) {
    dispatch({ type: FETCH_SCHEDULE });
    try {
      const { data } = await axios({
        method: 'get',
        url: `/schedule`,
        headers: {
          Authorization: `${getState().auth.user.token}`
        }
      });
      dispatch({ type: FETCH_SCHEDULE_SUCCESS, schedule: data });
    } catch (err) {
      dispatch({ type: FETCH_SCHEDULE_FAIL, error: err.message });
    }
  };
}
