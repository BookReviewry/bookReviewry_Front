'use client'
import React from 'react'
import styles from './SubPageTitle.module.css'

type Props = { title: string; barColor?: string }

const SubPageTitle = (props: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.leftbar}
        style={{ backgroundColor: props.barColor ?? '#9ed2c6' }}
      ></div>
      {props.title}
    </div>
  )
}

export default SubPageTitle
