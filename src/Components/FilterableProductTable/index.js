import React from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from './SearchBar'

import './FilterableProductTable.css'

import api from "api"

export class FilterableProductTable extends React.Component {

  state = {
    products: [],
    searchText: '',
    inStockOnly: false,
  }

  async componentDidMount() {
    this.setState({ products: await api.index() })
  }

  searchHandler = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({ inStockOnly: target.checked })
    } else {
      //if the target is a check box, get the checked value and use setState.
      this.setState({ searchText: target.value })
    }
  }

  render() {
    const filteredProducts = this.state.products.filter(({ name }) =>
      name.toLowerCase().startsWith(this.state.searchText.toLowerCase())).filter(({ stocked }) =>
        this.state.inStockOnly ? stocked : true)

    return <div className="table">
      <p>FilterableProductTable</p>
      <ProductTable products={filteredProducts} />
      <SearchBar handler={this.searchHandler} />
    </div>

  }
}
