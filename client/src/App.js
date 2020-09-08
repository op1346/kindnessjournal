import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';
import EntryForm from './components/EntryForm';
import UserForm from './components/UserForm';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" render={ () =>
        <Redirect to="/"/> } />

      </Switch>
    </div>
  </Router>
);
