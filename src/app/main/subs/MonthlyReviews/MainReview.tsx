'use client'
import React from 'react'
import styles from './MainReview.module.scss'
import Like from '@/components/Like'

type Props = { imgUrl: string; like: number; content: string }

const MainReview = (props: Props) => {
  return (
    <div className={styles.reviewBox}>
      <img className={styles.bookImage} src={props.imgUrl} width={150} />
      <div className={styles.textLike}>
        <p>{props.content}</p>
        <Like likes={props.like} style={{ flex: 0.5, alignItems: 'flex-start', marginLeft: 10 }} />
      </div>
    </div>
  )
}

export default MainReview
