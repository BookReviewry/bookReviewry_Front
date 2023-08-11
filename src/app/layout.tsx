import Head from 'next/head'
import SideNavigation from '@/components/layout/SideNavigation'
import AuthContextProvider from '@/store/auth-context'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <script src='https://accounts.google.com/gsi/client' defer></script>
        <div style={{ display: 'flex', height: '100%', width: '100%', minWidth: 'fit-content' }}>
          <AuthContextProvider>
            <SideNavigation />
          </AuthContextProvider>
          <main style={{ position: 'relative' }}>{children}</main>
        </div>
      </body>
    </html>
  )
}
