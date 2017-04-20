import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { Grid, Col, Row } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import Loader from '../components/Loader';

const i2xLogo = require('../images/i2xLogo.png');

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  submitLoginForm(email, password) {
    this.props.dispatch(login(email, password));
  }

  render() {
    return (
      <Grid>
        <Loader loaded={!this.props.isLoading}>
          <Row>
            <Col md={4} mdPush={4}>
              <img src={i2xLogo} alt="i2x" />
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={4} mdPush={2}>
              <h1>i2x Challenge</h1>
              <h3>Amar Jasarevic</h3>
            </Col>
            <Col md={6} sm={8}>
              <LoginForm errorMessage={this.props.errorMessage} submitAction={this.submitLoginForm} />
            </Col>
          </Row>
        </Loader>
      </Grid>
    );
  }
}

Login.propTypes = { };

function mapStateToProps(state) {
  const props = { 
    errorMessage: state.AuthReducer.errorMessage,
    isLoading: state.AuthReducer.isLoading
  };
  return props;
}

export default connect(mapStateToProps)(Login);
