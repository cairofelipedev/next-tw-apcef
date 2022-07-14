import { PageSEO } from '@/components/SEO'
import SportItem from '@/components/SportItem'
import { API_URL } from '@/config/index'
import Footer from '@/components/Footer'

export default function Sports({ sports }) {
  return (
    <>
      <PageSEO title={`Esportes - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          ESPORTES APCEF/PI
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {sports.map((item) => (
            <div key={item.id}>
              <SportItem sports={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/esportes`)
  const sports = await res.json()
  return {
    props: { sports },
    revalidate: 1,
  }
}
