import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Cart from './pages/Cart';
import Header from './components/Header';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route
            path="/productDetails/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </div>
    );
  }
}

export default App;
