import { useLocalStorage } from './useLocalStorage'

const useFetch = async (url: string, options?: {}, headers?: {}) => {
  const { getItem } = useLocalStorage()

  const JWT_KEY = getItem('JWT_KEY')

  const response = await fetch(`/api${url}`, {
    headers: {
      Authorization: `Bearer ${JWT_KEY}`,
      ...headers,
    },
    ...options,
  })

  if (!response.ok) throw new Error('Network response was not ok')

  return response.json()
}

export default useFetch
