import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import './Badge.css';
import images from '../../ImgAssets/index';

export default class Badge extends Component {
  state = {
    levelInfo: {},
  };

  componentDidMount() {
    ApiService.getBadge().then(res => {
      this.setState({ levelInfo: res });
    });
  }

  renderBadge() {
    const { levelInfo } = this.state;
    return (
      <section className='levelInfo'>
        <div className='badge'>
          <div className='image'>
            <img src={images[levelInfo.badge]} alt='Badge png' />
          </div>
        </div>
        <div className='level'>
          <div className='level_totalScore'>
            <p>{levelInfo.name}</p>
            <p>Level {levelInfo.level_id}</p>
            <p>Total EXP: {levelInfo.total_score}</p>
            <p>EXP needed to level up: {levelInfo.nextLevel}</p>
          </div>
        </div>
      </section>
    );
  }

  render() {
    if (this.state.levelInfo.badge) {
      return this.renderBadge();
    }
    const { levelInfo } = this.state;
    return <>{!!levelInfo.badge ? this.renderBadge() : <p> LOADING... </p>}</>;
  }
}
