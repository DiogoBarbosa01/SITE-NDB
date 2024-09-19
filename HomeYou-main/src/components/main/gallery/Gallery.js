import React from 'react'
import * as S from './Styles'

import HouseGallery1 from '../../../img/house-gallery1.png'
import HouseGallery2 from '../../../img/house-gallery2.png'
import HouseGallery3 from '../../../img/house-gallery3.png'

export default function Gallery(){

  return(
    <S.GallerySection id="gallery">
      <S.Texts>
        <S.TitleBox>Galeria</S.TitleBox>
        <S.TextBox>Se você está entediado com a aparência da decoração de interiores da casa comuns, trabalhamos com designs diferentes e inovadores.</S.TextBox>
      </S.Texts>
      <S.GalleryImg>
        <S.ImageGallery src={HouseGallery1} alt="Foto de uma casa da galeria"/>
        <S.ImageGallery src={HouseGallery2} alt="Foto de uma casa da galeria"/>
        <S.ImageGallery src={HouseGallery3} alt="Foto de uma casa da galeria"/>
      </S.GalleryImg>
    </S.GallerySection>
  )
}