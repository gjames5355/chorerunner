import React, { Component } from 'react';
import EditMember from '../EditMember/EditMember';
import TasksList from '../TasksList/TasksList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import TasksToApprove from '../../components/TasksToApprove/TasksToApprove';
import './MembersList.css';

export default class MembersList extends Component {
  render() {
    const {
      tasks,
      data,
      household_id,
      updateMembersList,
      handleDeleteMember,
      handleTaskDelete,
    } = this.props;

    return (
      <div>
        {data.map((member, index) => {
          let assigned = [];
          let completed = [];
          member.tasks.forEach(task => {
            if (task.status === 'assigned') {
              assigned.push(task);
            } else if (task.status === 'completed') {
              completed.push(task);
            }
          });
          return (
            <section key={index} className='member-card'>
              <div className='delete-edit-name'>
                <h3 className='member-name'>{member.name}</h3>
                <EditMember
                  updateMembersList={updateMembersList}
                  member={member}
                  household_id={household_id}
                />

                <button
                  className='trash-button'
                  onClick={() =>
                    handleDeleteMember(member.member_id, household_id)
                  }
                >
                  <FontAwesomeIcon
                    icon={faUserTimes}
                    size='2x'
                    color='#b1b1b1'
                  />
                </button>
              </div>
              <p>Total score: {member.total_score}</p>
              {!completed.length ? (
                <section className='tasks-to-approve'>
                  <h3>Completed Tasks</h3>
                  <p>There are no tasks completed</p>
                </section>
              ) : (
                <TasksToApprove
                  householdId={household_id}
                  memberId={member.member_id}
                />
              )}
              {!assigned.length ? (
                <section className='assigned-tasks'>
                  <h3>Assigned tasks</h3>
                  <p>There are no tasks assigned</p>
                </section>
              ) : (
                <TasksList
                  household_id={household_id}
                  tasks={tasks}
                  member={member}
                  handleTaskDelete={handleTaskDelete}
                />
              )}
            </section>
          );
        })}
      </div>
    );
  }
}
