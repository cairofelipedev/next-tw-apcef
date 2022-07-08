import { PageSEO } from '@/components/SEO'
import { useRouter } from 'next/router'
import { API_URL } from '@/config/index'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef, useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

export default function SingleSedes({ subsedes }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const router = useRouter()
  return (
    <>
      <PageSEO title={`Subsede ${subsedes.name} - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
          Subsede {subsedes.name}
        </h1>
        <h2 className="title-font text-md mb-1">{subsedes.descricao}</h2>
        <div className="mb-8 mt-4 flex items-center rounded-xl p-2 shadow-md shadow-blue-200">
          <div className="mr-3">
            <Image
              src={subsedes.image ? subsedes.image.url : 'No Image'}
              alt="avatar"
              width="500px"
              height="300px"
            />
          </div>
          <div>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Localização
            </h2>
            <h2 className="title-font text-md mb-1">{subsedes.localizacao}</h2>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Infraestrutura
            </h2>
            <h2 className="title-font text-md mb-1">{subsedes.infra}</h2>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Diretoria
            </h2>
            <h2 className="title-font text-md mb-1">{subsedes.diretoria}</h2>
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
          <SwiperSlide>
            <Image
              src={subsedes.image ? subsedes.image4.url : 'No Image'}
              alt="avatar"
              width="500px"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={subsedes.image ? subsedes.image.url : 'No Image'}
              alt="avatar"
              width="500px"
              height="300px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={subsedes.image ? subsedes.image.url : 'No Image'}
              alt="avatar"
              width="500px"
              height="300px"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/subsedes/`)
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
  const res = await fetch(`${API_URL}/subsedes?slug=${slug}`)
  const singleSedes = await res.json()
  return {
    props: {
      subsedes: singleSedes[0],
    },
    revalidate: 1,
  }
}
