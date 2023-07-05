'use client'

import { useContext, useEffect, useState } from 'react'
import '@/assets/styles/globals.scss'
import RootLayout from '@/app/layout'
import Main from './main/Main'
import { AuthContext } from './store/AuthContext'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { loginMember, setLoginMember } = useContext(AuthContext)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <AuthContext.Provider value={{ loginMember, setLoginMember }}>
          <RootLayout>
            <Main />
          </RootLayout>
        </AuthContext.Provider>
      )}
    </>
  )
}
