import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../actions/';
import Main from '../components/App';
class App extends React.Component {
  render() {
    const {actions, Plain} = this.props;
    return <Main actions={actions} Plain={Plain}/>;
  }
}
App.propTypes = {
  actions: PropTypes.shape({}),
  Plain: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  const props = { Plain: state.Plain };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
