import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { Member } from '@/types/type'
import { useRouter } from 'next/navigation'

export const useProvideAuth = () => {
  const { getItem, setItem, removeItem } = useLocalStorage()
  const [loginMember, setLoginMember] = useState<Member>({})
  const [token, setToken] = useState<string | null>('')
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const token = getItem('JWT_KEY')
    setIsLogin(!!token)
  }, [])

  const login = (token: string) => {
    if (token) {
      fetchProfile(token)
    }
  }

  const fetchProfile = async (token: string) => {
    try {
      const res = await fetch('/api/users/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.ok) {
        const data = await res.json()
        setItem('JWT_KEY', token)
        setIsLogin(true)
        setLoginMember({
          memberId: data.email,
          memberNm: data.name,
          profileTxt: data.profile,
        })
        router.push('/')
      } else {
        alert('로그인에 실패하셨습니다.')
        logout()
      }
    } catch (err) {
      console.error(err)
      logout()
    }
  }

  const logout = () => {
    removeItem('JWT_KEY')
    setToken('')
    setIsLogin(false)
    setLoginMember({})
    //TODO: google logout - 로그아웃 후 자동 선택 방지
    google.accounts.id.disableAutoSelect()

    //로그아웃 후 홈으로 이동
    router.push('/')
  }

  return { loginMember, login, logout, isLogin }
}
