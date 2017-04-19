/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer. */
import { combineReducers } from 'redux';
import AuthReducer from '../reducers/AuthReducer.js';

const reducers = {
  AuthReducer
};

const combined = combineReducers(reducers);

module.exports = combined;
