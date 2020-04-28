import React from 'react'
import { Grid, Typography, Checkbox, ListItem, ListItemText, TextField, Button, GridList, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import useCategories from '../hooks/useCategories'

import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const styles = {

  tfContainer: {
    display: 'flex',
    marginLeft: 12,
    marginTop: 20
  },
  btn: {
    borderRadius: 0,
    boxShadow: 'none',
    fontWeight: 700
  }
}

const Newsletter = props => {
  const categories = useCategories()
  const isMobile = isWidthDown('xs', props.width)
  const isTablet = isWidthDown('md', props.width)

  return (
    <Grid container className='spacingTB'>
      <Grid item xs={12} md={4}>
        <h1>Subscribe to the newsletter</h1>
      </Grid>

      <Grid item xs={12} md={8}>
        <GridList cols={isMobile ? 1 : isTablet ? 2 : 3} cellHeight='auto' component='ul'>
          {categories.map(cat =>
            <ListItem key={cat.id}>
              <Checkbox />
              <ListItemText primary={cat.name} />
            </ListItem>
          )}
        </GridList>

        <div style={styles.tfContainer}>
          <TextField placeholder='Email' fullWidth required style={{ marginRight: 10 }}/>
          <Button variant='contained' style={styles.btn}>Subscribe</Button>
        </div>

      </Grid>

      {/* <Box padding='16px' /> */}
    </Grid>
  )
}

Newsletter.propTypes = {
  width: PropTypes.string

}

export default withWidth()(Newsletter)
