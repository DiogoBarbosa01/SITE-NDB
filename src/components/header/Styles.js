import styled from 'styled-components';

export const HeaderSection = styled.header`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
`;

export const Left = styled.div`
  align-items: center;

  p {
    color: #000;
    font-weight: 800;
    font-size: 16px;
    height:11px;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Navegation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 25px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  ul li {
    position: relative;
    font-size: 15px;
    top:8px;
    font-weight: 800;
    cursor: pointer;
    right:405px;

    a {
      text-decoration: none;
      color: #000;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: rgb(113, 0, 243);
      height: 2px;
      width: 0%;
      left: 0;
      bottom: -3px;
      transition: 0.3s;
    }

    &:hover:after {
      width: 100%;
    }

    .megaMenu {
      display: none;
      position: absolute;
      top: 30px;
      left: 0;
      background-color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 999;
      min-width: 180px;
      white-space: nowrap;

      .column {
        display: flex;
        flex-direction: column;
        gap: 6px;

        h4 {
          font-weight: 700;
          margin-bottom: 8px;
          color: #333;
          font-size: 14px;
        }

        a {
          color: #555;
          font-weight: 500;
          font-size: 13px;
          transition: 0.2s;

          &:hover {
            color: rgb(113, 0, 243);
          }
        }
      }
    }

    &:hover .megaMenu {
      display: block;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    cursor: pointer;
    font-size: 18px;
    color: #000;
    transition: 0.3s;

    &:hover {
      color: rgb(113, 0, 243);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuHamburguer = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  top: 5px;
  z-index: 2;

  div {
    border: solid #272727 0.5px;
    margin: 3px;
    background-color: #FFF;
    height: 3px;
    width: 25px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
