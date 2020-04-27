import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Grid, Hidden, Typography, makeStyles } from '@material-ui/core'
import parser from 'react-html-parser'
import useImage from '../hooks/useImage'
import useAuthor from '../hooks/useAuthor'

import ArticleLink from './ArticleLink'
import moment from 'moment'

const styles = makeStyles((theme) => ({
  img: {
    height: 200,
    width: 200,
    [theme.breakpoints.down('sm')]: {
      height: 100,
      width: 100
    }

  },

  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    },
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  excerpt: {
    '&:hover': {
      textDecoration: 'underline'
    }
  }

}))

const Post = ({ post }) => {
  const classes = styles()
  const title = parser(post.title.rendered)
  const excerpt = parser(post.excerpt.rendered.replace(/<(.|\n)*?>/g, ''))
  const imageUrl = useImage(post.featured_media)

  const author = useAuthor(post.author)
  const postDate = moment(new Date(post.date)).format('L')

  return (

    <Grid container spacing={4} justify='space-evenly'>

      <Grid item xs={8} md={4}>
        <ArticleLink slug={post.slug}>
          <Typography variant='h5' component='h1' className={classes.title}>
            {title}
          </Typography>
          <Typography variant='caption'> {postDate} | {author} </Typography>
        </ArticleLink>
      </Grid>

      <Hidden smDown>
        <Grid item md={4}>
          <ArticleLink slug={post.slug}>
            <Typography variant='subtitle1' component='h2' color='textSecondary' className={classes.excerpt}>
              {excerpt}
            </Typography>
          </ArticleLink>
        </Grid>
      </Hidden>

      <Grid item xs='auto' md={4}>
        <ArticleLink slug={post.slug}>
          <img width='200' height='200' src={imageUrl} loading='lazy' className={classes.img}/>
        </ArticleLink>
      </Grid>
    </Grid>

  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post
