import React from 'react'
import * as S from './Styles'



export default function Footer(){

  return(
    <S.FooterSection>
      <a href="#top"><S.Logo></S.Logo></a>
      <S.Products>
        <S.TitleBox>Produtos</S.TitleBox>
        <S.List>
          <S.Item>Mobilia</S.Item>
          <S.Item>Segurança</S.Item>
          <S.Item>Design Interior</S.Item>
        </S.List>
      </S.Products>

      <S.MoreInfo>
        <S.TitleBox>Mais Informações</S.TitleBox>
        <S.List>
          <S.Item>Contrato</S.Item>
          <S.Item>Sobre nós</S.Item>
          <S.Item>Termos e Condições</S.Item>
        </S.List>
      </S.MoreInfo>

      <S.Networks>
        <S.TitleBox>Redes Sociais</S.TitleBox>
        <S.List>
          <S.Item>Pinterest</S.Item>
          <S.Item>Facebook</S.Item>
          <S.Item>Instagram</S.Item>
        </S.List>
      </S.Networks>
    </S.FooterSection>
  )
}