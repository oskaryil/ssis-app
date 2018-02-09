import {
  FETCH_LUNCH_MENU,
  FETCH_LUNCH_MENU_FAIL,
  FETCH_LUNCH_MENU_SUCCESS
} from './types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LUNCH_MENU:
      return state;
    case FETCH_LUNCH_MENU_SUCCESS:
      return action.payload;
    case FETCH_LUNCH_MENU_FAIL:
      return state;
    default:
      return state;
  }
};
