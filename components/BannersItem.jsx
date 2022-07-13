import Image from 'next/image'

export default function BannersItem({ banners }) {
  return (
    <Image layout="fill" src={banners.imagem ? banners.imagem.url : 'No Image'} alt="Vercel Logo" />
  )
}
