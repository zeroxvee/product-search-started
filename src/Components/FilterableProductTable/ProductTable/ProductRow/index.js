import PropTypes from 'prop-types'

import React from "react"

import './ProductRow.css'

export const ProductRow = ({name, price, stocked}) =>



<tr>
  <td className={!stocked ? "outOfStock" : ""}>{name}</td>
  <td>{price}</td>
</tr>

ProductRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
