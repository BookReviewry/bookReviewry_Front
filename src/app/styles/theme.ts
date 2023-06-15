import { Roboto } from 'next/font/google'
import { Theme, createTheme } from '@mui/material/styles'

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
    },
    secondary: {
      main: '#54BAB9',
      light: '#9ED2C6',
    },
    info: {
      main: '#7A001B',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export { color, theme }
