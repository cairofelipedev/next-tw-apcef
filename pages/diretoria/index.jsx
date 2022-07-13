import { PageSEO } from '@/components/SEO'
import DirecaoItem from '@/components/DirecaoItem'
import DirecaoItem2 from '@/components/DirecaoItem2'
import DirecaoItem3 from '@/components/DirecaoItem3'
import { API_URL } from '@/config/index'
import Footer from '@/components/Footer'

export default function Directors({ directors, deliberativo, fiscal }) {
  return (
    <>
      <PageSEO title={`Diretoria - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          DIRETORIA
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {directors.map((item) => (
            <div key={item.id}>
              <DirecaoItem directors={item} />
            </div>
          ))}
        </div>
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          CONSELHO DELIBERATIVO
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {deliberativo.map((item) => (
            <div key={item.id}>
              <DirecaoItem2 deliberativo={item} />
            </div>
          ))}
        </div>
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          CONSELHO FISCAL
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {fiscal.map((item) => (
            <div key={item.id}>
              <DirecaoItem3 fiscal={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/directors?tipo=Diretoria`)
  const res2 = await fetch(`${API_URL}/directors?tipo=Deliberativo`)
  const res3 = await fetch(`${API_URL}/directors?tipo=Fiscal`)
  const directors = await res.json()
  const deliberativo = await res2.json()
  const fiscal = await res3.json()
  return {
    props: { directors, deliberativo, fiscal },
    revalidate: 1,
  }
}
