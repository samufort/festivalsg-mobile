/** @flow */
import { combineReducers } from 'redux';

import AuthenticationReducer from '../modules/authentication/reducer';
import BaccalaureatesReducer from '../modules/baccalaureates/reducer';

const reducers = {
  authentication: AuthenticationReducer,
  baccalaureate: BaccalaureatesReducer,
};

export type Reducers = typeof reducers;

const rootReducer = combineReducers(reducers);

export default rootReducer;
