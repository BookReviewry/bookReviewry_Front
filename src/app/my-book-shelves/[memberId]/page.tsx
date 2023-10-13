'use client'

import Profile from '@/components/profile/Profile'
import { Box } from '@mui/material'
import React from 'react'
import ReviewDetail from '../_subs/ReviewDetail'
import { Member } from '@/types/type'
import { useAuth } from '@/hooks/useAuth'

const page = async (params: { memberId: string }) => {
  // const { memberId: loginId } = useAuth().loginMember
  const { memberId } = params
  // const isMine = loginId === memberId
  console.log('memberId: ', memberId)

  //fetch user data
  const queryParam = {
    email: memberId
  }
  const ULR = '/user/profile?' + new URLSearchParams(queryParam).toString()

  //TODO: api 개발되면 진짜 데이터 props로 전달하기
  // const response = await fetch(ULR, { cache: 'force-cache' })
  // const userData = await response.json()
  const userData: Member = {
    memberId: 'bbkim@gmail.com',
    memberNm: 'bbkim',
    profileTxt: '프로필입니다. 전 프론트앤드 개발자입니다. 넥스트 아주 재밌네요 하하하하',
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {false && <ReviewDetail />}
      <Profile
        userInfo={userData}
        // isMine={isMine}
      />
      <div>list</div>
    </Box>
  )
}

export default page
