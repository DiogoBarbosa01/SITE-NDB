import styled from 'styled-components'




export const BackgroundImg = styled.div`
  background-color: #272727;
  width: 487px;
  height: 457px;
  position: relative;
  @media(max-width: 1440px){
    width: 430px;
    height: 390px;
  }
  @media(max-width: 1080px){
    background-color: transparent;
  }
  @media(max-width: 900px){
    display: none;
  }
`



export const CarouselContainer = styled.section`
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  height: 100vh;
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
