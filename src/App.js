import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import SubmitEntry from './components/SubmitEntry';
import Entries from './components/Entries';
import Footer from './components/Footer';
import Signup from './components/SignUp';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <div className="content">
          <Switch>

            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;