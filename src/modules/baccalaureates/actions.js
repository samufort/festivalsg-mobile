// @flow
import BaccalaureateAPI from './api';

export const FETCH_BACCALAUREATES_REQUEST = 'festival/FETCH_BACCALAUREATES_REQUEST';
export const FETCH_BACCALAUREATES_SUCCESS = 'festival/FETCH_BACCALAUREATES_SUCCESS';
export const FETCH_BACCALAUREATES_FAILURE = 'festival/FETCH_BACCALAUREATES_FAILURE';

export function fetchBaccalaureates() {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_BACCALAUREATES_REQUEST });

    try {
      const response = await BaccalaureateAPI.fetchBaccalaureates();

      dispatch({ type: FETCH_BACCALAUREATES_SUCCESS, baccalaureates: response.data.baccalaureates, lastUpdate: response.data.lastUpdate });
    } catch (error) {
      dispatch({ type: FETCH_BACCALAUREATES_FAILURE, error: error });
    }
  };
}
