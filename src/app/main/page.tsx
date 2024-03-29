'use client'
import React from 'react'
import styles from './page.module.scss'
import SubPageTitle from '@/components/SubPageTitle'
import HorizontalArrowView from '@/components/HorizontalArrowView'
import SearchBar from './subs/SearchBar'
import MonthlyReviews from './subs/MonthlyReviews'
import HorizontalBookList from './subs/HorizontalBookList'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.contentBox}>
        <SubPageTitle title='이 달의 우리 마음은...' style={{ paddingLeft: 20 }} />
        <HorizontalArrowView children={<MonthlyReviews />} scrollWidth={470} />
      </div>
      <div className={styles.contentBox}>
        <SubPageTitle title='우리가 가장 공감한 도서' style={{ paddingLeft: 20 }} />
        <HorizontalArrowView children={<HorizontalBookList />} scrollWidth={200} />
      </div>
      <div className={styles.contentBox}>
        <SubPageTitle title='우리가 가장 많이 리뷰한 도서' style={{ paddingLeft: 20 }} />
        <HorizontalArrowView children={<HorizontalBookList />} scrollWidth={200} />
      </div>
    </div>
  )
}

export default Main
