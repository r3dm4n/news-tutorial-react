import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { searchPosts } from '../../lib/api'
import Post from '../../components/Post'
import Layout from '../../components/Layout'
import ProgressBar from '../../components/ProgressBar'
import Head from 'next/head'

const search = ({ query }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    searchPosts(query)
      .then(posts => setPosts(posts))
      .catch(err => console.error(err))
    return () => {
      setPosts([])
    }
  }, [query])

  return (
    <Layout title={query}>
      <Head>
        <title>{query}</title>
      </Head>

      {posts.length === 0
        ? <ProgressBar />
        : posts.map(post => <Post key={post.id} post={post} />)
      }

    </Layout>
  )
}

search.getInitialProps = async (context) => {
  return { query: context.query.id }
}

search.propTypes = {
  query: PropTypes.string
}

export default search
