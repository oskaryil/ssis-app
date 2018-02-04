import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from '../reducers';

export default function configureStore() {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
  }

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middlewares))
  );

  let persistor = persistStore(store);
  return { persistor, store };
}
