import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import ParentOnlyRoute from './routes/ParentOnlyRoute';
import Landing from './components/Landing/Landing';
import ParentLogin from './components/ParentLogin/ParentLogin';
import RegistrationRoute from './routes/RegistrationRoute/RegistrationRoute';
import ParentDashboard from './components/ParentDashboard/ParentDashboard';
import MemberOnlyRoute from './routes/MemberOnlyRoute';
import Header from './components/Header/Header';
import HouseholdPage from './routes/HouseholdPage/HouseholdPage';
import MemberDashboard from './components/MemberDashboard/MemberDashboard';
import MemberLogin from './components/MemberLogin/MemberLogin';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './normalize.css';
import './App.css';

function App() {
  const HeaderWithRouter = withRouter(Header);
  return (
    <div className='App'>
      <header>
        <HeaderWithRouter />
      </header>
      <main>
        <Switch>
          <PublicRoute exact path={'/'} component={Landing} />
          <PublicRoute exact path={'/login'} component={ParentLogin} />
          <PublicRoute exact path={'/kidLogin'} component={MemberLogin} />
          <PublicRoute exact path={'/register'} component={RegistrationRoute} />
          <ParentOnlyRoute
            exact
            path={'/parent-dashboard'}
            component={ParentDashboard}
          />
          <MemberOnlyRoute
            exact
            path={'/member-dashboard'}
            component={MemberDashboard}
          />
          <PrivateRoute
            exact
            path={'/household/:id'}
            component={HouseholdPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
