import type { NextPage } from 'next'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TitleSection from '../components/TitleSection'

const Home: NextPage<{ posts: any }> = ({ posts }: { posts: any[] }) => {
  return (
    <>
      <Header />
      <main>
        <TitleSection />
        <ContentSection posts={posts} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://rickandmortyapi.com/api/character?pages=1')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.results.slice(0, 6),
    },
  }
}

export default Home
