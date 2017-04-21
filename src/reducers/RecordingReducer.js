import { GET_ALL_RECORDINGS_SUCCESS, GET_ALL_RECORDINGS_FAIL } from '../constants/actionTypes.js';

const defaultState = {
  recordings: []
};

export default function recording(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_RECORDINGS_SUCCESS:
      return Object.assign({}, state, {
				recordings: action.recordings.results
			});
    
    default:
      return state;
  }
}
