import { AUTH_ACTION_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from '../constants/actionTypes';

const defaultState = {
  errorMessage: '',
  isAuthenticated: localStorage.getItem('id_token') !== null,
  isLoading: false
};

export default function auth(state = defaultState, action) {
  switch (action.type) {
    case AUTH_ACTION_START:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoading: true
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        errorMessage: '',
        isAuthenticated: true,
        isLoading: false
      });

    case LOGIN_FAILED:
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isAuthenticated: false,
        isLoading: false
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false
      });

    default:
      return state;
  }
}
