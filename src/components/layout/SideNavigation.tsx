'use client'

import { theme } from '@/assets/styles/theme'
import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  MenuItem,
  MenuList,
  ThemeProvider,
} from '@/lib/useClient/mui'
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded'
import React, { useEffect } from 'react'
import classes from './SideNavigation.module.scss'

const SideNavigation = () => {
  const baseURL = 'https://bookreviewry-back-pmchm.run.goorm.site/'

  useEffect(() => {
    //google login 위한 라이브러리 추가
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  //TODO: 로그인 성공 시 token 받고 처리할 것
  const handleToken = async () => {}

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
          <ListItemButton
            alignItems='center'
            href='/'
            sx={{ mx: 2, mt: 2, mb: 4 }}
          >
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
          <Box
            sx={{
              mx: 3,
              position: 'fixed',
              bottom: 40,
              width: '125px',
              bgcolor: 'info.main',
              color: 'white',
              borderRadius: 5,
            }}
          >
            <div
              id='g_id_onload'
              data-client_id='109848663641-i8jvl11sob2n2463sktckj3q877bg2kc.apps.googleusercontent.com'
              data-context='signin'
              data-ux_mode='popup'
              data-login_uri={baseURL + 'myAPI'}
              data-callback={handleToken}
              data-auto_prompt='false'
            ></div>
            <div
              className='g_id_signin'
              data-type='standard'
              data-shape='pill'
              data-theme='filled_black'
              data-text='signin'
              data-size='large'
              data-logo_alignment='left'
            ></div>
          </Box>
        </MenuList>
      </Box>
    </ThemeProvider>
  )
}

export default SideNavigation
