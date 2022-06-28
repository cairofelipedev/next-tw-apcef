import Image from 'next/image'

export default function BannersItem({ news }) {
  return (
    <div className="mb-4 h-full overflow-hidden rounded-xl shadow-md shadow-blue-200">
      <div className="duration-400 h-36 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
        <Image layout="fill" src={news.image ? news.image : 'No Image'} alt="Vercel Logo" />
      </div>
      <div className="p-6">
        <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
          ELEIÇÕES, FUNCEF, VOTO
        </h2>
        <h1 className="title-font mb-3 text-lg font-medium">{news.name}</h1>
        <div className="flex flex-wrap items-center ">
          <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
            Leia mais
          </button>
        </div>
      </div>
    </div>
  )
}
