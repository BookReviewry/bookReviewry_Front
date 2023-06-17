import { Button, SxProps, Theme } from '@mui/material'
import React from 'react'

type Props = {
  label: string
  sx?: SxProps<Theme>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const RoundButton = (props: Props) => {
  return (
    <Button
      variant='contained'
      sx={{ borderRadius: 10, ...props.sx }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </Button>
  )
}

export default RoundButton
