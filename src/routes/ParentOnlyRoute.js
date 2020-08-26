import React from 'react';
import { Route } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

export default function ParentOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext =>
            !!userContext.user.id && userContext.user.type === 'user' ? (
              <Component {...componentProps} />
            ) : (
              <NotFoundPage />
            )
          }
        </UserContext.Consumer>
      )}
    />
  );
}
