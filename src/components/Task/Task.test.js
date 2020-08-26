import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task.js';
import renderer from 'react-test-renderer';

const task = {
  points: 1,
  title: 'test',
};

const member = {
  member_id: 1,
};

it('renders Task without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task task={task} member={member} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Task as expected', () => {
  const tree = renderer
    .create(<Task name='Task' task={task} member={member} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
