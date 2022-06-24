import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import style from '@/css/CarouselGallery.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'

export default function CarouselGalery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={style.mySwiper2}
      >
        <SwiperSlide>
          <img src="/static/images/picos_bar.png" width="100%" />
          <div className="absolute top-0 left-0 w-1/2 bg-blue-apcef">
            <p className="px-4 py-2 text-xs text-white md:text-base">
              Piscinas adulto e infantil,Parque infantil com playground, Churrasqueiras
              individualizadas, Mesa de sinuca, Tv por assinatura, Estacionamento.
            </p>
            <p className="px-4 py-2 text-xs text-white md:text-base ">
              Localização: Município de Sussuapara
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/parnaiba.png" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/luizcorreia_entrada.png" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/floriano_2.png" width="100%" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.SwiperSlide}>
          <img src="/static/images/picos_bar.png" />
          <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
            {' '}
            PICOS{' '}
          </p>
        </SwiperSlide>
        <SwiperSlide className={style.SwiperSlide}>
          <img src="/static/images/parnaiba.png" />
          <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
            {' '}
            PARANAÍBA{' '}
          </p>
        </SwiperSlide>
        <SwiperSlide className={style.SwiperSlide}>
          <img src="/static/images/luizcorreia_entrada.png" />
          <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
            {' '}
            LUÍS CORREIA{' '}
          </p>
        </SwiperSlide>
        <SwiperSlide className={style.SwiperSlide}>
          <img src="/static/images/floriano_2.png" />
          <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
            {' '}
            FLORIANO{' '}
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
