import React, { Component } from 'react';
import '../styles/Cart.css';

class Cart extends Component {
  render() {
    const local = JSON.parse(localStorage.getItem('products'));
    return (
      <div className="shopping-cart-container">
        {local
          ? (local.map(({ price, title, thumbnail, quantity, id }) => (
            <div className="shopping-cart-product" key={ id }>

              <h2 data-testid="shopping-cart-product-name">{ title }</h2>
              <h3>
                R$
                {' '}
                { price }
              </h3>
              <img src={ thumbnail } alt={ title } />
              <h3 data-testid="shopping-cart-product-quantity">
                Quantidade:
                {' '}
                { quantity }
              </h3>

            </div>)))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}

      </div>
    );
  }
}

export default Cart;
