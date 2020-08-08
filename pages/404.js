import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import styles from '../styles/error.module.css'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={styles.error}>Error 404 :(</h1>
      <p>Please, <Link href={'./'}><a>go back</a></Link></p>
    </MainLayout>
  )
}
