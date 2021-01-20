import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import "./App.css"

// import components
import Header from './components/Header';
import Main from './components/Main';
import SignInSignUp from './components/User/Signin-Signup/SignInSignUp';
import PasswordReset from './components/User/Signin-Signup/PasswordReset';
import UserSettings from './components/User/UserSettings';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Route path='/' component={Header}/>

      <Switch>
        <Route path="/signinsignup" component={SignInSignUp}/>
        <Route path='/password-reset' component={PasswordReset}/>
        <Route path='/settings' component={UserSettings}/>
        <Route path="/" component={Main}/>
      </Switch>

      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App;