import styled from 'styled-components'
import LogoImg from '../../img/logo.png'

export const HeaderSection = styled.section`
  height: 80px;
  color:#fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Left = styled.section`
  display: flex;
  align-items: center;
  p{
    margin-left: 55px;
    color: #ed0707;
    font-weight: 600;
    font-size: 18px;
  }
`
export const Right = styled.section`
  display: flex;
  align-items: center;
`
export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #272727;
  width: 43px;
  height: 43px;
  position: fixed;
  top: 20px;
  z-index: 1;
  cursor: pointer;
`
export const Navegation = styled.nav`
  ul{
    display: flex;
    list-style: none;
    @media(max-width: 768px){
      display: none;
    }
  }
  ul li{
    cursor: pointer;
    margin-left: 40px;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    &:after{
    content: "";
    position: absolute;
    background-color: #ed0707;
    
    height: 3px;
    width: 0%;
    left: 0;
    bottom: -3px;
    transition: 0.5s;
  }
    &:hover:after{
      width: 100%;
    }
  }
  a{
    text-decoration: none;
    color: #000;
  }
`

export const MenuHamburguer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: none;
  z-index: 2;
  div{
    border: solid #272727 0.5px;
    margin: 4px;
    background-color: #FFF;
    height: 4px;
    width: 40px;
  }
  @media(max-width: 768px){
    display: block;
  }
`