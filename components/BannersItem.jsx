import Image from 'next/image'

export default function BannersItem({ banners }) {
  return (
    <Image layout="fill" src={banners.image ? banners.image.url : 'No Image'} alt="Vercel Logo" />
  )
}
