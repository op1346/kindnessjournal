import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Entries from './components/Entries';
import Footer from './components/Footer';

export default () => (
  <Router>
    <div>

        <Header />
        <Container>
          <Entries />
        </Container>
        <Footer />

    </div>
  </Router>
);
