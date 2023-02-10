import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        {categories.map((category) => (
          <button
            data-testid="category"
            type="button"
            key={ category.id }
            name={ category.name }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf,
}.isRequired;

export default Categories;
