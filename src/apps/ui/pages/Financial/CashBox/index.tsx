import React, { useState } from 'react'
import * as S from './styles'

import Button from '../../../components/Buttons'

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg"
import { ModalTypes } from '../../../components/_modal'


const CashBox = () => {


  const [modalType, setModalType] = useState<null | ModalTypes>(null)
  const [modalShowing, setModalShowing] = useState(false)

  const handleToggleModal = (content: ModalTypes) => {
    setModalType(content)
    setModalShowing(!modalShowing)
  }

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
          <Button
            type='model2'
            title='Abrir novo Caixa'
            onClick={() => handleToggleModal('newbook')}
          />
          <Button
            type='model1'
            title='Reabrir último caixa'
            onClick={() => handleToggleModal('newbook')}
          />
          <Button
            type='model1'
            title='Reabrir caixa antigo'
            onClick={() => handleToggleModal('newbook')}
          />
          <Button
            type='model1'
            title='Cadastrar caixa antigo'
            onClick={() => handleToggleModal('newbook')}
          />
          <Button
            type='model1'
            title='Ver caixas fechados'
            onClick={() => handleToggleModal('newbook')}
          />
          <Button
            type='model1'
            title='Fluxo de caixa'
            onClick={() => handleToggleModal('newbook')}
          />
        </S.Options>
      </S.Principal>
    </>
  )

}


export default CashBox