import { PageSEO } from '@/components/SEO'
import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

export default function SingleSports({ sports }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const router = useRouter()
  return (
    <>
      <PageSEO title={`${sports.nome} - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          {sports.nome}
        </h1>
        <h2 className="title-font text-md mb-1">{sports.descricao}</h2>
        <div className="mb-8 mt-4 flex items-center rounded-xl p-2 shadow-md shadow-blue-200">
          <div className="mr-3">
            <Image
              src={sports.imagem ? sports.imagem.url : 'No Image'}
              alt="avatar"
              width="500px"
              height="300px"
            />
          </div>
          <div>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">Horários</h2>
            <h2 className="title-font text-md mb-1">
              <ReactMarkdown escapeHtml={false}>{sports.horarios}</ReactMarkdown>
            </h2>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">Valores</h2>
            <h2 className="title-font text-md mb-1">
              <ReactMarkdown escapeHtml={false}>{sports.valores}</ReactMarkdown>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/esportes/`)
  const sports = await res.json()
  const paths = sports.map((item) => ({
    params: { slug: item.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/esportes?slug=${slug}`)
  const singleSports = await res.json()
  return {
    props: {
      sports: singleSports[0],
    },
    revalidate: 1,
  }
}
