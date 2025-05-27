import React from 'react';
import * as S from './Styles';
import { Link } from 'react-router-dom';

const products = [
  { name: 'Senna', slug: 'Senna' },
  { name: 'Belived', slug: 'Belived' },
  { name: 'luffy', slug: 'luffy' },
 
];

export default function Gallery() {
  return (
    <S.GallerySection id="gallery">
      <S.Texts>
        <S.TitleBox>COLEÇÃO ERGA-SE</S.TitleBox>
        <S.TextBox>"O caminho para sua melhoria começa agora."</S.TextBox>
      </S.Texts>

      <S.GalleryGrid>
        {products.map(({ name, slug }) => (
          <Link key={slug} to={`/produtos/${slug}`} style={{ textDecoration: 'none' }}>
            <S.Card>
              <S.Title>{name}</S.Title>
            </S.Card>
          </Link>
        ))}
      </S.GalleryGrid>
    </S.GallerySection>
  );
}
