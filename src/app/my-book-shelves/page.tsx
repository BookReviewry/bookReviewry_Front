'use client'

import Profile from '@/components/profile/Profile'
import { useAuth } from '@/hooks/useAuth'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  const { loginMember } = useAuth()
  console.log(loginMember)  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Profile userInfo={loginMember}/>
      <div>list</div>
    </Box>
  )
}

export default page
