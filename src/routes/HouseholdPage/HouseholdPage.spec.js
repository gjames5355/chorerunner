import React from 'react';
import ReactDOM from 'react-dom';
import HouseholdPage from './HouseholdPage';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('HouseholdPage component testing', () => {
  const match = {
    params: {
      id: 1,
    },
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <HouseholdPage match={{ params: { id: 1 } }} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <HouseholdPage match={{ params: { id: 1 } }} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
