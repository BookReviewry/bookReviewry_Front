'use client'

import React from 'react'
import styles from './index.module.scss'
import Like from '@/components/Like'
import UserTag from '@/components/UserTag'
import { Close } from '@mui/icons-material'
import { Button, IconButton, Portal } from '@mui/material'
import CategoryTag from './CategoryTag'

type Props = {}

const ReviewDetail = (props: Props) => {
  return (
    <Portal>
      <div className={styles.potal}>
        <div className={styles.contentDiv}>
          {/* 여기부터 content가 들어오는 위치 */}
          <div className={styles.btnDiv}>
            <IconButton type='button' onClick={() => console.log(`---- 페이지 닫기 ----`)}>
              <Close />
            </IconButton>
          </div>

          {/* 책 정보 - 이미지 + 책이름 + 저자명&출판사 + 책 보러가기 버튼 */}
          <div className={styles.bookInfoDiv}>
            <img className={styles.bookImg} src={'https://qi-b.qoo10cdn.com/partner/goods_image/3/8/5/6/356753856g.jpg'} />
            <div className={styles.bookInfo}>
              <p className={styles.title}>100세 철학자의 행복론 2</p>
              <p className={styles.author}>김형석 | 열림원</p>
              <div>
                <Button variant='outlined' sx={{ borderRadius: 3 }}>
                  책 보러가기
                </Button>
              </div>
            </div>
          </div>

          {/* 리뷰 내용 */}
          <div style={{ paddingTop: 40 }}>
            <textarea
              readOnly
              rows={8}
              className={styles.review}
              value={`<어린 시절의 나에게 추천해주고 싶은 책>${'\n'}아니 리뷰를 써야할 것 같아서 리뷰를 쓰기는 하는데, 내가 리뷰를 쓰는건지, 리뷰가 나를 쓰는건지는 모르겠어. 그래서 그냥 쓰고 있기는 하지만 내가 지금 무엇을 쓰고 있는 것인가 다시 한번 생각을 해봐야 되는 부분인거지?${'\n'}가나다라마바사${'\n'}가나다라마바사${'\n'}가나다라마바사${'\n'}`}
            />
          </div>

          {/* 도서별 등록된 카테고리 */}
          <div className={styles.categoryDiv}>
            <CategoryTag tag='마음챙김' />
            <CategoryTag tag='자아정체성' />
          </div>

          {/* 등록일자 + 공감 */}
          <div className={styles.dateLike}>
            <p className={styles.date}>2023년 9월 13일</p>
            <Like likes={33} />
          </div>

          {/* 작성자 - TODO: 유저책장에서 들어왔을 때만 보여지도록! */}
          <div className={styles.writerDiv}>
            <UserTag userTagType='SIMPLE' />
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default ReviewDetail
