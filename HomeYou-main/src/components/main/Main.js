import React from 'react'
import * as S from './Styles'

import Home from './home/Home'
import Gallery from './gallery/Gallery'
import Budget from './budget/Budget'

export default function Main(){

  return(
    <>
      <S.MainSection>
        <Home/>
        <Gallery/>
        <Budget/>
      </S.MainSection>
    </>
  )
}