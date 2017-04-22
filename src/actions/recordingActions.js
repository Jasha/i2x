import { RECORDING_ACTION_START, GET_ALL_RECORDINGS_SUCCESS, GET_ALL_RECORDINGS_FAIL } from '../constants/actionTypes.js';
import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import config from 'config';
import { getFetchConfig } from './fetchConfigHelper';
import { isValidToken } from '../utils/helper';

export function getAllRecordings() {
  return (dispatch) => {
		dispatch(startLoading());

    if (!isValidToken()) {
      browserHistory.replace('/login');
    }

		let fetchConfig = getFetchConfig('GET', true);

		return fetch(config.apiUrl + 'ai/recording/list/', fetchConfig)
			.then((response) => {
				if (response.ok) {
					response.json()
          .then((response) => {
            dispatch(getAllRecordingsSuccess(response));
          });
				} else {
					dispatch(getAllRecordingsFailed());
				}
			})
      .catch(function() {
				dispatch(getAllRecordingsFailed());
			});
	}
}

function startLoading() {
  return {
    type: RECORDING_ACTION_START,
    isLoading: true
  }
}

function getAllRecordingsSuccess(response) {
  return {
    type: GET_ALL_RECORDINGS_SUCCESS,
    recordings: response
  }
}

function getAllRecordingsFailed() {
  return {
    type: GET_ALL_RECORDINGS_FAIL
  }
}
