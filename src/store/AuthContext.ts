import { Member } from '@/types/type'
import React, { createContext } from 'react'

interface AuthContext {
  loginMember: Member | null
  login: (token: string) => void
  logout: () => void
  isLogin: boolean
}

export const AuthContext = createContext<AuthContext>({
  loginMember: null,
  login: () => {},
  logout: () => {},
  isLogin: false,
})
