import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  state = {
    price: 0,
    thumbnail: '',
    title: '',
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    const {
      match: {
        params: {
          id,
        },
      },
    } = this.props;
    this.fetchProduct(id);
  };

  fetchProduct = async (productId) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const data = await response.json();

    this.setState({
      price: data.price,
      thumbnail: data.thumbnail,
      title: data.title,
    });
  };

  render() {
    const {
      price,
      thumbnail,
      title,
    } = this.state;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-price">
          R$
          { price }
        </h3>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductDetails;
