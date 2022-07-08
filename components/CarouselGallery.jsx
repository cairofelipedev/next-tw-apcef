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
          <img src="/static/images/teresina.jpg" width="100%" />
          <div className="absolute top-0 left-0 w-1/2 bg-blue-apcef">
            <p className="px-4 py-2 text-xs text-white md:text-base">
              5 Espaços para a realização de eventos Salão social: Capacidade 300 pessoas. Espaço
              Carnaúba: Capacidade 500 pessoas com palco Espaço Gidur Capacidade 50 pessoas, possui
              churrasqueira Espaço Cultural: Capacidade 500 pessoas. possui churrasqueira Ginásio
              Coberto: Capacidade 5 mil pessoas ideal para shows e festas. Área coberta e com
              gramado. Segurança Estacionamento privativo Serviços de restaurante e bar.
            </p>
            <p className="px-4 py-2 text-xs text-white md:text-base ">
              Localização: Avenida Presidente Kennedy, 1951, São Cristóvão, Teresina-PI.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/salao2.jpg" width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/static/images/salao.png" width="100%" />
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
          <img src="/static/images/teresina.jpg" />
          <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
            TERESINA
          </p>
        </SwiperSlide>
        <SwiperSlide className={style.SwiperSlide}>
          <img src="/static/images/salao2.jpg" />
          <p className="-translate-y-6 translate-x-3 text-xs font-semibold text-white sm:-translate-y-8 sm:text-base">
            SALÃO SOCIAL
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
