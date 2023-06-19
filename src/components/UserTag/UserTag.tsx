'use client'
import React from 'react'
import styles from './UserTag.module.css'

type UserTagType = 'SIMPLE' | 'DETAIL'
type Props = { userTagType: UserTagType }

const UserTag = (props: Props) => {
  //TODO: 추후 로그인 정보 혹은 리뷰작성자 정보를 가져와서 하기 prop을 바꿔줘야 함!
  const prop = {
    tagType: 'SIMPLE',
    memberName: '아임_테스터',
    profileTxt: '샘플을 만드는 중입니다.',
    profileImg: 'images/sample_user.png',

    readBooks: 100, //유저가 읽은 도서 권수 --> DB에 따로 컬럼 없음. 'REVIEW' DB를 토대로 카운트 해야할 듯
    followers: 333, //유저의 팔로워 수 --> DB에 따로 컬럼 없음. 'FOLLOW' DB를 토대로 카운트 필요
  }

  return (
    <div className={styles[props.userTagType.toLowerCase()]}>
      <img src={prop.profileImg} />
      <p className={styles.memberName}>{prop.memberName}</p>

      {props.userTagType === 'DETAIL' && (
        <>
          <p className={styles.profileTxt}>{prop.profileTxt}</p>
          <hr />
          <div className={styles.infoContainer}>
            <div>
              <p className={styles.title}>책</p>
              <p>{prop.readBooks}</p>
            </div>
            <div>
              <p className={styles.title}>팔로워</p>
              <p>{prop.followers}</p>
            </div>
          </div>

          {/*TODO: follow/unfollow 버튼 추가 필요 */}
        </>
      )}
    </div>
  )
}

export default UserTag
