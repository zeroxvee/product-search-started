import React from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from './SearchBar'

export class FilterableProductTable extends React.Component {

  state = {
    products: [],
    searchText: '',
  }

  async componentDidMount() {
    const res = await fetch("https://my-json-server.typicode.com/Claim-Academy-JS/products/products")

    const products = await res.json()
    this.setState({ products })
    // Another way to use it
    //this.setState({ products: await res.json()})
  }

  render() {
  return <div>
      <p>FilterableProductTable</p>
      <ProductTable />
      <SearchBar />
    </div>

  }
}
