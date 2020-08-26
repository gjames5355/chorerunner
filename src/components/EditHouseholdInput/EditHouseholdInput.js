import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
export default class EditHouseholdInput extends Component {
  state = {
    name: this.props.name,
    id: this.props.id,
  };

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className='edit-input-field'>
        <input
          className='update-household'
          name='name'
          value={this.state.name}
          onChange={e => {
            this.onChangeHandle(e);
          }}
        />
        <button
          onClick={() =>
            this.props.handleEditHouseholdName(this.state.id, this.state.name)
          }
        >
          <FontAwesomeIcon
            className='save-icon'
            icon={faSave}
            size='1x'
            color=' #b1b1b1'
          />
        </button>
      </div>
    );
  }
}
