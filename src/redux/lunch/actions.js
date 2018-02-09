import axios from 'axios';
import {
  FETCH_LUNCH_MENU,
  FETCH_LUNCH_MENU_SUCCESS,
  FETCH_LUNCH_MENU_FAIL
} from './types';
import config from '../../config';

axios.defaults.baseURL = config.apiUrl;

export const fetchLunchMenu = () => async dispatch => {
  dispatch({ type: FETCH_LUNCH_MENU });
  try {
    const { data } = await axios.get(`/lunch`);
    dispatch({ type: FETCH_LUNCH_MENU_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_LUNCH_MENU_FAIL });
  }
};
