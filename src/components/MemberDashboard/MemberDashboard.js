import React, { Component } from 'react';
import HouseholdContext from '../../contexts/HouseHoldContext';
import ApiService from '../../services/api-service.js';
import './MemberDashboard.css';
import Leaderboard from '../LeaderBoard/LeaderBoard';
import Badge from '../Badge/Badge';

export default class MemberDashboard extends Component {
  static contextType = HouseholdContext;

  componentDidMount() {
    ApiService.getMemberTasks()
      .then(res => {
        this.context.setMemberTasks(res);
      })
      .catch(error => this.context.setError(error));
  }

  handleCompleted(id) {
    ApiService.completeTask(id)
      .then(this.context.completeTask(id))
      .catch(error => this.context.setError(error));
  }

  renderTasks() {
    const tasks = this.context.memberTasks;
    return tasks.map(task => {
      return (
        <li key={task.id}>
          <div className='taskName'>
            <p>{task.title}</p>
          </div>
          <div className='points'>
            <span>{task.points} EXP</span>
          </div>
          <div className='task-control'>
            <button
              onClick={() => {
                this.handleCompleted(task.id);
              }}
            >
              Clear!
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <section className='memberDashboard'>
        <div className='member-container'>
          <div className='leaderboard_container'>
            <Leaderboard />
          </div>
          <Badge />
          <div className='chores-container'>
            <h2>Chore-llenges</h2>

            <div className='task_list'>
              <ul>{this.renderTasks()}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
