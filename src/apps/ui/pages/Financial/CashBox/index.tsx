import React from 'react'
import * as S from './styles'

import Button from '../../../components/Buttons'

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
      <S.Principal>
        <h2>O caixa está fechado. O que você deseja fazer?</h2>
        <S.Options>
          <Button type='model2' title='Abrir novo Caixa' />
          <Button type='model1' title='Reabrir último caixa' />
          <Button type='model1' title='Reabrir caixa antigo' />
          <Button type='model1' title='Cadastrar caixa antigo' />
          <Button type='model1' title='Ver caixas fechados' />
          <Button type='model1' title='Fluxo de caixa' />
        </S.Options>
      </S.Principal>
    </>
  )

}


export default CashBox