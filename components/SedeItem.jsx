import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import BannersItemSede from '@/components/BannersItemSede'

export default function SedeItem({ sedes }) {
  const [photos] = useState(sedes.images)
  return (
    <>
      <div className="mb-8 mt-4 rounded-xl p-2 shadow-md shadow-blue-200">
        <div className="grid grid-cols-2 gap-8">
          <div className="w-11/12">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              {photos.map((pic) => (
                <SwiperSlide key={pic.id}>
                  <BannersItemSede sedes={pic} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
              {sedes.nome}
            </h1>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Localização
            </h2>
            <h2 className="title-font text-md mb-1">{sedes.localizacao}</h2>
            <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
              Infraestrutura
            </h2>
            <h2 className="title-font text-md mb-1">
              <ReactMarkdown escapeHtml={false}>{sedes.infra}</ReactMarkdown>
            </h2>
            <Link href={`/sedes/${sedes.slug}`}>
              <button className="shadow-cla-blue mt-4 mb-4 rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                Saiba Mais
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
