import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import parser from 'react-html-parser'
import useImage from '../hooks/useImage'
import ArticleLink from './ArticleLink'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}))

export default function MainFeaturedPost (props) {
  const classes = useStyles()
  const { post } = props

  const title = parser(post.title.rendered)
  const excerpt = parser(post.excerpt.rendered.slice(0, 160).replace(/<(.|\n)*?>/g, '') + ' ...')
  const imageUrl = useImage(post.featured_media)

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${imageUrl})` }}>
      {<img style={{ display: 'none' }} src={imageUrl} alt={title} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {excerpt}
            </Typography>

            <ArticleLink slug={post.slug}>
              Read more ...
            </ArticleLink>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object
}
