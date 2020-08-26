import React from 'react';
import ReactDOM from 'react-dom';
import ParentLogin from './ParentLogin';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('ParentLogin renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ParentLogin />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Parent Login as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <ParentLogin />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
