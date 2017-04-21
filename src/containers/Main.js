import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/authActions';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoutAction = this.handleLogoutAction.bind(this);
  }

  handleLogoutAction() {
    this.props.dispatch(logout());
  }

  render() {
    const { actions } = this.props;
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={'/recordings'}>i2x Challenge</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem onClick={this.handleLogoutAction}>Logout</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Main.propTypes = {};

export default connect()(Main);
