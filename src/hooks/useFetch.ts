import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const useFetch = (url: string, options?: {}, headers?: {}) => {
  const { getItem } = useLocalStorage()

  const JWT_KEY = getItem('JWT_KEY')

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${JWT_KEY}`,
      ...headers,
    },
    ...options,
  })
}

export default useFetch
