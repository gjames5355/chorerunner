import React from 'react';
import HouseholdContext from '../../contexts/HouseHoldContext';
import config from '../../config';
import TokenService from '../../services/token-service';
import './AddTask.css';

export default class AddTask extends React.Component {
  state = {
    showForm: false,
    title: '',
    points: '',
    member_id: '',
  };
  static contextType = HouseholdContext;

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

  toggleForm = () => {
    const formToggle = !this.state.showForm;
    this.setState({ showForm: formToggle });
  };

  handleSubmit = e => {
    e.preventDefault();
    const household_id = this.props.household_id;
    let task = {
      title: this.state.title,
      points: this.state.points,
      household_id: household_id,
      member_id: this.state.member_id,
    };

    fetch(`${config.API_ENDPOINT}/households/${household_id}/tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(task),
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(task => {
        let memberName = this.props.members
          .filter(
            member => parseInt(member.id) === parseInt(this.state.member_id)
          )
          .pop().name;
        let userName = this.props.members
          .filter(
            member => parseInt(member.id) === parseInt(this.state.member_id)
          )
          .pop().username;

        const allTasks = this.context.tasks;
        if (allTasks[this.state.member_id]) {
          allTasks[this.state.member_id].tasks.push({
            id: task.id,
            title: task.title,
            points: task.points,
          });
        } else {
          allTasks[this.state.member_id] = {
            member_id: this.state.member_id,
            name: memberName,
            username: userName,
            total_score: 0,
            tasks: [{ id: task.id, title: task.title, points: task.points }],
          };
        }
        this.context.setTasks(allTasks);
        this.props.updateEverything();
        this.setState({
          showForm: false,
          title: '',
          points: '',
          member_id: '',
        });
      })
      .catch(e => {
        console.error({ e });
      });
  };

  handleCancel = () => {
    this.setState({
      showForm: false,
    });
  };

  render() {
    let display;
    if (this.state.showForm) {
      display = (
        <form
          onSubmit={this.handleSubmit}
          id='add-task-form'
          className='add-task-form'
        >
          <p>assign tasks</p>
          <label htmlFor='task-name'>Task name</label>
          <input
            type='text'
            id='task-name'
            name='title'
            required
            onChange={this.onChangeHandle}
            value={this.state.title}
          ></input>
          <label htmlFor='assignee'>Task assigned to</label>
          <select
            type='text'
            id='assignee'
            name='member_id'
            className='select-css'
            required
            onChange={this.onSelectChangeHandle}
            defaultValue='Select household member'
          >
            <option value=''>Select household member</option>
            {this.props.members.map((member, index) => (
              <option key={index} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
          <label htmlFor='points'>Points</label>
          <input
            type='number'
            id='points'
            min='1'
            max='100'
            name='points'
            required
            onChange={this.onChangeHandle}
            value={this.state.points}
          ></input>
          <div className='add-task-buttons'>
            <button type='submit' className='submit'>
              Add
            </button>
            <button type='reset' className='cancel' onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      );
    }

    return (
      <>
        <button onClick={this.toggleForm} id='toggle-add-task'>
          + assign tasks
        </button>
        {display}
      </>
    );
  }
}
