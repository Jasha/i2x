import { RECORDING_ACTION_START, GET_ALL_RECORDINGS_SUCCESS, GET_ALL_RECORDINGS_FAIL } from '../constants/actionTypes.js';

const defaultState = {
  isLoading: false,
  recordings: []
};

export default function recording(state = defaultState, action) {
  switch (action.type) {
    case RECORDING_ACTION_START:
      return Object.assign({}, state, {
        isLoading: true
      });

    case GET_ALL_RECORDINGS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        recordings: action.recordings.results
      });

    case GET_ALL_RECORDINGS_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        recordings: []
      });

    default:
      return state;
  }
}
