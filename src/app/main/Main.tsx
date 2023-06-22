'use client'
import React from 'react'
import styles from './Main.module.scss'
import SubPageTitle from '@/components/SubPageTitle/SubPageTitle'
import SearchBar from './subs/SearchBar'
import MonthlyReviews from './subs/MonthlyReviews/MonthlyReviews'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.contentBox}>
        <SubPageTitle title='이 달의 우리 마음은...' />
        <MonthlyReviews />
      </div>
      <div className={styles.contentBox}>
        <SubPageTitle title='우리가 가장 공감한 도서' />
        <MonthlyReviews />
      </div>
      <div className={styles.contentBox}>
        <SubPageTitle title='우리가 가장 많이 리뷰한 도서' />
        <MonthlyReviews />
      </div>
    </div>
  )
}

export default Main
