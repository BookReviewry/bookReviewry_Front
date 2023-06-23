'use client'
import React from 'react'
import Image from 'mui-image'
import styles from './MainReview.module.scss'
import Like from '@/components/Like/Like'

type Props = { imgUrl: string; like: number; content: string }

const MainReview = (props: Props) => {
  return (
    <div className={styles.reviewBox}>
      <Image src={props.imgUrl} width={150} style={{ borderRadius: 10, marginRight: 20, flex: 1 }} fit='fill' />
      <div className={styles.textLike}>
        <p>{props.content}</p>
        <Like likes={props.like} style={{ flex: 0.5, alignItems: 'flex-start', marginLeft: 10 }} />
      </div>
    </div>
  )
}

export default MainReview
