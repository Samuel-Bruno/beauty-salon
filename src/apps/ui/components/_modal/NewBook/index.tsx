import React from 'react'
import * as S from './styles'

import { ReactComponent as CloseIcon } from '../../../assets/icons/cancel.svg'


type Props = {
  closeModal: () => void;
}

const NewBookModal = ({ closeModal }: Props) => {


  return (
    <S.Area>
      ContentArea
      <CloseIcon width={24} onClick={() => closeModal()} />
    </S.Area>
  )

}


export default NewBookModal