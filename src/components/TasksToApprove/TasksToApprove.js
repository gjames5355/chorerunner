import React from 'react';
import ApiService from '../../services/api-service';
import HouseholdContext from '../../contexts/HouseHoldContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default class TasksToApprove extends React.Component {
  state = {
    tasks: [],
  };
  static contextType = HouseholdContext;
  componentDidMount() {
    ApiService.getTasksToApprove(this.props.householdId).then(result => {
      this.setState({
        tasks: result,
      });
    });
  }

  handleUpdateTaskStatus = (taskId, householdId, status, points, memberId) => {
    ApiService.parentUpdateTaskStatus(
      taskId,
      householdId,
      status,
      points,
      memberId
    ).then(result => {
      let updatedTasksToApprove = this.state.tasks.filter(
        task => task.id !== taskId
      );
      this.setState({
        tasks: updatedTasksToApprove,
      });
      let tasks = this.context.tasks;
      if (status === 'approved') {
        let memberTaskList = tasks[memberId];
        let filteredTasks = memberTaskList.tasks.filter(task => {
          return task.id !== taskId;
        });
        tasks[memberId].tasks = filteredTasks;
        tasks[memberId].total_score += points;
        this.context.setTasks(tasks);
      }
      if (status === 'assigned') {
        tasks[memberId].tasks.map(task => {
          if (task.id === taskId) {
            task.status = 'assigned';
          }
          return null;
        });
        this.context.setTasks(tasks);
      }
    });
  };

  render() {
    const { householdId, memberId } = this.props;
    return (
      <section className='tasks-to-approve'>
        <h3>Completed Tasks</h3>
        <ul className='householdpage-member-task-list'>
          {this.state.tasks.map(task => {
            if (task.member_id === memberId) {
              return (
                <li key={task.id} className='completed-task'>
                  <div className='completed-task-container'>
                    <div className='hhp-title'>
                      <span>{task.title}</span>
                    </div>
                    <div className='hhp-points'>
                      <span>points: {task.points}</span>
                    </div>
                  </div>
                  <div className='thumb-container'>
                    <button
                      className='thumb'
                      onClick={() =>
                        this.handleUpdateTaskStatus(
                          task.id,
                          householdId,
                          'approved',
                          task.points,
                          task.member_id
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        size='lg'
                        color='rgb(255, 217, 0)'
                      />
                    </button>
                    <button
                      className='thumb'
                      onClick={() =>
                        this.handleUpdateTaskStatus(
                          task.id,
                          householdId,
                          'assigned',
                          task.points,
                          task.member_id
                        )
                      }
                    >
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        size='lg'
                        color='rgb(255, 217, 0)'
                      />
                    </button>
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </section>
    );
  }
}
