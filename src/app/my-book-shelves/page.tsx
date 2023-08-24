'use client'

import Profile from '@/components/profile/Profile'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Profile />
      <div>list</div>
    </Box>
  )
}

export default page
