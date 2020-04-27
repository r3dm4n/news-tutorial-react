import fetch from 'isomorphic-unfetch'

export const SITE_NAME = 'techcrunch.com'
export const BASE_URL = `https://${SITE_NAME}/wp-json/wp/v2`

export const fetchPosts = (limit = 10, page = 1) =>
  fetch(`${BASE_URL}/posts?per_page=${limit}&page=${page}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))

export const fetchImage = img =>
  fetch(`${BASE_URL}/media/${img}`)
    .then(res => res.json())
    .then(data => data.media_details.sizes.large.source_url)
    .catch(err => console.error(err))

export const searchPosts = (keyword, page = 1) =>
  fetch(`${BASE_URL}/posts?search=${keyword}&page=${page}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))

export const fetchArticle = slug =>
  fetch(`${BASE_URL}/posts?slug=${slug}`)
    .then(res => res.json())
    .then(data => data[0])
    .catch(err => console.error(err))

export const fetchAuthor = id =>
  fetch(`${BASE_URL}/users/${id}`)
    .then(res => res.json())
    .then(data => data.name)
    .catch(err => console.error(err))
