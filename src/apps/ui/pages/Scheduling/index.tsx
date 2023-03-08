import React from 'react'
import * as S from './styles'

import SideBar from '../../components/SideBar'
import ProfessionalScheduleItem from '../../components/ProfessionalScheduleItem'
import Button from '../../components/Buttons'

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg"


const SchedulingPage = () => {

  const professionals: any[] = []
  const bookings: any[] = []


  return (
    <S.Page>
      <SideBar />
      <S.Main>
        <S.PageTitle>Agenda do dia</S.PageTitle>
        <S.UpperOptions>
          <S.DateArea>
            <ArrowIcon width={18} style={{ transform: 'rotate(180deg)' }} />
            <ArrowIcon width={18} />
            <S.DateText>Ter, 07/02/2023</S.DateText>
          </S.DateArea>
          <Button type="model1" icon={AddIcon} title="Agendar" />
        </S.UpperOptions>

        <S.ScheduleArea>
          <S.HoursLabels></S.HoursLabels>
          {professionals.map((p, k) => (
            <ProfessionalScheduleItem
              professional={p}
              key={k}
              bookings={bookings.filter(b => b.professionalId === p.id)}
            />
          ))}
        </S.ScheduleArea>
      </S.Main>
    </S.Page>
  )

}


export default SchedulingPage