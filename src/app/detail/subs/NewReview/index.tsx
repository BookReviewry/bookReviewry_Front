import React from 'react'
import styles from './index.module.scss'
import UserTag from '@/components/UserTag'
import { Button, Slider, TextField } from '@mui/material'
import EmpathyRate from '@/components/EmpathyRate'

type Props = {}

const NewReview = (props: Props) => {
  const [rate, setRate] = React.useState(0)
  const [reviewContent, setReviewContent] = React.useState('')

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setRate(newValue as number)
  }

  return (
    <div className={styles.outerDiv}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <UserTag userTagType='SIMPLE' divStyle={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <EmpathyRate
            rate={rate}
            divStyle={{
              backgroundColor: 'transparent',
              minWidth: '205px',
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '-8px',
            }}
          />
          <Slider defaultValue={0} onChange={handleSliderChange} valueLabelDisplay='auto' step={10} marks min={0} max={100} />
        </div>
      </div>
      <TextField
        variant='outlined'
        fullWidth
        multiline
        rows={2}
        placeholder={`리뷰 작성...`}
        value={reviewContent}
        onChange={e => setReviewContent(e.target.value)}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: 10 }}>
        <Button
          variant='contained'
          sx={{ paddingInline: 3, borderRadius: 5 }}
          onClick={() => {
            console.log('---- [작성] 버튼 클릭 -----', rate, reviewContent)
          }}
        >
          작성
        </Button>
      </div>
    </div>
  )
}

export default NewReview
