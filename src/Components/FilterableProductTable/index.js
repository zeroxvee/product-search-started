import React, { useState, useEffect} from "react"

import { ProductTable } from "./ProductTable"
import { SearchBar } from './SearchBar'

import './FilterableProductTable.css'

import api from "api"

export const FilterableProductTable = () => {

  const [products, setProducts] = useState([])
  const [searchText, SetSearchText] = useState('')
  const [inStockOnly, SetInStockOnly] = useState(false)
  const [maxPrice, SetMaxPrice] = useState(null)

  async componentDidMount() {
    setProducts({ products: await api.index() })
  }

  const searchHandler = ({ target: { type, checked, value } }) => {
    switch (type) {
      case 'checkbox':
        SetInStockOnly(checked)
        break;
      case 'number':
        SetMaxPrice(value)
        break;
      default:
        SetSearchText(value)
    }
  }

  // handlePrice = ({ target }) => {
  //   this.setState({ maxPrice: target.value })
  // }

    const filteredProducts = products.filter(
      ({ name }) => name.toLowerCase().startsWith(searchText.toLowerCase())).filter(({ stocked }) => inStockOnly ? stocked : true).filter(({price}) => maxPrice ? Number.parseFloat(price.slice(1)) <= maxPrice : true)

    return <div className="table">
      <p>FilterableProductTable</p>
      <ProductTable products={filteredProducts} inStock={inStockOnly}/>
      <SearchBar handler={searchHandler} priceHandler={handlePrice} value={maxPrice}/>
    </div>
  }
