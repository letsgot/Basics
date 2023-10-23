import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
       <Link href={"/addproduct"}>Go to add product</Link>
       <Link href={"/productlist"}>Go to Product list</Link>
    </main>
  )
}
