'use client'

import { useEffect, useState } from 'react'
import '@/assets/styles/globals.scss'
import RootLayout from '@/app/layout'
import Main from './main/Main'
import AuthContextProvider from '../store/AuthContextProvider'
import { Metadata } from 'next'

//use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements.
//ref: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  viewport: 'initial-scale=1, width=device-width',
}

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
