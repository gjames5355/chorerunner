import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import './ParentLogin.css';

export default class ParentLogin extends Component {
  static contextType = UserContext;

  state = {
    username: '',
    password: '',
    error: null,
  };

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/parent-dashboard';
    history.push(destination);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken, res.type);
        this.onLoginSuccess();
        this.setState({ error: null });
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { username, password, error } = this.state;
    return (
      <div className='parent-login container'>
        <h2>Parent Login</h2>

        <div className='demo'>
          <h3>Demo:</h3>
          <p>username: margeincharge</p>
          <p>password: Password123!</p>
        </div>
        <form className='parent-form-container' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              name='username'
              type='text'
              onChange={this.onChangeHandle}
              value={username}
              required
            ></input>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              onChange={this.onChangeHandle}
              value={password}
              required
            ></input>
          </div>
          <div role='alert'>{error && <p>{error}</p>}</div>
          <button type='submit'>login</button>
        </form>
      </div>
    );
  }
}
