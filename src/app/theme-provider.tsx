'use client'

import { Theme } from '@mui/material'
import { createContext, ReactNode } from 'react'

export interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}

export const ThemeContext = createContext({} as Theme)

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
