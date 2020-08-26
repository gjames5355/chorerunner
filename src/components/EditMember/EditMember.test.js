import React from 'react';
import ReactDOM from 'react-dom';
import EditMember from './EditMember';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('EditMember component testing', () => {
  const member = {
    member_id: 1,
    name: 'test',
    username: 'test-user',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <EditMember member={member} />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EditMember member={member} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
