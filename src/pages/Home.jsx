import React, { Component } from 'react';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ productList: categories });
    });
  }

  render() {
    const { productList } = this.state;

    return (
      <>
        <div>
          <Categories categories={ productList } />
        </div>

        <div data-testid="home-initial-message">
          <input type="text" />

          {productList.length === 0 ? (
            <h2>
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>) : undefined}
        </div>
      </>
    );
  }
}

export default Home;
