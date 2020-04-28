import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import theme from '../src/theme'
import '../globalStyles.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function MyApp (props) {
  const { Component, pageProps } = props

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(() => createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',

      primary: {
        main: '#000'
      },
      secondary: {
        main: '#F75C03'
      }
    },

    typography: {
      fontFamily: ['Work Sans', 'sans-serif'],
      fontDisplay: 'swap',
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightBold: 700,
      black: 900

      // h1: {
      //   fontSize: 35,
      //   fontWeight: 800
      // }
    }

  }),
  [prefersDarkMode]
  )

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
