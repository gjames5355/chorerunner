import React from 'react';
import ApiService from '../../services/api-service';
//import HouseHoldContext from '../../contexts/HouseHoldContext'
import './EditMember.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default class EditMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.member.member_id,
      name: this.props.member.name,
      username: this.props.member.username,
      password: '',
      editMember: this.props.editMember,
      showForm: false,
      error: null,
      validateError: {
        nameError: '',
        usernameError: '',
      },
    };
  }

  toggleEditMember = () => {
    this.setState({
      editMember: !this.state.editMember,
    });
    this.setState({ showForm: !this.state.showForm });
  };

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let username = this.state.username.trim();
    let nameError = '';
    let usernameError = '';

    if (this.state.name.length <= 2) {
      nameError = 'Please enter 3 characters or more';
    }

    // Validates child's username
    if (username.length > 50) {
      usernameError = 'Your name must be less than 50 characters';
    }

    if (nameError || usernameError) {
      this.setState({ validateError: { usernameError, nameError } });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { updateMembersList } = this.props;
    let isValid = this.validate();
    let household_id = this.props.household_id;
    let updatedMember = {
      id: this.state.id,
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };

    if (isValid) {
      ApiService.editMember(updatedMember, household_id, this.state.id)
        .then(res => {
          let newMember = res[0];
          return newMember;
        })
        .then(newMember => {
          updateMembersList(newMember);
          this.setState({ error: null });
          this.toggleEditMember();
        })
        .catch(error => this.setState({ error: error.error }));
    }
  };

  handleCancel = () => {
    this.setState({
      showForm: false,
    });
  };

  renderFormButton() {
    return (
      <button className='pen-button' onClick={() => this.toggleEditMember()}>
        <FontAwesomeIcon icon={faPencilAlt} size='2x' color='#b1b1b1' />
      </button>
    );
  }

  renderForm() {
    const { usernameError, nameError } = this.state.validateError;
    const { error } = this.state;
    return (
      <div className='edit-member-container'>
        <p>Edit member</p>
        <form onSubmit={this.handleSubmit} id='edit-member-form'>
          <label htmlFor='member-name'>Name</label>
          <input
            type='text'
            id='member-name'
            name='name'
            value={this.state.name}
            onChange={this.onChangeHandle}
          ></input>
          <label htmlFor='child-username'>Child username</label>
          <input
            type='text'
            id='child-username'
            name='username'
            value={this.state.username}
            onChange={this.onChangeHandle}
          ></input>
          <label htmlFor='child-password'>Child password</label>
          <input
            type='password'
            id='child-password'
            name='password'
            onChange={this.onChangeHandle}
          ></input>
          <div className='valid-error'>
            {nameError || usernameError || error}
          </div>
          <button type='submit' className='submit-edit-member'>
            Submit Changes
          </button>
          <button type='reset' onClick={this.handleCancel} className='cancel'>
            Cancel
          </button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <>
        {!!this.state.showForm ? (
          <>{this.renderForm()}</>
        ) : (
          <>{this.renderFormButton()}</>
        )}
      </>
    );
  }
}
