import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import styles from '@/styles/Home.module.scss'
import { Hero } from '@/components/hero'
import { About } from '@/components/about/About'
import { Expirience } from '@/components/expirience/Expirience'
import { Work } from '@/components/projects/Work'
import { Contact } from '@/components/contact/Contact'
import { Footer } from '@/layout/Footer'
import { OtherProjects } from '@/components/projects/OtherProjects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Radosław Jajko - 🖥️ Software engineer</title>
        <meta name="description" content="Personal portfilo page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Hero />
        <About />
        <Expirience />
        <Work />
        <OtherProjects />
        <Contact />
        <Footer />

      </main>
    </>
  )
}
