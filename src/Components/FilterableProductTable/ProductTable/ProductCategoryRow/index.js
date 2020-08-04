import PropType from 'prop-types'
import React from "react"

export const ProductCategoryRow = ({category}) =>
(
  <tr>
  <th className="cat">{category}</th>
  </tr>

)
ProductCategoryRow.propTypes = {
category: PropType.string.isRequired,
}
