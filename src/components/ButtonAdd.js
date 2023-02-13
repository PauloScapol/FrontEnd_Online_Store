import React from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends React.Component {
  constructor() {
    super();
    this.handleLocal = this.handleLocal.bind(this);
  }

  handleLocal() {
    const { title, price, thumbnail } = this.props;
    const product = { title, price, thumbnail, quantity: 1 };
    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify([product]));
      return;
    }
    const oldList = JSON.parse(localStorage.getItem('products'));
    const isOldList = oldList
      .some((savedProduct) => savedProduct.title === product.title);
    if (!isOldList) {
      localStorage.setItem('products', JSON.stringify([...oldList, product]));
    }
  }

  render() {
    const { testid } = this.props;
    console.log(testid);
    return (
      <div>
        <button
          data-testid={ testid }
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
