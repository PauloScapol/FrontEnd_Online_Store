import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Categories extends React.Component {
  state = {
    products: [],
  };

  async onClick(id) {
    const catProd = await getProductsFromCategoryAndQuery(id);
    this.setState({
      products: catProd.results,
    });
  }

  render() {
    const { categories } = this.props;
    const { products } = this.state;

    return (
      <div className="categories">
        {categories.map((category) => (
          <button
            data-testid="category"
            type="button"
            key={ category.id }
            name={ category.name }
            onClick={ () => this.onClick(category.id) }
          >
            {category.name}
          </button>
        ))}

        {products.map(({ id, title, price, thumbnail }) => (
          <div data-testid="product" key={ id }>
            <ProductCard
              id={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
            />
          </div>
        ))}

      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf,
}.isRequired;

export default Categories;
