import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Typography, Grid, Hidden, IconButton, Toolbar, Drawer, ListItem, ListItemText } from '@material-ui/core'
import styles from '../themes/styles'
import useCategories from '../hooks/useCategories'
import SearchBar from './Search/SearchBar'
import SearchDialogIcon from './Search/SearchDialogIcon'

import CloseIcon from '@material-ui/icons/Close'
import BackIcon from '@material-ui/icons/ArrowBack'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  const classes = styles()
  const categories = useCategories()
  const router = useRouter()

  const [isHomePage, setIsHomePage] = useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen)

  React.useEffect(() => {
    console.log('using effect')
    setIsHomePage(router.pathname === '/')
  }, [router.pathname])

  const onBackPressed = e => {
    e.preventDefault()

    history.length > 2 ? router.back() : router.push('/')
  }

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar component='nav' style={{
        justifyContent: 'space-between',
        overflowX: 'auto'
      }}>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={isHomePage ? toggleDrawer : onBackPressed}>
            {isHomePage ? <MenuIcon /> : <BackIcon />}
          </IconButton>

          <Drawer
            variant="temporary"
            anchor="top"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            classes={{
              paper: classes.paper
            }}
          >
            <AppBarLinks categories={categories} toggleDrawer={toggleDrawer}/>
          </Drawer>
        </Hidden>

        <Link href='/' as={'/'}>
          <a className={classes.appBarTitle}>
            <Typography className={classes.appTitle}>News</Typography>
          </a>
        </Link>

        <SearchDialogIcon />
        <SearchBar />
      </Toolbar>

      <Hidden smDown>
        <AppBarLinks categories={categories} />
      </Hidden>

    </AppBar>
  )
}

const AppBarLinks = ({ categories, toggleDrawer }) => {
  const classes = styles()
  const router = useRouter()

  const handleClick = categoryName => e => {
    e.preventDefault()
    router.push(`/search/${categoryName}`)
  }

  return (

    <div>
      <Hidden mdUp>
        <AppBar position='sticky' className={classes.appBar}>
          <Toolbar component='nav'>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>

      <Grid container spacing={1} alignItems='center' justify='center'>
        {(categories || []).map((category) =>
          <Grid item key={category.id} className={classes.appBarLink}>
            <ListItem
              key={category.id}
              button
              color='inherit'
              className={classes.link}
              onClick={handleClick(category.slug)}
            >
              <ListItemText>
                <a href={category.slug}> {category.name}</a>
              </ListItemText>
            </ListItem>

          </Grid>
        )}
      </Grid>

    </div>

  )
}

AppBarLinks.propTypes = {
  categories: PropTypes.array.isRequired,
  toggleDrawer: PropTypes.func
}

export default Header
