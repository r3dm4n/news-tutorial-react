import React, { useState } from 'react'
import Head from 'next/head'
import { fetchPosts } from '../lib/api'
import Post from '../components/Post'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import Layout from '../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = ({ posts }) => {
  const [morePosts, setMorePosts] = useState([])
  const [currentPage, setCurrentPage] = useState(2)

  const fetchMore = () => {
    setCurrentPage(currentPage + 1)

    fetchPosts(20, currentPage)
      .then(newPosts => setMorePosts([...morePosts, ...newPosts]))
      .catch(err => console.error(err))
  }

  return (
    <Layout title='Latest posts'>
      <Head>
        <title>News app</title>
      </Head>

      <Container maxWidth='xl'>
        {posts.map(post =>
          <Post key={post.id} post={post}/>
        )}

        <div style={{ width: '100%' }}>
          <InfiniteScroll
            dataLength={morePosts.length}
            next={fetchMore}
            hasMore={true}
            loader={<h4 className='center'>Loading more ...</h4>}
          >
            {morePosts.map(post => <Post key={post.id} post={post} />)}
          </InfiniteScroll>
        </div>

      </Container>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const posts = await fetchPosts(20, 1)
  return { posts }
}

Home.propTypes = {
  posts: PropTypes.array
}

export default Home
