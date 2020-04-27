import React from 'react'
import { CircularProgress } from '@material-ui/core'

const ProgressBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <CircularProgress color='secondary' />
    </div>
  )
}

ProgressBar.propTypes = {

}

export default ProgressBar
