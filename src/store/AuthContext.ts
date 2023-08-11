import { Member } from '@/types/type'
import React, { createContext } from 'react'

interface AuthContext {
  loginMember: Member
  login: (token: string) => void
  logout: () => void
  isLogin: boolean
}

export const AuthContext = createContext<AuthContext>({
  loginMember: {},
  login: () => {},
  logout: () => {},
  isLogin: false,
})
