import styled from 'styled-components'
import LogoImg from '../../img/logo.png'

export const FooterSection = styled.section`
  margin-top: 130px;
  display: flex;
  flex-wrap: wrap;
`
export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #272727;
  width: 43px;
  height: 43px;
`
export const TitleBox = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #272727;
  font-family: 'Montserrat', sans-serif;
  @media(max-width: 900px){
    font-size: 0.9rem;
  }
`
export const Products = styled.div`
  margin-left: 60px;
  width: 150px;
  @media(max-width: 720px){
    margin-left: 30px;
    width: 120px;
  }
  @media(max-width: 400px){
    margin-left: 10px;
  }
  @media(max-width: 350px){
    width: 250px;
    text-align: center;
  }
`
export const MoreInfo = styled.div`
  margin-left: 60px;
  width: 190px;
  @media(max-width: 720px){
    margin-left: 30px;
    width: 155px;
  }
  @media(max-width: 400px){
    margin-left: 10px;
  }
  @media(max-width: 350px){
    margin: 50px 0 0 53px;
    width: 250px;
    text-align: center;
  }
`
export const Networks = styled.div`
  margin-left: 60px;
  width: 150px;
  height: 160px;
  @media(max-width: 720px){
    margin-left: 30px;
    width: 120px;
  }
  @media(max-width: 535px){
    margin-top: 30px;
    margin-left: 73px;
  }
  @media(max-width: 400px){
    margin-left: 55px;
  }
  @media(max-width: 350px){
    margin: 50px 0 0 53px;
    width: 250px;
    text-align: center;
  }
`
export const List = styled.ul`
  list-style: none;
`
export const Item = styled.li`
  margin-top: 15px;

  font-size: 1.1rem;
  font-weight: 400;
  color: #272727;
  font-family: 'Montserrat', sans-serif;
  &:hover{
    cursor: pointer;
    font-weight: 500;
  }
  @media(max-width: 900px){
    font-size: 0.9rem;
  }
`