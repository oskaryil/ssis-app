import axios from "axios";

import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  MARK_TODO_AS_DONE,
  MARK_TODO_AS_DONE_SUCCESS,
  MARK_TODO_AS_DONE_FAIL
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
    return dispatch({ type: FETCH_TODOS_SUCCESS, todos: data });
  } catch (err) {
    dispatch({ type: FETCH_TODOS_FAIL, error: err });
  }
};

const createTodo = values => async (dispatch, getState) => {
  dispatch({ type: CREATE_TODO });
  try {
    const { data } = await axios({
      method: "post",
      url: `/todo`,
      data: values,
      headers: {
        Authorization: `${getState().auth.user.token}`
      }
    });
    dispatch({ type: CREATE_TODO_SUCCESS, todo: data.todo });
  } catch (err) {
    dispatch({ type: CREATE_TODO_FAIL, error: err });
  }
};

const markTodoAsDone = id => async (dispatch, getState) => {
  dispatch({ type: MARK_TODO_AS_DONE });
  try {
    const { data } = await axios({
      method: "patch",
      url: `/todo/${id}`,
      data: { done: true },
      headers: {
        Authorization: `${getState().auth.user.token}`
      }
    });
    dispatch({ type: MARK_TODO_AS_DONE_SUCCESS, todo: data.updatedTodo });
  } catch (err) {
    dispatch({ type: MARK_TODO_AS_DONE_FAIL });
  }
};

export { fetchTodos, createTodo };
