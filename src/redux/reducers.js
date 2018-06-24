/** @flow */
import { combineReducers } from 'redux';

import AuthenticationReducer from '../modules/authentication/reducer';

const reducers = {
  authentication: AuthenticationReducer,
};

export type Reducers = typeof reducers;

const rootReducer = combineReducers(reducers);

export default rootReducer;
