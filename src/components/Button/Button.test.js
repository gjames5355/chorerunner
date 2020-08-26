import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('Button component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<MemoryRouter><Button /></MemoryRouter>, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><Button /></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Button />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})