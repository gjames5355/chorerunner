import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';

export default class MemberLogin extends Component {
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
    const destination = (location.state || {}).from || '/member-dashboard';
    history.push(destination);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;

    this.setState({ error: null });

    AuthApiService.postMemberLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken, res.type);
        this.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error, username, password } = this.state;

    return (
      <div className='parent-login'>
        <h2>Member login</h2>
        <div className='demo'>
          <h3>Demo:</h3>
          <p>username: bartman</p>
          <p>password: bartman</p>
        </div>
        <form
          className='parent-form-container'
          id='member-login'
          onSubmit={this.handleSubmit}
        >
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
