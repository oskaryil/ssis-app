import { combineReducers } from "redux";
import { persistCombineReducers } from "redux-persist";
import { AsyncStorage as storage } from "react-native"; // default: localStorage if web, AsyncStorage if react-native
import { reducer as formReducer } from "redux-form";

import AuthReducer from "../redux/auth/reducer";
import LunchReducer from "../redux/lunch/reducer";
import ScheduleReducer from "../redux/schedule/reducer";
import TodoListReducer from "../redux/todoList/reducer";

const config = {
  key: "root",
  storage
};

const reducers = persistCombineReducers(config, {
  auth: AuthReducer,
  schedule: ScheduleReducer,
  lunch: LunchReducer,
  form: formReducer,
  todoList: TodoListReducer
});

export default reducers;
