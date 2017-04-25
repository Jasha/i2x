import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import config from 'config';
import { AUTH_ACTION_START, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/actionTypes.js';
import getFetchConfig from './fetchConfigHelper';

function startLoading() {
  return {
    type: AUTH_ACTION_START,
    isLoading: true
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    errorMessage
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLoading());

    const fetchConfig = getFetchConfig('POST', false, JSON.stringify({ email, password }));

    return fetch(`${config.apiUrl}core/login/`, fetchConfig)
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((data) => {
              dispatch(loginSuccess());

              localStorage.setItem('id_token', data.token);
              browserHistory.replace('/');
            });
        } else {
          dispatch(loginFailed('Invalid username/password.'));
        }
      })
      .catch(() => {
        dispatch(loginFailed('Log in failed. Please try again.'));
      });
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('id_token');
    browserHistory.replace('/login');

    dispatch(logoutSuccess());
  };
}
