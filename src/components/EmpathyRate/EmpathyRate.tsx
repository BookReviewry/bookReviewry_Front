'use client'
import React from 'react'
import styles from './EmpathyRate.module.scss'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

/**
 * 0      : #ffffff
 * 1-20   : #ffebee
 * 21-40  : #ffcdd2
 * 41-60  : #ef9a9a
 * 61-80 : #e57373
 * 81-100 : #ef5350
 */
type Props = { rate: number }

const EmpathyRate = (props: Props) => {
  const getRateColor = (rate: number) => {
    if (rate === 0) return
    if (rate > 0 && rate < 21) return '#ffebee'
    if (rate > 20 && rate < 41) return '#ffcdd2'
    if (rate > 40 && rate < 61) return '#ef9a9a'
    if (rate > 60 && rate < 81) return '#e57373'
    if (rate > 80) return '#ef5350'
  }

  return (
    <div className={styles.container}>
      {props.rate === 0 ? (
        <FavoriteBorder style={{}} />
      ) : (
        <Favorite
          style={{ marginRight: '5px', color: getRateColor(props.rate) }}
        />
      )}
      {`${props.rate}%`}
    </div>
  )
}

export default EmpathyRate
