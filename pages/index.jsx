import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import CarouselGalery from '@/components/CarouselGallery'
import CarouselNews2 from '@/components/CarouselNews2'
import { API_URL } from '@/config/index'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import style from '@/css/CarouselHome.module.css'
import { Pagination } from 'swiper'
import BannersItem from '@/components/BannersItem'
import HomeBlogItem from '@/components/HomeBlogItem'
import Footer from '@/components/Footer'
export default function Home({ banners, news }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={style.mySwiper}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <BannersItem banners={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto max-w-7xl px-2 pt-4 md:grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              Notícias APCEF/PI
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 sm:text-center md:text-left">
              Acompanhe as notícias mais atualizadas de nossa APCEF
            </p>
          </div>

          <section className="body-font">
            <div className="container mx-auto px-5 pt-4">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {news.map((item) => (
                  <SwiperSlide key={item.id}>
                    <HomeBlogItem news={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Link href="/blog">
                <a className="flex items-center font-extrabold text-blue-apcef">
                  Mais Notícias
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
                </a>
              </Link>
            </div>
          </section>
          <div className="space-y-2 p-2 pb-2 pt-6 md:space-y-2">
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              Notícias FENAE
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 sm:text-center md:text-left">
              Acompanhe as notícias mais atualizadas da FENAE
            </p>
          </div>
          <section className="body-font">
            <div className="container mx-auto px-5 py-10">
              <CarouselNews2 />
            </div>
          </section>
        </div>
        <div className="p-6">
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
          <div className="mt-4 overflow-hidden rounded-xl shadow-md shadow-gray-300">
            <div className="duration-400 h-80 w-full scale-100 object-cover object-center transition-all">
              <Image layout="fill" src="/static/images/associase.png" alt="Vercel Logo" />
            </div>
          </div>
          <div className="flex justify-center pt-4 pb-4">
            <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              ASSOCIE-SE
            </button>
          </div>
          <section className="body-font pt-4">
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
            <div className="mt-4 mb-4 h-16 space-y-2 rounded-xl bg-orange-apcef p-2  md:space-y-2">
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
            <div className="h-36 space-y-2 rounded-xl bg-orange-apcef p-2 pb-2 md:space-y-2">
              <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded py-2 px-4 pt-12 font-bold">
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
          </section>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-2 pt-4 md:grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="space-y-2 p-2 pb-2 md:space-y-2">
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef  dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              UNIDADES DE LAZER
            </h1>
          </div>
          <CarouselGalery />
        </div>
        <div className="mx-auto w-full max-w-lg rounded-lg bg-white px-10 py-8 shadow-xl md:ml-8">
          <div className="mx-auto max-w-md space-y-6" />
          <form action="" />
          <h2 className="text-2xl font-bold">Notícias On-line</h2>
          <p className="my-4 opacity-70">
            Receba informações da APCEF/PI pelo WhatsApp. É só cadastrar seu número com DDD.
          </p>
          <label className="text-sm font-bold uppercase opacity-70">Nome Completo</label>
          <input
            type="text"
            className="mt-2 mb-4 w-full rounded border-2 border-slate-200 bg-slate-200 p-3 focus:border-slate-600 focus:outline-none"
          />
          <label className="text-sm font-bold uppercase opacity-70">WhatsApp</label>
          <input type="text" className="mt-2 mb-4 w-full rounded bg-slate-200 p-3" />
          <label className="text-sm font-bold uppercase opacity-70">Tipo de associado</label>
          <select className="mt-2 mb-4 w-full rounded border-2 border-slate-200 bg-slate-200 p-3 focus:border-slate-600 focus:outline-none">
            <option value="">Contribuinte</option>
            <option value="">Empregado Caixa</option>
          </select>
          <div className="my-2 font-medium opacity-70">
            <input type="checkbox" />
            Receber informações de ações para o pessoal da ativa
          </div>
          <div className="my-2 font-medium opacity-70">
            <input type="checkbox" />
            Receber informações de atividades para aposentados
          </div>
          <input
            type="submit"
            className="my-2 cursor-pointer rounded bg-orange-apcef py-3 px-6 font-medium  text-white duration-300 ease-in-out hover:bg-blue-apcef"
            value="Enviar"
          />
          <form />
        </div>
      </div>
      <div className="mx-auto max-w-6xl divide-y divide-gray-200 dark:divide-gray-700">
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
                      <img src="/static/images/cirancas.jpg" className="rounded-xl brightness-75" />
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
                      <img src="/static/images/cirancas.jpg" className="rounded-xl brightness-75" />
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
                      <img src="/static/images/cirancas.jpg" className="rounded-xl brightness-75" />
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
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/banners`)
  const banners = await res.json()
  const res2 = await fetch(`${API_URL}/api/news`)
  const news = await res2.json()
  return {
    props: { banners, news: news.slice(0, 5) },
    revalidate: 1,
  }
}
