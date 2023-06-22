import React from 'react'
import styles from './MonthlyReviews.module.scss'
import BookCover from '@/components/BookCover/BookCover'

type Props = {}

const MonthlyReviews = (props: Props) => {
  return (
    <div className={styles.container}>
      <BookCover imgUrl='/images/sample_book.png' empathyRate={100} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={80} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={60} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={40} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={100} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={80} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={60} />

      <BookCover imgUrl='/images/sample_book.png' empathyRate={40} />
    </div>
  )
}

export default MonthlyReviews
