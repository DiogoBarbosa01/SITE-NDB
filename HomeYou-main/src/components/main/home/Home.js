import React from 'react'
import * as S from './Styles'

import HouseHome1 from '../../../img/house1.png'
import HouseHome2 from '../../../img/house2.png'

export default function Home(){

  return(
    <>
      <S.HomeOne id="home">
        <S.Left>
          <S.TitleBox>Ajudar você a encontrar o melhor conforto, é nossa prioridade.</S.TitleBox>
          <S.Text>Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência</S.Text>
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
          <S.TextTwo>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</S.TextTwo>
        </S.Right>
      </S.HomeTwo>
    </>
  )
}