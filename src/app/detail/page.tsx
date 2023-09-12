'use client'
import React from 'react'
import styles from './page.module.scss'
import Review from './subs/Review'
import NewReview from './subs/NewReview'
import EmpathyRate from '@/components/EmpathyRate'

type Props = {}

const Detail = (props: Props) => {
  return (
    <div style={{ display: 'flex', maxHeight: '60%' }}>
      <div className={styles.bookDetail}>
        <img
          src={'https://qi-b.qoo10cdn.com/partner/goods_image/3/8/5/6/356753856g.jpg'}
          style={{ borderRadius: 20, maxHeight: '500px', maxWidth: '350px' }}
        />

        <div className={styles.bookInfo}>
          <div className={styles.avgRate}>
            <EmpathyRate rate={82} />
            <div className={styles.totalCnt}>999k+</div>
          </div>
          <div style={{ marginTop: 20 }}>
            <p className={styles.bookTitle}>철학자의 행복론</p>
            <p className={styles.author}>양앗취</p>
          </div>
          <div
            className={styles.description}
          >{`철학자는 행복합니다. 100세 철학자는 두 번 행복합니다. ${'\n'} 주고받은 사랑이 있었기에 행복했습니다. 이 편지는 영국에서부터... 더보기`}</div>
        </div>
      </div>
      <div className={styles.reviewDiv}>
        <NewReview />
        {/* TODO: 추후 각 도서별 Review값을 list로 받아와서 map으로 구현 필요 */}
        <Review />
        <Review />
      </div>
    </div>
  )
}

export default Detail
