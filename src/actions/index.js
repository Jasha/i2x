/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point. */
import recordingActions from '../actions/recordingActions.js';
import authActions from '../actions/authActions.js';
const actions = {
  authActions,
  recordingActions
};
module.exports = actions;
