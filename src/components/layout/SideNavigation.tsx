'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { env } from 'process'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'
import { Box, Button, Divider, ListItemButton, ListItemText, MenuItem, MenuList, ThemeProvider } from '@/lib/useClient/mui'
import { theme } from '@/assets/styles/theme'
import GoogleIcon from '@/assets/image/button/btn_google_light_normal_ios.svg'
import { useAuth } from '@/hooks/useAuth'
import classes from './SideNavigation.module.scss'
import { CATEGORY } from '@/constants/categories'

const SideNavigation = () => {
  const { loginMember, isLogin, login, logout } = useAuth()
  /* Navigation */
  const router = useRouter()

  useEffect(() => {
    //token 가져오기
    const token = new URLSearchParams(location.search).get('token')
    if (!token) return
    //로그인
    login(token)
  }, [])

  const handleLogin = () => {
    router.push('https://bookreviewry-back-pmchm.run.goorm.io/oauth2/authorization/google')
  }

  // category 화면 별로 searchParams 지정하여 보내주는 함수 - CATEGORY 활용
  const handleRouter = (pathname: string, param: { name: string; value: string }) => {
    const params = new URLSearchParams()
    params.set(param.name, param.value)
    const newParams = params.toString()
    router.push(`${pathname}?${newParams}`)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: 190, height: '100%', bgcolor: 'primary.main' }}>
        <MenuList>
          <ListItemButton alignItems='center' href='/' sx={{ mx: 2, mt: 2, mb: 4 }}>
            <LocalLibraryRoundedIcon />
            <ListItemText primary='bookreviewry' />
          </ListItemButton>

          <MenuItem className={classes.menuItem} onClick={() => router.push('/')}>
            <ListItemText primary='오픈 서재' />
          </MenuItem>

          {CATEGORY.map((item, index) => (
            <MenuItem
              key={index}
              className={classes.menuItem}
              onClick={() => handleRouter('/category', { name: 'type', value: item.code })}
            >
              <ListItemText secondary={item.type} />
            </MenuItem>
          ))}
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
