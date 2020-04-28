import React, { useState } from 'react'
import { IconButton, Dialog, AppBar, Toolbar, Typography, Container, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import SearchLayout from './SearchLayout'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}))

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SearchDialogIcon = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDialog = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <Hidden mdUp>
      <IconButton color='inherit' onClick={toggleDialog}>
        <SearchIcon />
      </IconButton>

      <Dialog fullScreen open={open} onClose={toggleDialog} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} position='sticky'>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Cauta
            </Typography>

          </Toolbar>
        </AppBar>

        <Container>
          <SearchLayout setOpen={false} />
        </Container>
      </Dialog>
    </Hidden>
  )
}

export default SearchDialogIcon
