import React, { Component } from 'react';
import HouseholdContext from '../../contexts/HouseHoldContext';
import ApiService from '../../services/api-service.js';
import './LeaderBoard.css';

export default class Leaderboard extends Component {
  static contextType = HouseholdContext;

  state = {
    members: [],
  };

  componentDidMount() {
    ApiService.getMemberScores()
      .then(res => {
        this.setState({ members: res });
      })
      .catch(error => this.context.setError(error));
  }

  renderScores() {
    let members = this.state.members;
    return members.map((member, index) => {
      return (
        <li key={member.id} className='score_display'>
          {index > 2 ? <div className='rank'>{`${index + 1}`}</div> : null}
          <div className='name_col'>
            <span>{member.name}</span>
          </div>
          <div className='score_col'>
            <span className='score'>{member.total_score}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <section className='leader_board'>
        <h3>Leaderboard</h3>
        <div className='leader_board-grid'>
          <div className='header_rank'>
            <span>Rank</span>
          </div>
          <div className='header_name'>
            <span>Member Name</span>
          </div>
          <div className='header_score'>
            <span>Score</span>
          </div>
        </div>
        <ul className='rankings'>{this.renderScores()}</ul>
      </section>
    );
  }
}
