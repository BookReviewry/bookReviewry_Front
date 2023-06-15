// import styles from './page.module.scss'
import { Button } from '../lib/mui'
import RootLayout from './layout'

export default function Home() {
  return (
    <RootLayout>
      <h1>HOME</h1>
      <Button variant='contained'>mui test</Button>
    </RootLayout>
  )
}
