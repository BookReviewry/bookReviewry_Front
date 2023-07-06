import React from 'react'
import { AuthContext } from './AuthContext'
import { useProvideAuth } from '@/hooks/useProvideAuth'

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
