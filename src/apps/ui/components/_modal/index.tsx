import React from 'react'
import * as S from './styles'

import NewBookModal from './NewBook'

export type ModalTypes = 'newbook';

type Props = {
  content: ModalTypes;
  showing: boolean;
  closeModal: () => void;
}

const InnerContent = ({ content, closeModal }: Props) => {
  let El = null

  switch (content) {
    case 'newbook':
      El = NewBookModal
      break;

    default:
      El = NewBookModal
      break;
  }

  return <El closeModal={closeModal} />
}

const Modal = ({ content, showing, closeModal }: Props) => {


  return (
    <S.Bg showing={showing}>
      <S.ContentArea>
        <InnerContent
          content={content}
          showing={showing}
          closeModal={closeModal}
        />
      </S.ContentArea>
    </S.Bg>
  )

}


export default Modal