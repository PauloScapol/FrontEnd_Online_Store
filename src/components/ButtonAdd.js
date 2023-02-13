import React from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends React.Component {
  constructor() {
    super();
    this.handleLocal = this.handleLocal.bind(this);
  }

  handleLocal() {
    const { title, price, thumbnail, id } = this.props;
    const product = { title, price, thumbnail, quantity: 1, id };
    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify([product]));
      return;
    }
    const oldList = JSON.parse(localStorage.getItem('products'));
    const isOldList = oldList
      .some((savedProduct) => savedProduct.title === product.title);
    if (!isOldList) {
      localStorage.setItem('product', JSON.stringify([...oldList, product]));
    }
  }

  render() {
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.handleLocal }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ButtonAdd;

ButtonAdd.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
