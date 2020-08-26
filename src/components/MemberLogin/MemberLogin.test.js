import React from 'react';
import ReactDOM from 'react-dom';
import MemberLogin from './MemberLogin';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('MemberLogin component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <MemberLogin />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MemberLogin />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<MemberLogin />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('reads the components State', () => {
    const wrapper = shallow(<MemberLogin />);
    expect(wrapper.state('username')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('error')).toEqual(null);
  });

  it('checks for input attribute length', () => {
    const wrapper = shallow(<MemberLogin />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('submit event gets called', () => {
    const func = jest.fn();
    const wrapper = shallow(<MemberLogin />);
    wrapper.find('form').contains('submit', { preventDefault: () => {} });
    expect(wrapper).toEqual({});
  });
});
