import React, { useEffect, useState } from 'react'
import { Service, Services as services } from '../../../_falseData/services'
import { Professional, Professionals as professionals } from '../../../_falseData/professionals'
import { availableTimes } from '../../../_falseData/availablesTimes'
import * as S from './styles'

import FormField from '../../FormField'
import Button from '../../Buttons'

import { ReactComponent as CloseIcon } from '../../../assets/icons/cancel.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow.svg'


type Props = {
  closeModal: () => void;
}

const NewBookModal = ({ closeModal }: Props) => {

  const [phase, setPhase] = useState<number>(1)

  const [service, setService] = useState<Service | null>(null)
  const [professional, setProfessional] = useState<Professional | null>(null)
  const [pickedTime, setPickedTime] = useState<any | null>(null)  // timeType
  const [servicesList, setServicesList] = useState<Service[] | null>(null)
  const [professionalsList, setProfessionalsList] = useState<Professional[] | null>(null)

  useEffect(() => {
    setServicesList(services)
    setProfessionalsList(professionals)
  }, [])

  return (
    <S.Area>
      <S.ModalHeader>
        <S.ModalTitle>Agendar serviço</S.ModalTitle>
        <CloseIcon width={24} onClick={() => closeModal()} />
      </S.ModalHeader>
      <S.ModalContent>
        <S.FormArea>
          <S.FieldsArea>
            <FormField
              title={'Serviço'}
              type={'select'}
              placeholder={'Escolha um serviço'}
              options={servicesList}
              changeFn={(v) => setService(v)}
              activeFilter={service}
            />
            <FormField
              title={'Profissional'}
              type={'select'}
              placeholder={'Escolha um profissional'}
              options={professionalsList}
              changeFn={(v) => setProfessional(v)}
              activeFilter={professional}
            />
            {professional &&
              <FormField
                title={`Horários disponíveis de ${professional?.name}`}
                type={'availables'}
                options={availableTimes}
                pickFn={(v) => setPickedTime(v)}
                activeTime={pickedTime}
              />
            }
          </S.FieldsArea>
          <Button title='Continuar' type='model5' Icon={ArrowIcon} onClick={() => setPhase(2)} />
        </S.FormArea>
        <div style={{ width: 420, height: 370 }}>Calendário</div>
      </S.ModalContent>
    </S.Area>
  )

}


export default NewBookModal