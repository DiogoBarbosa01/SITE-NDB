import styled from 'styled-components';

export const GallerySection = styled.section`
  margin-top: 180px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: rgb(114, 7, 237);

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
  @media (max-width: 900px) {
    font-size: 1.7rem;
  }
`;

export const Texts = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  width: 50vw;

  @media (max-width: 1100px) {
    font-size: 1rem;
    width: 70vw;
  }
  @media (max-width: 900px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const GalleryGrid = styled.div`
  margin-top: 32px;
  width: 75%;
  display: grid;
  gap: 34px;
  grid-template-columns: repeat(1, 1fr);
  

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: #dedede;
  height: 400px;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.4s ease;

  &:hover {
    background-color:rgb(230, 207, 252);
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  color: #1a1a1a;
  text-align: center;
`;
