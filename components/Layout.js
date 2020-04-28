import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import { Box, Container } from '@material-ui/core'
import CategoryName from './CategoryName'

const Layout = ({ children, title }) => {
  return (
    <Container>
      <Header />
      <Box padding='16px' />
      {!title ? null : <CategoryName name={title} />}
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Layout
