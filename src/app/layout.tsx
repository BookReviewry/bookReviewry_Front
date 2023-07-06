import Head from 'next/head'
import SideNavigation from '@/components/layout/SideNavigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <body>
        <script src='https://accounts.google.com/gsi/client' defer></script>
        <div style={{ display: 'flex', height: '100%', width: '100%', minWidth: 'fit-content' }}>
          <SideNavigation />
          <main style={{ position: 'relative' }}>{children}</main>
        </div>
      </body>
    </html>
  )
}
