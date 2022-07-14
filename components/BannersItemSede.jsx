import Image from 'next/image'

export default function SedeTheItem({ sedes }) {
  return (
    <Image
      width="600px"
      height="300px"
      className="rounded-md"
      src={sedes.url ? sedes.url : 'No Image'}
      alt="Vercel Logo"
    />
  )
}
