import Head from 'next/head'
import { Footer } from '@/layout/Footer'

import { Hero } from '@/components/hero'
import { About } from '@/components/about/About'
import { Expirience } from '@/components/expirience/Expirience'
import { FeaturedProjects } from '@/components/projects/FeaturedProjects'
import { OtherProjects } from '@/components/projects/OtherProjects'
import { Contact } from '@/components/contact/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Radosław Jajko - Software engineer</title>
        <meta name="description" content="Personal portfilo page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Expirience />
        <FeaturedProjects />
        <OtherProjects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
