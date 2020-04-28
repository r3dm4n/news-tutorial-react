import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Box } from '@material-ui/core'

const CategoryName = ({ name }) =>
  <>
    <h1>{name}</h1>
    <Divider />
    <Box padding='16px' />
  </>

CategoryName.propTypes = {
  name: PropTypes.string
}

export default CategoryName
