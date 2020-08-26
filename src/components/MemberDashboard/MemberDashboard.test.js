import React from 'react';
import ReactDOM from 'react-dom';
import MemberDashboard from './MemberDashboard';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('MemberDashboard component testing', () => {
  const memberTasks = [
    {
      id: 1,
      title: 'hi',
      points: 1,
    },
    {
      id: 2,
      title: 'hello',
      points: 2,
    },
  ];

  // beforeEach(() => {
  //   memberTasks = shallow(<MemberDashboard tasks={tasks}/>)
  // })

  // const component = shallow(<MemberDashboard memberTasks={memberTasks}/>)

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <MemoryRouter>
        <MemberDashboard memberTasks={memberTasks} />
      </MemoryRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MemberDashboard memberTasks={memberTasks} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
