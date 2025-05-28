import { useState } from 'react';
import * as S from './Styles';
import Menu from './menuMobile/Menu';
//import { FaInstagram } from 'react-icons/fa';
//import { FaWhatsapp } from 'react-icons/fa';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <S.HeaderSection>
        <S.Left>
          <p>Usar logo</p>
        </S.Left>

        <S.Right>
          <S.Navegation>
            <ul>
              <li><a href="#home">Início</a></li>

              <li>
                <a href="#gallery">Produtos</a>
              </li>

              <li>
                <a href="#colecoes">Coleções</a>
                <div className="megaMenu">
                  <div className="column">
                    <h4>Coleção Erga-se</h4>
                    <a href="#calcados">Calçados</a>
                    <a href="#roupas">Roupas</a>
                    <a href="#acessorios">Acessórios</a>
                  </div>
                </div>
              </li>

              <li><a href="#quemsomos">Quem Somos</a></li>
            </ul>
          </S.Navegation>

          <S.Icons>
            <FiUser />
            <FiHeart />
            <FiShoppingBag />
          </S.Icons>
        </S.Right>

        <S.MenuHamburguer onClick={() => setMenu(!menu)}>
          <div></div>
          <div></div>
          <div></div>
        </S.MenuHamburguer>

        {menu && <Menu />}
      </S.HeaderSection>
    </>
  );
}
