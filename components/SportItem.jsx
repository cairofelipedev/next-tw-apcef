import Image from 'next/image'
import Link from 'next/link'

export default function SportItem({ sports }) {
  return (
    <div className="mb-8 mt-4 items-center rounded-xl p-2 shadow-md shadow-blue-200">
      <div className="mr-3">
        <Image
          className="rounded-md"
          src={sports.imagem ? sports.imagem.url : 'No Image'}
          alt="avatar"
          width="500px"
          height="300px"
        />
      </div>
      <div>
        <h1 className="title-font mb-1 text-center text-lg font-bold uppercase text-blue-apcef">
          {sports.nome}
        </h1>
        <div className="flex justify-center">
          <Link href={`/esportes/${sports.slug}`}>
            <button className="shadow-cla-blue mt-4 mb-4 rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              Saiba Mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
