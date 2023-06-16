'use client'

import RootLayout from '@/app/layout'
import '@/assets/styles/globals.css'
import Header from '@/components/layout/header'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <RootLayout>
          <Header />
          <h1>메인페이지 내용을 넣읍시다</h1>
        </RootLayout>
      )}
    </>
  )
}
