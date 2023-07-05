import { Member } from '@/types/type'
import React from 'react'

interface AuthContext {
  loginMember: Member | null
  setLoginMember: (member: Member | null) => void
}

export const AuthContext = React.createContext<AuthContext>({
  loginMember: null,
  setLoginMember: () => {},
})
