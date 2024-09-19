import styled from 'styled-components';
import LogoImg from '../../img/logo.png';

export const FooterSection = styled.section`
  margin-top: 180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  background-color: #181818;

  @media(max-width: 900px){
    justify-content: center;
  }
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  flex-shrink: 0;
`;

export const TitleBox = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: red;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 25px;

  @media(max-width: 900px){
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const Products = styled.div`
  margin-left: 60px;
  width: 170px;

  @media(max-width: 720px){
    margin-left: 30px;
    width: 140px;
  }
  @media(max-width: 400px){
    margin-left: 10px;
  }
  @media(max-width: 350px){
    width: 100%;
    text-align: center;
  }
`;

export const Networks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  margin-left: 60px;

  @media(max-width: 1024px){
    margin-left: 30px;
    width: 120px;
  }
  @media(max-width: 535px){
    margin-top: 30px;
    margin-left: 0;
    text-align: center;
  }
  @media(max-width: 400px){
    margin-left: 0;
  }
  @media(max-width: 350px){
    margin: 50px 0 0 0;
    width: 100%;
    text-align: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  &:hover{
    cursor: pointer;
    font-weight: 500;
  }

  @media(max-width: 900px){
    font-size: 1rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-top: 0px;
`;

export const Icon = styled.a`
  font-size: 32px;
  color: #fff;
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
`;
