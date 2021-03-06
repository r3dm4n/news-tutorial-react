import React from 'react'
import PropTypes from 'prop-types'
import { fetchArticle } from '../lib/api'
import parser from 'react-html-parser'
import Layout from '../components/Layout'
import useImage from '../hooks/useImage'
import { Container, Typography, Box } from '@material-ui/core'
import Head from 'next/head'

const ArticlePage = ({ article }) => {
  const title = !article ? null : parser(article.title.rendered)
  const content = !article ? null : parser(article.content.rendered)
  const imageUrl = !article ? null : useImage(article.featured_media)

  return (
    <Layout >
      <Container>
        <Head>
          <title>{title}</title>
        </Head>

        <h1>{title}</h1>
        <img height='500' width='100%' style={{ objectFit: 'cover' }} loading='eager' src={imageUrl} />
        <Box padding={1}/>
        <Typography>{content}</Typography>

        <style>{
            `
            * {
                max-width: 100%;
            }

            img: {
                max-width: 100%;
                width: 100%;
                height: auto;
                max-height: 600px;
                object-fit: cover;
            }
            `
        }</style>
      </Container>

    </Layout>
  )
}

ArticlePage.getInitialProps = async (context) => {
  const query = context.query.id
  const article = await fetchArticle(query)

  return { article }
}

ArticlePage.propTypes = {
  article: PropTypes.object
}

export default ArticlePage
