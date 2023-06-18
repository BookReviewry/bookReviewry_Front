'use client'
import React from 'react'
import styles from './BookCover.module.css'

type Props = { imgUrl: string; empathyRate?: string | number }

const BookCover = (props: Props) => {
  const [isHovering, setIsHovering] = React.useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={props.imgUrl}
        className={styles.bookCover}
        style={{
          position: 'relative',
          boxShadow: '0px 10px 25px -15px #333333',

          //TODO: hover 이벤트로 이동할때, 조금 더 부드럽게 이동하도록 해야함 - animation | @keyframes 사용!
          marginTop: isHovering ? -25 : 0,
        }}
      />
      <div
        className={styles.bookCover}
        style={{
          position: 'absolute',
          top: 0,
          backgroundColor: isHovering ? 'rgba(68, 68, 68, 0.5)' : 'transparent',
          marginTop: isHovering ? -25 : 0,

          //FIXME: 공감지수 컴포넌트 import후 삭제 필요
          color: 'white',
        }}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {isHovering ? props.empathyRate ?? '공감지수 컴포넌트' : null}
      </div>
    </div>
  )
}

export default BookCover