import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default function CarouselNews() {
  return (
    <>
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
        <SwiperSlide>
          <div className="mb-4 h-full overflow-hidden rounded-xl shadow-md shadow-blue-200">
            <div className="duration-400 h-36 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
              <Image layout="fill" src="/static/images/Eleicaofuncef1803.jpeg" alt="Vercel Logo" />
            </div>
            <div className="p-6">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                ELEIÇÕES, FUNCEF, VOTO
              </h2>
              <h1 className="title-font mb-3 text-lg font-medium">
                Eleições Funcef 2022: Segundo turno inicia nesta sexta (29)
              </h1>
              <div className="flex flex-wrap items-center ">
                <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full overflow-hidden rounded-xl shadow-md shadow-blue-200">
            <div className="duration-400 h-36 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
              <Image layout="fill" src="/static/images/Eleicaofuncef1803.jpeg" alt="Vercel Logo" />
            </div>
            <div className="p-6">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                ELEIÇÕES, FUNCEF, VOTO
              </h2>
              <h1 className="title-font mb-3 text-lg font-medium">
                Eleições Funcef 2022: Segundo turno inicia nesta sexta (29)
              </h1>
              <div className="flex flex-wrap items-center ">
                <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full overflow-hidden rounded-xl shadow-md shadow-blue-200">
            <div className="duration-400 h-36 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
              <Image layout="fill" src="/static/images/Eleicaofuncef1803.jpeg" alt="Vercel Logo" />
            </div>
            <div className="p-6">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                ELEIÇÕES, FUNCEF, VOTO
              </h2>
              <h1 className="title-font mb-3 text-lg font-medium">
                Eleições Funcef 2022: Segundo turno inicia nesta sexta (29)
              </h1>
              <div className="flex flex-wrap items-center ">
                <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full overflow-hidden rounded-xl shadow-md shadow-blue-200">
            <div className="duration-400 h-36 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
              <Image layout="fill" src="/static/images/Eleicaofuncef1803.jpeg" alt="Vercel Logo" />
            </div>
            <div className="p-6">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                ELEIÇÕES, FUNCEF, VOTO
              </h2>
              <h1 className="title-font mb-3 text-lg font-medium">
                Eleições Funcef 2022: Segundo turno inicia nesta sexta (29)
              </h1>
              <div className="flex flex-wrap items-center ">
                <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full overflow-hidden rounded-xl shadow-md shadow-blue-apcef">
            <div className="duration-400 h-36 w-full scale-110 object-cover object-center transition-all hover:scale-100 ">
              <Image layout="fill" src="/static/images/Eleicaofuncef1803.jpeg" alt="Vercel Logo" />
            </div>
            <div className="p-6">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                ELEIÇÕES, FUNCEF, VOTO
              </h2>
              <h1 className="title-font mb-3 text-lg font-medium">
                Eleições Funcef 2022: Segundo turno inicia nesta sexta (29)
              </h1>
              <div className="flex flex-wrap items-center ">
                <button className="shadow-cla-blue rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
