/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer. */
import { combineReducers } from 'redux';
import Plain from '../reducers/Plain.js';

const reducers = { Plain };
const combined = combineReducers(reducers);

module.exports = combined;
