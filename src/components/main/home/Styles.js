import styled from 'styled-components'

export const CarouselContainer = styled.section`
  width: 100%;
  height: 700px;
  overflow: hidden;
  margin: 0;
  padding: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background-color: #000;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background-color: #000;
    opacity: 1;
  }

  /* 🔥 Responsivo */
  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Caption = styled.div`
  position: absolute;
  bottom: 60px;
  left: 40px;
  color: white;
  background: rgba(185, 0, 241, 0.6);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-size: 1.5rem;
  max-width: 90%;
  backdrop-filter: blur(3px);

  /* 🔥 Responsivo */
  @media (max-width: 1024px) {
    bottom: 40px;
    left: 30px;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    left: 20px;
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }

  @media (max-width: 480px) {
    bottom: 15px;
    left: 15px;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
`
