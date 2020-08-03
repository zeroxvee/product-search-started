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
    maxPrice: null
  }

  async componentDidMount() {
    this.setState({ products: await api.index() })
  }

  searchHandler = ({ target: { type, checked, value } }) => {
    if (type === 'checkbox') {
      this.setState({ inStockOnly: checked })
    } else {
      if (type === 'number') {
        this.setState({ maxPrice: value })
      } else {
        //if the target is a check box, get the checked value and use setState.
        this.setState({ searchText: value })
      }
    }
  }

  // handlePrice = ({ target }) => {
  //   this.setState({ maxPrice: target.value })
  // }

  render() {
    const filteredProducts = this.state.products.filter(
      ({ name }) => name.toLowerCase().startsWith(this.state.searchText.toLowerCase())).filter(({ stocked }) => this.state.inStockOnly ? stocked : true).filter(({price}) => this.state.maxPrice ? Number.parseFloat(price.slice(1)) <= this.state.maxPrice : true)

    return <div className="table">
      <p>FilterableProductTable</p>
      <ProductTable products={filteredProducts} />
      <SearchBar handler={this.searchHandler} priceHandler={this.handlePrice} value={this.state.maxPrice}/>
    </div>
    }
  }
