import { useState, useEffect } from 'react'
import { fetchCategories } from '../lib/api'

const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
      .then(categories => setCategories(categories))
      .catch(err => console.error(err))

    return () => {
      setCategories([])
    }
  }, [])

  return categories
}

export default useCategories
