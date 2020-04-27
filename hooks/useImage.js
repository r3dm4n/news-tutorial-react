import { useState, useEffect } from 'react'
import { fetchImage } from '../lib/api'

const useImage = (img) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetchImage(img)
      .then(imgUrl => setImageUrl(imgUrl))
      .catch(err => console.error(err))

    return () => setImageUrl('')
  }, [])

  return imageUrl
}

export default useImage
