import styled from 'styled-components'

export const HomeOne = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 900px;
  @media(max-width: 900px){
    height: 400px;
    justify-content: center;
  }
`
export const Left = styled.div`
  width: 40vw;
  @media(max-width: 900px){
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: 500px){
    width: 95%;
  }
`
export const TitleBox = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: red;
  @media(max-width: 1100px){
    font-size: 2rem;
  }
  @media(max-width: 900px){
    text-align: center; 
    font-size: 1.7rem;
  }
`
export const Text = styled.p`
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  width: 30vw;
  @media(max-width: 1100px){
    font-size: 1rem;
  }
  @media(max-width: 900px){
    width: 100%;
    text-align: center; 
    font-size: 0.8rem;
  }
`
export const DivButtons = styled.div`
  
`
export const Button = styled.button`
  margin-top: 20px;
  background-color: #272727;
  border-style: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: #FFF;
  width: 225px;
  height: 46px;
  transition: 0.7s;
  &:hover{
    cursor: pointer;
    color: #ed0707;
  }
  @media(max-width: 1100px){
    font-size: 1rem;
    width: 160px;
    height: 40px;
  }
`
export const Link = styled.a`
  margin-left: 50px;
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  transition: 0.7s;
  &:hover{
    color: #ed0707;
  }
  @media(max-width: 1100px){
    margin-left: 30px;
    font-size: 1rem;
  }
`
export const HouseImg1 = styled.img`
  width: 700px;
  height: 900px;
  @media(max-width: 1440px){
    width: 500px;
    height: 700px;
  }
  @media(max-width: 900px){
    display: none;
  }
`
export const HomeTwo = styled.section`
  margin-top: 180px;
  display: flex;
  justify-content: space-between;
  @media(max-width: 900px){
    margin-top: 50px;
    justify-content: center;
  }
`
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
export const HouseImg2 = styled.img`
  position: absolute;
  left: 50px;
  top: 50px;
  width: 100%;
  height: 100%;
  @media(max-width: 1080px){
    left: 0;
    top: 0;
  }
`
export const Right = styled.div`
  background-color: #272727;
  width: 585px;
  height: 182px;
  padding: 20px 0 0 20px;
  @media(max-width: 1440px){
    width: 460px;
  }
  @media(max-width: 900px){
    width: 80%;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: 500px){
    width: 95%;
  }
`
export const TitleBoxTwo = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ed0707;
  @media(max-width: 1440px){
    font-size: 1.4rem;
  }
`
export const TextTwo = styled.p`
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  @media(max-width: 900px){
    width: 100%;
    text-align: center; 
    font-size: 0.8rem;
  }
`