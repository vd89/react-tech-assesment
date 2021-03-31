import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './components/MainRoute';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <React.Fragment>
        <Router>
          <MainRoute />
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;
