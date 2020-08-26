import React from 'react';
import ApiService from '../../services/api-service';
import HouseholdContext from '../../contexts/HouseHoldContext';

export default class AddMembers extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    household_id: this.context.households.id || '',
    error: null,
    validateError: {
      usernameError: '',
      householdError: '',
    },
  };
  static contextType = HouseholdContext;

  validate = () => {
    let username = this.state.username.trim();
    let household = this.state.household_id;
    let usernameError = '';
    let householdError = '';

    // Validates child's username
    if (username.length > 50) {
      usernameError = 'Your name must be less than 50 characters';
    }

    //Validates Select Household
    if (household === '') {
      householdError = 'Please select a household';
    }

    if (usernameError || householdError) {
      this.setState({ validateError: { usernameError, householdError } });
      return false;
    }
    return true;
  };

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //Specifically for select option
  onSelectChangeHandle = e => {
    if (!!e.target.value) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let isValid = this.validate();
    const householdId = this.state.household_id;

    let newMember = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      household_id: householdId,
    };
    if (isValid) {
      ApiService.addHouseholdMember(householdId, newMember)
        .then(member => {
          this.setState({
            name: '',
            username: '',
            password: '',
            error: null,
          });
          this.props.handleRenderUpdate(member);
        })
        .catch(res => this.setState({ error: res.error }));
      this.setState({ error: 'Success!' });
    }
  };

  render() {
    const { households } = this.context;
    const { error } = this.state;
    const { usernameError, householdError } = this.state.validateError;
    return (
      <div className='add-member container'>
        <p>ADD HOUSEHOLD MEMBERS:</p>
        <form
          onSubmit={this.handleSubmit}
          id='add-household-form'
          className='add-household-form'
        >
          <label htmlFor='member-name'>Name</label>
          <input
            type='text'
            id='member-name'
            name='name'
            required
            onChange={this.onChangeHandle}
            value={this.state.name}
          ></input>

          <label htmlFor='household'>Household</label>
          <select
            className='select-css'
            type='text'
            id='assignee'
            name='household_id'
            onChange={this.onSelectChangeHandle}
            defaultValue='Select household'
            required
          >
            <option value=''>Select Household</option>
            {households.map((hh, index) => (
              <option key={index} value={hh.id}>
                {hh.name}
              </option>
            ))}
          </select>

          <label htmlFor='child-username'>Member Username</label>
          <input
            type='text'
            id='child-username'
            name='username'
            required
            onChange={this.onChangeHandle}
            value={this.state.username}
          ></input>
          <label htmlFor='child-password'>Member Password</label>
          <input
            type='password'
            id='child-password'
            name='password'
            required
            onChange={this.onChangeHandle}
            value={this.state.password}
          ></input>
          <button type='submit' className='submitHH'>
            + add new member
          </button>
          <div role='alert'>
            {
              <p className='alertMsg'>
                {error || householdError || usernameError}
              </p>
            }
          </div>
        </form>
      </div>
    );
  }
}
