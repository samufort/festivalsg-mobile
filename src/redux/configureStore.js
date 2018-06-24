// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import reducers from './reducers';

export default function configureStore(initialState: Object) {
  const isProd: boolean = process.env.NODE_ENV === 'production';

  const middlewares: Array<any> = [thunk, axiosMiddleware()];

  let enhancers;

  if (!isProd) {
    enhancers = compose(
      applyMiddleware(...middlewares, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    enhancers = compose(applyMiddleware(...middlewares));
  }

  const store = createStore(reducers, enhancers);

  return store;
}
