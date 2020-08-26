import React from 'react';
import ReactDOM from 'react-dom';
import EditHouseholdInput from './EditHouseholdInput';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('EditHouseholdInput component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <EditHouseholdInput />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EditHouseholdInput />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
