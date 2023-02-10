import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../components/Product';
import Categories from '../components/Categories';
import * as api from '../services/api';
// Requisito 7

class Home extends Component {
  state = {
    productList: [],
    querySearch: '',
    categoryIdSearch: '',
    results: {},
  };

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ productList: categories });
    });
  }

  handleSearchText = ({ target }) => {
    this.setState({ querySearch: target.value });
  };

  handleSearch = async () => {
    const { querySearch, categoryIdSearch } = this.state;
    const productData = await getProductsFromCategoryAndQuery(
      categoryIdSearch,
      querySearch,
    );
    this.setState({ results: productData.results });
  };

  render() {
    const { productList, results } = this.state;

    return (
      <>
        <div>
          <Categories categories={ productList } />
        </div>

        <div>
          <div data-testid="home-initial-message">
            {productList.length === 0 ? (
              <h2>
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h2>) : undefined}
          </div>
          <div className="searchInput">
            <input
              data-testid="query-input"
              type="text"
              id="query-input"
              name="querySearch"
              onChange={ this.handleSearchText }
            />
            <button
              className="searchButton"
              data-testid="query-button"
              onClick={ this.handleSearch }
            >
              Pesquisar
            </button>
          </div>

          {results.length > 0
            ? (results.map(({ price, title, thumbnail }) => (
              <div className="resultadoBusca" data-testid="product" key={ title }>
                <Product
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                />
              </div>))
            ) : <h2 className="notProductFound">Nenhum produto foi encontrado</h2>}
        </div>
      </>
    );
  }
}

export default Home;
