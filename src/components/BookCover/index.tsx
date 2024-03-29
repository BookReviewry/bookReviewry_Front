'use client'
import React from 'react'
import styles from './index.module.scss'
import { useRouter } from 'next/navigation'

import EmpathyRate from '../EmpathyRate'

type Props = { imgUrl: string; empathyRate?: number }

const BookCover = (props: Props) => {
  const [isHovering, setIsHovering] = React.useState(false)
  const router = useRouter()

  return (
    <div style={{ position: 'relative' }} onClick={() => router.push('/detail')}>
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
        }}
        onMouseOver={() => (props.empathyRate ? setIsHovering(true) : null)}
        onMouseOut={() => (props.empathyRate ? setIsHovering(false) : null)}
      >
        {isHovering && props.empathyRate ? <EmpathyRate rate={props.empathyRate} /> : null}
      </div>
    </div>
  )
}

export default BookCover
