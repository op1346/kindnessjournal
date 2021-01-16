import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import SubmitEntry from './components/SubmitEntry';
import Entries from './components/Entries';
import Footer from './components/Footer';

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
