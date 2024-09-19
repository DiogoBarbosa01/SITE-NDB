import React, {useState} from 'react'
import * as S from './Styles'
import Menu from './menuMobile/Menu'

import HearthImg from '../../img/coracao.png'
import SearchImg from '../../img/lupa.png'
import UserImg from '../../img/user.png'

export default function Header(){

const [menu, setMenu] = useState(false)

  return(
    <>
      <S.HeaderSection id="top">
        <S.Left>
          <a href="#top"><S.Logo></S.Logo></a>
          <p>HOMEYOU</p>
        </S.Left>

        <S.Right>
          <S.Navegation>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#gallery">Galeria</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </S.Navegation>

          <S.MenuHamburguer onClick={()=>{setMenu(!menu)} }>
            <div></div>
            <div></div>
            <div></div>
          </S.MenuHamburguer>

            {menu && <Menu/>}

          <S.Icons>
            <img src={UserImg} alt="Ícone de um coração"/>
            <img src={HearthImg} alt="Ícone de um coração"/>
            <img src={SearchImg} alt="Ícone de uma lupa"/>
          </S.Icons>
        </S.Right>
      </S.HeaderSection>
    </>
  )
}