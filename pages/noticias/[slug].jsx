import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import Image from 'next/image'

export default function SingleNews({ news }) {
  const router = useRouter()
  return (
    <>
      <p>
        {news.date} {news.time}{' '}
      </p>
      <h1>{news.name}</h1>
      {news.image && <Image src={news.image} width={900} height={600} />}
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/news/`)
  const news = await res.json()
  const paths = news.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/news/${slug}`)
  const singleNews = await res.json()
  return {
    props: {
      news: singleNews[0],
    },
    revalidate: 1,
  }
}
