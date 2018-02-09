import {
  FETCH_CURRENT_CLASS,
  FETCH_CURRENT_CLASS_SUCCESS,
  FETCH_CURRENT_CLASS_FAIL
} from './types';

const INITIAL_STATE = {
  currentClass: null,
  fetching: false,
  error: ''
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
    default:
      return state;
  }
};
