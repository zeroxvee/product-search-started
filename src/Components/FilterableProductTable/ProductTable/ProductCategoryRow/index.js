import PropType from 'prop-types'
import React from "react"

export const ProductCategoryRow = ({category}) =>
(
  <tr>
  <td className="cat">{category}</td>
  </tr>

)
ProductCategoryRow.propTypes = {
category: PropType.string.isRequired,
}
