import React from 'react';
import ReactDOM from 'react-dom';
import MembersList from './MembersList';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('MembersList component testing', () => {
  const tasks = [
    {
      member_id: 5,
      name: 'Kelley',
      username: 'testtest',
      total_score: 0,
      tasks: [{ title: 'test', id: 1, points: 1, status: 'assigned' }],
    },
  ];

  const data = [
    {
      member_id: 5,
      name: 'Kelley',
      username: 'testtest',
      total_score: 0,
      tasks: [{ title: 'test', id: 1, points: 1, status: 'assigned' }],
    },
  ];

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <MembersList data={data} tasks={tasks} />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MembersList data={data} tasks={tasks} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
