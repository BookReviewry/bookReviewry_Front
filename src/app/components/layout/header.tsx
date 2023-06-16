'use client'

import React from 'react'
import { Paper, InputBase, IconButton } from '@/lib/mui'
import { Search } from '@mui/icons-material'

const Header = () => {
  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        position: 'fixed',
        left: 250,
        top: 30,
        display: 'flex',
        alignItems: 'center',
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Keyword'
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default Header
