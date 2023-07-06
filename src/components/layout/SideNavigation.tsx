'use client'

import { theme } from '@/assets/styles/theme'
import { Box, Button, Divider, ListItemButton, ListItemText, MenuItem, MenuList, ThemeProvider } from '@/lib/useClient/mui'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'
import React, { useEffect } from 'react'
import classes from './SideNavigation.module.scss'
import GoogleIcon from '@/assets/image/button/btn_google_light_normal_ios.svg'
import { env } from 'process'
import { useAuth } from '@/hooks/useAuth'

const SideNavigation = () => {
  const { loginMember, isLogin, login, logout } = useAuth()

  useEffect(() => {
    //token 가져오기
    const token = new URLSearchParams(location.search).get('token')
    if (!token) return
    //로그인
    login(token)
  }, [])

  const handleLogin = () => {
    location.href = env.BASE_URL + '/oauth2/authorization/google'
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 190,
          height: '100%',
          bgcolor: 'primary.main',
        }}
      >
        <MenuList>
          <ListItemButton alignItems='center' href='/' sx={{ mx: 2, mt: 2, mb: 4 }}>
            <LocalLibraryRoundedIcon />
            <ListItemText primary='bookreviewry' />
          </ListItemButton>
          <MenuItem className={classes.menuItem}>
            <ListItemText primary='오픈 서재' />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemText secondary='마음챙김' />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemText secondary='행복' />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemText secondary='자아정체성' />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemText secondary='자존감' />
          </MenuItem>
        </MenuList>
        <Divider sx={{ m: 2 }} />
        <MenuList>
          <MenuItem className={classes.menuItem}>
            <ListItemText primary='내 책장' />
          </MenuItem>
        </MenuList>
        <MenuList>
          {!isLogin ? (
            <Button
              variant='contained'
              sx={{
                mx: 3,
                position: 'fixed',
                bottom: 40,
                bgcolor: 'white',
                color: 'grey',
                borderRadius: 5,
                gap: 1,
              }}
              onClick={handleLogin}
            >
              <GoogleIcon />
              <p>로그인</p>
            </Button>
          ) : (
            <Button
              className='g_id_signout'
              variant='contained'
              sx={{
                mx: 3,
                position: 'fixed',
                bottom: 40,
                bgcolor: 'grey',
                color: 'white',
                borderRadius: 5,
                gap: 1,
                width: 130,
                height: 52,
              }}
              onClick={logout}
            >
              <p>로그아웃</p>
            </Button>
          )}
        </MenuList>
      </Box>
    </ThemeProvider>
  )
}

export default SideNavigation
