import { PageSEO } from '@/components/SEO'
import BlogItem from '@/components/BlogItem'
import { API_URL } from '@/config/index'
export default function News({ news }) {
  return (
    <>
      <PageSEO title={`Notícias - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          Notícias APCEF/PI
        </h1>
        {news.map((item) => (
          <div key={item.id}>
            <BlogItem news={item} />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/blog`)
  const news = await res.json()
  return {
    props: { news },
    revalidate: 1,
  }
}
