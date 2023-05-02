import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="https://www.iconpacks.net/icons/2/free-icon-store-1977.png" alt="Front End Online Store logo" />
        <header>
          <h1>Front End Online Store</h1>
        </header>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
      </div>
    );
  }
}
export default Header;
