import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        {categories.map((category) => (
          <label htmlFor="categories" data-testid="category" key={ category.id }>
            <input
              name="category"
              type="radio"
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf,
}.isRequired;

export default Categories;
