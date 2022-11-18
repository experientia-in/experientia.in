import React from 'react'
import styles from './style/main.module.css'
export default function Home() {
  return (
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
  )
}
