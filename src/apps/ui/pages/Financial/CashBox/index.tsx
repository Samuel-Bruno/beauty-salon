import React from 'react'
import * as S from './styles'

import { FilterArea } from '../styles'

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg"


const CashBox = () => {


  return (
    <>
      <S.Header>
        <S.PageTitle>
          <h1>Financeiro</h1>
          <ArrowIcon width={24} />
          <span>Caixa</span>
        </S.PageTitle>
      </S.Header>
      <FilterArea>
        Caixa
      </FilterArea>
    </>
  )

}


export default CashBox