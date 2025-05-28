
import * as S from './Styles'

import Home from './home/Home'
import Gallery from './gallery/Gallery'




export default function Main(){

  return(
    <>
      <S.MainSection>
        <Home/>
        <Gallery/>
      </S.MainSection>
    </>
  )
}