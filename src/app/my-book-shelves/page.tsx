import { useAuth } from '@/hooks/useAuth'
import React from 'react'

const page = () => {
  const { loginMember } = useAuth()
  const { memberId, memberNm, profileTxt } = loginMember

  console.log('memberNm:', loginMember)

  return <h1>{memberNm}</h1>
}

export default page
