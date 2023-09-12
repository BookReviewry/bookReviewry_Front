import React from 'react'
import BookCover from '@/components/BookCover'

type Props = {}

const HorizontalBookList = (props: Props) => {
  const sampleList = [
    { imgUrl: '/images/sample_book.png', empRate: 100 },
    { imgUrl: '/images/sample_book.png', empRate: 80 },
    { imgUrl: '/images/sample_book.png', empRate: 60 },
    { imgUrl: '/images/sample_book.png', empRate: 40 },
    { imgUrl: '/images/sample_book.png', empRate: 20 },
    { imgUrl: '/images/sample_book.png', empRate: 0 },
    { imgUrl: '/images/sample_book.png', empRate: 100 },
    { imgUrl: '/images/sample_book.png', empRate: 80 },
    { imgUrl: '/images/sample_book.png', empRate: 60 },
    { imgUrl: '/images/sample_book.png', empRate: 40 },
    { imgUrl: '/images/sample_book.png', empRate: 20 },
    { imgUrl: '/images/sample_book.png', empRate: 0 },
  ]

  return (
    <>
      {sampleList.map((item, index) => (
        <BookCover key={index} imgUrl={item.imgUrl} empathyRate={item.empRate} />
      ))}
    </>
  )
}

export default HorizontalBookList
