import Head from 'next/head'
import SideNavigation from './components/layout/side-navigation'
import ThemeProvider from './theme-provider'

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
      <body>
        <header></header>
        <SideNavigation />
        <ThemeProvider>
          <section>{children}</section>
        </ThemeProvider>
      </body>
    </html>
  )
}
