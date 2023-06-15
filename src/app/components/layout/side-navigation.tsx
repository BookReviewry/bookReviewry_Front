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
// import { AutoStories } from '@mui/icons-material'
import React from 'react'

const SideNavigation = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const baseURL = 'https://bookreviewry-back-pmchm.run.goorm.site/'

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index)
  }

  const onClickLoginBtn = async () => {
    const response = await fetch(baseURL + 'myAPI')
    console.log(response.json())
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
          <ListItemButton
            alignItems='center'
            onClick={onClickLoginBtn}
            sx={{
              mx: 2,
              position: 'fixed',
              bottom: 20,
              width: '140px',
              bgcolor: 'info.main',
              color: 'white',
              borderRadius: 5,
            }}
          >
            <ListItemText primary='로그인' />
          </ListItemButton>
        </List>
      </Box>
    </ThemeProvider>
  )
}

export default SideNavigation
