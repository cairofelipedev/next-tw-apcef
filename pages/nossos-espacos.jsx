import Footer from '@/components/Footer'
import { PageSEO } from '@/components/SEO'
import { API_URL } from '@/config/index'
import EspacoItem from '@/components/EspacoItem'

export default function Espacos({ espacos }) {
  return (
    <>
      <PageSEO title={`Nossos Espaços - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <div className="grid grid-cols-2 gap-8">
          {espacos.map((item) => (
            <div key={item.id}>
              <EspacoItem espacos={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/espacos`)
  const espacos = await res.json()
  return {
    props: { espacos },
    revalidate: 1,
  }
}
