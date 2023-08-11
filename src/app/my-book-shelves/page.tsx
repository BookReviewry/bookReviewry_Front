import { useAuth } from '@/hooks/useAuth'
import React from 'react'

const page = () => {
  const { loginMember } = useAuth()
  const { email, name } = loginMember

  return <h1>{{ loginMember }}</h1>
}

export default page
