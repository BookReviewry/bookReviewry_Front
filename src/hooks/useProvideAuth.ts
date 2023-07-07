import React, { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { Member } from '@/types/type'

export const useProvideAuth = () => {
  const [loginMember, setLoginMember] = useState<Member | null>(null)
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const { setItem, removeItem } = useLocalStorage()

  useEffect(() => {
    setIsLogin(!!loginMember)
  }, [loginMember])

  const login = async (token: string) => {
    const res = await fetch('/user/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    const loginMember: Member = data
    setItem('JWT_KEY', token)
    setLoginMember(loginMember)
    setIsLogin(true)
  }

  const logout = () => {
    setLoginMember(null)
    removeItem('JWT_KEY')
    setIsLogin(false)
    //TODO: google logout - 로그아웃 후 자동 선택 방지
    google.accounts.id.disableAutoSelect()

    //로그아웃 후 홈으로 이동
    location.href = '/'
  }

  return { loginMember, login, logout, isLogin }
}
