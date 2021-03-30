import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './components/MainRoute';

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainRoute />
      </Router>
    </React.Fragment>
  );
}

export default App;
