import React, {useState} from 'react'
import * as S from './Styles'
import Menu from './menuMobile/Menu'
export default function Header(){

const [menu, setMenu] = useState(false)

  return(
    <>
      <S.HeaderSection id="top">
        <S.Left>
          <a href="#top"><S.Logo></S.Logo></a>
          <p>NDB SITES</p>
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

        
        </S.Right>
      </S.HeaderSection>
    </>
  )
}