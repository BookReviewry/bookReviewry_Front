'use client'

import { useEffect, useState } from 'react'
import '@/assets/styles/globals.scss'
import RootLayout from '@/app/layout'
import Main from './main/Main'
import AuthContextProvider from './store/AuthContextProvider'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <AuthContextProvider>
          <RootLayout>
            <Main />
          </RootLayout>
        </AuthContextProvider>
      )}
    </>
  )
}
