import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </div>
    );
  }
}

export default App;
