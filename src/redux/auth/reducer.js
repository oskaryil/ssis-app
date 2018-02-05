import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  COMPLETE_INFORMATION,
  COMPLETE_INFORMATION_FAIL,
  COMPLETE_INFORMATION_SUCCESS
} from './types';

const INITIAL_STATE = {
  loggedIn: false,
  user: null,
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
    case COMPLETE_INFORMATION:
      return { ...state, loading: true };
    case COMPLETE_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { ...state.user, ...action.payload }
      };
    default:
      return state;
  }
};
