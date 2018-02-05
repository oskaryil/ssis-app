import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage as storage } from 'react-native'; // default: localStorage if web, AsyncStorage if react-native
import { reducer as formReducer } from 'redux-form';

import AuthReducer from '../redux/auth/reducer';

const config = {
  key: 'root',
  storage
};

const reducers = persistCombineReducers(config, {
  auth: AuthReducer,
  form: formReducer
});

export default reducers;
