import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  appBarLink: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'block',
      textAlign: 'center'
    }
    // display: 'flex',
    // alignContent: 'center'
  },

  appBarTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 10
    }
  },

  appTitle: {
    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    },

    fontWeight: 900,
    textAlign: 'center'
  },

  h1: {
    fontSize: 40,
    fontWeight: 900,
    [theme.breakpoints.down('md')]: {
      fontSize: 30
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20
    },
    lineHeight: '100%'

  },

  h2: {
    fontSize: 30,

    [theme.breakpoints.down('md')]: {
      fontSize: 25
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
    fontWeight: 700
  },

  categoryTitle: {
    marginTop: 20,
    fontWeight: 700,

    fontSize: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 30
    }
  },

  excerptLarge: {
    fontSize: 18
  },

  post: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0px 15px 0px'
  },

  postTitleSmall: {
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },

  postImg: {
    width: 100,
    height: 100,
    borderRadius: '4px',
    objectFit: 'cover'
  },

  postImgLarge: {
    height: '240px',
    width: '100%',
    objectFit: 'cover'
  },
  postImgXl: {
    height: '240px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    border: '1px solid lightGray'
  },

  articleNumber: {
    color: theme.palette.secondary.main
  },

  spacing: {
    margin: '150x 0px'
  },

  spacingTop: {
    marginTop: 20
  },

  searching: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px 0px'
  }

}))

export default styles
