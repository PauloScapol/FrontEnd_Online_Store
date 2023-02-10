import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { price, title, thumbnail, id } = this.props;

    return (
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
