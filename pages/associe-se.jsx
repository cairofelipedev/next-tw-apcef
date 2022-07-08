import Footer from '@/components/Footer'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Associese() {
  return (
    <>
      <PageSEO title={`Associe-se - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          SEJA UM ASSOCIADO APCEF/PI
        </h1>
        <p className="text-xl leading-7 text-gray-900 dark:text-gray-400 sm:text-center md:text-left">
          A força da Apcef/PI é resultado da união de milhares de associados – entre ativos,
          aposentados e pensionistas. Integre esta luta, associe-se!
        </p>
        <p className="pt-2 text-xl font-semibold leading-7 text-blue-apcef dark:text-gray-400 sm:text-center">
          Escolha uma opção e preencha o formulário.
        </p>
        <div className="flex justify-center space-x-2">
          <Link href="/cadastro">
            <button className="inline-flex items-center rounded-md bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
              ASSOCIADO EFETIVO
            </button>
          </Link>
          <button className="inline-flex items-center rounded-md bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
            DEPENDENTE
          </button>
          <button className="inline-flex items-center rounded-md bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
            ASSOCIADO CONTRIBUINTE
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
