import type { NextPage } from 'next'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TitleSection from '../components/TitleSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <TitleSection />
        <ContentSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
