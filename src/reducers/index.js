import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage as storage } from 'react-native'; // default: localStorage if web, AsyncStorage if react-native

import AuthReducer from './auth.reducer';

const config = {
  key: 'root',
  storage
};

const reducers = persistCombineReducers(config, {
  auth: AuthReducer
});

export default reducers;
