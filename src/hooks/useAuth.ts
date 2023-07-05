import { useEffect, useState } from 'react'
import { useMember } from './useMember'
import { Member } from '@/types/type'
import { useLocalStorage } from './useLocalStorage'

export const useAuth = () => {
  const { addMember, removeMember } = useMember()
  const { getItem } = useLocalStorage()
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const loginMember = getItem('loginMember')
    if (loginMember) {
      addMember(JSON.parse(loginMember))
      setIsLogin(!!loginMember)
    }
  }, [])

  const login = async (token: string) => {
    const res = await fetch('/user/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    const loginMemberData: Member = {
      ...data,
      accessToken: token,
    }
    addMember(loginMemberData)
  }

  const logout = () => {
    removeMember()
  }

  return { login, logout, isLogin }
}
