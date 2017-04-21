import { GET_ALL_RECORDINGS_SUCCESS, GET_ALL_RECORDINGS_FAIL } from '../constants/actionTypes.js';
import fetch from 'isomorphic-fetch';
import config from 'config';


export function getAllRecordings() {
  return (dispatch) => {
		//dispatch(startLoading());

		let fetchConfig = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.getItem('id_token')
      }
    }

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
