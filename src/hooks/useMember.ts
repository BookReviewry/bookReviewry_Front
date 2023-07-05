import React, { useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { Member } from '@/types/type'
import { AuthContext } from '@/app/store/AuthContext'

export const useMember = () => {
  const { loginMember, setLoginMember } = useContext(AuthContext)
  const { setItem } = useLocalStorage()

  const addMember = (member: Member) => {
    setLoginMember(member)
    setItem('loginMember', JSON.stringify(member))
  }

  const removeMember = () => {
    setLoginMember(null)
    setItem('loginMember', '')
  }

  return { loginMember, addMember, removeMember }
}
