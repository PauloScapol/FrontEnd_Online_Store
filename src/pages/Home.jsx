import React, { Component } from 'react';

class Home extends Component {
  state = {
    productList: [],
  };

  render() {
    const { productList } = this.state;

    return (
      <div data-testid="home-initial-message">
        <input type="text" />

        {productList.length === 0 ? (
          <h2>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>) : undefined}
      </div>
    );
  }
}

export default Home;
