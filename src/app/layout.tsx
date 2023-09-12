import SideNavigation from '@/components/layout/SideNavigation'
import AuthContextProvider from '@/store/auth-context'
import styles from './layout.module.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <script src='https://accounts.google.com/gsi/client' defer></script>
        <div className={styles.container}>
          <AuthContextProvider>
            <SideNavigation />
            <main className={styles.main}>{children}</main>
          </AuthContextProvider>
        </div>
      </body>
    </html>
  )
}
