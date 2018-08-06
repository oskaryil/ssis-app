import {
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL
} from "./types";

const INITIAL_STATE = {
  todos: [],
  status: {
    creating: false,
    editing: false,
    deleting: false,
    fetching: false,
    loading: false
  },
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODOS: {
      return {
        ...state,
        status: { ...state.status, fetching: true, loading: true }
      };
    }
    case FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        status: { ...state.status, fetching: false, loading: false },
        todos: action.todos
      };
    }
    case FETCH_TODOS_FAIL: {
      return {
        ...state,
        status: { ...state.status, fetching: false, loading: false },
        error: "Något gick fel"
      };
    }
    case CREATE_TODO: {
      return {
        ...state,
        status: { ...state.status, creating: true, loading: true }
      };
    }
    case CREATE_TODO_SUCCESS: {
      const todosCopy = state.todos;
      console.log(todosCopy);
      todosCopy.push(action.todo);
      console.log(todosCopy);
      return {
        ...state,
        status: { ...state.status, creating: false, loading: false },
        todos: todosCopy
      };
    }
    case CREATE_TODO_FAIL: {
      return {
        ...state,
        error: "Något gick fel",
        status: { ...state.status, creating: false, loading: false }
      };
    }
    default:
      return state;
  }
};
