'use client'
import React from 'react'
import styles from './page.module.scss'
import { useSearchParams } from 'next/navigation'
import BookCover from '@/components/BookCover/BookCover'
import SubPageTitle from '@/components/SubPageTitle/SubPageTitle'
import { CATEGORY } from '@/constants/categories'

import data from '@/components/layout/DUMMY_BOOKS.json'

type Props = {}

const Category = (props: Props) => {
  const searchParams = useSearchParams()

  const [pageCategory, setCategory] = React.useState('')

  React.useEffect(() => {
    const paramType = searchParams.get('type')

    const current = CATEGORY.filter(item => item.code === paramType)[0]
    setCategory(current.type) //SubPageTitle 설정

    //TODO: 현재 사용하고 있는 data(DUMMY_BOOKS)말고, 실 데이터를 이용하여 category별로 filtering 필요
  }, [searchParams])

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <SubPageTitle title={pageCategory} />
      </div>

      <div className={styles.bookList}>
        {data.map((item, index) => (
          <BookCover key={index} imgUrl={item.imgUrl} empathyRate={item.empRate} />
        ))}
      </div>
    </div>
  )
}

export default Category
