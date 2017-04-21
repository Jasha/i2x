import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/App';
class App extends React.Component {
  render() {
    const {actions, AuthReducer, RecordingReducer} = this.props;
    return <div>{this.props.children}</div>;
  }
}
App.propTypes = {
  actions: PropTypes.shape({}),
  AuthReducer: PropTypes.shape({}),
  RecordingReducer: PropTypes.shape({})
};
function mapStateToProps(state) {
  const props = {
    AuthReducer: state.AuthReducer,
    RecordingReducer: state.RecordingReducer
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
