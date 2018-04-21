import {
  FETCH_CURRENT_CLASS,
  FETCH_CURRENT_CLASS_SUCCESS,
  FETCH_CURRENT_CLASS_FAIL,
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAIL
} from './types';

const INITIAL_STATE = {
  currentClass: null,
  fetching: false,
  error: '',
  schedule: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENT_CLASS:
      return { ...state, fetching: true };
    case FETCH_CURRENT_CLASS_SUCCESS:
      let currentClass;
      if (Object.keys(action.class).length === 0) {
        currentClass = null;
      } else {
        currentClass = action.class;
      }
      return { ...state, currentClass, fetching: false, error: '' };
    case FETCH_CURRENT_CLASS_FAIL:
      return { ...state, error: action.error, fetching: false };
    case FETCH_SCHEDULE:
      return { ...state, fetching: true };
    case FETCH_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.schedule,
        error: '',
        fetching: false
      };
    case FETCH_SCHEDULE_FAIL:
      return {
        ...state,
        error: action.error,
        fetching: false
      };
    default:
      return state;
  }
};
