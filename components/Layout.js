import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import { Divider, Box, Container } from '@material-ui/core'

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <Box padding='16px' />
      {!title ? null : <Title text={title} />}
      {children}
    </>
  )
}

const Title = ({ text }) =>
  <Container maxWidth='xl'>
    <h1>{text}</h1>
    <Divider />
    <Box padding='16px' />
  </Container>

Title.propTypes = {
  text: PropTypes.string
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Layout
