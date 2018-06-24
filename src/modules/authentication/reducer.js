// @flow
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

export type AuthenticationState = {
  isAuthenticating: boolean,
  error: ?Object,
};

const INITIAL_STATE: AuthenticationState = {
  isAuthenticating: false,
  error: null,
};

export default (state: AuthenticationState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error,
      };
    default:
      return state;
  }
};
