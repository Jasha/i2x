/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer. */
import { combineReducers } from 'redux';
import RecordingReducer from '../reducers/RecordingReducer.js';
import AuthReducer from '../reducers/AuthReducer.js';
const reducers = {
  AuthReducer,
  RecordingReducer
};
const combined = combineReducers(reducers);
module.exports = combined;
