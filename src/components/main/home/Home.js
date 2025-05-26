import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import * as S from './Styles'

export default function Home() {
  const images = [
    {
      src: '/images/paisagem.jpg', // imagem local
      alt: 'Paisagem bonita',
      caption: 'Site moderno e responsivo para sua empresa',
    },
    {
      src: '/images/logo.png', // imagem local
      alt: 'Logo da empresa',
      caption: 'Design elegante com foco em conversão',
    },
    {
      src: '/images/site3.jpg', // imagem local
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
