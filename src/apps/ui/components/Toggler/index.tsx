import React from 'react'
import * as S from './styles'

type Props = {
  active: boolean;
}


const Toggler = ({ active }: Props) => {


  return (
    <S.Box active={active}>
      <S.Thumb active={active} />
    </S.Box>
  )

}


export default Toggler