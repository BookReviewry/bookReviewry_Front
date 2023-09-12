'use client'

import React from 'react'
import styles from './index.module.scss'
import { IconButton } from '@mui/material'
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material'

type Props = { children: any; scrollWidth: number }

const HorizontalArrowView = (props: Props) => {
  //TODO: 추후 React.useReducer로 리팩토링
  const divRef = React.useRef<HTMLDivElement>(null)
  const [isLeftZero, setLeftZero] = React.useState(true)
  const [isRightZero, setRightZero] = React.useState(false)
  const scroll = (scrollOffset: number) => {
    if (divRef.current) {
      divRef.current.scrollLeft += scrollOffset

      divRef.current.scrollLeft === 0 ? setLeftZero(true) : isLeftZero ? setLeftZero(false) : null

      const scrollRight = divRef.current.scrollWidth - (divRef.current.clientWidth + divRef.current.scrollLeft)
      scrollRight === 0 ? setRightZero(true) : isRightZero ? setRightZero(false) : null
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        aria-label='Left'
        edge='start'
        onClick={() => scroll(-props.scrollWidth)}
        style={{ color: isLeftZero ? 'transparent' : 'rgba(0, 0, 0, 0.54)' }}
        disabled={isLeftZero}
      >
        <ArrowBackIosNew />
      </IconButton>

      <div className={styles.container} ref={divRef}>
        {props.children}
      </div>

      <IconButton
        aria-label='Right'
        edge='end'
        onClick={() => scroll(props.scrollWidth)}
        style={{ color: isRightZero ? 'transparent' : 'rgba(0, 0, 0, 0.54)' }}
        disabled={isRightZero}
      >
        <ArrowForwardIos />
      </IconButton>
    </div>
  )
}

export default HorizontalArrowView
