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

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

export default () => (
  <Router>
    <div>

        <Header />
        <SubmitEntry />
        <Entries />
        <Footer />

    </div>
  </Router>
);
