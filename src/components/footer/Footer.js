import React from 'react';
import * as S from './Styles';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <S.FooterSection>
      <a href="#top"><S.Logo /></a>

      <S.Products>
        <S.TitleBox>CONTEÚDO</S.TitleBox>
        <S.List>
          <S.Item>ARQUÉTIPOS</S.Item>
          <S.Item>ORÇAMENTO</S.Item>
        </S.List>
      </S.Products>

      <S.Networks>
        <S.TitleBox>Redes Sociais</S.TitleBox>
        <S.IconContainer>
          <S.Icon href="https://www.instagram.com/ndbsites_mg" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </S.Icon>
          <S.Icon href="https://api.whatsapp.com/send?phone=32984436440" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </S.Icon>

        </S.IconContainer>
      </S.Networks>
    </S.FooterSection>
  );
}
