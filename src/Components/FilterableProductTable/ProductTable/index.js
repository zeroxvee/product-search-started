import PropTypes from 'prop-types'
import React , {Fragment} from "react"

import './ProductTable.css'

import { ProductCategoryRow as CatRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

export const ProductTable = ({ products }) => {

  const categorizedProducts = products.reduce((categorizedProds, product) => {
    const { category } = product
    //interpolate the actual value of 'category'
    categorizedProds[category] = categorizedProds[category] ? categorizedProds[category].concat(product)
      ://start a new array wrapping the product in an array
      [product]
    return categorizedProds

  },
    //Initialize accumulator as an object
    {})

  const renderProductRows = (prods) =>
    prods.map(({ name, price , stocked}, i) => <ProductRow name={name} price={price} key={i} stocked={stocked} />)

  const renderTable = () => {
    return Object.keys(categorizedProducts).map((cat, i) => (
      <Fragment key={i}>
        <CatRow category={cat} />

        {renderProductRows(categorizedProducts[cat])}
      </Fragment>
    ))

  }

  return <table>
    <thead>
      <th>Name</th>
      <th>Price</th>
    </thead>
    <tbody>
        {renderTable()}
    </tbody>
  </table>
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired
}
