import React from 'react'
import * as S from './styles'


type Props = {
  title: string;
}

const Model4 = ({ title }: Props) => {


  return (
    <S.Box>
      <S.Title>{title}</S.Title>
    </S.Box>
  )

}


export default Model4
