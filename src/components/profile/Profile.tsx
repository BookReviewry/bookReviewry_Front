'use client'

import { Avatar, Box, Container, Divider, IconButton, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import React, { useEffect, useRef, useState } from 'react'
import styles from './profile.module.scss'
import useFetch from '@/hooks/useFetch'
import { Member } from '@/types/type'

const Profile: React.FC<{ userInfo: Member }> = props => {
  const { memberId, memberNm, profileTxt } = props.userInfo
  console.log('member:', memberNm)
  const [isMyProfile, setIsMyProfile] = useState(false) //TODO: 남의 책장 접근 시 UI 다르게 처리해야함
  const [canEdit, setCanEdit] = useState(false)
  const profileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // 프로필 문구 세팅
    if (!!profileInputRef.current && !!profileTxt) profileInputRef.current.value = profileTxt
  }, [])

  const numberOfFollowers = 0

  // [내 책장] 프로필 수정
  const handleClickEditBtn = () => {
    //편집상태 변경
    setCanEdit(prevState => !prevState)
  }

  const handleClickChkBtn = async () => {
    const enteredProfileTxt = profileInputRef.current?.value

    //api 호출
    const url = '/user/profile'
    const fetchOption = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profileTxt: enteredProfileTxt,
      }),
    }

    await useFetch(url, fetchOption)

    alert('변경되었습니다.')

    //편집상태 변경
    setCanEdit(prevState => !prevState)
  }

  return (
    <>
      <Container
        sx={{
          width: 250,
          height: '100%',
          p: 2,
          mt: 11,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Avatar sx={{ alignSelf: 'center', width: 56, height: 56 }} />
          <Box sx={{ mx: 2 }}>
            <h4>{memberNm}</h4>
            <h4>{`(팔로워 ${numberOfFollowers})`}</h4>
          </Box>
          <Box sx={{ mx: 2, height: 130 }}>
            <TextField inputRef={profileInputRef} disabled={!canEdit} variant='outlined' multiline rows={4} />
            {isMyProfile && !canEdit && (
              <IconButton size='small' onClick={handleClickEditBtn} sx={{ position: 'alsolute', bottom: '30px', left: '140px' }}>
                <EditIcon />
              </IconButton>
            )}
            {isMyProfile && canEdit && (
              <IconButton size='small' onClick={handleClickChkBtn} sx={{ position: 'alsolute', bottom: '30px', left: '140px' }}>
                <CheckIcon />
              </IconButton>
            )}
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', mx: 3 }}>
            <Box className={styles.bookCount}>
              <h4>읽은 책</h4>
              <h4>0</h4>
            </Box>
            <Box className={styles.bookCount}>
              <h4>읽을 책</h4>
              <h4>0</h4>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Profile
