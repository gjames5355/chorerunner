import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationRoute from './RegistrationRoute';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

const history = { push: () => [] };

it('Registration Routerenders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <RegistrationRoute history={history} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Registration Route as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <RegistrationRoute history={history} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
