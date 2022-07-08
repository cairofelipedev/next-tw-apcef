import Footer from '@/components/Footer'
import { PageSEO } from '@/components/SEO'
import { API_URL } from '@/config/index'
import AboutItem from '@/components/AboutItem'

export default function About({ about }) {
  return (
    <>
      <PageSEO title={`Quem Somos - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <div className="grid grid-cols-2 gap-8">
          {about.map((item) => (
            <div key={item.id}>
              <AboutItem about={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/quem-somos`)
  const about = await res.json()
  return {
    props: { about },
    revalidate: 1,
  }
}
