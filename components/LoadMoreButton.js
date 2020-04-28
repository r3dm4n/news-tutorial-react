import React from 'react'
import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@material-ui/core'

const LoadMoreButton = ({ loading, handleMore }) => {
  return (
    <div className='center' style={{ marginBottom: 16 }}>
      {loading ? <CircularProgress color='primary' />
        : <Button
          variant='contained'
          color='primary'
          onClick={handleMore}
        >
          Load more
        </Button>
      }
    </div>
  )
}

LoadMoreButton.propTypes = {
  loading: PropTypes.bool,
  handleMore: PropTypes.func.isRequired
}

export default LoadMoreButton
