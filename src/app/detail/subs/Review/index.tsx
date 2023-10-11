import React from 'react'
import styles from './index.module.scss'
import EmpathyRate from '@/components/EmpathyRate'
import UserTag from '@/components/UserTag'

type Props = {}

const Review = (props: Props) => {
  return (
    <div className={styles.outerDiv}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <UserTag userTagType='SIMPLE' divStyle={{ flex: 1 }} />
        <EmpathyRate
          rate={100}
          divStyle={{
            flex: 1,
            backgroundColor: 'transparent',
            minWidth: '205px',
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '-8px',
          }}
        />
      </div>

      <textarea
        readOnly
        className={styles.reviewContent}
        defaultValue={`테스트를 위한 리뷰입니다.${'\n'}이미 작성된 리뷰를 불러올 것이므로 수정이 불가합니다.${'\n'}하지만 로그인한 유저가 작성자라면 수정이 가능하게끔 할 예정입니다.`}
      />
    </div>
  )
}

export default Review
