'use client'

import { theme } from '@/assets/styles/theme'
import { Box, Button, Divider, ListItemButton, ListItemText, MenuItem, MenuList, ThemeProvider } from '@/lib/useClient/mui'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'
import React, { useEffect, useState } from 'react'
import classes from './SideNavigation.module.scss'
import GoogleIcon from '@/assets/image/button/btn_google_light_normal_ios.svg'
import { env } from 'process'
import { Member } from '@/types/type'

const SideNavigation = () => {
  //TODO: 임시! user context 만들기
  //TODO: jwt 값 저장하기?
  const [user, setUser] = useState<Member>({})

  useEffect(() => {
    //google login 위한 라이브러리 추가
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    //token 가져오기
    const token = new URLSearchParams(location.search).get('token')
    if (!token) return
    const getUserProfile = async () => {
      const res = await fetch('/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      setUser(data)
    }
    getUserProfile()
  }, [])

  const googleLogin = () => {
    location.href = env.BASE_URL + '/oauth2/authorization/google'
  }

  //TODO: logout 처리
  const logout = async () => {
    // await fetch('/logout')
    setUser({})
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
          {!user ? (
            <Button
              variant='contained'
              sx={{
                mx: 3,
                position: 'fixed',
                bottom: 40,
                width: '130px',
                bgcolor: 'white',
                color: 'grey',
                borderRadius: 3,
                gap: 1,
              }}
              onClick={googleLogin}
            >
              <GoogleIcon />
              <p>로그인</p>
            </Button>
          ) : (
            <Button
              variant='contained'
              sx={{
                mx: 3,
                position: 'fixed',
                bottom: 40,
                width: '130px',
                bgcolor: 'white',
                color: 'grey',
                borderRadius: 3,
                gap: 1,
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
