import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { logout } from '../actions/authActions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoutAction = this.handleLogoutAction.bind(this);
  }

  handleLogoutAction() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={'/'}>i2x Challenge</Link>
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

Main.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.node
};

export default connect()(Main);
