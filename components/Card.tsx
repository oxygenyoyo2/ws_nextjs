import Image from 'next/image'
import Link from 'next/link'

const Card = ({ post }: { post: any }) => {
  return (
    <article className="w-[600px] h-[220px] bg-[#3c3e44] m-[0.75rem] overflow-hidden rounded-lg flex">
      <div className="relative">
        <Image
          src={post.image}
          alt={post.name}
          width={230}
          height={220}
          priority
        />
      </div>
      <div className="info p-[0.75rem]">
        <div className="section flex flex-col mb-3">
          <Link href={`/character/${post.id}`}>
            <a
              className="text-[1.5rem] font-bold text-[#f5f5f5] hover:text-primary"
              target="_blank"
            >
              <h2>{post.name}</h2>
            </a>
          </Link>
          <span className="status text-white">
            {post.status} - {post.species}
          </span>
        </div>
        <div className="section flex flex-col mb-3">
          <span className="text-[#9e9e9e]">Last known location:</span>
          <a
            href="https://rickandmortyapi.com/api/location/6"
            target="_blank"
            className="text-[#f5f5f5] text-[18px] hover:text-primary"
          >
            {post.location.name}
          </a>
        </div>
        <div className="section flex flex-col mb-3">
          <span className="text-[#9e9e9e] ">First seen in:</span>
          <a
            href="https://rickandmortyapi.com/api/episode/8"
            target="_blank"
            className="text-[#f5f5f5] text-[18px] hover:text-primary"
          ></a>
        </div>
      </div>
    </article>
  )
}

export default Card
