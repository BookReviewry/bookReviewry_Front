'use client'
import React, { CSSProperties } from 'react'
import styles from './SubPageTitle.module.scss'

type Props = { title: string; barColor?: string; style?: CSSProperties }

const SubPageTitle = (props: Props) => {
  return (
    <div className={styles.container} style={{ ...props.style }}>
      <div className={styles.leftbar} style={{ backgroundColor: props.barColor ?? '#9ed2c6' }}></div>
      {props.title}
    </div>
  )
}

export default SubPageTitle
