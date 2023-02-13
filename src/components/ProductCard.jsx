import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAdd from './ButtonAdd';

class ProductCard extends React.Component {
  render() {
    const { price, title, thumbnail, id, quantity } = this.props;

    return (
      <div>

        <Link
          data-testid="product-detail-link"
          to={ `/productDetails/${id}` }
        >
          <div>
            <h1>{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <span>{ price }</span>
          </div>

        </Link>

        <ButtonAdd
          id={ id }
          quantity={ quantity }
          title={ title }
          price={ price }
          thumbnail={ thumbnail }
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;

export default ProductCard;
