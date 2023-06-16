import RootLayout from '@/app/layout'
import '@/assets/styles/globals.css'
import Header from '@/components/layout/header'

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <h1>메인페이지 내용을 넣읍시다</h1>
    </RootLayout>
  )
}
