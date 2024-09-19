import styled from 'styled-components'

export const GallerySection = styled.section`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleBox = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #ed0707;
  @media(max-width: 1100px){
    font-size: 2rem;
  }
  @media(max-width: 900px){
    text-align: center; 
    font-size: 1.7rem;
  }
`
export const Texts = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextBox = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  width: 50vw;
  @media(max-width: 1100px){
    font-size: 1rem;
    width: 70vw;
  }
  @media(max-width: 900px){
    width: 100%;
    text-align: center; 
    font-size: 0.8rem;
  }
`
export const GalleryImg = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  height: 530px;
  width: 100%;
  @media(max-width: 1440px){
    height: 450px;
  }
  @media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    height: 1200px;
  }
`
export const ImageGallery = styled.img`
  height: 100%;
  width: 370px;
  @media(max-width: 1440px){
    width: 280px;
  }
  @media(max-width: 900px){
    height: 380px;
    width: 365px;
  }
    @media(max-width: 376px){
    width: 300px;
    height: 330px;
  }
`