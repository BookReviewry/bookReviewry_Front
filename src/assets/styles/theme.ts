'use client'

import { Roboto } from 'next/font/google'
import { Theme, createTheme } from '@mui/material/styles'

declare module '@mui/material' {
  interface Color {
    main: string
    dark: string
    light: string
  }
}

export type Color = 'black' | 'grey'

const color: { [key in Color]: string } = {
  black: '#3A3A3A',
  grey: '#8F9191',
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#F7ECDE',
      dark: '#E9DAC1',
      light: '#FFF9F2',
    },
    secondary: {
      main: '#54BAB9',
      light: '#9ED2C6',
    },
    info: {
      main: '#7A001B',
    },
    grey: {
      dark: '#3A3A3A',
      main: '#8F9191',
      light: '#E4E4E4',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export { color, theme }
