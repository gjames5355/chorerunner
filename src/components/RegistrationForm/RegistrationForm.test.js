import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm.js';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders ResultsPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <RegistrationForm />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ResultsPage as expected', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <RegistrationForm name='RegistrationForm' />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
