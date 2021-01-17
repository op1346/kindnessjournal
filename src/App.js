import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

// import components
import Header from './components/Header';
import SubmitEntry from './components/SubmitEntry';
import Feed from './components/Feed';
import Intro from './components/Intro';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <div className="content">
          <Intro />
          <SubmitEntry />
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