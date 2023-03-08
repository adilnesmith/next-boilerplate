import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from 'components/common/header'
import MainBody from 'components/main-body'
import Footer from 'components/common/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js boilerplate</title>
        <meta name="description" content="The Next.js boilerplate for personal use" />
        <meta name="author" content="Adil Peter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainBody />
      <Footer />
    </div >
  )
}

export default Home
