import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles'
import { InputBase, Hidden } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    margin: '0px 15px 0px 15px'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}))

const SearchBar = () => {
  const classes = useStyles()

  const [searchTerm, setSearchTerm] = useState('')
  const emptySearch = Object.keys(searchTerm).length === 0

  const handleChange = e => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleSearch = e => {
    if (e.key === 'Enter') {
      if (emptySearch) {
        return null
      } else {
        setSearchTerm('')

        Router.push('/search/[id]', `/search/${e.target.value}`)
      }
    }
  }

  return (

    <Hidden smDown>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ color: 'inherit' }}/>
        </div>

        <InputBase
          placeholder="Cauta…"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleSearch}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Hidden>

  )
}

SearchBar.propTypes = {
  setSearching: PropTypes.func
}

export default SearchBar
