import React, { useState } from 'react'
import Head from 'next/head'
import { fetchPosts } from '../lib/api'
import Post from '../components/Post'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import LoadMoreButton from '../components/LoadMoreButton'
import MainFeaturedPost from '../components/MainFeaturedPost'
import NewsLetter from '../components/NewsLetter'
import CategoryName from '../components/CategoryName'

const Home = ({ posts }) => {
  const [loading, setLoading] = useState(false)
  const [morePosts, setMorePosts] = useState(posts)
  const [currentPage, setCurrentPage] = useState(2)

  const fetchMore = () => {
    setLoading(true)
    setCurrentPage(currentPage + 1)

    fetchPosts(20, currentPage)
      .then(newPosts => {
        setLoading(false)
        setMorePosts([...morePosts, ...newPosts])
      })
      .catch(err => console.error(err))
  }

  return (
    <Layout>
      <Head>
        <title>News app</title>
      </Head>

      {morePosts.map((post, i) =>
        i === 0
          ? <div>
            <MainFeaturedPost post={post} />
            <NewsLetter />
            <CategoryName name='Latest posts' />
          </div>
          : <Post post={post} />

      )}

      <LoadMoreButton loading={loading} handleMore={fetchMore} />

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
