import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from '@/css/main.module.scss'

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
          <img className={styles.imgSlider} src="/static/images/Banner_2.png" alt="Vercel Logo" />
          <img className={styles.imgSlider} src="/static/images/Banner_2.png" alt="Vercel Logo" />
        </Slider>
      </div>
    )
  }
}
