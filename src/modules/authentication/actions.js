// @flow
import AuthenticationAPI from './api';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export function authenticate(accessToken: String) {
  return async (dispatch: any) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const data = { accessToken };
      const response = await AuthenticationAPI.authenticateWithFacebook(data);

      dispatch({ type: LOGIN_SUCCESS, token: response.data.token });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, error: error });
    }
  };
}
