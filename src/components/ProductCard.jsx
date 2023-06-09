import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAdd from './ButtonAdd';
import '../styles/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { price, title, thumbnail, id } = this.props;

    return (
      <div className="productCard-div">

        <Link
          data-testid="product-detail-link"
          to={ `/productDetails/${id}` }
        >
          <div>
            <h1>{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <p>
              R$
              {' '}
              { price }
            </p>
          </div>

        </Link>

        <ButtonAdd
          testid="product-add-to-cart"
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
