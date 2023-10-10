import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function SliderFn() {
  var settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }
  return (
    <div className=''>
      <Slider {...settings}>
        <div className='w-full h-screen'>
          <img className='w-full h-full' src='https://vi.abvietnam.vn/wp-content/uploads/2023/02/bn2-min.jpg' alt='' />
        </div>
        <div className='w-full h-screen'>
          <img className='w-full h-full' src='https://vi.abvietnam.vn/wp-content/uploads/2023/08/ban11.jpg' alt='' />
        </div>
        <div className='w-full h-screen'>
          <img
            className='w-full h-full'
            src='https://vi.abvietnam.vn/wp-content/uploads/2023/08/Banner-juice-01-min.jpg'
            alt=''
          />
        </div>
        <div className='w-full h-screen'>
          <img
            className='w-full h-full'
            src='https://vi.abvietnam.vn/wp-content/uploads/2023/08/Banner-juice-02-min.jpg'
            alt=''
          />
        </div>
      </Slider>
    </div>
  )
}
