import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Landing.css';
import images from '../../ImgAssets/index';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='greeting'>
          <h1>Chore Runner</h1>
          <p className='tagline'>The Smart Shared To-Do List</p>
          <div className='button-container'>
            <Link
              className='kid-button'
              tabIndex={1}
              style={{ textDecoration: 'none' }}
              to='/kidLogin'
            >
              I am a kid
            </Link>
            <Link
              className='parent-button'
              tabIndex={2}
              style={{ textDecoration: 'none' }}
              to='/login'
            >
              I am a parent
            </Link>
            <Link
              className='new-button'
              tabIndex={3}
              style={{ textDecoration: 'none' }}
              to='/register'
            >
              I am new
            </Link>
          </div>
          <div className='about'>
            <a style={{ textDecoration: 'none' }} href={'#about-info'}>
              How does it work?
              <FontAwesomeIcon
                className='down-arrow'
                icon={faCaretDown}
                size='5x'
                color='white'
              />
            </a>
          </div>
        </div>

        <div className='for-kids' id='about-info'>
          <h3>For kids</h3>
          <div className='kids-container'>
            <div className='badge-placeholder'>
              <img src={images.kidScreen} alt='Badge'></img>
            </div>
            <div className='kids'>
              <h4>Complete challenges, get badges!</h4>
              <p>
                Chores are boring, games are fun! The rules are simple: race
                your family members to complete chore-lenges, earn points, and
                get badges. However, you can only earn points after your parents
                have approved your chores. Can you collect all 10 badges and
                become the top chorerunner in your house? Ask your parents to
                help you sign up today!
              </p>

              <Link
                className='kid-button'
                tabIndex={4}
                style={{ textDecoration: 'none' }}
                to='/kidLogin'
              >
                I am a kid
              </Link>
            </div>
          </div>
        </div>
        <div className='for-parents'>
          <h3>For parents</h3>
          <div className='parent-container'>
            <div className='parents'>
              <h4>Make chores easy and fun!</h4>
              <p>
                Who's turn is it to do the dishes? Didn't you ask them to finish
                this two days ago?
              </p>
              <p>
                Sound familiar? We know that managing and delegating household
                chores can be a struggle. Let Chorerunner help!
              </p>
              <p>
                Chorerunner makes chores a fun competition between kids and
                family members. Simply sign up, add household members, assign
                tasks, and let chorerunner do the rest. As members complete
                tasks, they move up the household leaderboard, gain levels, and
                earn badges.
              </p>
              <p>
                Spend less time working and more time playing. Sign in or sign
                up to get started!
              </p>
              <Link
                className='parent-button'
                tabIndex={2}
                style={{ textDecoration: 'none' }}
                to='/login'
              >
                I am a parent
              </Link>
              <Link
                className='new-button'
                tabIndex={3}
                style={{ textDecoration: 'none' }}
                to='/register'
              >
                I am new
              </Link>
            </div>
            <div className='img-placeholder'>
              <img src={images.parentScreen} alt='Badge'></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
