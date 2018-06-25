// @flow
import moment from 'moment';
import Baccalaureate from './baccalaureate';
import { FETCH_BACCALAUREATES_REQUEST, FETCH_BACCALAUREATES_SUCCESS, FETCH_BACCALAUREATES_FAILURE } from './actions';

export type BaccalaureateState = {
  isFetching: boolean,
  error: ?Object,
  baccalaureates: ?Array<Baccalaureate>,
  lastUpdate: ?moment;
};

const INITIAL_STATE: BaccalaureateState = {
  isFetching: false,
  error: null,
  baccalaureates: null,
  lastUpdate: null,
};

export default (state: BaccalaureateState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_BACCALAUREATES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_BACCALAUREATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        baccalaureates: action.baccalaureates,
        lastUpdate: action.lastUpdate,
      };
    case FETCH_BACCALAUREATES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
