import Head from 'next/head'
import styles from '../styles/index-page.module.css'
export default function index() {
  return (
    <>
    <Head>
      <title>Welcome to Experientia</title>
    </Head>
    <section className={styles.cover}>
      <div className={styles.cover_info}>
        <div className={styles.cover_head}>
          Experientia
        </div>
        <span className={styles.cover_head_info}>
          Our vision is to democratise Astrophysics by means of organising all the information in a meaningful way.
        </span>
      </div>
    </section>
    </>
  )
}
