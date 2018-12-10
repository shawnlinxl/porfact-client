import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Portfolio from "./layouts/Portfolio.jsx";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' component={Portfolio} />
      </Router>
    );
  }
}

export default App;
