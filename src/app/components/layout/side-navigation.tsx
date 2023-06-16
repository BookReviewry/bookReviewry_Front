'use client'

import { theme } from '@/app/styles/theme'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
} from '@/lib/mui'
import React, { useEffect } from 'react'

const SideNavigation = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const baseURL = 'https://bookreviewry-back-pmchm.run.goorm.site/'

  //메뉴 클릭 시 색 변화
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index)
  }

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
        <List component='nav' aria-label='main mailbox folders'>
          <ListItemButton alignItems='center' href='/' sx={{ m: 2 }}>
            <ListItemText primary='bookreviewry' />
          </ListItemButton>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={event => handleListItemClick(event, 0)}
            >
              <ListItemText primary='오픈 서재' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={event => handleListItemClick(event, 1)}
            >
              <ListItemText secondary='마음챙김' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={event => handleListItemClick(event, 2)}
            >
              <ListItemText secondary='행복' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={event => handleListItemClick(event, 3)}
            >
              <ListItemText secondary='자아정체성' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={event => handleListItemClick(event, 4)}
            >
              <ListItemText secondary='자존감' />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List component='nav' aria-label='secondary mailbox folder'>
          <ListItem>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={event => handleListItemClick(event, 0)}
            >
              <ListItemText primary='내 책장' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
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
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default SideNavigation
