import { PageSEO } from '@/components/SEO'
import SedeItem from '@/components/SedeItem'
import { API_URL } from '@/config/index'
import Footer from '@/components/Footer'

export default function Subsedes({ subsedes }) {
  return (
    <>
      <PageSEO title={`Subsedes - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        {subsedes.map((item) => (
          <div key={item.id}>
            <SedeItem subsedes={item} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/subsedes`)
  const subsedes = await res.json()
  return {
    props: { subsedes },
    revalidate: 1,
  }
}
