'use client'

import Like from '@/components/Like'
import UserTag from '@/components/UserTag'
import { Close } from '@mui/icons-material'
import { Button, IconButton, Portal } from '@mui/material'
import React from 'react'

type Props = {}

const Test = (props: Props) => {
  return (
    <Portal>
      <div
        style={{
          position: 'absolute',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.07)',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 5px #00000080',
            borderRadius: 20,
            paddingBlock: 15,
            paddingInline: 50,
            width: '50%',
          }}
        >
          {/* 여기부터 content 혹은 children이 들어오는 위치 */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', color: '#8F9191', fontSize: 14, marginRight: -30 }}>
            <IconButton type='button' onClick={() => console.log(`---- 페이지 닫기 ----`)}>
              <Close />
            </IconButton>
          </div>

          {/* 책 정보 - 이미지 + 책이름 + 저자명&출판사 + 책 보러가기 버튼 */}
          <div style={{ display: 'flex', columnGap: 20 }}>
            <img
              src={'https://qi-b.qoo10cdn.com/partner/goods_image/3/8/5/6/356753856g.jpg'}
              style={{ borderRadius: 20, maxHeight: '300px', maxWidth: '250px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 10 }}>
              <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: 15 }}>100세 철학자의 행복론 2</p>
              <p style={{ fontSize: '15px', fontWeight: '600', color: '#8F9191', marginBottom: 10 }}>김형석 | 열림원</p>
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
              style={{ resize: 'none', width: '100%', borderStyle: 'none', fontSize: 15 }}
              value={`<어린 시절의 나에게 추천해주고 싶은 책>${'\n'}아니 리뷰를 써야할 것 같아서 리뷰를 쓰기는 하는데, 내가 리뷰를 쓰는건지, 리뷰가 나를 쓰는건지는 모르겠어. 그래서 그냥 쓰고 있기는 하지만 내가 지금 무엇을 쓰고 있는 것인가 다시 한번 생각을 해봐야 되는 부분인거지?${'\n'}가나다라마바사${'\n'}가나다라마바사${'\n'}가나다라마바사${'\n'}`}
            />
          </div>

          {/* 도서별 등록된 카테고리 */}
          <div style={{ display: 'flex', columnGap: 5, paddingTop: 20 }}>
            <CategoryTag tag='마음챙김' />
            <CategoryTag tag='자아정체성' />
          </div>

          {/* 등록일자 + 공감 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 30 }}>
            <p style={{ color: '#8F9191', fontSize: 14 }}>2023년 9월 13일</p>
            <Like likes={33} />
          </div>

          {/* 작성자 - TODO: 유저책장에서 들어왔을 때만 보여지도록! */}
          <div
            style={{ borderTop: '2px solid #E4E4E4', width: '100%', marginTop: 20, display: 'flex', marginInline: -50, paddingLeft: 20 }}
          >
            <UserTag userTagType='SIMPLE' />
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Test

const CategoryTag = ({ tag }: { tag: string }) => {
  return (
    <div style={{ backgroundColor: '#B6D7A8', borderRadius: 20, fontWeight: '600', fontSize: 14, paddingBlock: 6, paddingInline: 12 }}>
      {`# ${tag}`}
    </div>
  )
}
