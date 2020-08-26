import React, { Component } from 'react';
import Task from '../Task/Task';

export default class TasksList extends Component {
  render() {
    const { household_id, tasks, member, handleTaskDelete } = this.props;

    return (
      <section className='assigned-tasks'>
        <h3>Assigned tasks</h3>
        <ul className='householdpage-member-task-list'>
          {member.tasks.map(task => {
            if (task.status === 'assigned') {
              return (
                <Task
                  household_id={household_id}
                  tasks={tasks}
                  member={member}
                  task={task}
                  key={task.id}
                  handleTaskDelete={handleTaskDelete}
                />
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
