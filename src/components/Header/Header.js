import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className='loggedin-info'>
        <span>Hi Owner!</span>
        <nav>
          <Link
            style={{ textDecoration: 'none' }}
            onClick={this.handleLogoutClick}
            to='/'
          >
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link style={{ textDecoration: 'none' }} to='/login'>
          Login
        </Link>{' '}
        <Link style={{ textDecoration: 'none' }} to='/register'>
          Sign up
        </Link>
      </nav>
    );
  }

  render() {
    let display = (
      <h1>
        {TokenService.hasAuthToken() ? (
          <Link
            to={
              this.context.user.type === 'user'
                ? '/parent-dashboard'
                : '/member-dashboard'
            }
            style={{ textDecoration: 'none' }}
          >
            Chore Runner
          </Link>
        ) : (
          <Link to='/' style={{ textDecoration: 'none' }}>
            Chore Runner
          </Link>
        )}
      </h1>
    );

    return (
      <>
        {display}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </>
    );
  }
}

export default Header;
