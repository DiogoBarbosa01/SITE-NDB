import styled from 'styled-components'

export const Menu = styled.section`
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  ul{
  	list-style: none;
  	width: 200px;
  	height: 250px;
  }
  li{
  	width: 100%;
  	height: 33%;
  	display: flex;
  	justify-content: center;
  	align-items: center;

  	font-weight: 600;
  	font-family: 'Montserrat', sans-serif;
  	color: #fff;
  }
  @media(max-width: 768px){
    display: block;
  }
`
