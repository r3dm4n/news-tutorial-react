import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const ArticleLink = ({ slug, children }) => {
  return (
    <Link href='/[id]/' as={`/${slug}`}>
      <a>
        {children}
      </a>
    </Link>
  )
}

ArticleLink.propTypes = {
  slug: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default ArticleLink
