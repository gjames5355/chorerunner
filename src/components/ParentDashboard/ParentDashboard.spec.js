import React from 'react';
import ReactDOM from 'react-dom';
import ParentDashboard from './ParentDashboard';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('ParentDashboard component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <ParentDashboard />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ParentDashboard />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
