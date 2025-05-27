import styled from 'styled-components'




export const CarouselContainer = styled.section`
  width: 1500px;
  height: 700px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  .swiper-pagination-bullet {
    background-color: #000;
  }

  .swiper-pagination-bullet-active {
    background-color: #000;
  }
`


export const Slide = styled.div`
 width: 1500px;
  height: 700px;
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
  max-width: 100%;
}
  
`
