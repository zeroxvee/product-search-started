import React from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from './SearchBar'

import './FilterableProductTable.css'

import api from "api"

export class FilterableProductTable extends React.Component {

  state = {
    products: [],
    searchText: '',
  }

  async componentDidMount() {
    this.setState({products: await api.index()})
  }

  handleSearch = () => {

  }

  render() {
  return <div className="table">
      <p>FilterableProductTable</p>
      <ProductTable
        products={this.state.products}
      />
      <SearchBar value={this.setState()}/>
    </div>

  }
}
