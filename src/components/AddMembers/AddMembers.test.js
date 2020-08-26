import React from 'react';
import ReactDOM from 'react-dom';
import AddMembers from './AddMembers.js';
import renderer from 'react-test-renderer';

const households = [
  {
    id: 1,
    name: 'testhouse',
  },
];

it('renders AddMember without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddMembers households={households} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders AddMembers as expected', () => {
  const tree = renderer.create(<AddMembers name='AddMembers' />).toJSON();
  expect(tree).toMatchSnapshot();
});
