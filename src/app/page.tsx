'use client'

import { useEffect, useState } from 'react'
import '@/assets/styles/globals.scss'
import RootLayout from '@/app/layout'
import Main from './main/Main'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <RootLayout>
          <Main />
        </RootLayout>
      )}
    </>
  )
}
