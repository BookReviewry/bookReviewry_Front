import Head from 'next/head'
import SideNavigation from '@/components/layout/SideNavigation'

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
        <SideNavigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
