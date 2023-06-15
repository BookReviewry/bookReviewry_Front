import Head from 'next/head'
import SideNavigation from './components/layout/side-navigation'
import ThemeProvider from './theme-provider'
import { theme } from '@/app/styles/theme'

import classes from './layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <body className={classes.body}>
        <header></header>
        <SideNavigation />
        <ThemeProvider>
          <section>{children}</section>
        </ThemeProvider>
      </body>
    </html>
  )
}
