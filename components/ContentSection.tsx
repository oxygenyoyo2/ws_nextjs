import Card from './Card'

const ContentSection = ({ posts }: { posts: any[] }) => {
  return (
    <section className="px-3 bg-[#202329] py-[4.5rem]">
      <div className="cards grid grid-cols-3 grid-row-2 gap-0 justify-items-center ">
        {posts && posts.map((post, index) => <Card post={post} key={index} />)}
      </div>
    </section>
  )
}

export default ContentSection
