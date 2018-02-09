import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  COMPLETE_INFORMATION,
  COMPLETE_INFORMATION_FAIL,
  COMPLETE_INFORMATION_SUCCESS
} from './types';

const INITIAL_STATE = {
  loggedIn: false,
  user: null,
  informationFilledOut: false,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.error };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        loggedIn: true,
        error: ''
      };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE };
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        loggedIn: true,
        error: ''
      };
    case SIGNUP_FAIL:
      return { ...state, loading: false, error: action.error };
    case COMPLETE_INFORMATION:
      return { ...state, loading: true };
    case COMPLETE_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { ...state.user, ...action.user },
        informationFilledOut: true
      };
    default:
      return state;
  }
};
