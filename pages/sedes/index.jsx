import { PageSEO } from '@/components/SEO'
import SedeItem from '@/components/SedeItem'
import { API_URL } from '@/config/index'
import Footer from '@/components/Footer'

export default function Subsedes({ sedes }) {
  return (
    <>
      <PageSEO title={`Subsedes - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        {sedes.map((item) => (
          <div key={item.id}>
            <SedeItem sedes={item} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/sedes`)
  const sedes = await res.json()
  return {
    props: { sedes },
    revalidate: 1,
  }
}
