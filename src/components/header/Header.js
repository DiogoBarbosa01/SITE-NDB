import React, { useState } from 'react';
import * as S from './Styles';
import Menu from './menuMobile/Menu';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <S.HeaderSection id="top">
        <S.Left>
          <a href="#top"><S.Logo /></a>
          <p>ASPHAULT</p>
        </S.Left>

        <S.Right>
          <S.Navegation>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#gallery">Produtos</a></li>
              <li><a href="#contact">Coleções</a></li>
            </ul>
          </S.Navegation>
          <a className="icon" href="https://www.instagram.com/ndbsites_mg" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ position: 'absolute', right: '100px', top: '27px', fontSize: '28px', color: '#fff' }} />
          </a>
          <a className="icon" href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ position: 'absolute', right: '150px', top: '27px', fontSize: '28px', color: '#fff' }} />
          </a>
        </S.Right>

        <S.MenuHamburguer onClick={() => { setMenu(!menu); }}>
          <div></div>
          <div></div>
          <div></div>
        </S.MenuHamburguer>

        {menu && <Menu />}
      </S.HeaderSection>
    </>
  );
}
