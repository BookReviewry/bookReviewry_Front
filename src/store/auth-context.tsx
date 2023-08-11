'use client'

import React, { createContext } from 'react'
import { Member } from '@/types/type'
import { useProvideAuth } from '@/hooks/useProvideAuth'

type AuthContextObj = {
  loginMember: Member
  login: (token: string) => void
  logout: () => void
  isLogin: boolean
}

export const AuthContext = createContext<AuthContextObj>({
  loginMember: {},
  login: (token: string) => {},
  logout: () => {},
  isLogin: false,
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = props => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider
