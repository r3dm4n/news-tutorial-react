import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import SearchIcon from '@material-ui/icons/Search'
import RightArrowIcon from '@material-ui/icons/ArrowRightAltSharp'
import { TextField, InputAdornment, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core'
import { fetchCategories } from '../../lib/api'
import CategoryTitle from '../CategoryName'

const SearchLayout = ({ setOpen }) => {
  const router = useRouter()

  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState([])
  const emptySearch = Object.keys(searchTerm).length === 0

  useEffect(() => {
    fetchCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.error(err))
    return () => {
      setCategories([])
    }
  }, [])

  const handleChange = e => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleSearch = e => {
    if (e.key === 'Enter') {
      if (emptySearch) {
        return null
      }

      router.push('/search[id]', `/search/${e.target.value}`)
    }
  }

  const handleSearchCategory = slug => e => {
    e.preventDefault()
    // router.push('/search/[id]', `/search/${slug}`)
    router.push('/search[id]', `/search/${slug}`)
  }
  return (
    <div>
      <div style={{ margin: '40px 0px' }}>

        <TextField
          autoFocus
          fullWidth
          variant='outlined'
          // placeholder='Try searching for people, topics, or keywords'
          placeholder='Incearca sa cauti persoane, teme sau cuvinte cheie'
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleSearch}
          InputProps={{
            endAdornment:
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
          }}
        />

        <div style={{ marginTop: 40 }}>
          <CategoryTitle name='Trending searches' />
        </div>

        <List>
          {!categories
            ? <CircularProgress />
            : categories.map(category =>
              <ListItem key={category.id} button divider onClick={handleSearchCategory(category.slug)}>
                <ListItemText primary={category.name} />
                <RightArrowIcon color='disabled'/>
              </ListItem>
            )}

        </List>
      </div>
    </div>
  )
}

SearchLayout.propTypes = {
  setOpen: PropTypes.bool
}

export default SearchLayout
