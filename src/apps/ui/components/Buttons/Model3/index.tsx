import React from 'react'
import * as S from './styles'


type Props = {
  title: string;
  onClickAction: () => void;
}

const Model3 = ({ title, onClickAction }: Props) => {


  return (
    <S.Box onClick={onClickAction}>
      <S.Title>{title}</S.Title>
    </S.Box>
  )

}


export default Model3
