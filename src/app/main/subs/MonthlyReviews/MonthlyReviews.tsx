'use client'
import React from 'react'
import MainReview from './MainReview'

type Props = {}

const MonthlyReviews = (props: Props) => {
  const sampleReviews = [
    {
      imgUrl: '/images/sample_book.png',
      like: 10,
      content: `테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트테스트테스트테스트테스트테스트테스트테스트테스트`,
    },
    {
      imgUrl: '/images/sample_book.png',
      like: 10,
      content: `테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트테스트테스트테스트테스트테스트테스트테스트테스트`,
    },
    {
      imgUrl: '/images/sample_book.png',
      like: 10,
      content: `테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트${'\n'}테스트테스트테스트테스트테스트테스트테스트테스트테스트`,
    },
  ]

  return (
    <>
      {sampleReviews.map((item, index) => (
        <MainReview key={index} imgUrl={item.imgUrl} like={item.like} content={item.content} />
      ))}
    </>
  )
}

export default MonthlyReviews
