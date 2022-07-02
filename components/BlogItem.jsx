import Image from 'next/image'
import Link from 'next/link'

export default function BlogItem({ news }) {
  return (
    <div className="grid grid-cols-3 pt-4">
      <div className="mb-4 overflow-hidden rounded-xl">
        <div className="duration-400 h-60 w-full scale-110">
          <Image layout="fill" src={news.image ? news.image : 'No Image'} alt="Vercel Logo" />
        </div>
      </div>
      <div className="col-span-2 p-6">
        <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
          ELEIÇÕES, FUNCEF, VOTO
        </h2>
        <h1 className="title-font mb-3 text-lg font-medium">{news.name}</h1>
        <div className="flex flex-wrap items-center ">
          <Link href={`/blog/${news.slug}`}>
            <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              Leia mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
