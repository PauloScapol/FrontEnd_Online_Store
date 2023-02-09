import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Route exact path="/" component={ Home } />
    );
  }
}

export default App;
