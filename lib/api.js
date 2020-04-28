import fetch from 'isomorphic-unfetch'
export const APP_TITLE = 'Stiri'
// export const SITE_NAME = 'techcrunch.com'
export const SITE_NAME = 'cavaleria.ro'
export const BASE_URL = `https://${SITE_NAME}/wp-json/wp/v2`
export const POSTS_LIMIT = 4
export const PLACEHOLDER_IMG = '/placeholder.png'

export const searchPosts = (keyword, page = 1) => {
  return fetch(`${BASE_URL}/posts?search=${keyword}&page=${page}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
}

export const fetchPosts = (limit = POSTS_LIMIT, page = 1) => {
  console.log('fetching posts...')
  return fetch(`${BASE_URL}/posts?per_page=${limit}&page=${page}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
}

export const fetchCategories = () => {
  return fetch(`${BASE_URL}/categories`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error('failed to fetch categories:', err))
}

export const fetchCategoryBySlug = slug => {
  return fetch(`${BASE_URL}/categories?slug=${slug}`)
    .then(res => res.json())
    .then(data => data[0])
}

export const fetchCategoryTitle = id => {
  return fetch(`${BASE_URL}/posts?categories=${id}`)
    .then(res => res.json())
    .then(data => data.title.rendered)
    .catch(err => console.error(err))
}

export const fetchCategoryPosts = (categoryId, limit = POSTS_LIMIT, page = 1) => {
  return fetch(`${BASE_URL}/posts?categories=${categoryId}&per_page=${limit}&page=${page}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err))
}

export const fetchAllCategories = async () => {
  const categories = await fetchCategories()

  return Promise.all(categories.map(async category => {
    return {
      info: category,
      posts: await fetchCategoryPosts(category.id)
    }
  }))
}

export const fetchArticle = (slug) => {
  return fetch(`${BASE_URL}/posts?slug=${slug}`)
    .then(res => res.json())
    .then(data => data[0])
    .catch(err => console.error('fetch article error:', err))
}

export const fetchAuthor = id => {
  return fetch(`${BASE_URL}/users/${id}`)
    .then(res => res.json())
    .then(data => data.name)
    .catch(err => console.error(err))
}

export const fetchImage = (img, SIZE) => {
  const imageSize = (sizes) => {
    if (sizes.medium) {
      return sizes.medium.source_url
    } else if (sizes.large) {
      return sizes.large.source_url
    } else {
      return sizes.full.source_url
    }
  }

  return fetch(`${BASE_URL}/media/${img}`)
    .then(res => res.json())
    .then(data => {
      const sizes = data.media_details.sizes

      if (!SIZE) {
        return imageSize(sizes)
      } else {
        switch (SIZE) {
          case 'medium' :
            console.log('medium')
            return sizes.medium ? sizes.medium.source_url : imageSize(sizes)
          case 'large' :
            console.log('large')
            return sizes.large ? sizes.large.source_url : imageSize(sizes)
          case 'full':
            console.log('full')
            return sizes.full ? sizes.full.source_url : imageSize(sizes)
        }
      }
    })
    .catch(err => console.error('unable to fetch img:', img, err))
}
