import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DrumMachine from '../components/DrumMachine'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drum Machine</title>
        <meta name="Drum Machine" content="This is a drum machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Drum Machine</h1>
      <DrumMachine/>
      </main>


      

    </div>
  )
}
