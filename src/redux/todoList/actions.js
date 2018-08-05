import { CREATE_TODO, CREATE_TODO_SUCCESS, CREATE_TODO_FAIL } from "./types";

const createTodo = values => dispatch => {
  dispatch({ type: CREATE_TODO });
  dispatch({ type: CREATE_TODO_SUCCESS, todo: values });
};

export { createTodo };
