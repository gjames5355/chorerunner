import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function MemberOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext =>
            !!userContext.user.id && userContext.user.type === 'member' ? (
              <Component {...componentProps} />
            ) : (
              <Redirect to={'/'} />
            )
          }
        </UserContext.Consumer>
      )}
    />
  );
}
