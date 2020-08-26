import React, { Component } from 'react';
import ApiService from '../services/api-service';

const HouseholdContext = React.createContext({
  households: [],
  memberTasks: [],
  error: null,
  setHouseholds: () => {},
  addHousehold: () => {},
  deleteHousehold: () => {},
  completeTask: () => {},
  setError: () => {},
  setTask: () => {},
  setTasks: () => {},
  task: '',
  tasks: {},
});

export default HouseholdContext;

export class HouseholdProvider extends Component {
  state = {
    households: [],
    memberTasks: [],
    error: null,
    task: '',
    tasks: {},
  };

  setHouseholds = households => {
    this.setState({
      households,
    });
  };

  addHousehold = newHousehold => {
    this.setHouseholds([...this.state.households, newHousehold]);
  };

  deleteHousehold = (event, householdId) => {
    event.preventDefault();
    ApiService.deleteHousehold(householdId)

      .then(() => {
        const newHouseholds = this.state.households.filter(
          household => household.id !== householdId
        );
        this.setHouseholds([...newHouseholds]);
      })
      .catch(this.setError('Household could not be deleted.'));
  };

  setMemberTasks = memberTasks => {
    this.setState({
      memberTasks,
    });
  };

  setTask = task => {
    this.setState({ task });
  };

  setTasks = tasks => {
    this.setState({ tasks });
  };

  completeTask = taskId => {
    const newTasks = this.state.memberTasks.filter(
      memberTasks => memberTasks.id !== taskId
    );
    this.setState({ memberTasks: newTasks });
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    const value = {
      households: this.state.households,
      task: this.state.task,
      tasks: this.state.tasks,
      memberTasks: this.state.memberTasks,
      error: this.state.error,
      setHouseholds: this.setHouseholds,
      setMemberTasks: this.setMemberTasks,
      addHousehold: this.addHousehold,
      deleteHousehold: this.deleteHousehold,
      setError: this.setError,
      setTask: this.setTask,
      setTasks: this.setTasks,
      completeTask: this.completeTask,
    };

    return (
      <HouseholdContext.Provider value={value}>
        {this.props.children}
      </HouseholdContext.Provider>
    );
  }
}
