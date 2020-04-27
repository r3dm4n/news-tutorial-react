import { useState, useEffect } from 'react'
import { fetchAuthor } from '../lib/api'

const useAuthor = (id) => {
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetchAuthor(id)
      .then(author => setAuthor(author))
      .catch(err => console.error(err))

    return () => {
      setAuthor('')
    }
  }, [])

  return author
}

export default useAuthor
