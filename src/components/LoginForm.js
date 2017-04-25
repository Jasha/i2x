import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, Alert } from 'react-bootstrap';

class LoginForm extends React.Component {
  static validateEmail(value) {
    const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isValidEmail: true,
      isValidPassword: true
    };

    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.checkIfEnterIsPressed = this.checkIfEnterIsPressed.bind(this);
    this.handleSubmitAction = this.handleSubmitAction.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  changeUsername(event) {
    this.setState({ email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  checkIfEnterIsPressed(event) {
    // usually I use keyCode === 13, but for some reason currently I am getting keyCode equals to 0
    if (event.key === 'Enter') {
      this.handleSubmitAction();
    }
  }

  handleSubmitAction() {
    if (this.isFormValid()) {
      this.props.submitAction(this.state.email, this.state.password);
    }
  }

  isFormValid() {
    const validEmail = LoginForm.validateEmail(this.state.email);
    const validPassword = this.state.password.length > 0;

    this.setState({ isValidEmail: validEmail, isValidPassword: validPassword });

    return validEmail && validPassword;
  }

  render() {
    return (
      <div>
        <Form horizontal>
          { this.props.errorMessage.length > 0 ?
            <Alert bsStyle="danger">
              { this.props.errorMessage }
            </Alert> : null
          }
          <FormGroup controlId="formHorizontalEmail" validationState={this.state.isValidEmail ? null : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>Email</Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" onChange={this.changeUsername} onKeyPress={this.checkIfEnterIsPressed} />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword" validationState={this.state.isValidPassword ? null : 'error'}>
            <Col componentClass={ControlLabel} sm={2}>Password</Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" onChange={this.changePassword} onKeyPress={this.checkIfEnterIsPressed} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="button" onClick={this.handleSubmitAction}>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

LoginForm.displayName = 'LoginForm';

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  submitAction: PropTypes.func
};

LoginForm.defaultProps = {
  errorMessage: '',
  submitAction: () => { }
};

export default LoginForm;
