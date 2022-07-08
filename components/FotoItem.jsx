import Image from 'next/image'

export default function FotoItem({ fotos }) {
  return (
    <div className="col-span-2">
      <Image
        width="800px"
        height="500px"
        src={fotos.image ? fotos.image.url : 'No Image'}
        alt="Vercel Logo"
        className="rounded-md"
      />
      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
        {fotos.nome}
      </p>
    </div>
  )
}
