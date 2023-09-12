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
        className={styles.reviewContent}
      >{`리뷰는 리뷰이고, 테스트는 테스트로다.${'\n'}수정할 수 없지롱 케케ㅔ케${'\n'}글씨가 너무 큰가요?`}</textarea>
    </div>
  )
}

export default Review
