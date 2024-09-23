import React from 'react'
import * as S from './Styles'

import HouseHome1 from '../../../img/oiiii.jpg'
import HouseHome2 from '../../../img/house2.png'

export default function Home(){

  return(
    <>
      <S.HomeOne id="home">
        <S.Left>
          <S.TitleBox>Ajudamos você a encontrar o modelo ideal de site para seu negócio.</S.TitleBox>
          <S.Text>Descubra uma seleção exclusiva de modelos que combinam perfeitamente com o seu estilo! Diga adeus à complicação de encontrar o site ideal e aproveite uma experiência fácil e descomplicada.</S.Text>
          <S.DivButtons>
            <S.Button>Entre em contato</S.Button>
            <S.Link href="#">Mais sobre nós</S.Link>
          </S.DivButtons>
        </S.Left>
        <S.HouseImg1 src={HouseHome1} alt="Imagem de uma casa"/>
      </S.HomeOne>

      <S.HomeTwo>
        <S.BackgroundImg>
          <S.HouseImg2 src={HouseHome2} alt="Imagem do interior de uma casa"/>
        </S.BackgroundImg>
        <S.Right>
          <S.TitleBoxTwo>Design Minimalista</S.TitleBoxTwo>
          <S.TextTwo>Sites clean e modernos, focados no essencial. Com um layout elegante e cores neutras, criamos páginas que transmitem profissionalismo e sofisticação. Transforme a presença online do seu negócio com um design minimalista e impactante!</S.TextTwo>
        </S.Right>
      </S.HomeTwo>
    </>
  )
}