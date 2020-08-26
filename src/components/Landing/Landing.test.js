import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Landing component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Landing />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Landing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should count all <p> tags', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find('p').length).toEqual(6);
  });
});
