import React, { Component } from 'react';
import AddTask from '../../components/AddTask/AddTask';
import ApiService from '../../services/api-service';
import HouseholdContext from '../../contexts/HouseHoldContext';
import MembersList from '../../components/MembersList/MembersList';
import './HouseholdPage.css';

export default class HouseholdPage extends Component {
  state = {
    membersList: [],
    tasks: {},
    task: '',
    editMember: false,
  };
  static contextType = HouseholdContext;

  componentDidMount() {
    this.updateEverything();
  }

  //----- Re-get the updated values so the page can be updated with the new values -----
  updateEverything = () => {
    const household_id = this.props.match.params.id;
    ApiService.getMembers(household_id).then(members => {
      this.setState({
        membersList: members,
      });
    });
    ApiService.getTasksForAll(household_id).then(tasks => {
      this.context.setTasks(tasks);
    });
  };

  //Member callbacks
  updateMembersList = updatedMember => {
    let newMembers = this.state.membersList.map(member =>
      member.id !== updatedMember.id ? member : updatedMember
    );
    this.setState({
      membersList: newMembers,
    });
    let tasks = this.context.tasks;
    tasks[updatedMember.id].name = updatedMember.name;
    tasks[updatedMember.id].username = updatedMember.username;
    this.context.setTasks(tasks);
  };

  toggleEditMember = () => {
    this.setState({ editMember: !this.state.editMember });
  };

  handleDeleteMember = (id, household_id) => {
    ApiService.deleteMember(id, household_id)
      .then(() => {
        let newMembers = this.state.membersList.filter(
          member => member.id !== id
        );
        this.setState({ membersList: newMembers });
        let tasks = this.context.tasks;
        delete tasks[id];
        this.context.setTasks(tasks);
      })
      .catch(error => this.context.setError(error));
  };

  handleTaskDelete = (task_id, member_id) => {
    const household_id = this.props.match.params.id;
    let tasks = this.context.tasks;
    let memberTaskList = tasks[member_id];
    let filteredTasks = memberTaskList.tasks.filter(task => {
      return task.id !== task_id;
    });
    tasks[member_id].tasks = filteredTasks;
    ApiService.deleteTask(household_id, task_id)
      .then(() => this.context.setTasks(tasks))
      .then(() => {
        this.updateMembersList();
      })
      .catch(error => this.context.setError(error));
  };

  handleResetScores = () => {
    let household_id = this.props.match.params.id;
    ApiService.resetScores(household_id)
      .then(res => {
        const { tasks } = this.context;
        for (let member in tasks) {
          tasks[member].total_score = 0;
        }
        this.context.setTasks(tasks);
      })
      .catch(error => this.context.setError(error));
  };

  render() {
    const { tasks } = this.context;
    const data = Object.values(tasks);

    return (
      <div className='household-page-container'>
        {/* <h2>Household page</h2> */}
        <div className='top-buttons-cont'>
          <AddTask
            members={this.state.membersList}
            household_id={this.props.match.params.id}
            updateEverything={this.updateEverything}
          />
          <button onClick={this.handleResetScores} className='reset-all-scores'>
            reset all scores
          </button>
        </div>
        <MembersList
          tasks={tasks}
          data={data}
          household_id={this.props.match.params.id}
          editMember={this.state.editMember}
          updateMembersList={this.updateMembersList}
          toggleEditMember={this.toggleEditMember}
          handleDeleteMember={this.handleDeleteMember}
          handleTitleChange={this.handleTitleChange}
          handlePointsChange={this.handlePointsChange}
          handleTaskDelete={this.handleTaskDelete}
        />
      </div>
    );
  }
}
