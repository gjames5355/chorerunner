import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { HouseholdProvider } from './contexts/HouseHoldContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <HouseholdProvider>
        <App />
      </HouseholdProvider>
    </UserProvider>
  </BrowserRouter>,

  document.getElementById('root')
);
