'use client'
import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

type Props = { likes: number }

const Like = (props: Props) => {
  const [cnt, setCnt] = React.useState(props.likes ?? 0)

  const handleOnClick = () => {
    //TODO: 로그인 계정 확인하여, 한 도서(또는 리뷰)당 한번씩만 클릭할 수 있도록 해야함
    // ---> 해당계정의 REVIEW_LIKE.LIKE_YN 값을 확인해야 함!

    setCnt(prev => prev + 1)
  }

  return (
    <div
      onClick={handleOnClick}
      style={{ zIndex: 1, display: 'flex', alignItems: 'center' }}
    >
      {cnt > 0 ? (
        <Favorite color='error' style={{ marginRight: '5px' }} />
      ) : (
        <FavoriteBorder style={{ marginRight: '5px' }} />
      )}
      {cnt}
    </div>
  )
}

export default Like
