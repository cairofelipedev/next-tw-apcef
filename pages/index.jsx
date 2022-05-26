import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import CarouselHome from '@/components/CarouselHome'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <CarouselHome />
      <div className="mx-auto max-w-6xl px-2 pt-4 md:grid md:grid-cols-3">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              Notícias APCEF/PI
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Acompanhe as notícias mais atualizadas de nossa APCEF
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 py-10">
              <div className="-m-4 flex flex-wrap">
                <div className="p-1">
                  <div className="h-full overflow-hidden rounded-xl shadow-md shadow-gray-300">
                    <div className="duration-400 h-64 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
                      <Image
                        layout="fill"
                        src="/static/images/Eleicaofuncef1803.jpeg"
                        alt="Vercel Logo"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                        ELEIÇÕES, FUNCEF, VOTO
                      </h2>
                      <h1 className="title-font mb-3 text-lg font-medium">
                        Eleições Funcef 2022: Segundo turno inicia nesta sexta (29)
                      </h1>
                      <p className="mb-3 leading-relaxed">
                        Está em curso a campanha para o segundo turno das eleições Funcef 2022. Na
                        votação, que acontece entre os dias 29 de abril e 2 de maio...
                      </p>
                      <div className="flex flex-wrap items-center ">
                        <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                          Leia mais
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              Notícias FENAE
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Acompanhe as notícias mais atualizadas de nossa FEDERAÇÃO
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 py-10">
              <div className="-m-4 flex flex-wrap">
                <div className="p-1">
                  <div className="h-full overflow-hidden rounded-xl shadow-md shadow-gray-300">
                    <div className="duration-400 h-64 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
                      <Image layout="fill" src="/static/images/corrida.jpg" alt="Vercel Logo" />
                    </div>
                    <div className="p-6">
                      <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                        ESPORTE, CORRIDA, FENAE
                      </h2>
                      <h1 className="title-font mb-3 text-lg font-medium">
                        Foi dada a largada para a Corrida Fenae do Pessoal da Caixa 2022!
                      </h1>
                      <p className="mb-3 leading-relaxed">
                        Coloque seu tênis e se prepare! A Corrida Fenae do Pessoal da Caixa está de
                        volta! O evento é organizada pelas Apcefs, com o apoio da FENAE...
                      </p>
                      <div className="flex flex-wrap items-center ">
                        <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                          Leia mais
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="p-6">
          <div className="overflow-hidden rounded-xl shadow-md shadow-gray-300">
            <div className="duration-400 h-80 w-full scale-100 object-cover object-center transition-all">
              <Image layout="fill" src="/static/images/associase.png" alt="Vercel Logo" />
            </div>
          </div>
          <div className="flex justify-center pt-4 pb-4">
            <button className="shadow-cla-blue rounded-lg bg-orange-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              ASSOCIA-SE
            </button>
          </div>
          <div className="overflow-hidden rounded-xl shadow-md shadow-gray-300">
            <div className="duration-400 h-80 w-full scale-100 object-cover object-center transition-all">
              <Image layout="fill" src="/static/images/saude.png" alt="Vercel Logo" />
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button className="shadow-cla-blue rounded-lg bg-red-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
