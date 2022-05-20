import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

export default class CarouselDr extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      speed: 500,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image src="/static/images/Banner_2.png" alt="Vercel Logo" width={2000} height={640} />
          </div>
          <div>
            <Image src="/static/images/Banner_2.png" alt="Vercel Logo" width={2000} height={640} />
          </div>
        </Slider>
      </div>
    )
  }
}
