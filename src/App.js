import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './components/Header';
import SubmitEntry from './components/SubmitEntry';
import Feed from './components/Feed';
import Intro from './components/Intro';
import Footer from './components/Footer';

import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <div className="content">
          <Intro />
          <PrivateRoute path='/login' component={SubmitEntry} />
          <Feed />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;