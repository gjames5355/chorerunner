import React, { Component } from 'react';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import './RegistrationForm.css';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = {
    name: '',
    username: '',
    password: '',
    error: null,
    validateError: {
      nameError: '',
      usernameError: '',
    },
  };

  firstInput = React.createRef();

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validateForm = () => {
    let name = this.state.name.trim();
    let userName = this.state.username.trim();

    let usernameError = '';
    let nameError = '';

    //Validates the persons name

    if (name.length < 6) {
      nameError = 'Please enter more than 6 characters';
    }
    if (name.length > 50) {
      nameError = 'Your name must be less than 50 characters';
    }

    //Validates the username
    if (userName.length < 6) {
      usernameError = 'Please enter more than 6 characters';
    }
    if (userName.length > 50) {
      usernameError = 'Your name must be less than 50 characters';
    }

    if (usernameError || nameError) {
      this.setState({ validateError: { usernameError, nameError } });
      return false;
    }
    return true;
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const isValid = this.validateForm();
    const formError = this.state.error;

    const { name, username, password } = ev.target;

    if (isValid) {
      AuthApiService.postUser({
        name: name.value,
        username: username.value,
        password: password.value,
      })
        .then(user => {
          name.value = '';
          username.value = '';
          password.value = '';
          this.props.onRegistrationSuccess();
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
    }
    if (formError) {
      this.setState({
        name: '',
        username: '',
        password: '',
        error: null,
        validateError: {},
      });
    }
  };

  render() {
    const { name, username, password, error } = this.state;
    const { nameError, usernameError } = this.state.validateError;

    return (
      <div className='box'>
        <form
          className='registration'
          onSubmit={this.handleSubmit}
          name='registration-form'
        >
          <div className='formItem'>
            <Label htmlFor='registration-name-input'>
              Enter your name
              <Required />
            </Label>
            <Input
              className='formBox'
              ref={this.firstInput}
              id='registration-name-input'
              name='name'
              value={name}
              onChange={this.onChangeHandle}
              required
            />
            <div role='alert'>{nameError}</div>
          </div>
          <div className='formItem'>
            <Label htmlFor='registration-username-input'>
              Choose a username
              <Required />
            </Label>
            <Input
              className='formBox'
              id='registration-username-input'
              name='username'
              value={username}
              onChange={this.onChangeHandle}
              required
            />
            <div role='alert'>{usernameError}</div>
          </div>
          <div className='formItem'>
            <Label htmlFor='registration-password-input'>
              Choose a password
              <Required />
            </Label>
            <Input
              className='formBox'
              id='registration-password-input'
              name='password'
              type='password'
              value={password}
              onChange={this.onChangeHandle}
              required
            />
          </div>
          <div role='alert'>{error && <p className='alertMsg'>{error}</p>}</div>
          <footer className='formFooter'>
            <Button type='submit' className='basicBtn'>
              Sign up
            </Button>{' '}
            <br />
          </footer>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
