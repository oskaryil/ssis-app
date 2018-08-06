import axios from "axios";

import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL
} from "./types";

const fetchTodos = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_TODOS });
  try {
    const { data } = await axios({
      method: "get",
      url: `/todo`,
      headers: {
        Authorization: `${getState().auth.user.token}`
      }
    });
    dispatch({ type: FETCH_TODOS_SUCCESS, todos: data });
  } catch (err) {
    dispatch({ type: FETCH_TODOS_FAIL, error: err });
  }
};

const createTodo = values => dispatch => {
  dispatch({ type: CREATE_TODO });
  dispatch({ type: CREATE_TODO_SUCCESS, todo: values });
};

export { fetchTodos, createTodo };
