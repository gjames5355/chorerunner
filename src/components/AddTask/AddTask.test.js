import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './AddTask.js';
import renderer from 'react-test-renderer';

const members = [
  {
    id: 1,
    name: 'testmember',
  },
];

it('renders AddTask without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTask members={members} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders AddTask as expected', () => {
  const tree = renderer.create(<AddTask name='AddTask' />).toJSON();
  expect(tree).toMatchSnapshot();
});
