import { PageSEO } from '@/components/SEO'
import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import BannersItemSede from '@/components/BannersItemSede'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

export default function SingleSedes({ subsedes }) {
  const [photos] = useState(subsedes.images)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const router = useRouter()
  return (
    <>
      <PageSEO title={`Sede ${subsedes.nome} - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          Sede {subsedes.nome}
        </h1>
        <h2 className="title-font text-md mb-1">
          <ReactMarkdown escapeHtml={false}>{subsedes.descricao}</ReactMarkdown>
        </h2>
        <div className="mb-8 mt-4 flex items-center rounded-xl p-2 shadow-md shadow-blue-200">
          <div>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Localização
            </h2>
            <h2 className="title-font text-md mb-1">
              <ReactMarkdown escapeHtml={false}>{subsedes.localizacao}</ReactMarkdown>
            </h2>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Infraestrutura
            </h2>
            <h2 className="title-font text-md mb-1">
              <ReactMarkdown escapeHtml={false}>{subsedes.infra}</ReactMarkdown>
            </h2>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Diretoria
            </h2>
            <h2 className="title-font text-md mb-1">
              <ReactMarkdown escapeHtml={false}>{subsedes.diretoria}</ReactMarkdown>
            </h2>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {photos.map((pic) => (
            <SwiperSlide key={pic.id}>
              <BannersItemSede sedes={pic} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/sedes/`)
  const subsedes = await res.json()
  const paths = subsedes.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/sedes?slug=${slug}`)
  const singleSedes = await res.json()
  return {
    props: {
      subsedes: singleSedes[0],
    },
    revalidate: 1,
  }
}
