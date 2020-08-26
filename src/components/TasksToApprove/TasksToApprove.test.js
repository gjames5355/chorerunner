import React from 'react';
import ReactDOM from 'react-dom';
import TasksToApprove from './TasksToApprove';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

const tasks = [
  { title: 'Obtain currency', id: 17, points: 3, status: 'assigned' },
];

it('TasksToApprove renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TasksToApprove tasks={tasks} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Tasks To approve as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <TasksToApprove tasks={tasks} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
