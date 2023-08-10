import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { Member } from '@/types/type'

export const useProvideAuth = () => {
  const { getItem, setItem, removeItem } = useLocalStorage()
  const [loginMember, setLoginMember] = useState<Member>({})
  const [token, setToken] = useState<string>('')
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(() => {
    const token = getItem('JWT_KEY')
    setIsLogin(!!token)
  }, [])

  const login = async (token: string) => {
    const res = await fetch('/users/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    const loginMember: Member = data
    setItem('JWT_KEY', token)
    setIsLogin(true)
    setLoginMember(loginMember)
  }

  const logout = () => {
    removeItem('JWT_KEY')
    setToken('')
    setIsLogin(false)
    setLoginMember({})
    //TODO: google logout - 로그아웃 후 자동 선택 방지
    google.accounts.id.disableAutoSelect()

    //로그아웃 후 홈으로 이동
    location.href = '/'
  }

  return { loginMember, login, logout, isLogin }
}
