import Image from 'next/image'

export default function SedeTheItem({ sedethe }) {
  return (
    <Image
      width="800px"
      height="500px"
      src={sedethe.url ? sedethe.url : 'No Image'}
      alt="Vercel Logo"
    />
  )
}
