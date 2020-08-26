import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext => {
            // if you're logged in as a member and tried hard-routing to '/', you'll be redirected to the members dashboard
            if (userContext.user.type === 'member') {
              return <Redirect to={'/member-dashboard'} />;
            }

            //if you're loggedin as a user and tried hard-routing to '/', you'll be redirected to the parents dashboard

            if (userContext.user.type === 'user') {
              return <Redirect to={'/parent-dashboard'} />;
            }

            //else you're going to go to the landing page
            else {
              return <Component {...componentProps} />;
            }
          }}
        </UserContext.Consumer>
      )}
    />
  );
}
