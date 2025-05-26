import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import * as S from './Styles'

export default function Home() {
  const images = [
    {
      src: 'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-25.jpg',
      alt: '',
      caption: 'Site moderno e responsivo para sua empresa',
    },
    {
     img: <img src="../../img/Logo.png" />,
     alt: 'Modelo de site 2',
     caption: 'Design elegante com foco em conversão',
    },
    {
      src: '/images/site3.jpg',
      alt: 'Modelo de site 3',
      caption: 'Perfeito para comércios e varejo',
    },
  ]

  return (
    <S.CarouselContainer id="home">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <S.Slide>
              <img src={image.src} alt={image.alt} />
              <S.Caption>{image.caption}</S.Caption>
            </S.Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.CarouselContainer>
  )
}
