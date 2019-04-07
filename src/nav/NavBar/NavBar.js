import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Menu, Container, Button} from 'semantic-ui-react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {openModal} from '../../features/modals/modalActions';
import {Logout} from '../../features/auth/AuthActions';
// import EventForm from '../../event/EventForm/EventForm';
class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };

  handleSignOut = () => {
    this.props.Logout();
    this.props.history.push('/');
  };

  render() {
    const {auth} = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to={'/'} header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          {authenticated && (
            <Menu.Item as={NavLink} to="/people" name="People" />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to={'/createEvent'}
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu
              currentUser={auth.currentUser}
              signOut={this.handleSignOut}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              Register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapStatetoProps = state => ({
  auth: state.auth,
});

export default withRouter(
  connect(
    mapStatetoProps,
    {openModal}
  )(NavBar)
);
