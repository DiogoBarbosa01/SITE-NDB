import styled from 'styled-components';




export const HeaderSection = styled.section`
  height: 80px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.section`
  display: flex;
  align-items: center;
  flex-grow: 1;

  p {
    margin-left: 55px;
    color: #000; 
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Right = styled.section`
  display: flex;
  align-items: center;
  flex-grow: 2;
`;

export const Logo = styled.div`
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000; 
  width: 43px;
  height: 43px;
  position: fixed;
  top: 20px;
  z-index: 1;
  cursor: pointer;
`;


export const Navegation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
      display: none;
    }
  }

  ul li {
    cursor: pointer;
    margin-left: 80px;
    font-size: 20px;
    font-weight: 500;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      background-color:rgb(113, 0, 243);
      height: 3px;
      width: 0%;
      left: 0;
      bottom: -3px;
      transition: 0.5s;
    }

    &:hover:after {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #000;           
`;

export const MenuHamburguer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: none;
  z-index: 2;

  div {
    border: solid #272727 0.5px;
    margin: 4px;
    background-color: #FFF;
    height: 4px;
    width: 40px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

