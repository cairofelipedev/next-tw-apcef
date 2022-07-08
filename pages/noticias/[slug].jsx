import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import Footer from '@/components/Footer'

export default function SingleNews({ news }) {
  const router = useRouter()
  return (
    <>
      <PageSEO title={`${news.name} - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          {news.name}
        </h1>
        <div className="mb-8 mt-4 flex items-center rounded-xl p-2 shadow-md shadow-blue-200">
          <div className="mr-3">
            <Image src={news.image ? news.image.url : 'No Image'} width="1500px" height="1000px" />
          </div>
          <div>
            <h2 className="title-font text-md mb-1">{news.detail}</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/noticias/`)
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
  const res = await fetch(`${API_URL}/noticias?slug=${slug}`)
  const singleNews = await res.json()
  return {
    props: {
      news: singleNews[0],
    },
    revalidate: 1,
  }
}
