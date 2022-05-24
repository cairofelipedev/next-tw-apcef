import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

export default class CarouselHome extends Component {
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
      customPaging: function (i) {
        return <div className="dot"></div>
      },
      dotsClass: 'slick-dots slick-thumb',
    }
    return (
      <div>
        <Slider className="z-0" {...settings}>
          <div>
            <Image src="/static/images/Banner_2.png" alt="Vercel Logo" width={2000} height={750} />
          </div>
          <div>
            <Image src="/static/images/Banner_2.png" alt="Vercel Logo" width={2000} height={750} />
          </div>
        </Slider>
      </div>
    )
  }
}
