import React from 'react';
import ReactDOM from 'react-dom';
import TasksList from './TasksList';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('TasksList component testing', () => {
  const member = {
    member_id: 2,
    name: 'Daniel',
    tasks: [
      { title: 'Obtain currency', id: 17, points: 3, status: 'assigned' },
    ],
  };

  const tasks = [
    { title: 'Obtain currency', id: 17, points: 3, status: 'assigned' },
  ];

  const household_id = 1;
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <TasksList member={member} tasks={tasks} household_id={household_id} />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <TasksList
            member={member}
            tasks={tasks}
            household_id={household_id}
          />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
