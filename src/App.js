import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import components
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Route path='/' component={Header}/>

      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Main}/>
      </Switch>

      <Route path='/' component={Footer}/>
    </Router>
  )
}

export default App;