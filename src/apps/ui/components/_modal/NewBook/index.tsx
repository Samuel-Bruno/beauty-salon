import React, { useEffect, useState } from 'react'
import * as S from './styles'

import { ReactComponent as CloseIcon } from '../../../assets/icons/cancel.svg'
import FormField from '../../FormField';
import { Option } from '../../Selects/DateSelect';

import { filterCategories as servicesCategories, Service, Services as services } from '../../../_falseData/services';


type Props = {
  closeModal: () => void;
}

const NewBookModal = ({ closeModal }: Props) => {

  const [service, setService] = useState<Service | null>(null)
  const [servicesList, setServicesList] = useState<Service[] | null>(null)
  const [profissional, setProfessional] = useState<any>(null)

  useEffect(() => {
    setServicesList(services)
  }, [])

  return (
    <S.Area>
      <S.ModalHeader>
        <S.ModalTitle>Agendar serviço</S.ModalTitle>
        <CloseIcon width={24} onClick={() => closeModal()} />
      </S.ModalHeader>
      <S.ModalContent>
        <S.FormArea>
          <FormField
            title={'Serviço'}
            type={'select'}
            placeholder={'Escolha um serviço'}
            options={servicesList}
            changeFn={(v) => setService(v)}
            activeFilter={service}
          />
        </S.FormArea>
        <div>Calendário</div>
      </S.ModalContent>
    </S.Area>
  )

}


export default NewBookModal