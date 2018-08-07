import {
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAIL,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  MARK_TODO_AS_DONE,
  MARK_TODO_AS_DONE_SUCCESS,
  MARK_TODO_AS_DONE_FAIL
} from "./types";

const INITIAL_STATE = {
  todos: [],
  done: [],
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
      const todosCopy = action.todos;
      const todos = todosCopy.filter(todo => todo.done !== true);
      const doneTodos = todosCopy.filter(todo => todo.done === true);
      return {
        ...state,
        status: { ...state.status, fetching: false, loading: false },
        todos: todos,
        done: doneTodos
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
      todosCopy.push(action.todo);
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
    case MARK_TODO_AS_DONE: {
      return {
        ...state,
        status: {
          ...state.status,
          loading: true
        }
      };
    }
    case MARK_TODO_AS_DONE_SUCCESS: {
      const todosCopy = state.todos;
      const doneCopy = state.done;
      const unDoneTodos = todosCopy.filter(
        todo => todo._id !== action.todo._id
      );
      doneCopy.push(action.todo);
      return {
        ...state,
        status: {
          ...state.status,
          loading: false
        },
        todos: unDoneTodos,
        done: doneCopy
      };
    }
    case MARK_TODO_AS_DONE_FAIL: {
      return {
        ...state,
        status: {
          ...state.status,
          loading: false
        }
      };
    }
    default:
      return state;
  }
};
