import { CREATE_TODO, CREATE_TODO_SUCCESS, CREATE_TODO_FAIL } from "./types";

const INITIAL_STATE = {
  todos: [],
  status: {
    creating: false,
    editing: false,
    deleting: false,
    reading: false
  },
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return { ...state, status: { ...state.status, creating: true } };
    }
    case CREATE_TODO_SUCCESS: {
      const todosCopy = state.todos;
      todosCopy.push(action.todo);
      return {
        ...state,
        status: { ...state.status, creating: false },
        todos: todosCopy
      };
    }
    case CREATE_TODO_FAIL: {
      return {
        ...state,
        error: "Något gick fel",
        status: { ...state.status, creating: false }
      };
    }
    default:
      return state;
  }
};
