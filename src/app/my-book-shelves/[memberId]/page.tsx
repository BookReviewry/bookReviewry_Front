import Profile from '@/components/profile/Profile'
import { Box } from '@mui/material'
import React from 'react'
import ReviewDetail from '../_subs/ReviewDetail'
import useFetch from '@/hooks/useFetch'
import { Member } from '@/types/type'
import { useAuth } from '@/hooks/useAuth'

const page = (props: { userData: Member }) => {
  // const { memberId: loginId } = useAuth().loginMember
  console.log('userData: ', props.userData)
  // const { memberId: userId } = props.userData
  // const isMine = loginId === userId

  // const userData = {
  //   memberId: 'bbkim@gmail.com',
  //   memberNm: 'bbkim',
  //   profileTxt: '프로필입니다. 전 프론트앤드 개발자입니다. 넥스트 아주 재밌네요 하하하하',
  // }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {false && <ReviewDetail />}
      <Profile
        userInfo={props.userData}
        // isMine={isMine}
      />
      <div>list</div>
    </Box>
  )
}

export async function getStaticProps(context: { params: { memberId: string } }) {
  const memberId = context.params.memberId
  console.log(memberId)

  //fetch user data
  const uri = '/user/profile'
  const fetchOption = {
    body: JSON.stringify({
      memberId: memberId,
    }),
  }
  //TODO: api 개발되면 진짜 데이터 props로 전달하기
  // const userData = useFetch(uri, fetchOption)
  const userData: Member = {
    memberId: 'bbkim@gmail.com',
    memberNm: 'bbkim',
    profileTxt: '프로필입니다. 전 프론트앤드 개발자입니다. 넥스트 아주 재밌네요 하하하하',
  }

  return {
    props: {
      userData,
    },
  }
}

export default page
