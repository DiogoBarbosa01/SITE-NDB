import styled from 'styled-components'

export const BudgetSection = styled.section`
  margin-top: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const TitleBox = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #ed0707;
  @media(max-width: 1100px){
    font-size: 2rem;
  }
  @media(max-width: 900px){
    text-align: center; 
    font-size: 1.7rem;
  }
`
export const TextBox = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  @media(max-width: 1100px){
    font-size: 1rem;
    width: 70vw;
  }
  @media(max-width: 900px){
    width: 100%;
    text-align: center; 
    font-size: 0.8rem;
  }
`
export const Button = styled.button`
  width: 225px;
  height: 46px;
  background-color: #FFF;
  border: 1px solid #272727;
  color: #272727;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.7s;
  &:hover{
    background-color: lightgrey;
    cursor: pointer;
  }
`