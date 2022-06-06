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
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
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
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
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
              ASSOCIE-SE
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
      <div className="mx-auto max-w-6xl px-2 pt-4 md:grid md:grid-cols-3">
        <div className="col-span-2 divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              GALERIA DE FOTOS
            </h1>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 py-10">
              <div className="-m-4 flex flex-wrap">
                <div className="p-1">
                  <div className="grid grid-cols-6 gap-x-4 gap-y-1">
                    <div className="col-span-2">
                      <a href="">
                        <img
                          src="/static/images/cirancas.jpg"
                          className="rounded-xl brightness-75"
                        />
                      </a>
                      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
                        {' '}
                        Dia das Crianças e do Saci{' '}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <a href="">
                        <img src="/static/images/volei.jpg" className="rounded-xl brightness-75" />
                      </a>
                      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
                        {' '}
                        1ª Copa de Voleibol masculino{' '}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <a href="">
                        <img
                          src="/static/images/cirancas.jpg"
                          className="rounded-xl brightness-75"
                        />
                      </a>
                      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
                        {' '}
                        Dia das Crianças e do Saci{' '}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <a href="">
                        <img src="/static/images/volei.jpg" className="rounded-xl brightness-75" />
                      </a>
                      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
                        {' '}
                        1ª Copa de Voleibol masculino{' '}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <a href="">
                        <img
                          src="/static/images/cirancas.jpg"
                          className="rounded-xl brightness-75"
                        />
                      </a>
                      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
                        {' '}
                        Dia das Crianças e do Saci{' '}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <a href="">
                        <img src="/static/images/volei.jpg" className="rounded-xl brightness-75" />
                      </a>
                      <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
                        {' '}
                        1ª Copa e Voleibol masculino{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="p-8 pt-24">
          <section className="body-font">
            <div className="h-16 space-y-2 rounded-xl bg-orange-apcef p-2 pb-2 md:space-y-2">
              <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  className="bi bi-chevron-right font-bold"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <span>EVENTOS</span>
              </button>
            </div>
            <div className="h-16 space-y-2 rounded-xl bg-orange-apcef p-2 pb-2 md:space-y-2">
              <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  className="bi bi-chevron-right font-bold"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <span>APCEF INFORMA</span>
              </button>
            </div>
            <div className="mt-4 h-16 space-y-2 rounded-xl bg-orange-apcef p-2 pb-2 md:space-y-2">
              <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  className="bi bi-chevron-right font-bold"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <span>ANIVERSARIANTES</span>
              </button>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-blue-apcef">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="mb-1 flex items-center">
                  <div className="mr-3">
                    <Image
                      src="/static/favicons/logo.png"
                      alt="avatar"
                      width="50px"
                      height="50px"
                      className="h-48 w-48 rounded-full"
                    />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="mb-4 h-6 text-2xl font-semibold text-white dark:text-white">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-white">
                Associação do Pessoal da Caixa Econômica Federal - Piauí
              </p>
              <div className="mt-8 flex space-x-6 text-white">
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-white">APCEF/PI</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                  <a className="hover:opacity-75" href="#">
                    QUEM SOMOS
                  </a>
                  <a className="hover:opacity-75" href="#">
                    SEDES
                  </a>
                  <a className="hover:opacity-75" href="#">
                    NOTICÍAS
                  </a>
                  <a className="hover:opacity-75" href="#">
                    ANIVERSARIANTES
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">SERVIÇOS</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                  <a className="hover:opacity-75" href="#">
                    ASSOCIE-SE
                  </a>
                  <a className="hover:opacity-75" href="#">
                    APCEF SAÚDE
                  </a>
                  <a className="hover:opacity-75" href="#">
                    EVENTOS
                  </a>
                  <a className="hover:opacity-75" href="#">
                    ESPORTES
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">MAIS INFORAMÇÕES</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                  <a className="hover:opacity-75" href="#">
                    CONTATOS
                  </a>
                  <a className="hover:opacity-75" href="#">
                    FAQS
                  </a>
                  <a className="hover:opacity-75" href="#">
                    EMAIL
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium text-white">LEGAL</p>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                  <a className="hover:opacity-75" href="#">
                    PRIVACIDADE
                  </a>
                  <a className="hover:opacity-75" href="#">
                    TERMOS &amp; CONDIÇÕES
                  </a>
                  <a className="hover:opacity-75" href="#">
                    ACESSIBILIDADE
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-white">
            Associação do Pessoal da Caixa Econômica Federal - Piauí
          </p>
        </div>
      </footer>
    </>
  )
}
