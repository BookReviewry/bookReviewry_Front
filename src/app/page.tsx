'use client'

import { useEffect, useState } from 'react'
import '@/assets/styles/globals.scss'
import Main from './main/page'
import AuthContextProvider from '../store/AuthContextProvider'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <AuthContextProvider>
          <Main />
        </AuthContextProvider>
      )}
    </>
  )
}
