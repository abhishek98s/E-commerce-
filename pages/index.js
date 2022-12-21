import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../Components/Landing Page'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ACEHOP - Online Marketplace for shopping</title>
      </Head>
      <LandingPage />
    </>
  )
}
